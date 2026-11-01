import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { docsNavigation } from '../apps/site/src/lib/docs-navigation.ts';

const output = new URL('../apps/site/out/', import.meta.url);
const routes = [
  '/',
  '/icons/',
  '/examples/',
  ...docsNavigation.flatMap(({ items }) => items.map(({ href }) => href)),
];
for (const route of routes) {
  const html = await readFile(new URL(`.${route}index.html`, output), 'utf8');
  const { document } = new JSDOM(html).window;
  assert.ok(document.title.includes('FYIcons'), `${route}: page title`);
  assert.ok(
    document.querySelector('meta[name="description"]')?.content,
    `${route}: description`,
  );
  assert.ok(document.querySelector('main'), `${route}: main landmark`);
  if (route.startsWith('/docs/')) {
    assert.ok(
      document.querySelector('article h1')?.textContent,
      `${route}: pre-rendered content`,
    );
    for (const { href } of docsNavigation.flatMap(({ items }) => items)) {
      assert.ok(
        document.querySelector(`nav[aria-label="Docs"] a[href$="${href}"]`),
        `${route}: sidebar link ${href}`,
      );
    }
  }
  assert.equal(
    document.querySelector('a[href*="/library/"]'),
    null,
    `${route}: obsolete link`,
  );
  assert.doesNotMatch(
    html,
    /OG playground|fyicons:private-og-playground/,
    `${route}: private editor`,
  );
}
for (const path of [
  'library/index.html',
  'og/index.html',
  'og-editor/index.html',
]) {
  await assert.rejects(access(new URL(path, output)), { code: 'ENOENT' });
}
await access(new URL('404.html', output));
console.log(
  `Verified ${routes.length} static routes, docs content and links, and public/private boundaries.`,
);
