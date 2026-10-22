import { createHash } from 'node:crypto';
import { deflateSync } from 'node:zlib';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { renderReactIconFiles } from './react-icons.mjs';
import { createCategorySchema } from './category-schema.ts';
import { confinedPath, readSvgFile } from './icon-files.mjs';
import {
  parseIconCategories,
  validateCategoryIcons,
} from '../../src/lib/icon-categories.ts';

const safeName = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;
const object = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
function string(value, field) {
  if (typeof value !== 'string' || !value.trim())
    throw new Error(`Invalid ${field}.`);
}
export function safeFilename(value) {
  string(value, 'filename');
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*\.svg$/.test(value) || value.includes('..'))
    throw new Error(`Unsafe filename: ${value}`);
  return value;
}

/** Missing legacy provenance is explicit; supplied provenance must have valid types. */
export function normalizeManifest(value, { imported = false } = {}) {
  if (!object(value) || value.name !== 'FYIcons' || !Array.isArray(value.icons))
    throw new Error('Expected a FYIcons manifest with icons.');
  if (
    !imported &&
    ('categories' in value ||
      value.icons.some(
        (icon) => object(icon) && ('category' in icon || 'categories' in icon),
      ))
  )
    throw new Error('Move category metadata to public/icon-categories.json.');
  const source = value.source === undefined ? { fileKey: '' } : value.source;
  if (
    !object(source) ||
    ('fileKey' in source && typeof source.fileKey !== 'string')
  )
    throw new Error('Invalid source.fileKey; expected a string.');
  const ids = new Set();
  const icons = value.icons.map((meta) => {
    if (
      !object(meta) ||
      Object.entries(meta).some(
        ([key, item]) =>
          item === null &&
          (!imported || !['category', 'categories'].includes(key)),
      )
    )
      throw new Error('Invalid icon metadata; null values are not supported.');
    string(meta.id, 'icon ID');
    if (ids.has(meta.id)) throw new Error(`Duplicate icon ID: ${meta.id}`);
    ids.add(meta.id);
    if (typeof meta.name !== 'string' || !safeName.test(meta.name))
      throw new Error(`Unsafe icon name: ${meta.name}`);
    const baseName =
      meta.baseName === undefined
        ? meta.name.replace(/--\d+-\d+$/, '')
        : meta.baseName;
    if (typeof baseName !== 'string' || !safeName.test(baseName))
      throw new Error(`Invalid baseName: ${baseName}`);
    if (meta.width !== 16 || meta.height !== 16)
      throw new Error(`Invalid dimensions: ${meta.name}`);
    if (!imported || meta.filename !== undefined) safeFilename(meta.filename);
    if (
      (!imported || meta.componentName !== undefined) &&
      (typeof meta.componentName !== 'string' ||
        !/^Icon[A-Za-z0-9]+$/.test(meta.componentName))
    )
      throw new Error(`Invalid componentName: ${meta.componentName}`);
    if (
      meta.aliases !== undefined &&
      (!Array.isArray(meta.aliases) ||
        meta.aliases.some(
          (alias) => typeof alias !== 'string' || !alias.trim(),
        ))
    )
      throw new Error(`Invalid aliases: ${meta.name}`);
    for (const field of [
      'originalName',
      'sourceUrl',
      'sourceSectionId',
      'sourcePageId',
      'variantSetName',
      'variantSetId',
      'file',
      'svg',
    ])
      if (meta[field] !== undefined) string(meta[field], field);
    for (const field of ['addedAt', 'updatedAt']) {
      const date = meta[field];
      if (
        date !== undefined &&
        (typeof date !== 'string' ||
          !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(date) ||
          !Number.isFinite(Date.parse(date)) ||
          new Date(date).toISOString() !== date)
      )
        throw new Error(
          `Invalid ${field}: ${meta.name}; expected a UTC ISO timestamp.`,
        );
    }
    if (meta.addedAt && meta.updatedAt && meta.addedAt > meta.updatedAt)
      throw new Error(
        `Invalid date order: ${meta.name}; addedAt must not follow updatedAt.`,
      );
    if (
      meta.sha256 !== undefined &&
      (typeof meta.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(meta.sha256))
    )
      throw new Error(`Invalid sha256: ${meta.name}`);
    if (
      meta.notes !== undefined &&
      (!Array.isArray(meta.notes) ||
        meta.notes.some((note) => typeof note !== 'string'))
    )
      throw new Error(`Invalid notes: ${meta.name}`);
    if (
      meta.variantProperties !== undefined &&
      (!object(meta.variantProperties) ||
        Object.values(meta.variantProperties).some(
          (item) => typeof item !== 'string',
        ))
    )
      throw new Error(`Invalid variantProperties: ${meta.name}`);
    return {
      ...meta,
      ...(imported && meta.baseName === undefined ? {} : { baseName }),
      originalName: meta.originalName ?? meta.name,
      aliases: meta.aliases ?? [],
    };
  });
  return {
    ...value,
    source: { ...source, fileKey: source.fileKey ?? '' },
    icons,
  };
}

