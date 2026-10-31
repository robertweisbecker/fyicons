import history from '../data/icon-releases.json';

type IconReleases = { added: string; updated: string };
const byId = new Map<string, IconReleases>();
for (const release of history.releases) {
  for (const id of release.added) {
    byId.set(id, { added: release.version, updated: release.version });
  }
  for (const id of release.updated) {
    const previous = byId.get(id);
    if (previous) previous.updated = release.version;
  }
}

export function getIconReleases(id: string) {
  return byId.get(id);
}
