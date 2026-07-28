const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'logos', 'logo-extracted.png'));
if (buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) {
  throw new Error('not a png');
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
const ihdr = chunks.find((chunk) => chunk.type === 'IHDR');
const width = ihdr.data.readUInt32BE(0);
const height = ihdr.data.readUInt32BE(4);
const bitDepth = ihdr.data.readUInt8(8);
const colorType = ihdr.data.readUInt8(9);
const idat = Buffer.concat(chunks.filter((chunk) => chunk.type === 'IDAT').map((chunk) => chunk.data));
const raw = zlib.inflateSync(idat);
const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 1;
const stride = bytesPerPixel * width + 1;
const palette = new Map();
let total = 0;
for (let y = 0; y < height; y++) {
  const rowStart = y * stride;
  const filter = raw[rowStart];
  if (filter !== 0) continue;
  for (let x = 0; x < width; x++) {
    const offset = rowStart + 1 + x * bytesPerPixel;
    const r = raw[offset];
    const g = raw[offset + 1];
    const b = raw[offset + 2];
    const a = bytesPerPixel === 4 ? raw[offset + 3] : 255;
    const key = `${r},${g},${b},${a}`;
    palette.set(key, (palette.get(key) || 0) + 1);
    total++;
  }
}
const sorted = Array.from(palette.entries()).sort((a, b) => b[1] - a[1]);
console.log(`PNG ${width}x${height} type=${colorType} bit=${bitDepth} colors=${palette.size}`);
for (let i = 0; i < Math.min(sorted.length, 30); i++) {
  console.log(`${sorted[i][1]} ${sorted[i][0]}`);
}
console.log('total pixels', total);