function validateSvg(svg, filename) {
  // Inspect only the actual root tag. Nested viewBoxes and quoted attribute text
  // must never satisfy the canvas check.
  const root = svg.trimStart().match(/^<svg\b((?:[^"'>]|"[^"]*"|'[^']*')*)>/);
  if (!root) throw new Error(`Invalid SVG root: ${filename}`);
  const attributes = new Map();
  const attribute = /\s+([^\s=]+)\s*=\s*(["'])(.*?)\2/gs;
  let rest = root[1];
  for (const match of root[1].matchAll(attribute)) {
    if (attributes.has(match[1]))
      throw new Error(`Duplicate SVG attribute: ${filename}`);
    attributes.set(match[1], match[3]);
    rest = rest.replace(match[0], '');
  }
  const canvas = attributes
    .get('viewBox')
    ?.trim()
    .split(/[\s,]+/)
    .map(Number);
  if (
    rest.trim().replace(/\/$/, '').trim() ||
    !canvas ||
    canvas.length !== 4 ||
    canvas.some((value, index) => value !== [0, 0, 16, 16][index])
  )
    throw new Error(`Invalid 16×16 SVG root viewBox: ${filename}`);
}

/** Validate and render the entire inventory without mutating inputs or files. */
export async function prepareIcons(input, categoryInput, readSvg) {
  const manifest = normalizeManifest(input);
  const categories = parseIconCategories(categoryInput);
  validateCategoryIcons(categories, manifest.icons);
  const seen = {
    filename: new Set(),
    name: new Set(),
    componentName: new Set(),
  };
  for (const meta of manifest.icons) {
    for (const [field, values] of Object.entries(seen)) {
      const key = meta[field].toLowerCase();
      if (values.has(key))
        throw new Error(`Case-folded ${field} collision: ${meta[field]}`);
      values.add(key);
    }
  }
  const icons = await Promise.all(
    manifest.icons.map(async (meta) => {
      const svg = await readSvg(meta);
      if (typeof svg !== 'string')
        throw new Error(`Invalid SVG bytes: ${meta.filename}`);
      validateSvg(svg, meta.filename);
      const sha256 = createHash('sha256').update(svg).digest('hex');
      if (meta.sha256 !== undefined && meta.sha256 !== sha256)
        throw new Error(`Checksum mismatch: ${meta.name}`);
      const sourceUrl =
        meta.sourceUrl ??
        `https://www.figma.com/design/${manifest.source.fileKey}/icons-astra?node-id=${meta.id.replace(':', '-')}`;
      const { sha256: _suppliedHash, ...metadata } = meta;
      return {
        ...metadata,
        sourceUrl,
        file: `icons/${meta.filename}`,
        svg,
        sha256,
      };
    }),
  );
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
    native16Count: icons.filter(
      (icon) => icon.width === 16 && icon.height === 16,
    ).length,
    duplicateGroups: Object.fromEntries(
      [...groups]
        .filter(([, group]) => group.length > 1)
        .map(([baseName, group]) => [
          baseName,
          group.map(({ id, file }) => ({ id, file })),
        ]),
    ),
    duplicatePolicy:
      'Distinct icons with the same base name receive numeric suffixes to disambiguate the current inventory; suffixes may change when the inventory changes.',
  };
  const catalogText =
    JSON.stringify({ ...generatedManifest, icons }, null, 2) + '\n';
  const expected = new Map(reactFiles);
  expected.set('src/data/catalog.json', catalogText);
  // Reconstruct standard fields, retaining any explicitly supplied alternate URL.
  const compactIcons = icons.map(
    ({ sourceUrl, file, width, height, svg, ...icon }) =>
      sourceUrl ===
      `https://www.figma.com/design/${manifest.source.fileKey}/icons-astra?node-id=${icon.id.replace(':', '-')}`
        ? icon
        : { ...icon, sourceUrl },
  );
  // Store field names once rather than repeating every metadata key per icon.
  // Null marks an absent optional field; icon metadata does not contain null values.
  const iconFields = [
    ...new Set(compactIcons.flatMap((icon) => Object.keys(icon))),
  ];
  if (compactIcons.some((icon) => Object.values(icon).includes(null)))
    throw new Error('Icon metadata cannot contain null values.');
  const { icons: _manifestIcons, ...runtimeMetadata } = generatedManifest;
  expected.set(
    'src/data/catalog-runtime.json',
    JSON.stringify(
      {
        metadataArchive: deflateSync(
          Buffer.from(JSON.stringify(runtimeMetadata)),
          { level: 9, memLevel: 9 },
        ).toString('base64'),
        svgArchive: deflateSync(
          Buffer.from(JSON.stringify(icons.map((icon) => icon.svg))),
          { level: 9, memLevel: 9 },
        ).toString('base64'),
        iconFields,
        iconArchive: deflateSync(
          Buffer.from(
            JSON.stringify(
              compactIcons.map((icon) =>
                iconFields.map((field) => icon[field] ?? null),
              ),
            ),
          ),
          { level: 9, memLevel: 9 },
        ).toString('base64'),
      },
      null,
      2,
    ) + '\n',
  );

  expected.set(
    'public/icon-categories.schema.json',
    JSON.stringify(
      createCategorySchema(icons.map(({ name }) => name)),
      null,
      2,
    ) + '\n',
  );
  const sourceManifest = {
    ...manifest,
    icons: manifest.icons.map(({ sha256: _sha, ...meta }) => meta),
  };
  return { manifest: sourceManifest, icons, expected };
}

export async function prepareRepositoryIcons(root) {
  const manifest = normalizeManifest(
    JSON.parse(
      await readFile(await confinedPath(root, 'icons/manifest.json'), 'utf8'),
    ),
  );
  const categoryInput = JSON.parse(
    await readFile(
      await confinedPath(root, 'public/icon-categories.json'),
      'utf8',
    ),
  );
  const svgFiles = (await readdir(await confinedPath(root, 'icons'))).filter(
    (name) => name.endsWith('.svg'),
  );
  const filenames = new Set(manifest.icons.map(({ filename }) => filename));
  if (
    svgFiles.length !== filenames.size ||
    svgFiles.some((name) => !filenames.has(name))
  )
    throw new Error(
      'Every icons/*.svg source must have exactly one manifest entry.',
    );
  return prepareIcons(manifest, categoryInput, async (meta) =>
    readSvgFile(root, `icons/${meta.filename}`),
  );
}
