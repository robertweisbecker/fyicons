import test from 'node:test';
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
  compareImages,
  raster,
  views,
} from '../../scripts/lib/icon-diff-images.mjs';
import { renderHtml } from '../../scripts/lib/icon-diff-html.mjs';
import { PNG } from 'pngjs';
import { JSDOM } from 'jsdom';

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
test('byte-only edits do not cause pixel changes; masks and gradients render', () => {
  const source =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><linearGradient id="g"><stop stop-color="red"/><stop offset="1" stop-color="blue"/></linearGradient><mask id="m"><rect width="16" height="16" fill="white"/><circle cx="8" cy="8" r="2" fill="black"/></mask></defs><rect width="16" height="16" fill="url(#g)" mask="url(#m)" opacity=".5"/></svg>';
  const same = compareImages(source, source.replace('><defs>', '>\n<defs>'));
  assert.ok(Object.values(same).every((view) => view.changedPixels === 0));
  assert.ok(
    Object.values(same).every(
      (view) =>
        view.diff === null &&
        view.overlayBefore === null &&
        view.overlayAfter === null,
    ),
  );
  const changed = compareImages(source, source.replace('r="2"', 'r="4"'));
  assert.ok(Object.values(changed).every((view) => view.changedPixels > 0));
  assert.throws(
    () =>
      compareImages(source, '<svg><image href="file:///etc/passwd"/></svg>'),
    /self-contained/,
  );
});

