import test, { before, after } from 'node:test';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import {
  compareSnapshots,
  renderMarkdown,
  readSnapshot,
} from '../../scripts/lib/icon-diff.mjs';
import { mkdtemp, mkdir, writeFile, rename, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  createIconRenderer,
  classifyVisualChange,
  pixelDiff,
  views,
} from '../../scripts/lib/icon-diff-images.mjs';
import { renderHtml } from '../../scripts/lib/icon-diff-html.mjs';
import { PNG } from 'pngjs';

let renderer;
before(async () => {
  renderer = await createIconRenderer();
});
after(async () => {
  await renderer?.close();
});
const compareImages = (...args) => renderer.compareImages(...args);
const raster = (...args) => renderer.raster(...args);

test('pixel comparisons keep exact changes and prioritize larger rendering differences', () => {
  function image(size, changes) {
    const before = {
      width: size,
      height: size,
      data: Buffer.alloc(size * size * 4, 255),
    };
    const after = { ...before, data: Buffer.from(before.data) };
    for (const [index, delta] of changes.entries())
      after.data[index * 4] -= delta;
    return { size, ...pixelDiff(before, after) };
  }
  for (const size of [16, 64]) {
    const scale = (size / 16) ** 2;
    const noise = image(size, Array(3 * scale).fill(8));
    assert.equal(noise.changedPixels, 3 * scale);
    assert.equal(classifyVisualChange({ test: noise }), 'subtle');
    assert.equal(
      classifyVisualChange({ test: image(size, Array(scale).fill(64)) }),
      'significant',
    );
    assert.equal(
      classifyVisualChange({ test: image(size, Array(4 * scale).fill(32)) }),
      'significant',
    );
    assert.equal(classifyVisualChange({ test: image(size, []) }), 'identical');
  }
  // One borderline view must stay reviewable even when the others match.
  assert.equal(
    classifyVisualChange({ light: image(16, [1]), dark: image(16, []) }),
    'subtle',
  );
});

