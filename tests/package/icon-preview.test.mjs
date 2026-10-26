import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { PNG } from 'pngjs';
import { createIconRenderer } from '../../scripts/lib/icon-diff-images.mjs';
import {
  previewImage,
  previewManifest,
} from '../../scripts/lib/icon-preview-images.mjs';
import {
  commentMarker,
  renderPreviewComments,
  validatePreview,
} from '../../scripts/lib/icon-preview-comment.mjs';
import { publishPreview } from '../../scripts/publish-icon-preview.mjs';

let renderer;
before(async () => {
  renderer = await createIconRenderer();
});
after(async () => {
  await renderer?.close();
});
const compareImages = (...args) => renderer.compareImages(...args);

const head = 'a'.repeat(40),
  base = 'b'.repeat(40),
  imageCommit = 'c'.repeat(40);
const repository = 'example/icons';
const change = {
  before: 'Bell',
  after: 'Bell2',
  flags: ['export-changed', 'pixels-changed'],
  image: '0000.png',
  overlay: true,
};
const report = { base, head, changes: [change] };
const renderBodies = (...args) =>
  renderPreviewComments(...args)
    .map(({ body }) => body)
    .join('\n');
const destination = {
  repository,
  number: 2,
  imageCommit,
  runUrl: `https://github.com/${repository}/actions/runs/1`,
};
const pr = {
  state: 'open',
  head: { sha: head, repo: { full_name: repository } },
  base: { sha: base, repo: { full_name: repository } },
};

test('comment PNGs preserve both render sizes, sides and themes', async () => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="currentColor"/></svg>';
  const images = await compareImages(
    svg,
    svg.replace('width="16"', 'width="8"'),
  );
  const png = PNG.sync.read(previewImage(images));
  assert.equal(png.width, 576);
  assert.equal(png.height, 192);
  for (const [row, theme] of ['light', 'dark'].entries())
    for (const [col, side] of ['before', 'after'].entries())
      for (const size of [16, 64]) {
        const source = PNG.sync.read(
          Buffer.from(images[`${theme}-${size}`][side].split(',')[1], 'base64'),
        );
        const x = col * 192 + (size === 16 ? 24 : 72),
          y = row * 96 + (96 - size) / 2;
        for (let line = 0; line < size; line++)
          assert.deepEqual(
            png.data.subarray(
              ((y + line) * png.width + x) * 4,
              ((y + line) * png.width + x + size) * 4,
            ),
            source.data.subarray(line * size * 4, (line + 1) * size * 4),
          );
      }
  const added = PNG.sync.read(previewImage(await compareImages(null, svg)));
  assert.equal(added.width, 384);
  assert.equal(
    PNG.sync.read(previewImage(await compareImages(svg, null))).width,
    384,
  );
  assert.equal(
    PNG.sync.read(previewImage(await compareImages(svg, svg))).width,
    384,
  );
  assert.deepEqual(
    [...added.data.subarray((40 * 384 + 24) * 4, (40 * 384 + 24) * 4 + 4)],
    [255, 255, 255, 255],
  );
});

