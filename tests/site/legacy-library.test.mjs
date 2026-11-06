import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

const html = await readFile(
  new URL('../../apps/site/public/library/index.html', import.meta.url),
  'utf8',
);
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

test('legacy library links replace history and preserve filters and fragments', () => {
  for (const base of ['', '/fyicons']) {
    for (const path of ['/library', '/library/', '/library/index.html']) {
      for (const suffix of [
        '',
        '?category=arrows&q=arrow%20up&icon=arrow-up#details',
        '?next=https://example.com/',
      ]) {
        const source = new URL(`https://icons.bob.fyi${base}${path}${suffix}`);
        const replacements = [];
        runInNewContext(script, {
          window: {
            location: {
              pathname: source.pathname,
              search: source.search,
              hash: source.hash,
              replace: (target) => replacements.push(target),
            },
          },
        });
        assert.deepEqual(replacements, [`${base}/icons/${suffix}`]);
      }
    }
  }
});

test('the no-JavaScript link works at root and project subpaths', () => {
  const href = html.match(/<a href="([^"]+)"/)[1];
  for (const base of ['', '/fyicons']) {
    for (const path of ['/library/', '/library/index.html']) {
      assert.equal(
        new URL(href, `https://icons.bob.fyi${base}${path}`).pathname,
        `${base}/icons/`,
      );
    }
  }
});
