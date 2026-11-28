import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRepositoryIcons } from './lib/prepare-icons.mjs';
import { preparePublication, publishFiles } from './lib/icon-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const prepared = await prepareRepositoryIcons(root);
const publication = await preparePublication(root, prepared.expected);
// Inline copies of these SVGs share definition IDs. Prefer plain paths.
const referenced = prepared.icons
  .filter(({ svg }) => /<(?:clipPath|mask|use)\b/.test(svg))
  .map(({ file }) => `  ${file}`);
if (referenced.length)
  console.warn(
    `Warning: ${referenced.length} source SVGs contain clipPath, mask, or use. Flatten them in Figma where possible.\n${referenced.join('\n')}`,
  );
if (process.argv.includes('--check')) {
  const stale = [...publication.changed.keys(), ...publication.obsolete];
  if (stale.length)
    throw new Error(
      `Generated icon files are stale. Run npm run generate:icons.\n${stale.join('\n')}`,
    );
  console.log(`Icon sources are current (${prepared.icons.length} icons).`);
} else {
  await publishFiles(publication);
  console.log(
    `Generated ${prepared.icons.length} SVG-backed React icons and catalog data.`,
  );
}