const rectangle = (x) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect x="${x}" y="4" width="6" height="8" fill="currentColor" opacity=".5"/></svg>`;

test('source foreground paint uses the preview theme without hiding geometry changes', () => {
  const source = rectangle(2).replace('currentColor', 'black');
  const same = compareImages(source, rectangle(2));
  assert.ok(Object.values(same).every((view) => view.changedPixels === 0));
  const changed = compareImages(
    source,
    rectangle(4).replace('currentColor', 'black'),
  );
  assert.ok(Object.values(changed).every((view) => view.changedPixels > 0));
  const dark = raster(
    source,
    views.find((view) => view.name === 'dark-16'),
  );
  assert.ok(
    dark.data[(5 * 16 + 3) * 4] > 23,
    'The icon must be visible on a dark background.',
  );
});

test('added and removed icons have no fabricated image or pixel comparison', () => {
  for (const [before, after] of [
    [null, rectangle(2)],
    [rectangle(2), null],
  ]) {
    const previews = compareImages(before, after);
    for (const image of Object.values(previews)) {
      assert.equal(image.changedPixels, null);
      assert.equal(image.diff, null);
      assert.equal(image.overlayBefore, null);
      assert.equal(image.overlayAfter, null);
      assert.equal(image.before === null, before === null);
      assert.equal(image.after === null, after === null);
    }
  }
});

test('pink and blue overlay layers preserve source transparency and pixel alignment', () => {
  const before = rectangle(2),
    after = rectangle(4);
  const previews = compareImages(before, after);
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
      const source = raster(svg, view, true);
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

test('comparison table distinguishes missing and unchanged artwork and keeps controls independent', () => {
  const before = [
    icon('1', 'Changed'),
    icon('2', 'Removed'),
    icon('3', 'OldName'),
  ];
  const after = [
    icon('1', 'Changed', { sha256: 'new' }),
    icon('3', 'NewName'),
    icon('4', 'Added'),
  ];
  const report = compareSnapshots(snapshot(before), snapshot(after));
  const previews = report.changes.map((change) =>
    compareImages(
      change.before ? rectangle(2) : null,
      change.after ? rectangle(change.after.id === '1' ? 4 : 2) : null,
    ),
  );
  const dom = new JSDOM(renderHtml(report, previews), {
    runScripts: 'dangerously',
  });
  try {
    const { document, Event } = dom.window;
    const rows = [...document.querySelectorAll('tbody tr')];
    assert.equal(rows.length, 4);
    const sourceViews = [
      ...rows[0].querySelector('.source').querySelectorAll('.view'),
    ];
    const shownSizes = () =>
      sourceViews
        .filter((view) => dom.window.getComputedStyle(view).display !== 'none')
        .map((view) => view.dataset.view);
    assert.equal(document.getElementById('size').value, 'both');
    assert.deepEqual(shownSizes(), ['light-16', 'light-64']);
    assert.deepEqual(
      sourceViews
        .filter((view) => dom.window.getComputedStyle(view).display !== 'none')
        .map((view) => view.querySelector('.render-label').textContent),
      ['16 px', '64 px'],
    );
    assert.deepEqual(
      [...document.querySelectorAll('thead th')].map(
        (cell) => cell.textContent,
      ),
      ['Icon', 'Before', 'After', 'Changes'],
    );
    const added = rows.find((row) => row.dataset.flags.includes('added'));
    const removed = rows.find((row) => row.dataset.flags.includes('removed'));
    assert.equal(
      added.querySelectorAll('.source')[0].querySelector('img'),
      null,
    );
    assert.equal(
      removed.querySelectorAll('.source')[1].querySelector('img'),
      null,
    );
    for (const row of [added, removed])
      assert.equal(row.querySelector('.comparison img'), null);
    assert.match(added.querySelector('.comparison').textContent, /New icon/);
    assert.match(
      removed.querySelector('.comparison').textContent,
      /Icon removed/,
    );
    const renamed = rows.find((row) => row.dataset.flags.includes('renamed'));
    assert.equal(renamed.querySelector('.comparison img'), null);
    assert.match(
      renamed.querySelector('.comparison').textContent,
      /No pixel change/,
    );
    const change = (id, value, event = 'change') => {
      const control = document.getElementById(id);
      control.value = value;
      control.dispatchEvent(new Event(event, { bubbles: true }));
    };
    change('search', 'nomatch', 'input');
    assert.ok(rows.every((row) => row.hidden));
    assert.equal(document.getElementById('empty').hidden, false);
    change('search', '', 'input');
    change('filter', 'added');
    assert.deepEqual(
      rows.filter((row) => !row.hidden),
      [added],
    );
    change('filter', '');
    assert.equal(document.getElementById('count').textContent, '4 icons shown');
    change('theme', 'dark');
    assert.deepEqual(shownSizes(), ['dark-16', 'dark-64']);
    change('size', '16');
    change('zoom', '4');
    assert.equal(document.body.dataset.view, 'dark-16');
    assert.equal(
      document.documentElement.style.getPropertyValue('--render-size'),
      '16px',
    );
    assert.equal(
      document.documentElement.style.getPropertyValue('--zoom'),
      '4',
    );
    const active = rows[0].querySelector('.view[data-view="dark-16"]');
    assert.equal(dom.window.getComputedStyle(active).display, 'block');
    assert.deepEqual(shownSizes(), ['dark-16']);
    change('size', '64');
    assert.deepEqual(shownSizes(), ['dark-64']);
    change('size', 'both');
    assert.deepEqual(shownSizes(), ['dark-16', 'dark-64']);
    assert.equal(
      document.documentElement.style.getPropertyValue('--render-size'),
      '64px',
    );
    change('before-opacity', '0', 'input');
    change('after-opacity', '75', 'input');
    assert.equal(
      document.documentElement.style.getPropertyValue('--old-opacity'),
      '0',
    );
    assert.equal(
      document.documentElement.style.getPropertyValue('--new-opacity'),
      '0.75',
    );
    assert.equal(
      document.getElementById('after-opacity').getAttribute('aria-valuetext'),
      '75%',
    );
    assert.equal(
      document.querySelector('output[for="after-opacity"]').value,
      '75%',
    );
  } finally {
    dom.window.close();
  }
});
test('HTML treats metadata as text and works without remote resources', () => {
  const report = compareSnapshots(
    snapshot([]),
    snapshot([icon('1', '<script>alert(1)</script>')]),
  );
  const previews = [
    compareImages(
      null,
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"/>',
    ),
  ];
  const html = renderHtml(report, previews);
  assert.ok(!html.includes('<script>alert(1)</script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  assert.ok(!/src="https?:/.test(html));
});
