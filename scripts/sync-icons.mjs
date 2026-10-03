import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { renderReactIconFiles } from './lib/react-icons.mjs';

const source = process.argv[2];
if (!source)
  throw new Error(
    'Usage: npm run sync-icons -- /path/to/FYIcons-export (replaces editable icons/ sources)',
  );
const root = process.cwd();
const useSourceNames = process.argv.includes('--use-source-names');
const imported = JSON.parse(
  await readFile(path.join(source, 'manifest.json'), 'utf8'),
);
const currentManifest = JSON.parse(
  await readFile(path.join(root, 'icons/manifest.json'), 'utf8'),
);
const currentById = new Map(
  currentManifest.icons.map((icon) => [icon.id, icon]),
);
const takenNames = new Set(
  useSourceNames ? [] : currentManifest.icons.map((icon) => icon.name),
);
if (
  imported.name !== 'FYIcons' ||
  !Array.isArray(imported.icons) ||
  !Array.isArray(imported.categories)
)
  throw new Error('Expected a FYIcons manifest with icons and categories.');
const groups = new Map();
for (const icon of imported.icons) {
  const baseName = icon.baseName || icon.name.replace(/--\d+-\d+$/, '');
  if (!groups.has(baseName)) groups.set(baseName, []);
  groups.get(baseName).push({ ...icon, baseName });
}
const reserved = new Set([
  ...groups.keys(),
  ...imported.icons.map((icon) => icon.name),
  ...(useSourceNames ? [] : currentManifest.icons.map((icon) => icon.name)),
]);
const pascal = (text) =>
  text
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
const normalized = [];
for (const [baseName, group] of groups) {
  group.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  for (const icon of group) {
    const existing = currentById.get(icon.id);
    let name = useSourceNames ? icon.name : existing?.name || icon.name;
    if ((useSourceNames || !existing) && takenNames.has(name)) {
      let suffix = 1;
      while (
        reserved.has(`${icon.name}-${suffix}`) ||
        takenNames.has(`${icon.name}-${suffix}`)
      )
        suffix++;
      name = `${icon.name}-${suffix}`;
      reserved.add(name);
    }
    takenNames.add(name);
    if (normalized.some((item) => item.name === name))
      throw new Error(`Name collision: ${name}`);
    const filename = `${name}-16.svg`;
    const originalFilename = icon.filename || path.basename(icon.file);
    const svg = await readFile(
      path.join(source, icon.file || originalFilename),
      'utf8',
    );
    if (
      icon.width !== 16 ||
      icon.height !== 16 ||
      !svg.trimStart().startsWith('<svg')
    )
      throw new Error(`Invalid SVG: ${icon.name}`);
    const checksum = createHash('sha256').update(svg).digest('hex');
    if (icon.sha256 && icon.sha256 !== checksum)
      throw new Error(`Checksum mismatch: ${icon.name}`);
    const { svg: _svg, sha256: _sha, ...metadata } = icon;
    normalized.push({
      ...metadata,
      id: icon.id,
      name,
      baseName: icon.baseName || existing?.baseName || baseName,
      filename,
      componentName: useSourceNames
        ? `Icon${pascal(name)}`
        : existing?.componentName || `Icon${pascal(name)}`,
      aliases: [
        ...new Set(
          [
            ...(existing?.aliases || []),
            ...(existing ? [existing.name, existing.filename] : []),
            ...(icon.aliases || []),
            icon.name,
            originalFilename,
          ].filter((value) => value !== name && value !== filename),
        ),
      ],
      category: icon.category,
      width: 16,
      height: 16,
      sourceUrl: icon.sourceUrl,
      _sourceSvg: svg,
    });
  }
}
const ids = new Set();
for (const icon of normalized) {
  if (!icon.id || ids.has(icon.id))
    throw new Error(`Duplicate or missing ID: ${icon.id}`);
  if (!imported.categories.includes(icon.category))
    throw new Error(`Unknown category: ${icon.category}`);
  ids.add(icon.id);
}
const renderRecords = normalized.map(({ _sourceSvg, ...icon }) => ({
  ...icon,
  svg: _sourceSvg,
}));
await renderReactIconFiles(renderRecords); // Validate all component inputs before replacing editable sources.
const finalRecords = normalized.map(({ _sourceSvg, ...icon }) => icon);
const { icons: _oldIcons, ...rootMetadata } = imported;
const nextManifest = { ...rootMetadata, icons: finalRecords };
const iconsDir = path.join(root, 'icons');
await mkdir(iconsDir, { recursive: true });
const oldFiles = (await readdir(iconsDir)).filter((name) =>
  name.endsWith('.svg'),
);
for (const icon of normalized)
  await writeFile(path.join(iconsDir, icon.filename), icon._sourceSvg);
await writeFile(
  path.join(iconsDir, 'manifest.json'),
  JSON.stringify(nextManifest, null, 2) + '\n',
);
for (const filename of oldFiles)
  if (!finalRecords.some((icon) => icon.filename === filename))
    await unlink(path.join(iconsDir, filename));
const { execFile } = await import('node:child_process');
const { promisify } = await import('node:util');
await promisify(execFile)('node', ['scripts/generate-icons.mjs'], {
  cwd: root,
});
console.log(
  `Imported ${finalRecords.length} SVGs, ${useSourceNames ? 'using Figma source names' : 'preserving names for known IDs'} and generating site output.`,
);
