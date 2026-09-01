import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const certDir = path.join(rootDir, 'src', 'assets', 'certificates');
const profilePath = path.join(rootDir, 'src', 'assets', 'profile.jpeg');
const profileWebpPath = path.join(rootDir, 'src', 'assets', 'profile.webp');

async function convert() {
  console.log('=== Converting Profile Image ===');
  const profileStat = fs.statSync(profilePath);
  await sharp(profilePath)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(profileWebpPath);
  const profileWebpStat = fs.statSync(profileWebpPath);
  console.log(`profile.jpeg (${(profileStat.size / 1024).toFixed(1)} KB) -> profile.webp (${(profileWebpStat.size / 1024).toFixed(1)} KB) [${(((profileStat.size - profileWebpStat.size) / profileStat.size) * 100).toFixed(1)}% reduction]`);

  console.log('\n=== Converting Certificate Images ===');
  const certFiles = fs.readdirSync(certDir).filter(f => f.endsWith('.png'));
  let totalOrig = 0;
  let totalWebp = 0;

  for (const file of certFiles) {
    const origPath = path.join(certDir, file);
    const baseName = path.parse(file).name;
    const webpPath = path.join(certDir, `${baseName}.webp`);
    
    const origStat = fs.statSync(origPath);
    totalOrig += origStat.size;

    await sharp(origPath)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    const webpStat = fs.statSync(webpPath);
    totalWebp += webpStat.size;

    console.log(`${file} (${(origStat.size / 1024).toFixed(1)} KB) -> ${baseName}.webp (${(webpStat.size / 1024).toFixed(1)} KB) [${(((origStat.size - webpStat.size) / origStat.size) * 100).toFixed(1)}% reduction]`);
  }

  console.log('\n=== TOTAL CERTIFICATE SAVINGS ===');
  console.log(`Original: ${(totalOrig / 1024).toFixed(1)} KB (${(totalOrig / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`WebP: ${(totalWebp / 1024).toFixed(1)} KB (${(totalWebp / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`Total Saved: ${(((totalOrig - totalWebp) / totalOrig) * 100).toFixed(1)}% payload reduction`);
}

convert().catch(console.error);
