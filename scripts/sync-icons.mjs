import { createHash } from 'node:crypto';
import { normalizeSvgExport } from './lib/svg-export.mjs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  normalizeManifest,
  prepareIcons,
  safeFilename,
} from './lib/prepare-icons.mjs';
import {
  confinedPath,
  readSvgFile,
  preparePublication,
  publishFiles,
} from './lib/icon-files.mjs';
import { syncIconCategories } from './lib/sync-categories.mjs';
import {
  parseIconCategories,
  validateCategoryIcons,
} from '../apps/site/src/lib/icon-categories.ts';

const sourceArgument = process.argv[2];
if (!sourceArgument)
  throw new Error(
    'Usage: npm run sync-icons -- /path/to/FYIcons-export (replaces editable icons/ sources)',
  );
const root = process.cwd();
const source = path.resolve(root, sourceArgument);
const useSourceNames = !process.argv.includes('--preserve-names');
const imported = normalizeManifest(
  JSON.parse(
    await readFile(await confinedPath(source, 'manifest.json'), 'utf8'),
  ),
  { imported: true },
);
const currentManifest = normalizeManifest(
  JSON.parse(
    await readFile(await confinedPath(root, 'icons/manifest.json'), 'utf8'),
  ),
);
const categoriesPath = await confinedPath(
  root,
  'apps/site/public/icon-categories.json',
);
const currentCategorySource = await readFile(categoriesPath, 'utf8');
const currentCategories = parseIconCategories(
  JSON.parse(currentCategorySource),
);
validateCategoryIcons(currentCategories, currentManifest.icons);
const currentById = new Map(
  currentManifest.icons.map((icon) => [icon.id, icon]),
);
const takenNames = new Set(
  useSourceNames ? [] : currentManifest.icons.map((icon) => icon.name),
);
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
const syncedAt = new Date().toISOString();
const sortedProperties = (properties = {}) =>
  JSON.stringify(
    Object.entries(properties).sort(([a], [b]) => a.localeCompare(b)),
  );
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
    const originalFilename = safeFilename(
      icon.filename || path.posix.basename(icon.file || ''),
    );
    const rawSvg = await readSvgFile(source, icon.file || originalFilename);
    if (
      icon.sha256 &&
      icon.sha256 !== createHash('sha256').update(rawSvg).digest('hex')
    )
      throw new Error(`Checksum mismatch: ${icon.name}`);
    const svg = normalizeSvgExport(rawSvg);
    // Dates belong to the component ID, not its generated name or export time.
    // Keep unknown legacy history absent, and preserve dates from archived imports.
    const dates = {};
    const history = existing ?? icon;
    for (const field of ['addedAt', 'updatedAt'])
      if (history[field] !== undefined) dates[field] = history[field];
    if (!existing && !dates.addedAt && !dates.updatedAt)
      dates.addedAt = syncedAt;
    if (!existing) dates.updatedAt ??= syncedAt;
    else {
      const previousSvg = await readSvgFile(root, `icons/${existing.filename}`);
      const sourceChanged =
        ['originalName', 'baseName', 'variantSetName'].some(
          (field) => existing[field] !== icon[field],
        ) ||
        sortedProperties(existing.variantProperties) !==
          sortedProperties(icon.variantProperties);
      if (svg !== previousSvg || sourceChanged) dates.updatedAt = syncedAt;
    }
    const {
      svg: _svg,
      sha256: _sha256,
      category: _category,
      categories: _categories,
      addedAt: _addedAt,
      updatedAt: _updatedAt,
      ...metadata
    } = icon;
    normalized.push({
      ...metadata,
      sha256: createHash('sha256').update(svg).digest('hex'),
      ...dates,
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
      width: 16,
      height: 16,
      _sourceSvg: svg,
    });
  }
}
const finalRecords = normalized.map(({ _sourceSvg, ...icon }) => icon);
const nextCategories = syncIconCategories(
  currentCategories,
  currentManifest.icons,
  finalRecords,
);
const { icons: _oldIcons, categories: _categories, ...rootMetadata } = imported;
const nextManifest = { ...rootMetadata, icons: finalRecords };
const svgById = new Map(normalized.map((icon) => [icon.id, icon._sourceSvg]));
const prepared = await prepareIcons(nextManifest, nextCategories, (icon) =>
  svgById.get(icon.id),
);
const expected = new Map(prepared.expected);
for (const icon of prepared.icons)
  expected.set(`icons/${icon.filename}`, icon.svg);
expected.set(
  'icons/manifest.json',
  JSON.stringify(prepared.manifest, null, 2) + '\n',
);
expected.set(
  'apps/site/public/icon-categories.json',
  JSON.stringify(
    { $schema: './icon-categories.schema.json', ...nextCategories },
    null,
    2,
  ) + '\n',
);
const publication = await preparePublication(root, expected, [
  'icons',
  'packages/fyicons/src',
]);
await publishFiles(publication);
console.log(
  `Imported ${prepared.icons.length} SVGs, ${useSourceNames ? 'using Figma source names' : 'preserving names for known IDs'} and generating site output.`,
);
