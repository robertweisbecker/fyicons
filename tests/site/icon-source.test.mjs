import { registerHooks } from 'node:module';
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const resolver = registerHooks({
  resolve(specifier, context, next) {
    if (
      context.parentURL?.endsWith('/icon-source.ts') &&
      specifier === '@/lib/navigation'
    )
      return next('./navigation.ts', context);
    return next(specifier, context);
  },
});
const { loadIconSvg, resolveIconSources } =
  await import('../../apps/site/src/lib/icon-source.ts');
resolver.deregister();
const icon = (text) => ({
  filename: 'fixture.svg',
  sha256: createHash('sha256').update(text).digest('hex'),
});

test('SVG loading deduplicates requests, verifies exact bytes and caches success', async (t) => {
  const text = '<svg><title>Exact café bytes</title></svg>\r\n';
  const record = icon(text);
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls++;
    assert.ok(url.endsWith(record.sha256 + '.svg'));
    assert.equal(options.cache, 'force-cache');
    return new Response(text);
  });
  const [a, b] = await Promise.all([loadIconSvg(record), loadIconSvg(record)]);
  assert.equal(a, text);
  assert.equal(b, text);
  assert.equal(await loadIconSvg(record), text);
  assert.equal(calls, 1);
});
test('failed responses and checksum failures can be retried', async (t) => {
  const text = '<svg id="retry"/>';
  const record = icon(text);
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    calls++;
    return calls === 1
      ? new Response('', { status: 503 })
      : calls === 2
        ? new Response('wrong bytes')
        : new Response(text);
  });
  await assert.rejects(loadIconSvg(record), /Could not load/);
  await assert.rejects(loadIconSvg(record), /checksum mismatch/);
  assert.equal(await loadIconSvg(record), text);
  assert.equal(calls, 3);
});
test('selection sources use at most six concurrent requests and fail instead of producing partial data', async (t) => {
  const texts = Array.from(
    { length: 17 },
    (_, i) => `<svg id="selection-${i}"/>`,
  );
  const records = texts.map(icon);
  const files = new Map(
    records.map((record, i) => [`${record.sha256}.svg`, texts[i]]),
  );
  const started = records.map(() => Promise.withResolvers());
  const held = [];
  t.mock.method(globalThis, 'fetch', async (url) => {
    const gate = Promise.withResolvers();
    held.push(gate);
    started[held.length - 1].resolve();
    await gate.promise;
    return new Response(files.get(String(url).split('/').at(-1)));
  });
  const selection = resolveIconSources(records);
  // Keep five requests in flight while the sixth slot processes the rest.
  for (let i = 5; i < records.length; i++) {
    await started[i].promise;
    assert.equal(held.length, i + 1, 'only one request per available slot');
    held[i].resolve();
  }
  for (const gate of held.slice(0, 5)) gate.resolve();
  const resolved = await selection;
  assert.deepEqual(
    resolved.map((i) => i.svg),
    texts,
  );
  t.mock.method(
    globalThis,
    'fetch',
    async () => new Response('', { status: 404 }),
  );
  await assert.rejects(
    resolveIconSources([icon('missing selection source')]),
    /Could not load/,
  );
});
