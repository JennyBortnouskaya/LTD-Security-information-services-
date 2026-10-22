import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files
const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

console.log(`Converting ${files.length} PNG files to WebP...`);

files.forEach(file => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

  sharp(inputPath)
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => {
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% reduction)`);
    })
    .catch(err => console.error(`Error converting ${file}:`, err));
});
