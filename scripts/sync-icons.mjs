import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
const source = process.argv[2];
if (!source) throw new Error('Usage: npm run sync-icons -- /path/to/outputs/fyicons');
const manifest = JSON.parse(await readFile(path.join(source, 'manifest.json'), 'utf8'));
if (manifest.name !== 'FYIcons') throw new Error('Expected a FYIcons manifest.');
const icons = await Promise.all(manifest.icons.map(async icon => {
  if (icon.width !== 16 || icon.height !== 16) throw new Error('Non-16px icon: ' + icon.name);
  const svg = await readFile(path.join(source, icon.file), 'utf8');
  if (createHash('sha256').update(svg).digest('hex') !== icon.sha256) throw new Error('Checksum mismatch: ' + icon.name);
  return { ...icon, svg };
}));
if (new Set(icons.map(icon => icon.id)).size !== icons.length || new Set(icons.map(icon => icon.filename)).size !== icons.length) throw new Error('Duplicate IDs or filenames.');
await writeFile('src/data/catalog.json', JSON.stringify({ ...manifest, icons }) + '\n');
console.log('Imported ' + icons.length + ' original SVGs. Build and commit the updated data files.');
