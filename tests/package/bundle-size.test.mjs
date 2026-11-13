import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import test from 'node:test';
import { rolldown } from 'rolldown';
import {
  bundleSizeMarker,
  measureBundles,
  renderBundleComment,
  validateBundleReport,
} from '../../scripts/lib/bundle-size.mjs';
import { publishBundleSize } from '../../scripts/publish-bundle-size.mjs';

const repository = 'example/icons';
const base = 'a'.repeat(40),
  head = 'b'.repeat(40),
  tip = 'c'.repeat(40);
const sizes = {
  svg: { raw: 200, gzip: 100, count: 2 },
  react: { raw: 300, gzip: 150, count: 2 },
  client: { raw: 400, gzip: 200, count: 3 },
};
const report = {
  version: 1,
  number: 27,
  base,
  baseTip: tip,
  head,
  workflowSha: tip,
  tools: { node: '24.9.0', rolldown: '1.2.11' },
  before: sizes,
  after: {
    ...sizes,
    svg: { raw: 100, gzip: 50, count: 1 },
    react: { raw: 330, gzip: 165, count: 2 },
  },
};
const pr = {
  state: 'open',
  head: { sha: head, repo: { full_name: repository } },
  base: { sha: tip, repo: { full_name: repository } },
};
const run = {
  id: 123,
  conclusion: 'success',
  event: 'pull_request',
  head_sha: head,
  head_repository: { full_name: repository },
};

test('measures published SVGs and real minified React bundles with the runtime external', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'bundle-size-test-'));
  try {
    const pkg = path.join(root, 'packages/fyicons');
    await mkdir(path.join(pkg, 'svg'), { recursive: true });
    await mkdir(path.join(pkg, 'dist'));
    const svgs = ['<svg><path d="M0 0"/></svg>', '<svg><circle r="1"/></svg>'];
    await writeFile(path.join(pkg, 'svg', 'a.svg'), svgs[0]);
    await writeFile(path.join(pkg, 'svg', 'b.svg'), svgs[1]);
    await writeFile(path.join(pkg, 'svg', 'ignored.txt'), 'ignored');
    await writeFile(
      path.join(pkg, 'dist', 'index.js'),
      'import {createElement} from "react"; export function Icon(){ return createElement("svg"); }',
    );
    await writeFile(
      path.join(pkg, 'dist', 'client.js'),
      '"use client"; export * from "./index.js"; export const provider = "example";',
    );
    const measured = await measureBundles(root, rolldown);
    assert.equal(measured.svg.raw, Buffer.byteLength(svgs.join('')));
    assert.equal(
      measured.svg.gzip,
      svgs.reduce((sum, svg) => sum + gzipSync(svg, { level: 9 }).length, 0),
    );
    assert.equal(measured.svg.count, 2);
    assert.equal(measured.react.count, 1);
    assert.equal(measured.client.count, 2);
    assert.ok(
      measured.react.raw > 0 && measured.react.raw < 150,
      'React must remain external',
    );
    assert.ok(measured.client.raw > measured.react.raw);
    assert.deepEqual(await measureBundles(root, rolldown), measured);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('comment reports both sizes, signed changes, unchanged rows and a zero baseline', () => {
  const text = renderBundleComment(report, repository, run.id);
  assert.match(text, /200 B → 100 B/);
  assert.match(text, /−100 B \(−50.00%\)/);
  assert.match(text, /\+30 B \(\+10.00%\)/);
  assert.match(text, /— \*\*0 B \(0.00%\)/);
  assert.match(text, /actions\/runs\/123/);
  const empty = {
    ...report,
    before: { ...sizes, svg: { raw: 0, gzip: 0, count: 0 } },
  };
  assert.doesNotMatch(
    renderBundleComment(empty, repository, run.id),
    /NaN|Infinity/,
  );
  for (const invalid of [
    { ...report, number: -1 },
    { ...report, head: '../main' },
    { ...report, tools: { node: '<img>', rolldown: '1' } },
    { ...report, after: { ...sizes, svg: { raw: -1, gzip: 4, count: 2 } } },
    { ...report, after: { ...sizes, react: { raw: 1.5, gzip: 4, count: 2 } } },
  ])
    assert.throws(() => validateBundleReport(invalid), /Invalid bundle/);
});

test('publisher creates one bot comment, updates it across pages, and preserves human comments', async () => {
  let saved,
    nextId = 200;
  const writes = [];
  const unrelated = Array.from({ length: 100 }, (_, id) => ({
    id,
    user: { login: 'human' },
    body: bundleSizeMarker + '\n',
  }));
  const api = async (method, pathname, payload) => {
    if (pathname.endsWith('/pulls/27')) return pr;
    if (pathname.includes('/compare/'))
      return { merge_base_commit: { sha: base } };
    if (method === 'GET') {
      const page = Number(
        new URL(pathname, 'https://api.github.com').searchParams.get('page'),
      );
      return [...unrelated, ...(saved ? [saved] : [])].slice(
        (page - 1) * 100,
        page * 100,
      );
    }
    writes.push(method);
    if (method === 'PATCH') assert.ok(pathname.endsWith('/200'));
    saved = {
      id: nextId,
      user: { login: 'github-actions[bot]' },
      body: payload.body,
    };
    return {
      html_url: 'https://github.com/example/icons/pull/27#issuecomment-200',
    };
  };
  await publishBundleSize({ report, repository, run, api });
  await publishBundleSize({
    report,
    repository,
    run: { ...run, event: 'workflow_dispatch', head_sha: tip },
    api,
  });
  assert.deepEqual(writes, ['POST', 'PATCH']);
});

test('publisher rejects mismatched runs and skips stale, closed, forked or changing PRs', async () => {
  for (const patch of [
    { conclusion: 'failure' },
    { head_sha: tip },
    { event: 'push' },
    { head_repository: { full_name: 'fork/icons' } },
  ])
    await assert.rejects(
      publishBundleSize({
        report,
        repository,
        run: { ...run, ...patch },
        api: () => assert.fail('No API write'),
      }),
      /successful workflow/,
    );
  for (const changed of [
    { ...pr, state: 'closed' },
    { ...pr, head: { ...pr.head, sha: base } },
    { ...pr, base: { ...pr.base, sha: base } },
    { ...pr, head: { ...pr.head, repo: { full_name: 'fork/icons' } } },
  ]) {
    const result = await publishBundleSize({
      report,
      repository,
      run,
      api: async (method) => {
        assert.equal(method, 'GET');
        return changed;
      },
    });
    assert.equal(result.skipped, true);
  }
  let reads = 0;
  const result = await publishBundleSize({
    report,
    repository,
    run,
    api: async (method, pathname) => {
      assert.equal(method, 'GET');
      if (pathname.endsWith('/pulls/27'))
        return reads++ ? { ...pr, state: 'closed' } : pr;
      if (pathname.includes('/compare/'))
        return { merge_base_commit: { sha: base } };
      return [];
    },
  });
  assert.equal(result.skipped, true);
  await assert.rejects(
    publishBundleSize({
      report,
      repository,
      run,
      api: async (_, pathname) =>
        pathname.endsWith('/pulls/27')
          ? pr
          : { merge_base_commit: { sha: tip } },
    }),
    /comparison base/,
  );
});
