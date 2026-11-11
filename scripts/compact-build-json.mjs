import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Keep editable sources readable while avoiding whitespace in deployed JSON.
for (const name of ['icon-categories.schema.json', 'icon-categories.json']) {
  const file = `out/${name}`;
  const value = JSON.parse(await readFile(file, 'utf8'));
  await writeFile(file, JSON.stringify(value) + '\n');
}

// Recompress the social images without changing their pixels or metadata.
for (const name of ['og-image.png', 'og-image-square.png', 'twitter-image.png']) {
  const file = `out/${name}`;
  const original = await readFile(file);
  const image = sharp(original);
  // Opaque images do not need an alpha channel; keep the original otherwise.
  if ((await image.stats()).isOpaque) image.removeAlpha();
  const optimized = await image.keepMetadata()
    .png({ palette: false, compressionLevel: 9, adaptiveFiltering: false })
    .toBuffer();
  if (optimized.length >= original.length) continue;

  const [before, after] = await Promise.all([
    sharp(original).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
    sharp(optimized).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
  ]);
  if (
    before.info.width !== after.info.width ||
    before.info.height !== after.info.height ||
    !before.data.equals(after.data)
  ) {
    throw new Error(`PNG optimization changed pixels in ${name}`);
  }
  await writeFile(file, optimized);
}
