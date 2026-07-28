const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'logos', 'logo-extracted.png'));
if (buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a)
  throw new Error('Not a PNG');
let pos = 8;
const chunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  const data = buf.slice(pos + 8, pos + 8 + len);
  chunks.push({ type, len, data });
  pos += 12 + len;
  if (type === 'IEND') break;
}
const ihdr = chunks.find((c) => c.type === 'IHDR');
const width = ihdr.data.readUInt32BE(0);
const height = ihdr.data.readUInt32BE(4);
const colorType = ihdr.data.readUInt8(9);
const idat = Buffer.concat(chunks.filter((c) => c.type === 'IDAT').map((c) => c.data));
const raw = zlib.inflateSync(idat);
const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 1;
const stride = 1 + bytesPerPixel * width;
const pixelData = Buffer.alloc(height * width * bytesPerPixel);
function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}
for (let y = 0; y < height; y++) {
  const filterType = raw[y * stride];
  const row = raw.slice(y * stride + 1, y * stride + stride);
  const prevRow =
    y === 0 ? null : pixelData.slice((y - 1) * width * bytesPerPixel, y * width * bytesPerPixel);
  const recon = Buffer.alloc(width * bytesPerPixel);
  for (let x = 0; x < width * bytesPerPixel; x++) {
    const rawByte = row[x];
    const a = x >= bytesPerPixel ? recon[x - bytesPerPixel] : 0;
    const b = prevRow ? prevRow[x] : 0;
    const c = prevRow && x >= bytesPerPixel ? prevRow[x - bytesPerPixel] : 0;
    let val;
    switch (filterType) {
      case 0:
        val = rawByte;
        break;
      case 1:
        val = (rawByte + a) & 0xff;
        break;
      case 2:
        val = (rawByte + b) & 0xff;
        break;
      case 3:
        val = (rawByte + Math.floor((a + b) / 2)) & 0xff;
        break;
      case 4:
        val = (rawByte + paeth(a, b, c)) & 0xff;
        break;
      default:
        throw new Error('Unsupported filter ' + filterType);
    }
    recon[x] = val;
  }
  recon.copy(pixelData, y * width * bytesPerPixel);
}
const counts = new Map();
for (let i = 0; i < pixelData.length; i += bytesPerPixel) {
  const r = pixelData[i];
  const g = pixelData[i + 1];
  const b = pixelData[i + 2];
  const a = bytesPerPixel === 4 ? pixelData[i + 3] : 255;
  const key = `${r},${g},${b},${a}`;
  counts.set(key, (counts.get(key) || 0) + 1);
}
const arr = Array.from(counts.entries()).map(([k, v]) => {
  const [r, g, b, a] = k.split(',').map(Number);
  const gray = Math.abs(r - g) + Math.abs(r - b) + Math.abs(g - b);
  return { color: k, count: v, gray, opacity: a };
});
const filtered = arr
  .filter((c) => c.opacity === 255)
  .sort((a, b) => b.count - a.count)
  .slice(0, 120);
for (const c of filtered) {
  if (c.gray > 20) console.log(`${c.count} ${c.color} gray=${c.gray}`);
}
console.log('--- all opaque color count', filtered.length);
