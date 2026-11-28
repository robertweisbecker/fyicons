import history from '@/data/icon-releases.json';
import packageInfo from 'fyicons/package.json' with { type: 'json' };

const [currentMajor, currentMinor] = packageInfo.version.split('.').map(Number);
const minorVersions = new Map<string, { major: number; minor: number }>();

type IconReleases = { added: string; updated?: string };
const byId = new Map<string, IconReleases>();
// Release history lists versions from oldest to newest.
const releaseOrder = new Map(
  history.releases.map(({ version }, index) => [version, index]),
);
for (const release of history.releases) {
  const [major, minor] = release.version.split('.').map(Number);
  if (
    major < currentMajor ||
    (major === currentMajor && minor <= currentMinor)
  ) {
    minorVersions.set(`${major}.${minor}`, { major, minor });
  }
  for (const id of release.added) {
    byId.set(id, { added: release.version });
  }
  for (const id of release.updated) {
    const previous = byId.get(id);
    if (previous) previous.updated = release.version;
  }
}

const recentMinorVersions = new Set(
  [...minorVersions.values()]
    .sort((a, b) => b.major - a.major || b.minor - a.minor)
    .slice(0, 2)
    .map(({ major, minor }) => `${major}.${minor}`),
);

export function getIconReleases(id: string) {
  return byId.get(id);
}

export function getIconReleaseOrder(id: string, field: keyof IconReleases) {
  const version = getIconReleases(id)?.[field];
  return version === undefined ? -1 : (releaseOrder.get(version) ?? -1);
}

export function getRecentIconAddition(id: string) {
  const version = getIconReleases(id)?.added;
  return version &&
    recentMinorVersions.has(version.split('.').slice(0, 2).join('.'))
    ? version
    : undefined;
}