test('overlay colors distinguish old, new and overlapping geometry at both sizes and themes', async () => {
  const rectangle = (x, opacity = 1) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="${x}" y="2" width="6" height="12" fill="currentColor" opacity="${opacity}"/></svg>`;
  const png = PNG.sync.read(
    previewImage(await compareImages(rectangle(2), rectangle(4))),
  );
  const pixel = (x, y) => [
    ...png.data.subarray((y * png.width + x) * 4, (y * png.width + x) * 4 + 3),
  ];
  for (const [row, colors] of [
    [
      [240, 155, 192],
      [128, 188, 235],
      [120, 138, 204],
    ],
    [
      [124, 39, 76],
      [12, 72, 119],
      [62, 80, 146],
    ],
  ].entries()) {
    for (const size of [16, 64]) {
      const x = 384 + (size === 16 ? 24 : 72);
      const y = row * 96 + (96 - size) / 2 + size / 2;
      assert.deepEqual(pixel(x + (3 * size) / 16, y), colors[0]);
      assert.deepEqual(pixel(x + (9 * size) / 16, y), colors[1]);
      assert.deepEqual(pixel(x + (5 * size) / 16, y), colors[2]);
    }
  }
  const translucent = PNG.sync.read(
    previewImage(await compareImages(rectangle(2, 0.5), rectangle(4, 0.5))),
  );
  const index = (48 * translucent.width + 408 + 3) * 4;
  assert.deepEqual(
    [...translucent.data.subarray(index, index + 4)],
    [247, 205, 223, 255],
  );
});

test('public preview metadata excludes identity and private source fields', () => {
  const preview = previewManifest({
    base,
    head,
    sourceUrl: 'private',
    changes: [
      {
        before: { componentName: 'Bell', sourceUrl: 'private' },
        after: { componentName: 'Bell2', fileKey: 'private' },
        identity: ['private'],
        flags: ['renamed'],
      },
    ],
  });
  assert.doesNotMatch(
    JSON.stringify(preview),
    /private|sourceUrl|identity|fileKey/,
  );
  assert.equal(preview.changes[0].image, '0000.png');
  assert.equal(preview.changes[0].overlay, false);
  assert.equal(validatePreview(preview), preview);
});

test('comment groups changes, uses immutable PNG links and rejects markup and unsafe paths', () => {
  const body = renderBodies(
    {
      ...report,
      changes: [
        change,
        { before: null, after: 'Sun', flags: ['added'], image: '0001.png' },
        { before: 'Moon', after: null, flags: ['removed'], image: '0002.png' },
      ],
    },
    destination,
  );
  assert.ok(body.startsWith(commentMarker));
  assert.match(body, /<summary>Added \(1\) · Part 1 of 1<\/summary>/);
  assert.match(body, /<summary>Removed \(1\) · Part 1 of 1<\/summary>/);
  assert.match(body, /`Bell` → `Bell2`/);
  assert.match(body, /Before → After → Overlay/);
  assert.match(body, /Pink = before, blue = after/);
  assert.match(body, /with pink and blue overlay/);
  assert.ok(body.includes(`/${imageCommit}/pr-2/0000.png`));
  for (const patch of [
    { after: '<img src=x>' },
    { image: '../../x.png' },
    { flags: ['<script>'] },
    { overlay: 'true' },
    { before: null, flags: ['added'], overlay: true },
  ])
    assert.throws(
      () =>
        renderBodies(
          { ...report, changes: [{ ...change, ...patch }] },
          destination,
        ),
      /Invalid preview entry/,
    );
  assert.throws(
    () =>
      renderBodies(report, {
        ...destination,
        repository: 'bad/path/extra',
      }),
    /Invalid preview destination/,
  );
});

test('only additions and rendered changes include images; other entries keep their names', () => {
  const body = renderBodies(
    {
      ...report,
      changes: [
        change,
        { before: null, after: 'Sun', flags: ['added'], image: '0001.png' },
        {
          before: 'OldName',
          after: 'NewName',
          flags: ['renamed', 'export-changed'],
          image: '0002.png',
        },
        {
          before: 'Tagged',
          after: 'Tagged',
          flags: ['metadata-changed'],
          image: '0003.png',
        },
        {
          before: 'Deleted',
          after: null,
          flags: ['removed'],
          image: '0004.png',
        },
        {
          before: 'SamePixels',
          after: 'SamePixels',
          flags: ['svg-bytes-changed'],
          image: '0005.png',
        },
      ],
    },
    destination,
  );
  assert.equal((body.match(/!\[/g) ?? []).length, 2);
  assert.match(body, /0000\.png/); // A rename with changed artwork still gets a comparison.
  assert.match(body, /0001\.png/);
  assert.doesNotMatch(body, /000[2345]\.png/);
  assert.match(body, /- `OldName` → `NewName`/);
  for (const name of ['Tagged', 'Deleted', 'SamePixels'])
    assert.ok(body.includes(`- \`${name}\``));
  for (const section of body.matchAll(/<details>([\s\S]*?)<\/details>/g))
    if (/<summary>(Renamed|Removed|Metadata only)/.test(section[1]))
      assert.doesNotMatch(section[1], /!\[|Before → After/);
});

