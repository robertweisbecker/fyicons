import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

test('an old library link redirects without losing its filters or fragment', async () => {
  const html = await readFile(
    new URL('../../apps/site/public/library/index.html', import.meta.url),
    'utf8',
  );
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const replacements = [];
  runInNewContext(script, {
    window: {
      location: {
        pathname: '/fyicons/library/',
        search: '?q=arrow%20up&icon=arrow-up',
        hash: '#details',
        replace: (target) => replacements.push(target),
      },
    },
  });
  assert.deepEqual(replacements, [
    '/fyicons/icons/?q=arrow%20up&icon=arrow-up#details',
  ]);
});
