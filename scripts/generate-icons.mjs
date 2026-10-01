import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReactIconFiles } from './lib/react-icons.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const manifestPath = path.join(root, 'icons/manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
if (
  manifest.name !== 'FYIcons' ||
  !Array.isArray(manifest.icons) ||
  !Array.isArray(manifest.categories) ||
  new Set(manifest.categories).size !== manifest.categories.length
)
  throw new Error('Invalid icons/manifest.json.');
const ids = new Set();
const filenames = new Set();
const names = new Set();
const icons = await Promise.all(
  manifest.icons.map(async (meta) => {
    if (!meta.id || ids.has(meta.id))
      throw new Error(`Missing or duplicate icon ID: ${meta.id}`);
    if (
      !meta.filename ||
      filenames.has(meta.filename) ||
      path.basename(meta.filename) !== meta.filename
    )
      throw new Error(
        `Missing, duplicate, or unsafe filename: ${meta.filename}`,
      );
    if (!meta.name || names.has(meta.name))
      throw new Error(`Missing or duplicate icon name: ${meta.name}`);
    if (!/^Icon[A-Za-z0-9]+$/.test(meta.componentName))
      throw new Error(`Invalid componentName: ${meta.componentName}`);
    if (
      !manifest.categories.includes(meta.category) ||
      meta.width !== 16 ||
      meta.height !== 16
    )
      throw new Error(`Invalid category or dimensions: ${meta.name}`);
    ids.add(meta.id);
    filenames.add(meta.filename);
    names.add(meta.name);
    const svg = await readFile(path.join(root, 'icons', meta.filename), 'utf8');
    if (
      !svg.trimStart().startsWith('<svg') ||
      !/viewBox=["']0 0 16 16["']/.test(svg)
    )
      throw new Error(`Invalid 16×16 SVG source: ${meta.filename}`);
    const sha256 = createHash('sha256').update(svg).digest('hex');
    return { ...meta, file: `icons/${meta.filename}`, svg, sha256 };
  }),
);
const sourceFiles = (await import('node:fs/promises')).readdir;
const svgFiles = (await sourceFiles(path.join(root, 'icons'))).filter((name) =>
  name.endsWith('.svg'),
);
if (
  svgFiles.length !== filenames.size ||
  svgFiles.some((name) => !filenames.has(name))
)
  throw new Error(
    'Every icons/*.svg source must have exactly one manifest entry.',
  );

// Render everything and prepare the catalog before touching generated output.
const reactFiles = await renderReactIconFiles(icons);
const groups = new Map();
for (const icon of icons) {
  if (!groups.has(icon.baseName)) groups.set(icon.baseName, []);
  groups.get(icon.baseName).push(icon);
}
for (const icon of icons) {
  const size = groups.get(icon.baseName).length;
  icon.duplicate = size > 1;
  icon.variantCount = size;
}
const generatedManifest = {
  ...manifest,
  count: icons.length,
  native16Count: icons.filter((icon) => icon.width === 16 && icon.height === 16)
    .length,
  duplicateGroups: Object.fromEntries(
    [...groups]
      .filter(([, group]) => group.length > 1)
      .map(([baseName, group]) => [
        baseName,
        group.map(({ id, file }) => ({ id, file })),
      ]),
  ),
  duplicatePolicy:
    'Distinct icons with the same base name receive stable numeric suffixes.',
};
const catalogText =
  JSON.stringify({ ...generatedManifest, icons }, null, 2) + '\n';
const expected = new Map(
  [...reactFiles].map(([file, content]) => [path.join(root, file), content]),
);
expected.set(path.join(root, 'src/data/catalog.json'), catalogText);
// These fields are deterministic from the component ID, filename, and canvas.
// Reconstruct them at runtime instead of repeating them for every catalog entry.
const compactIcons = icons.map(
  ({ sourceUrl, file, width, height, ...icon }) => icon,
);
expected.set(
  path.join(root, 'src/data/catalog-runtime.json'),
  JSON.stringify({ ...generatedManifest, icons: compactIcons }, null, 2) + '\n',
);

const iconOutput = path.join(root, 'src/icons');
const generatedComponentPattern = /^Icon[A-Za-z0-9]+\.tsx$/;
const obsoleteComponents = (await readdir(iconOutput).catch(() => [])).filter(
  (file) =>
    generatedComponentPattern.test(file) &&
    !expected.has(path.join(iconOutput, file)),
);
const stale = [];
const changed = new Map();
for (const [file, content] of expected) {
  let current;
  try {
    current = await readFile(file, 'utf8');
  } catch {
    current = null;
  }
  if (current !== content) {
    stale.push(path.relative(root, file));
    changed.set(file, content);
  }
}
if (check) {
  stale.push(
    ...obsoleteComponents.map((file) => path.posix.join('src/icons', file)),
  );
  if (stale.length)
    throw new Error(
      `Generated icon files are stale. Run npm run generate:icons.\n${stale.join('\n')}`,
    );
  console.log(`Icon sources are current (${icons.length} icons).`);
} else {
  for (const filename of obsoleteComponents)
    await unlink(path.join(iconOutput, filename));
  for (const [file, content] of changed) {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, content);
  }
  console.log(
    `Generated ${icons.length} SVG-backed React icons and catalog data.`,
  );
}
