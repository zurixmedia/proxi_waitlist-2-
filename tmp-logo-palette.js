const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'logos', 'logo-extracted.png'));
if (buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) {
  throw new Error('Not a PNG');
}
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
const bitDepth = ihdr.data.readUInt8(8);
const colorType = ihdr.data.readUInt8(9);
const compression = ihdr.data.readUInt8(10);
const filter = ihdr.data.readUInt8(11);
const interlace = ihdr.data.readUInt8(12);
if (compression !== 0 || filter !== 0 || interlace !== 0) {
  // ok, handle as long as compression 0 and no interlace
}
const idat = Buffer.concat(chunks.filter((c) => c.type === 'IDAT').map((c) => c.data));
const raw = zlib.inflateSync(idat);
const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : (() => { throw new Error('Unsupported color type ' + colorType); })();
const stride = 1 + bytesPerPixel * width;
const pixelData = Buffer.alloc(height * width * bytesPerPixel);
const palette = new Map();
let total = 0;
for (let y = 0; y < height; y++) {
  const filterType = raw[y * stride];
  const row = raw.slice(y * stride + 1, y * stride + stride);
  const prevRow = y === 0 ? null : pixelData.slice((y - 1) * width * bytesPerPixel, y * width * bytesPerPixel);
  const recon = Buffer.alloc(width * bytesPerPixel);
  const bpp = bytesPerPixel;
  const paeth = (a, b, c) => {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  };
  for (let x = 0; x < width * bpp; x++) {
    const rawByte = row[x];
    const a = x >= bpp ? recon[x - bpp] : 0;
    const b = prevRow ? prevRow[x] : 0;
    const c = prevRow && x >= bpp ? prevRow[x - bpp] : 0;
    let value;
    switch (filterType) {
      case 0:
        value = rawByte;
        break;
      case 1:
        value = (rawByte + a) & 0xff;
        break;
      case 2:
        value = (rawByte + b) & 0xff;
        break;
      case 3:
        value = (rawByte + Math.floor((a + b) / 2)) & 0xff;
        break;
      case 4:
        value = (rawByte + paeth(a, b, c)) & 0xff;
        break;
      default:
        throw new Error('Unsupported filter ' + filterType);
    }
    recon[x] = value;
  }
  recon.copy(pixelData, y * width * bpp);
}
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const offset = (y * width + x) * bytesPerPixel;
    const r = pixelData[offset];
    const g = pixelData[offset + 1];
    const b = pixelData[offset + 2];
    const a = bytesPerPixel === 4 ? pixelData[offset + 3] : 255;
    const key = `${r},${g},${b},${a}`;
    palette.set(key, (palette.get(key) || 0) + 1);
    total++;
  }
}
const sorted = Array.from(palette.entries()).sort((a, b) => b[1] - a[1]);
console.log(`PNG ${width}x${height} type=${colorType} bit=${bitDepth} colors=${palette.size}`);
for (let i = 0; i < Math.min(sorted.length, 50); i++) {
  console.log(`${sorted[i][1]} ${sorted[i][0]}`);
}
console.log('total pixels', total);
