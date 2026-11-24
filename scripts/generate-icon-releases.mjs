import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readSnapshot } from './lib/icon-diff.mjs';
import {
  normalizeSource,
  prepareRepositoryIcons,
} from './lib/prepare-icons.mjs';

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
  const collection = normalizeSource(snapshots[0].catalog.source).id;
  if (!collection)
    throw new Error('Release snapshot has no collection identity.');
  const seen = new Set();
  let previous = new Map();
  const releases = snapshots.map(({ version, catalog }) => {
    if (normalizeSource(catalog.source).id !== collection)
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
  const tags = git(
    'tag',
    '--merged',
    'HEAD',
    '--list',
    'fyicons@*',
    '--sort=version:refname',
  )
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
  // Version preparation runs before the release tag exists. Only that
  // version may use the working inventory; older versions always use tags.
  const { version } = JSON.parse(
    await readFile(path.join(root, 'packages/fyicons/package.json'), 'utf8'),
  );
  const includeCurrent =
    process.argv.includes('--include-current') &&
    !tags.includes(`fyicons@${version}`);
  if (
    !tags.includes('fyicons@0.1.0') ||
    previous.releases.some(
      (release) =>
        !tags.includes(`fyicons@${release.version}`) &&
        !(includeCurrent && release.version === version),
    )
  ) {
    throw new Error(
      'Release history is incomplete. Fetch all fyicons@* tags before generating.',
    );
  }
  const snapshots = tags.map((tag) => {
    // Hash source artwork so export-only changes, such as default CSS classes,
    // do not make the inspector report an update for every icon.
    const { manifest, icons } = readSnapshot(root, tag);
    return {
      version: tag.slice('fyicons@'.length),
      catalog: { source: manifest.source, icons },
    };
  });
  if (includeCurrent) {
    const { manifest, icons } = await prepareRepositoryIcons(root);
    snapshots.push({ version, catalog: { source: manifest.source, icons } });
  }
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
  console.log(`Icon release history covers ${snapshots.length} versions.`);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
)
  await generate();