const icon = (id, name, extra = {}) => ({
  id,
  name,
  componentName: `Icon${name}`,
  filename: `${name}.svg`,
  sha256: 'same',
  ...extra,
});
const snapshot = (icons, fileKey = 'source') => ({
  revision: 'a'.repeat(40),
  manifest: { source: { fileKey }, icons },
  icons,
  categories: {},
  generator: 'same',
});
test('fixed Git comparisons work across the site workspace migration', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'fyicons-layout-diff-'));
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  try {
    for (const dir of ['icons', 'public', 'scripts/lib', 'apps/site'])
      await mkdir(path.join(root, dir), { recursive: true });
    await writeFile(
      path.join(root, 'icons/manifest.json'),
      JSON.stringify({
        name: 'FYIcons',
        source: { fileKey: 'fixture' },
        icons: [
          { ...icon('1', 'Sun'), sha256: undefined, width: 16, height: 16 },
        ],
      }),
    );
    await writeFile(
      path.join(root, 'icons/Sun.svg'),
      '<svg viewBox="0 0 16 16"><path d="M1 1h2"/></svg>',
    );
    await writeFile(
      path.join(root, 'public/icon-categories.json'),
      '{"categories":[]}',
    );
    await writeFile(
      path.join(root, 'scripts/lib/react-icons.mjs'),
      '// fixture\n',
    );
    git('init', '--quiet');
    const commit = () => {
      git('add', '.');
      git(
        '-c',
        'user.name=Fixture',
        '-c',
        'user.email=fixture@example.invalid',
        'commit',
        '--quiet',
        '-m',
        'Fixture',
      );
      return git('rev-parse', 'HEAD');
    };
    const before = commit();
    await rename(
      path.join(root, 'public'),
      path.join(root, 'apps/site/public'),
    );
    const after = commit();
    const result = compareSnapshots(
      readSnapshot(root, before),
      readSnapshot(root, after),
    );
    assert.equal(result.categoriesChanged, false);
    assert.equal(result.reactGeneratorChanged, false);
    assert.equal(result.changes.length, 0);
    assert.equal(result.totals.after, 1);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
test('identity survives a rename and flags reassigned names and exports', () => {
  const result = compareSnapshots(
    snapshot([icon('1', 'Sun'), icon('2', 'Moon'), icon('3', 'Old')]),
    snapshot([
      icon('1', 'Moon', { sha256: 'changed', aliases: ['Sun'] }),
      icon('2', 'New'),
      icon('4', 'Added'),
    ]),
  );
  assert.deepEqual(result.changes[0].flags, [
    'renamed',
    'export-changed',
    'file-renamed',
    'svg-bytes-changed',
    'metadata-changed',
    'name-reassigned',
    'export-reassigned',
  ]);
  assert.deepEqual(
    result.changes.find((item) => item.before?.id === '3').flags,
    ['removed'],
  );
  assert.deepEqual(
    result.changes.find((item) => item.after?.id === '4').flags,
    ['added'],
  );
  assert.match(renderMarkdown(result), /IconSun.*IconMoon/);
  assert.equal(
    compareSnapshots(snapshot([icon('1', 'Sun')]), snapshot([icon('1', 'Sun')]))
      .changes.length,
    0,
  );
  assert.equal(
    compareSnapshots(
      snapshot([icon('1', 'Sun')]),
      snapshot([icon('1', 'Sun')], 'other-file'),
    ).changes.length,
    2,
  );
});

test('legacy source keys match opaque identities without leaking into reports', () => {
  const fileKey = 'private-fixture-file';
  const before = snapshot(
    [
      icon('1', 'Old', {
        sourceUrl: `https://www.figma.com/design/${fileKey}`,
        sourcePageId: 'private-page',
        sourceSectionId: 'private-section',
      }),
    ],
    fileKey,
  );
  before.manifest.source.scope = 'private collection';
  const after = snapshot([icon('1', 'New')]);
  after.manifest.source = {
    id: `sha256:${createHash('sha256').update(fileKey).digest('hex')}`,
  };
  const result = compareSnapshots(before, after);
  assert.deepEqual(result.changes[0].flags, [
    'renamed',
    'export-changed',
    'file-renamed',
  ]);
  assert.equal(result.changes.length, 1);
  assert.equal(result.collectionChanged, false);
  for (const output of [
    JSON.stringify(result),
    renderMarkdown(result),
    renderHtml(result, [{}]),
  ])
    assert.doesNotMatch(
      output,
      /private-fixture-file|sourceUrl|sourcePageId|sourceSectionId|fileKey|figma\.com|private collection/,
    );
});
test('byte-only edits do not cause pixel changes; masks and gradients render', async () => {
  const source =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><linearGradient id="g"><stop stop-color="red"/><stop offset="1" stop-color="blue"/></linearGradient><mask id="m"><rect width="16" height="16" fill="white"/><circle cx="8" cy="8" r="2" fill="black"/></mask></defs><rect width="16" height="16" fill="url(#g)" mask="url(#m)" opacity=".5"/></svg>';
  const same = await compareImages(
    source,
    source.replace('><defs>', '>\n<defs>'),
  );
  assert.ok(Object.values(same).every((view) => view.changedPixels === 0));
  assert.ok(
    Object.values(same).every(
      (view) =>
        view.diff === null &&
        view.overlayBefore === null &&
        view.overlayAfter === null,
    ),
  );
  const changed = await compareImages(source, source.replace('r="2"', 'r="4"'));
  assert.ok(Object.values(changed).every((view) => view.changedPixels > 0));
  await assert.rejects(
    () =>
      compareImages(source, '<svg><image href="file:///etc/passwd"/></svg>'),
    /self-contained/,
  );
});

const rectangle = (x) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect x="${x}" y="4" width="6" height="8" fill="currentColor" opacity=".5"/></svg>`;

test('real SVG rendering separates rounding noise from a visible move', async () => {
  const rounding = await compareImages(rectangle(2), rectangle(2.001));
  assert.ok(Object.values(rounding).some((view) => view.changedPixels > 0));
  assert.equal(classifyVisualChange(rounding), 'subtle');
  const moved = await compareImages(rectangle(2), rectangle(3));
  assert.equal(classifyVisualChange(moved), 'significant');
});

test('source foreground paint uses the preview theme without hiding geometry changes', async () => {
  const source = rectangle(2).replace('currentColor', 'black');
  const same = await compareImages(source, rectangle(2));
  assert.ok(Object.values(same).every((view) => view.changedPixels === 0));
  const changed = await compareImages(
    source,
    rectangle(4).replace('currentColor', 'black'),
  );
  assert.ok(Object.values(changed).every((view) => view.changedPixels > 0));
  const dark = await raster(
    source,
    views.find((view) => view.name === 'dark-16'),
  );
  assert.ok(
    dark.data[(5 * 16 + 3) * 4] > 23,
    'The icon must be visible on a dark background.',
  );
});

test('pink and blue overlay layers preserve source transparency and pixel alignment', async () => {
  const before = rectangle(2),
    after = rectangle(4);
  const previews = await compareImages(before, after);
  assert.equal(previews['light-16'].changedPixels, 32);
  assert.equal(previews['dark-16'].changedPixels, 32);
  for (const view of views) {
    for (const [key, svg, color] of [
      ['overlayBefore', before, [224, 55, 129]],
      ['overlayAfter', after, [0, 121, 215]],
    ]) {
      const actual = PNG.sync.read(
        Buffer.from(previews[view.name][key].split(',')[1], 'base64'),
      );
      const source = await raster(svg, view, true);
      assert.equal(actual.width, source.width);
      assert.equal(actual.height, source.height);
      for (let offset = 0; offset < actual.data.length; offset += 4) {
        assert.deepEqual([...actual.data.subarray(offset, offset + 3)], color);
        assert.equal(actual.data[offset + 3], source.data[offset + 3]);
      }
      assert.equal(
        actual.data[3],
        0,
        'Empty space must not hide the other layer.',
      );
      assert.ok(
        actual.data.some(
          (value, offset) => offset % 4 === 3 && value > 0 && value < 255,
        ),
      );
    }
  }
});

test('HTML treats metadata as text and works without remote resources', async () => {
  const report = compareSnapshots(
    snapshot([]),
    snapshot([icon('1', '<script>alert(1)</script>')]),
  );
  report.changes[0].visualChange = 'subtle';
  const previews = [
    await compareImages(
      null,
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"/>',
    ),
  ];
  const html = renderHtml(report, previews);
  assert.ok(!html.includes('<script>alert(1)</script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  assert.ok(html.includes('data-visual="subtle"'));
  assert.ok(html.includes('visual:subtle'));
  assert.ok(!/src="https?:/.test(html));
});

test('previews reject external resources and active SVG content', async () => {
  for (const content of [
    '<image href="https://example.com/image.png"/>',
    '<use href="file:///etc/passwd#icon"/>',
    '<script>alert(1)</script>',
    '<rect onload="alert(1)"/>',
    '<rect fill="url(https://example.com/paint)"/>',
    '<animate attributeName="opacity"/>',
    '<style>@import "https://example.com/style.css";</style>',
    '<text>Local font</text>',
  ])
    await assert.rejects(
      () => raster(`<svg>${content}</svg>`, views[0]),
      /self-contained/,
    );
  const local =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="g"><stop stop-color="black"/></linearGradient></defs><rect width="16" height="16" fill="url( &quot;#g&quot; )"/></svg>';
  // A normal local definition remains supported.
  await raster(local.replace('url( &quot;#g&quot; )', 'url(#g)'), views[0]);
});