test('large groups split below the comment limit without dropping or duplicating icons', () => {
  const changes = [
    { before: null, after: 'Sun', flags: ['added'], image: '0000.png' },
    ...Array.from({ length: 1200 }, (_, i) => ({
      ...change,
      before: `IconBefore${'x'.repeat(180)}${i}`,
      after: `IconAfter${'x'.repeat(180)}${i}`,
      image: `${String(i + 1).padStart(4, '0')}.png`,
    })),
    ...Array.from({ length: 800 }, (_, i) => ({
      before: `Icon${'x'.repeat(180)}${i}`,
      after: `Icon${'x'.repeat(180)}${i}`,
      flags: ['metadata-changed'],
      image: `${String(i + 1201).padStart(4, '0')}.png`,
    })),
  ];
  const comments = renderPreviewComments({ ...report, changes }, destination);
  assert.equal(new Set(comments.map((c) => c.marker)).size, comments.length);
  assert.ok(comments.filter((c) => c.marker.includes(':changed-')).length > 1);
  assert.ok(comments.filter((c) => c.marker.includes(':metadata-')).length > 1);
  for (const { marker, body } of comments) {
    assert.ok(body.startsWith(marker));
    assert.ok(body.length < 65000);
  }
  const added = comments.find((c) => c.marker.includes(':added-'));
  assert.match(added.body, /0000\.png/);
  assert.doesNotMatch(added.body, /IconBefore/);
  const body = comments.map((c) => c.body).join('\n');
  assert.deepEqual(
    [...body.matchAll(/\/pr-2\/(\d{4}\.png)/g)].map((m) => m[1]),
    changes.slice(0, 1201).map((c) => c.image),
  );
  assert.deepEqual(
    [...body.matchAll(/^- `([^`]+)`$/gm)].map((m) => m[1]),
    changes.slice(1201).map((c) => c.after),
  );
});

test('publisher reuses its comments across pages and removes unused bot pages only', async () => {
  let uploads = 0,
    nextId = 200;
  // Existing bot comments will fall beyond the first API page on the second run.
  const unrelated = Array.from({ length: 100 }, (_, id) => ({
    id,
    user: { login: id === 0 ? 'github-actions[bot]' : 'contributor' },
    body: id === 0 ? 'Unrelated bot report' : commentMarker,
  }));
  const saved = new Map(),
    writes = [];
  const api = async (method, pathname, payload) => {
    if (pathname.endsWith('/pulls/2')) return pr;
    if (method === 'GET') {
      const page = Number(
        new URL(pathname, 'https://api.github.com').searchParams.get('page'),
      );
      return [...unrelated, ...saved.values()].slice(
        (page - 1) * 100,
        page * 100,
      );
    }
    writes.push({ method, pathname, payload });
    const id =
      method === 'POST' ? nextId++ : Number(pathname.split('/').at(-1));
    assert.ok(id >= 200, 'Must not change human or unrelated bot comments');
    if (method === 'DELETE') {
      saved.delete(id);
      return null;
    }
    saved.set(id, {
      id,
      user: { login: 'github-actions[bot]' },
      body: payload.body,
    });
    return {
      html_url: `https://github.com/example/icons/pull/2#issuecomment-${id}`,
    };
  };
  const options = {
    report,
    repository,
    number: 2,
    api,
    upload: async () => {
      uploads++;
      return imageCommit;
    },
  };
  const first = await publishPreview(options);
  await publishPreview(options);
  assert.equal(uploads, 2);
  assert.equal(first.urls.length, 2);
  assert.deepEqual(
    writes.map((w) => w.method),
    ['POST', 'POST', 'PATCH', 'PATCH'],
  );
  await publishPreview({ ...options, report: { ...report, changes: [] } });
  assert.equal(uploads, 2);
  assert.deepEqual(
    writes.slice(-2).map((w) => w.method),
    ['PATCH', 'DELETE'],
  );
  assert.equal(saved.size, 1);
  assert.match([...saved.values()][0].body, /0 icons with changes/);
});

test('publisher skips stale, closed and forked PRs, including pushes during upload', async () => {
  for (const current of [
    { ...pr, state: 'closed' },
    { ...pr, head: { ...pr.head, sha: base } },
    { ...pr, head: { ...pr.head, repo: { full_name: 'fork/icons' } } },
  ]) {
    const result = await publishPreview({
      report,
      repository,
      number: 2,
      api: async (method) => {
        assert.equal(method, 'GET');
        return current;
      },
      upload: async () => assert.fail('Must not upload stale images'),
    });
    assert.equal(result.skipped, true);
  }
  let calls = 0;
  const result = await publishPreview({
    report,
    repository,
    number: 2,
    api: async (method) => {
      assert.equal(method, 'GET');
      return calls++ ? { ...pr, head: { ...pr.head, sha: base } } : pr;
    },
    upload: async () => imageCommit,
  });
  assert.equal(result.skipped, true);
  assert.equal(calls, 2);
});

test('an empty comparison clears a prior report without uploading images', async () => {
  let body;
  await publishPreview({
    report: { ...report, changes: [] },
    repository,
    number: 2,
    api: async (method, pathname, payload) => {
      if (pathname.endsWith('/pulls/2')) return pr;
      if (method === 'GET')
        return [
          {
            id: 1,
            user: { login: 'github-actions[bot]' },
            body: commentMarker,
          },
        ];
      body = payload.body;
      return { html_url: 'https://example.invalid' };
    },
    upload: async () => assert.fail('No images to upload'),
  });
  assert.match(body, /0 icons with changes/);
  assert.doesNotMatch(body, /!\[Before and after\]/);
});
