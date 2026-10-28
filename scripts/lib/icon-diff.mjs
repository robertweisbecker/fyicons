import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import {
  normalizeManifest,
  normalizeSource,
  safeFilename,
} from './prepare-icons.mjs';

const hash = (text) => createHash('sha256').update(text).digest('hex');
const stable = (value) =>
  JSON.stringify(value, (_, item) =>
    item && typeof item === 'object' && !Array.isArray(item)
      ? Object.fromEntries(
          Object.entries(item).sort(([a], [b]) => a.localeCompare(b, 'en')),
        )
      : item,
  );

export function readSnapshot(root, ref) {
  if (ref === 'empty')
    return {
      revision: 'empty',
      manifest: { source: {}, icons: [] },
      icons: [],
      categories: null,
      generator: null,
    };
  const git = (args, options = {}) =>
    execFileSync('git', args, {
      cwd: root,
      maxBuffer: 64 * 1024 * 1024,
      ...options,
    });
  const revision = git([
    'rev-parse',
    '--verify',
    '--end-of-options',
    `${ref}^{commit}`,
  ])
    .toString()
    .trim();
  const manifest = normalizeManifest(
    JSON.parse(git(['show', `${revision}:icons/manifest.json`])),
  );
  const paths = manifest.icons.map(
    ({ filename }) => `icons/${safeFilename(filename)}`,
  );
  const data = git(['cat-file', '--batch'], {
    input: paths.map((file) => `${revision}:${file}\n`).join(''),
  });
  let offset = 0;
  const icons = manifest.icons.map((meta) => {
    const end = data.indexOf(10, offset);
    const header = data.subarray(offset, end).toString();
    const match = /^[a-f0-9]+ blob (\d+)$/.exec(header);
    if (!match) throw new Error(`Missing SVG in ${revision}: ${meta.filename}`);
    const size = Number(match[1]);
    const svg = data.subarray(end + 1, end + 1 + size).toString('utf8');
    offset = end + 2 + size;
    return { ...meta, svg, sha256: hash(svg) };
  });
  // Fixed comparisons can span the migration to the site workspace.
  const categoryPath =
    git([
      'ls-tree',
      '--name-only',
      revision,
      '--',
      'apps/site/public/icon-categories.json',
    ])
      .toString()
      .trim() || 'public/icon-categories.json';
  return {
    revision,
    manifest,
    icons,
    categories: JSON.parse(git(['show', `${revision}:${categoryPath}`])),
    generator: hash(git(['show', `${revision}:scripts/lib/react-icons.mjs`])),
  };
}

export function compareSnapshots(before, after) {
  const identity = (snapshot, icon) =>
    JSON.stringify([normalizeSource(snapshot.manifest.source).id, icon.id]);
  const old = new Map(
    before.icons.map((icon) => [identity(before, icon), icon]),
  );
  const next = new Map(
    after.icons.map((icon) => [identity(after, icon), icon]),
  );
  const oldNames = new Map(
    before.icons.map((icon) => [icon.name, identity(before, icon)]),
  );
  const oldExports = new Map(
    before.icons.map((icon) => [icon.componentName, identity(before, icon)]),
  );
  const metadata = ({
    svg,
    sha256,
    name,
    filename,
    componentName,
    sourceUrl,
    sourcePageId,
    sourceSectionId,
    ...rest
  }) => rest;
  const record = ({ svg, sourceUrl, sourcePageId, sourceSectionId, ...rest }) =>
    rest;
  const changes = [];
  for (const key of [...new Set([...old.keys(), ...next.keys()])].sort()) {
    const a = old.get(key),
      b = next.get(key);
    const flags = [];
    if (!a) flags.push('added');
    if (!b) flags.push('removed');
    if (a && b) {
      if (a.name !== b.name) flags.push('renamed');
      if (a.componentName !== b.componentName) flags.push('export-changed');
      if (a.filename !== b.filename) flags.push('file-renamed');
      if (a.sha256 !== b.sha256) flags.push('svg-bytes-changed');
      if (stable(metadata(a)) !== stable(metadata(b)))
        flags.push('metadata-changed');
    }
    if (b && oldNames.has(b.name) && oldNames.get(b.name) !== key)
      flags.push('name-reassigned');
    if (
      b &&
      oldExports.has(b.componentName) &&
      oldExports.get(b.componentName) !== key
    )
      flags.push('export-reassigned');
    if (flags.length)
      changes.push({
        identity: JSON.parse(key),
        flags,
        before: a ? record(a) : null,
        after: b ? record(b) : null,
      });
  }
  const { icons: _oldIcons, ...oldCollection } = before.manifest;
  const { icons: _newIcons, ...newCollection } = after.manifest;
  oldCollection.source = normalizeSource(oldCollection.source);
  newCollection.source = normalizeSource(newCollection.source);
  return {
    schemaVersion: 1,
    base: before.revision,
    head: after.revision,
    collectionChanged: stable(oldCollection) !== stable(newCollection),
    categoriesChanged: stable(before.categories) !== stable(after.categories),
    reactGeneratorChanged: before.generator !== after.generator,
    collection: { before: oldCollection, after: newCollection },
    categories: { before: before.categories, after: after.categories },
    generators: { before: before.generator, after: after.generator },
    totals: {
      before: before.icons.length,
      after: after.icons.length,
      changed: changes.length,
    },
    changes,
  };
}

export function renderMarkdown(report) {
  const code = (value) =>
    '`' + String(value).replaceAll('`', '').replaceAll('\n', ' ') + '`';
  const lines = [
    '# Icon changes',
    '',
    `Compare ${code(report.base)} with ${code(report.head)}.`,
    '',
    `${report.totals.changed} icons have changes.`,
    '',
    'Open index.html for the image comparison. Read changes.json for all metadata.',
    '',
    'Pixel checks use source SVG files at 16 px and 64 px on light and dark backgrounds.',
    'Preview foreground colors follow the background theme. Source byte checks keep the original colors.',
    'Added and removed icons have no pixel comparison.',
    'They do not compare generated React components.',
    '',
  ];
  if (report.categoriesChanged) lines.push('- Category rules changed.');
  if (report.collectionChanged) lines.push('- Collection metadata changed.');
  if (report.reactGeneratorChanged)
    lines.push('- The React generator changed. Do the package tests.');
  lines.push('', '| Before | After | Changes |', '| --- | --- | --- |');
  for (const change of report.changes)
    lines.push(
      `| ${change.before ? code(change.before.componentName) : '—'} | ${change.after ? code(change.after.componentName) : '—'} | ${change.flags.join(', ')} |`,
    );
  return lines.join('\n') + '\n';
}
