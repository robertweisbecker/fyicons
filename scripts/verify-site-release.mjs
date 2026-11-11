import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';

const root = new URL('../', import.meta.url);
const json = async (file) =>
  JSON.parse(await readFile(new URL(file, root), 'utf8'));
const { version } = await json('packages/fyicons/package.json');
const history = await json('apps/site/src/data/icon-releases.json');
const manifest = await json('icons/manifest.json');
assert.equal(
  history.releases.at(-1)?.version,
  version,
  'History must include the release being published',
);
const added = new Map();
for (const release of history.releases) {
  for (const id of release.added) {
    assert.ok(!added.has(id), `${id}: original Added version must be retained`);
    added.set(id, release.version);
  }
  for (const id of release.updated) {
    assert.ok(
      added.has(id),
      `${id}: Updated requires an earlier Added version`,
    );
    assert.notEqual(
      added.get(id),
      release.version,
      `${id}: a new icon cannot also be Updated`,
    );
  }
}
for (const icon of manifest.icons) {
  assert.ok(added.has(icon.id), `${icon.name}: missing Added metadata`);
}

const changelog = await readFile(
  new URL('packages/fyicons/CHANGELOG.md', root),
  'utf8',
);
const releaseNotes = changelog.split(`## ${version}\n`)[1]?.split(/\n## /)[0];
assert.ok(releaseNotes?.trim(), `Missing changelog notes for ${version}`);
const { document } = new JSDOM(
  await readFile(
    new URL('apps/site/out/docs/changelog/index.html', root),
    'utf8',
  ),
).window;
const heading = [...document.querySelectorAll('article h2')].find(
  (element) =>
    element.querySelector('.mdx-heading-link')?.textContent.trim() === version,
);
assert.ok(heading, `Website must render the ${version} release notes`);
assert.ok(
  heading.querySelector(`a[href$="/releases/tag/fyicons%40${version}"]`),
  'Release heading must link to its GitHub release',
);
const content = [];
for (
  let element = heading.nextElementSibling;
  element && element.tagName !== 'H2';
  element = element.nextElementSibling
) {
  content.push(element.textContent.trim());
}
assert.ok(
  content.join('').length > 0,
  'Website release notes must not be empty',
);
console.log(
  `Verified website release ${version}: rendered notes and Added/Updated metadata for ${manifest.icons.length} icons.`,
);
