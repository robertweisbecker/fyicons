import test from 'node:test';
import assert from 'node:assert/strict';
import { PNG } from 'pngjs';
import { compareImages } from '../../scripts/lib/icon-diff-images.mjs';
import {
  previewImage,
  previewManifest,
} from '../../scripts/lib/icon-preview-images.mjs';
import {
  commentMarker,
  renderPreviewComment,
  validatePreview,
} from '../../scripts/lib/icon-preview-comment.mjs';
import { publishPreview } from '../../scripts/publish-icon-preview.mjs';

const head = 'a'.repeat(40),
  base = 'b'.repeat(40),
  imageCommit = 'c'.repeat(40);
const repository = 'example/icons';
const change = {
  before: 'Bell',
  after: 'Bell2',
  flags: ['export-changed', 'pixels-changed'],
  image: '0000.png',
};
const report = { base, head, changes: [change] };
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

test('comment PNGs preserve both render sizes, sides and themes', () => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="currentColor"/></svg>';
  const images = compareImages(svg, svg.replace('width="16"', 'width="8"'));
  const png = PNG.sync.read(previewImage(images));
  assert.equal(png.width, 384);
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
              ((y + line) * 384 + x) * 4,
              ((y + line) * 384 + x + size) * 4,
            ),
            source.data.subarray(line * size * 4, (line + 1) * size * 4),
          );
      }
  const added = PNG.sync.read(previewImage(compareImages(null, svg)));
  assert.deepEqual(
    [...added.data.subarray((40 * 384 + 24) * 4, (40 * 384 + 24) * 4 + 4)],
    [255, 255, 255, 255],
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
  assert.equal(validatePreview(preview), preview);
});

test('comment groups changes, uses immutable PNG links and rejects markup and unsafe paths', () => {
  const body = renderPreviewComment(
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
  assert.match(body, /<summary>Added \(1\)<\/summary>/);
  assert.match(body, /<summary>Removed \(1\)<\/summary>/);
  assert.match(body, /`Bell` → `Bell2`/);
  assert.ok(body.includes(`/${imageCommit}/pr-2/0000.png`));
  for (const patch of [
    { after: '<img src=x>' },
    { image: '../../x.png' },
    { flags: ['<script>'] },
  ])
    assert.throws(
      () =>
        renderPreviewComment(
          { ...report, changes: [{ ...change, ...patch }] },
          destination,
        ),
      /Invalid preview entry/,
    );
  assert.throws(
    () =>
      renderPreviewComment(report, {
        ...destination,
        repository: 'bad/path/extra',
      }),
    /Invalid preview destination/,
  );
});

test('publisher creates once then updates only its marked bot comment', async () => {
  let saved,
    uploads = 0;
  const writes = [];
  const api = async (method, pathname, payload) => {
    if (pathname.endsWith('/pulls/2')) return pr;
    if (method === 'GET')
      return [
        { id: 99, user: { login: 'contributor' }, body: commentMarker },
        ...(saved ? [saved] : []),
      ];
    writes.push({ method, pathname, payload });
    saved = {
      id: 1,
      user: { login: 'github-actions[bot]' },
      body: payload.body,
    };
    return {
      html_url: 'https://github.com/example/icons/pull/2#issuecomment-1',
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
  await publishPreview(options);
  await publishPreview(options);
  assert.equal(uploads, 2);
  assert.deepEqual(
    writes.map(({ method }) => method),
    ['POST', 'PATCH'],
  );
  assert.ok(writes[1].pathname.endsWith('/issues/comments/1'));
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
