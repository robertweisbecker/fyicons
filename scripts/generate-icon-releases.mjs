import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function sourceId(source) {
  return (
    source.id ||
    `sha256:${createHash('sha256').update(source.fileKey).digest('hex')}`
  );
}

function signature(icon) {
  return JSON.stringify([
    icon.sha256,
    icon.name,
    icon.componentName,
    icon.originalName,
    icon.variantSetName ?? '',
    Object.entries(icon.variantProperties ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    ),
  ]);
}

// Release snapshots establish history by collection and component identity.
// Import dates, aliases and category edits do not constitute a new release.
export function buildIconReleaseHistory(snapshots) {
  if (!snapshots.length)
    throw new Error(
      'No published release tags found. Fetch the fyicons@* tags first.',
    );
  const collection = sourceId(snapshots[0].catalog.source);
  const seen = new Set();
  let previous = new Map();
  const releases = snapshots.map(({ version, catalog }) => {
    if (sourceId(catalog.source) !== collection)
      throw new Error(
        'Release snapshots must belong to the same icon collection.',
      );
    const added = [];
    const updated = [];
    const current = new Map();
    for (const icon of catalog.icons) {
      const value = signature(icon);
      current.set(icon.id, value);
      if (!seen.has(icon.id)) added.push(icon.id);
      else if (previous.get(icon.id) !== value) updated.push(icon.id);
      seen.add(icon.id);
    }
    previous = current;
    return { version, added, updated };
  });
  return { sourceId: collection, releases };
}

async function generate() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
  const tags = git('tag', '--list', 'fyicons@*', '--sort=version:refname')
    .trim()
    .split('\n')
    .filter((tag) => /^fyicons@\d+\.\d+\.\d+$/.test(tag));
  const output = path.join(root, 'apps/site/src/data/icon-releases.json');
  const previous = await readFile(output, 'utf8')
    .then(JSON.parse)
    .catch((error) => {
      if (error.code === 'ENOENT') return { releases: [] };
      throw error;
    });
  if (
    !tags.includes('fyicons@0.1.0') ||
    previous.releases.some(
      ({ version }) => !tags.includes(`fyicons@${version}`),
    )
  ) {
    throw new Error(
      'Release history is incomplete. Fetch all fyicons@* tags before generating.',
    );
  }
  const snapshots = tags.map((tag) => ({
    version: tag.slice('fyicons@'.length),
    catalog: JSON.parse(git('show', `${tag}:apps/site/src/data/catalog.json`)),
  }));
  const history = buildIconReleaseHistory(snapshots);
  const text = JSON.stringify(history, null, 2) + '\n';
  if (process.argv.includes('--check')) {
    if ((await readFile(output, 'utf8')) !== text)
      throw new Error(
        'Icon release history is stale. Run node scripts/generate-icon-releases.mjs.',
      );
  } else {
    await writeFile(output, text);
  }
  console.log(`Icon release history covers ${tags.length} published versions.`);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
)
  await generate();
