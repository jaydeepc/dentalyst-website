import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDirs = [
  join(__dirname, '../public/clinic-gallery/reception'),
  join(__dirname, '../public/clinic-gallery/equipment')
];

const outputDirs = [
  join(__dirname, '../public/clinic-gallery/reception-optimized'),
  join(__dirname, '../public/clinic-gallery/equipment-optimized')
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (let i = 0; i < inputDirs.length; i++) {
    const inputDir = inputDirs[i];
    const outputDir = outputDirs[i];

    try {
      // Create output directory if it doesn't exist
      await mkdir(outputDir, { recursive: true });

      // Read all files in the input directory
      const files = await readdir(inputDir);
      const imageFiles = files.filter(file => 
        file.toLowerCase().endsWith('.jpg') || 
        file.toLowerCase().endsWith('.jpeg') || 
        file.toLowerCase().endsWith('.png')
      );

      console.log(`Processing ${imageFiles.length} images from ${inputDir.split('/').pop()}...`);

      for (const file of imageFiles) {
        const inputPath = join(inputDir, file);
        const outputPath = join(outputDir, file);

        try {
          // Optimize image: resize to max 1200px width, compress to 80% quality
          await sharp(inputPath)
            .resize(1200, null, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({ quality: 80, progressive: true })
            .toFile(outputPath);

          console.log(`✓ Optimized: ${file}`);
        } catch (error) {
          console.error(`✗ Error optimizing ${file}:`, error.message);
        }
      }

      console.log(`\n✓ Completed ${inputDir.split('/').pop()}\n`);
    } catch (error) {
      console.error(`Error processing directory ${inputDir}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
