import { test, expect, type Page } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { unzipSync, strFromU8 } from 'fflate';
import catalog from '../src/data/catalog.json' with { type: 'json' };

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() =>
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async (value: string) => {
          (window as any).__copied = value;
        },
      },
    }),
  );
  (page as any).__errors = errors;
});
test.afterEach(async ({ page }) => {
  expect((page as any).__errors).toEqual([]);
});

test('browse, filter, inspect, navigate, and persist a shortlist', async ({
  page,
}) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Icons', exact: true }),
  ).toBeVisible();
  await expect(page.locator('.icon-tile')).toHaveCount(561);
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('arrow');
  const tiles = page.locator('.icon-tile');
  const ids = await tiles.evaluateAll((nodes) =>
    nodes.map((node) => (node as HTMLElement).dataset.id),
  );
  await tiles.first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Previous icon', exact: true }),
  ).toBeDisabled();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#inspector .preview-canvas svg')).toHaveAttribute(
    'data-source-id',
    ids[1]!,
  );
  await page.getByRole('button', { name: 'Next icon', exact: true }).click();
  await expect(page.locator('#inspector .preview-canvas svg')).toHaveAttribute(
    'data-source-id',
    ids[2]!,
  );
  const search = page.getByRole('searchbox', { name: 'Search icons' });
  await search.focus();
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#inspector .preview-canvas svg')).toHaveAttribute(
    'data-source-id',
    ids[2]!,
  );
  await search.fill('sun');
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  await page
    .getByRole('button', { name: 'Add to shortlist', exact: true })
    .click();
  await page.keyboard.press('Escape');
  await expect(
    page.getByRole('button', { name: 'Inspect sun', exact: true }),
  ).toBeFocused();
  await page.reload();
  await page.getByRole('combobox', { name: 'Review filter' }).click();
  await page.getByRole('option', { name: 'Shortlist', exact: true }).click();
  await expect(page.locator('.icon-tile')).toHaveCount(1);
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  await page
    .getByRole('button', { name: 'Remove from shortlist', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(
    page.getByRole('heading', { name: 'No matching icons' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await page.getByRole('combobox', { name: 'Review filter' }).click();
  await page
    .getByRole('option', { name: 'Name variants', exact: true })
    .click();
  await expect(page.locator('.icon-tile')).toHaveCount(26);
});

test('original SVG copy, download and full ZIP have identical bytes', async ({
  page,
}) => {
  await page.goto('/');
  const sun = catalog.icons.find((icon) => icon.name === 'sun')!;
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('sun');
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  await page.getByRole('button', { name: 'Copy SVG', exact: true }).click();
  expect(await page.evaluate(() => (window as any).__copied)).toBe(sun.svg);
  let pending = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download SVG', exact: true }).click();
  const svg = await pending;
  expect(svg.suggestedFilename()).toBe(sun.filename);
  expect(await readFile((await svg.path())!, 'utf8')).toBe(sun.svg);
  pending = page.waitForEvent('download');
  await page
    .getByRole('button', { name: 'Download SVGs', exact: true })
    .click();
  const archive = unzipSync(await readFile((await (await pending).path())!));
  expect(Object.keys(archive)).toHaveLength(563);
  for (const icon of catalog.icons) {
    expect(strFromU8(archive[icon.file])).toBe(icon.svg);
    expect(createHash('sha256').update(archive[icon.file]).digest('hex')).toBe(
      icon.sha256,
    );
  }
});

test('grid is aligned and keyboard accessible on desktop and mobile', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('activity');
  await page
    .getByRole('button', { name: 'Inspect activity', exact: true })
    .click();
  for (const width of [1440, 1000, 390]) {
    await page.setViewportSize({ width, height: 960 });
    const geometry = await page
      .locator('.preview-canvas')
      .evaluate((canvas) => {
        const rect = canvas.getBoundingClientRect(),
          svg = canvas.querySelector('svg')!.getBoundingClientRect();
        const grid = getComputedStyle(canvas, '::before'),
          bounds = getComputedStyle(canvas, '::after');
        return [
          rect.width,
          rect.height,
          svg.x - rect.x,
          svg.y - rect.y,
          svg.width,
          parseFloat(grid.left) % 8,
          parseFloat(grid.top) % 8,
          bounds.outlineWidth,
        ];
      });
    expect(geometry).toEqual([128, 128, 0, 0, 128, -0, -0, '1px']);
  }
  const toggle = page.getByRole('button', {
    name: 'Grid and bounds',
    exact: true,
  });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  expect(
    await page
      .locator('.preview-canvas')
      .evaluate((node) => getComputedStyle(node, '::before').display),
  ).toBe('none');
  await page.keyboard.press('Space');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('link', { name: 'Open component in Figma' }).focus();
  await page.keyboard.press('Tab');
  expect(
    await page.evaluate(() => !!document.activeElement?.closest('#inspector')),
  ).toBe(true);
  await page.screenshot({ path: 'test-results/inspector-mobile.png' });
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

async function nativeIcons(page: Page) {
  const dimensions = await page
    .locator('#examples svg.icon:visible')
    .evaluateAll((nodes) =>
      nodes.map((node) => {
        const svg = node as SVGSVGElement,
          rect = svg.getBoundingClientRect(),
          matrix = svg.getScreenCTM()!;
        return [
          rect.width,
          rect.height,
          matrix.a,
          matrix.d,
          svg.getAttribute('viewBox'),
        ];
      }),
    );
  expect(dimensions.length).toBeGreaterThan(30);
  for (const item of dimensions)
    expect(item).toEqual([16, 16, 1, 1, '0 0 16 16']);
}
test('all seven React demos render and preserve meaningful interactions', async ({
  page,
}) => {
  await page.goto('/#examples');
  await expect(page.locator('#workbench-window')).toBeVisible();
  await nativeIcons(page);
  await page
    .getByRole('button', { name: 'Toggle terminal', exact: true })
    .click();
  await expect(page.locator('.wb-terminal')).toBeVisible();
  await page.getByRole('tab', { name: 'command-menu.css' }).click();
  await expect(page.locator('.code-preview')).toContainText('--row-height');
  await page
    .getByRole('button', { name: 'Accept changes', exact: true })
    .click();
  await expect(
    page.getByRole('button', { name: 'Changes accepted', exact: true }),
  ).toBeDisabled();
  await page
    .getByRole('textbox', { name: 'Follow-up message' })
    .fill('Check keyboard focus.');
  await page
    .getByRole('textbox', { name: 'Follow-up message' })
    .press('Control+Enter');
  await expect(page.locator('#workbench-window')).toContainText(
    'Check keyboard focus.',
  );
  await page
    .locator('#workbench-window')
    .screenshot({ path: 'test-results/workbench.png' });
  await page.getByRole('tab', { name: 'Post', exact: true }).click();
  await nativeIcons(page);
  await page.getByRole('textbox', { name: 'Search mail' }).fill('Morgan');
  await expect(page.locator('.mail-row')).toHaveCount(1);
  await page.getByRole('button', { name: 'Reply', exact: true }).click();
  await page
    .getByRole('textbox', { name: 'Message text', exact: true })
    .fill('Thanks for the notes.');
  await page
    .getByRole('textbox', { name: 'Message text', exact: true })
    .press('Control+Enter');
  await expect(page.locator('.mail-feedback')).toContainText(
    'No email was sent.',
  );
  await page.getByRole('textbox', { name: 'Search mail' }).fill('');
  await page
    .locator('#post-window')
    .screenshot({ path: 'test-results/post.png' });
  await page.getByRole('tab', { name: 'Preferences', exact: true }).click();
  await page
    .getByRole('button', { name: 'Dark appearance', exact: true })
    .click();
  await expect(page.locator('#preferences-window')).toHaveClass(
    /appearance-dark/,
  );
  await page
    .getByRole('button', { name: 'Purple accent', exact: true })
    .click();
  await page
    .getByRole('switch', { name: 'Increase contrast', exact: true })
    .click();
  await expect(page.locator('#preferences-window')).toHaveClass(
    /high-contrast/,
  );
  await page
    .getByRole('button', { name: 'Light appearance', exact: true })
    .click();
  await page
    .getByRole('switch', { name: 'Increase contrast', exact: true })
    .click();
  await page
    .locator('#preferences-window')
    .screenshot({ path: 'test-results/preferences.png' });
  await page.getByRole('textbox', { name: 'Search preferences' }).fill('zzzz');
  await expect(page.getByText('No matching preferences.')).toBeVisible();
  await page.getByRole('textbox', { name: 'Search preferences' }).fill('');
  await page.getByRole('button', { name: 'Run task', exact: true }).click();
  await expect(
    page.getByText(
      'Task complete. Three navigation changes are ready for review.',
    ),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Bold', exact: true }).click();
  await expect(
    page.getByRole('textbox', { name: 'Document text', exact: true }),
  ).toHaveCSS('font-weight', '700');
  await page.getByRole('button', { name: 'Play track', exact: true }).click();
  await expect(
    page.getByRole('button', { name: 'Pause track', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Pause track', exact: true }).click();
  await page
    .getByRole('button', { name: 'Toggle canvas grid', exact: true })
    .click();
  await expect(page.locator('.forma-canvas')).toHaveClass(/no-grid/);
  await page.getByRole('switch', { name: 'Card border', exact: true }).click();
  await expect(page.locator('.forma-object')).toHaveCSS(
    'border-top-color',
    'rgb(134, 98, 189)',
  );
  await page.setViewportSize({ width: 390, height: 844 });
  for (const name of ['Workbench', 'Post', 'Preferences']) {
    await page.getByRole('tab', { name, exact: true }).click();
    await nativeIcons(page);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.screenshot({ path: 'test-results/examples-mobile.png' });
});
