import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(root, process.argv[2] ?? 'artifacts/icon-diff');
const report = JSON.parse(
  await readFile(path.join(output, 'changes.json'), 'utf8'),
);
const browser = await chromium.launch();
const errors = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await mkdir(path.join(root, 'artifacts/screenshots'), { recursive: true });
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(pathToFileURL(path.join(output, 'index.html')).href);
    await page.waitForFunction(() =>
      [...document.images].every((image) => image.complete),
    );
    assert.equal(await page.locator('tbody tr').count(), report.changes.length);
    assert.deepEqual(await page.locator('thead th').allTextContents(), [
      'Icon',
      'Before',
      'After',
      'Changes',
    ]);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `No overflow at ${width}px`,
    );
    assert.equal(
      await page.evaluate(() =>
        [...document.images].every((image) => image.naturalWidth > 0),
      ),
      true,
    );
    await page.getByLabel('Search', { exact: true }).focus();
    await page.keyboard.type('no-matching-icon-xyz');
    assert.equal(await page.locator('tbody tr:visible').count(), 0);
    assert.equal(await page.getByRole('status').textContent(), '0 icons shown');
    await page.getByLabel('Search', { exact: true }).fill('');
    await page.keyboard.press('Tab');
    assert.equal(
      await page
        .locator('#filter')
        .evaluate((node) => node === document.activeElement),
      true,
    );
    if (report.changes.length) {
      assert.equal(
        await page.getByLabel('Render size', { exact: true }).inputValue(),
        'both',
      );
      const sourceViews = page
        .locator('.source:has(img)')
        .first()
        .locator('.view:visible');
      assert.equal(await sourceViews.count(), 2);
      for (const [index, size] of [16, 64].entries()) {
        const canvas = sourceViews.nth(index).locator('.canvas');
        assert.equal((await canvas.boundingBox()).width, size * 2);
        assert.equal(
          await canvas.locator('img').evaluate((node) => node.naturalWidth),
          size,
        );
      }
      const flag = report.changes[0].flags[0];
      await page.getByLabel('Change', { exact: true }).selectOption(flag);
      assert.equal(
        await page.locator('tbody tr:visible').count(),
        report.changes.filter((change) => change.flags.includes(flag)).length,
      );
      await page.getByLabel('Change', { exact: true }).selectOption('');
      await page.getByLabel('Background', { exact: true }).selectOption('dark');
      assert.equal(
        await page.locator('.view[data-view^="light"]:visible').count(),
        0,
      );
      await page
        .getByLabel('Background', { exact: true })
        .selectOption('light');
      await page.getByLabel('Render size', { exact: true }).selectOption('16');
      await page.getByLabel('Zoom', { exact: true }).selectOption('4');
      const canvas = page.locator('.canvas:visible').first();
      assert.equal((await canvas.boundingBox()).width, 64);
      assert.equal(
        await canvas
          .locator('img')
          .first()
          .evaluate((node) => node.naturalWidth),
        16,
      );
      for (const [index, change] of report.changes.entries()) {
        if (change.before && change.after) continue;
        const row = page.locator('tbody tr').nth(index);
        assert.ok(!change.flags.includes('pixels-changed'));
        assert.equal(change.pixels, null);
        assert.equal(await row.locator('.comparison img').count(), 0);
        assert.equal(
          await row
            .locator('.source')
            .nth(change.before ? 1 : 0)
            .locator('img')
            .count(),
          0,
        );
      }
      await page.getByLabel('Before opacity', { exact: true }).fill('25');
      await page.getByLabel('After opacity', { exact: true }).fill('75');
      await page
        .getByLabel('After opacity', { exact: true })
        .press('ArrowLeft');
      if (await page.locator('.overlay:visible').count()) {
        for (const [layer, opacity] of [
          ['old-layer', '0.25'],
          ['new-layer', '0.74'],
        ])
          assert.equal(
            await page
              .locator(`.overlay:visible .${layer}`)
              .first()
              .evaluate((node) => getComputedStyle(node).opacity),
            opacity,
          );
      }
    }
    await page.getByLabel('Render size', { exact: true }).selectOption('64');
    await page.getByLabel('Zoom', { exact: true }).selectOption('8');
    const table = page.getByRole('region', { name: 'Icon comparison table' });
    assert.equal(
      await table.evaluate((node) => node.scrollWidth > node.clientWidth),
      true,
    );
    await table.focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForFunction(
      () => document.querySelector('.table-scroll').scrollLeft > 0,
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Zoom scrolls the table, not the page, at ${width}px`,
    );
    await page.getByLabel('Zoom', { exact: true }).selectOption('2');
    await page.getByLabel('Render size', { exact: true }).selectOption('both');
    await page.getByLabel('Before opacity', { exact: true }).fill('50');
    await page.getByLabel('After opacity', { exact: true }).fill('50');
    await table.evaluate((node) => {
      node.scrollTop = 0;
      node.scrollLeft = 0;
    });
    await page.screenshot({
      path: path.join(
        root,
        `artifacts/screenshots/${path.basename(output)}-${width}.png`,
      ),
    });
  }
  assert.deepEqual(errors, []);
  console.log(
    'Icon preview passed at 320, 768, and 1440 px: table scrolling, images, keyboard, filters, overlay controls, missing icons, no page overflow, and no browser errors.',
  );
} finally {
  await browser.close();
}
