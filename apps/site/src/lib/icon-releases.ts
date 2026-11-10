import history from '../data/icon-releases.json';
import packageInfo from 'fyicons/package.json' with { type: 'json' };

const minorVersionPrefix =
  packageInfo.version.split('.').slice(0, 2).join('.') + '.';

type IconReleases = { added: string; updated?: string };
const byId = new Map<string, IconReleases>();
for (const release of history.releases) {
  for (const id of release.added) {
    byId.set(id, { added: release.version });
  }
  for (const id of release.updated) {
    const previous = byId.get(id);
    if (previous) previous.updated = release.version;
  }
}

export function getIconReleases(id: string) {
  return byId.get(id);
}

export function getRecentIconAddition(id: string) {
  const version = getIconReleases(id)?.added;
  return version?.startsWith(minorVersionPrefix) ? version : undefined;
}
