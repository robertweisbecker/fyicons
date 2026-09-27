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

test('browse, filter, inspect, navigate, and persist selected icons', async ({
  page,
}) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Icons', exact: true }),
  ).toBeVisible();
  await expect(page.locator('.icon-tile')).toHaveCount(catalog.icons.length);
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
    .getByRole('dialog')
    .getByRole('checkbox', { name: 'Include in selection', exact: true })
    .click();
  await page.keyboard.press('Escape');
  await expect(
    page.getByRole('button', { name: 'Inspect sun', exact: true }),
  ).toBeFocused();
  await page.reload();
  await page.getByRole('combobox', { name: 'Selection filter' }).click();
  await page.getByRole('option', { name: 'Selected', exact: true }).click();
  await expect(page.locator('.icon-tile')).toHaveCount(1);
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  await page
    .getByRole('dialog')
    .getByRole('checkbox', { name: 'Include in selection', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(
    page.getByRole('heading', { name: 'No matching icons' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await page.getByRole('combobox', { name: 'Selection filter' }).click();
  await page
    .getByRole('option', { name: 'Name variants', exact: true })
    .click();
  await expect(page.locator('.icon-tile')).toHaveCount(
    catalog.icons.filter((icon) => icon.duplicate).length,
  );
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
  await page.getByRole('button', { name: 'Download', exact: true }).click();
  const archive = unzipSync(await readFile((await (await pending).path())!));
  expect(Object.keys(archive)).toHaveLength(catalog.icons.length + 2);
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
  await page
    .getByRole('dialog')
    .getByRole('checkbox', { name: 'Include in selection', exact: true })
    .focus();
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('button', { name: 'Close icon details', exact: true }),
  ).toBeFocused();
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
        const label = svg.closest('button')?.getAttribute('aria-label');
        return {
          size: label === 'Play track' || label === 'Pause track' ? 24 : 16,
          actual: [
            rect.width,
            rect.height,
            matrix.a,
            matrix.d,
            svg.getAttribute('viewBox'),
          ],
        };
      }),
    );
  expect(dimensions.length).toBeGreaterThan(30);
  for (const { size, actual } of dimensions)
    expect(actual).toEqual([size, size, size / 16, size / 16, '0 0 16 16']);
}
test('all seven React demos render and preserve meaningful interactions', async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.goto('/#examples');
  await expect(page.locator('#workbench-window')).toBeVisible();
  await nativeIcons(page);
  await page
    .getByRole('button', { name: 'Toggle terminal', exact: true })
    .click();
  await expect(page.locator('.wb-terminal')).toBeVisible();
  await page.getByRole('combobox', { name: 'Response mode' }).click();
  await page.getByRole('option', { name: 'Quick', exact: true }).click();
  await expect(
    page.getByRole('combobox', { name: 'Response mode' }),
  ).toHaveText('Quick');
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
  const liked = page.getByRole('button', {
    name: 'Like this track',
    exact: true,
  });
  await liked.focus();
  await page.keyboard.press('Space');
  await expect(liked).toHaveAttribute('aria-pressed', 'true');
  await liked.click();
  await expect(liked).toHaveAttribute('aria-pressed', 'false');
  await page
    .getByRole('button', { name: 'Previous track', exact: true })
    .click();
  await expect(
    page.getByRole('heading', { name: 'After Hours', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Next track', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'Soft Signal', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Play track', exact: true }).click();
  await expect(
    page.getByRole('button', { name: 'Pause track', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Pause track', exact: true }).click();
  await page
    .getByRole('button', { name: 'Toggle canvas grid', exact: true })
    .click();
  await expect(page.locator('.forma-canvas')).toHaveCSS(
    'background-image',
    'none',
  );
  await page.getByRole('switch', { name: 'Border', exact: true }).click();
  await expect(page.locator('.forma-object')).toHaveCSS(
    'border-top-color',
    await page
      .getByRole('slider', { name: 'Corner radius', exact: true })
      .evaluate((node) => getComputedStyle(node).color),
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

test('selection checkboxes export only selected original SVGs', async ({
  page,
}) => {
  await page.goto('/');
  await expect(
    page.getByRole('button', { name: 'Export selected 0' }),
  ).toBeDisabled();
  const search = page.getByRole('searchbox', { name: 'Search icons' });
  for (const name of ['sun', 'moon']) {
    await search.fill(name);
    const checkbox = page.getByRole('checkbox', {
      name: `Select ${name}`,
      exact: true,
    });
    await checkbox.focus();
    await page.keyboard.press('Space');
    await expect(checkbox).toBeChecked();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  }
  await search.fill('arrow');
  const pending = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export selected 2' }).click();
  const download = await pending;
  expect(download.suggestedFilename()).toBe('fyicons-selected.zip');
  const archive = unzipSync(await readFile((await download.path())!));
  expect(Object.keys(archive)).toHaveLength(4);
  for (const icon of catalog.icons.filter((icon) =>
    ['sun', 'moon'].includes(icon.name),
  )) {
    expect(strFromU8(archive[icon.file])).toBe(icon.svg);
  }
  const manifest = JSON.parse(strFromU8(archive['manifest.json']));
  expect(manifest.count).toBe(2);
  expect(manifest.duplicateGroups).toEqual({});
  expect(
    manifest.icons.map((icon: { name: string }) => icon.name).sort(),
  ).toEqual(['moon', 'sun']);
});

test('page navigation, compact header, preview sizing, and touch selection', async ({
  page,
  browser,
}) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Main' });
  await expect(page.getByRole('link', { name: 'View in Figma' })).toHaveCount(
    0,
  );
  await expect(
    page.getByRole('button', { name: 'Manifest', exact: true }),
  ).toHaveCount(0);
  const slider = page.getByRole('slider', { name: 'Preview size' });
  await slider.focus();
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('20');
  await expect(page.getByText('20px', { exact: true })).toHaveCSS(
    'font-variant-numeric',
    'tabular-nums',
  );
  await expect(page.locator('.icon-tile svg').first()).toHaveCSS(
    'width',
    '20px',
  );
  await page.keyboard.press('End');
  await expect(slider).toHaveValue('64');
  await page.keyboard.press('Home');
  await expect(slider).toHaveValue('16');
  await expect(
    page.getByRole('button', { name: 'All icons', exact: true }),
  ).toHaveCSS('font-size', '14px');
  await nav.getByRole('link', { name: 'Examples', exact: true }).click();
  await expect(page).toHaveURL(/\/examples\/$/);
  await page.reload();
  await expect(
    page.getByRole('heading', { name: 'Examples', exact: true }),
  ).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Examples' })).toHaveAttribute(
    'aria-current',
    'page',
  );
  await nativeIcons(page);
  await nav.getByRole('link', { name: 'Icons', exact: true }).click();
  await expect(page.locator('.icon-tile')).toHaveCount(catalog.icons.length);
  await page.goBack();
  await expect(
    page.getByRole('heading', { name: 'Examples', exact: true }),
  ).toBeVisible();
  await page.goForward();
  await expect(
    page.getByRole('heading', { name: 'Icons', exact: true }),
  ).toBeVisible();
  await page.locator('.icon-tile').last().scrollIntoViewIfNeeded();
  const header = await page.locator('header').boundingBox();
  expect(header?.y).toBe(0);
  expect(header?.height).toBeLessThanOrEqual(57);
  await expect(
    page.getByRole('link', { name: 'FYIcons', exact: true }),
  ).toHaveCSS('font-size', '16px');
  await page.setViewportSize({ width: 1072, height: 976 });
  await page.getByRole('link', { name: 'FYIcons', exact: true }).click();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/refined-library.png' });
  const context = await browser.newContext({
    viewport: { width: 320, height: 844 },
    hasTouch: true,
  });
  const mobile = await context.newPage();
  await mobile.goto('/');
  const root = mobile
    .getByRole('checkbox', { name: 'Select activity', exact: true })
    .locator('..');
  await expect(root).toHaveCSS('opacity', '1');
  await mobile
    .getByRole('checkbox', { name: 'Select activity', exact: true })
    .check();
  await expect(mobile.getByRole('dialog')).toHaveCount(0);
  expect(
    await mobile.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await mobile.screenshot({ path: 'test-results/refined-library-mobile.png' });
  await context.close();
});

test('Base UI demo sliders support keyboard controls and native-size icons', async ({
  page,
}) => {
  await page.goto('/examples/');
  const playback = page.getByRole('slider', { name: 'Playback position' });
  await playback.focus();
  await page.keyboard.press('Home');
  await page.keyboard.press('ArrowRight');
  await expect(playback).toHaveValue('1');
  await expect(playback).toHaveAttribute(
    'aria-valuetext',
    '0 minutes 1 seconds',
  );
  await expect(page.getByText('0:01', { exact: true })).toBeVisible();
  const volume = page.getByRole('slider', { name: 'Volume', exact: true });
  await volume.focus();
  await page.keyboard.press('End');
  await page.keyboard.press('ArrowLeft');
  await expect(volume).toHaveValue('99');
  const radius = page.getByRole('slider', {
    name: 'Corner radius',
    exact: true,
  });
  await radius.focus();
  await page.keyboard.press('End');
  await page.keyboard.press('ArrowLeft');
  await expect(radius).toHaveValue('39');
  await expect(page.locator('.forma-object')).toHaveCSS(
    'border-top-left-radius',
    '39px',
  );
  await nativeIcons(page);
  await page.setViewportSize({ width: 1072, height: 976 });
  await playback.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/refined-sliders.png' });
  await page
    .getByRole('heading', { name: 'Examples', exact: true })
    .scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/refined-examples.png' });
});

test('theme tokens resolve Tailwind colors in light and dark mode', async ({
  page,
}) => {
  await page.goto('/');
  for (const theme of ['light', 'dark']) {
    if (theme === 'dark')
      await page.getByRole('button', { name: 'Switch to dark theme' }).click();
    const colors = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return ['--bg', '--surface', '--text', '--border'].map((name) =>
        style.getPropertyValue(name).trim(),
      );
    });
    expect(
      colors.every(
        (color) =>
          ['white', 'black', '#fff', '#000'].includes(color) ||
          color.startsWith('oklch('),
      ),
    ).toBe(true);
    expect(new Set(colors).size).toBeGreaterThan(2);
  }
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('sun');
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  await page.screenshot({ path: 'test-results/refined-dark.png' });
});

test('category sidebar filters with keyboard and becomes a sheet on small screens', async ({
  page,
}) => {
  await page.goto('/');
  const category = catalog.icons.find((icon) => icon.name === 'sun')!.category;
  const sidebar = page.getByRole('complementary', { name: 'Categories' });
  await expect(sidebar).toBeVisible();
  await sidebar.getByRole('button', { name: category, exact: true }).click();
  await expect(page.locator('.icon-tile')).toHaveCount(
    catalog.icons.filter((icon) => icon.category === category).length,
  );
  await page.getByRole('button', { name: 'Inspect sun', exact: true }).click();
  const selectedId = await page
    .locator('.preview-canvas svg')
    .getAttribute('data-source-id');
  const all = sidebar.getByRole('button', { name: 'All icons', exact: true });
  await all.focus();
  await page.keyboard.press('ArrowDown');
  await expect(all).not.toBeFocused();
  await expect(page.locator('.preview-canvas svg')).toHaveAttribute(
    'data-source-id',
    selectedId!,
  );
  await page.keyboard.press('Enter');
  await expect(sidebar.locator('[data-pressed]')).toHaveCount(1);
  await page.getByRole('button', { name: 'Close icon details' }).click();
  await page.setViewportSize({ width: 390, height: 720 });
  await expect(sidebar).toBeHidden();
  await page
    .locator('#library')
    .getByRole('button', { expanded: false })
    .click();
  const drawer = page.getByRole('dialog', { name: 'Categories' });
  await expect(drawer).toBeVisible();
  await drawer.getByRole('button', { name: category, exact: true }).click();
  await expect(drawer).toHaveCount(0);
  await expect(page.locator('.icon-tile')).toHaveCount(
    catalog.icons.filter((icon) => icon.category === category).length,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test('inspector keeps pagination at the bottom and shows concise variant choices', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('scissors');
  await page.locator('.icon-tile').first().click();
  const dialog = page.getByRole('dialog');
  await page.screenshot({ path: 'test-results/sidebar-and-inspector.png' });
  await expect(dialog.getByText('Figma name', { exact: true })).toHaveCount(0);
  await expect(
    dialog.getByRole('group', { name: 'Icon variants' }),
  ).toBeVisible();
  const variant = dialog
    .getByRole('button', { name: /^Compare variant / })
    .nth(1);
  const id = (await variant.getAttribute('aria-label'))!.replace(
    'Compare variant ',
    '',
  );
  await variant.click();
  await expect(dialog.locator('.preview-canvas svg')).toHaveAttribute(
    'data-source-id',
    id,
  );
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 640 });
    const footer = await dialog.locator('footer').boundingBox();
    expect(footer!.y + footer!.height).toBe(640);
    await expect(
      dialog.getByRole('button', { name: 'Next icon' }),
    ).toBeVisible();
  }
  await page.screenshot({ path: 'test-results/refined-inspector.png' });
});

test('inspector floats without moving the grid and can dock without losing the visible row', async ({
  page,
}) => {
  await page.goto('/');
  const tile = page.locator('.icon-tile').nth(160);
  await tile.evaluate((node) => node.scrollIntoView({ block: 'center' }));
  const originalTile = await tile.boundingBox();
  const originalGrid = await page.locator('.icon-grid').boundingBox();
  const originalScroll = await page.evaluate(() => scrollY);
  await tile.click();
  const dialog = page.getByRole('dialog');
  const dock = dialog.getByRole('button', {
    name: 'Dock inspector',
    exact: true,
  });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveCSS('position', 'fixed');
  await expect(dock).toHaveAttribute('aria-pressed', 'false');
  expect(await page.evaluate(() => scrollY)).toBe(originalScroll);
  expect(await tile.boundingBox()).toEqual(originalTile);
  expect(await page.locator('.icon-grid').boundingBox()).toEqual(originalGrid);
  await page.screenshot({ path: 'test-results/inspector-floating.png' });
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(tile).toBeFocused();
  expect(await page.evaluate(() => scrollY)).toBe(originalScroll);
  await page.keyboard.press('Enter');
  await expect(dialog).toBeVisible();
  expect(await tile.boundingBox()).toEqual(originalTile);

  const visibleAnchor = () =>
    page.locator('.icon-tile').evaluateAll((tiles) => {
      const headerBottom = document
        .querySelector('header')!
        .getBoundingClientRect().bottom;
      const isVisible = (tile: Element) => {
        const rect = tile.getBoundingClientRect();
        return rect.top >= headerBottom && rect.bottom <= innerHeight;
      };
      const preferred = tiles.find((tile) =>
        tile.matches('[aria-pressed="true"], :focus'),
      );
      const tile =
        preferred && isVisible(preferred) ? preferred : tiles.find(isVisible)!;
      return {
        id: tile.getAttribute('data-id'),
        top: tile.getBoundingClientRect().top,
      };
    });
  const expectAnchor = async (anchor: { id: string | null; top: number }) => {
    await expect
      .poll(
        async () =>
          (await page
            .locator('.icon-tile[data-id="' + anchor.id + '"]')
            .boundingBox())!.y,
      )
      .toBe(anchor.top);
  };
  const beforeDock = await visibleAnchor();
  await dock.click();
  await expect(dock).toHaveAttribute('aria-pressed', 'true');
  await expect(dock).toBeFocused();
  await expect(dialog).toHaveCSS('position', 'relative');
  await expectAnchor(beforeDock);
  const dockedGrid = await page.locator('.icon-grid').boundingBox();
  const dockedPanel = await dialog.boundingBox();
  expect(dockedGrid!.width).toBeLessThan(originalGrid!.width);
  expect(dockedGrid!.x + dockedGrid!.width).toBeLessThanOrEqual(dockedPanel!.x);
  expect(dockedPanel!.y).toBe(56);
  await page.screenshot({ path: 'test-results/inspector-docked.png' });
  const beforeUndock = await visibleAnchor();
  await dock.press('Space');
  await expect(dock).toHaveAttribute('aria-pressed', 'false');
  await expect(dialog).toHaveCSS('position', 'fixed');
  await expectAnchor(beforeUndock);
  expect((await page.locator('.icon-grid').boundingBox())!.width).toBe(
    originalGrid!.width,
  );

  await dock.click();
  const beforeClose = await visibleAnchor();
  await dialog.getByRole('button', { name: 'Close icon details' }).click();
  await expect(dialog).toHaveCount(0);
  await expectAnchor(beforeClose);
  await expect(tile).toBeFocused();
  const beforeReopen = await visibleAnchor();
  await page.keyboard.press('Enter');
  await expect(dialog).toHaveCSS('position', 'relative');
  await expectAnchor(beforeReopen);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(dialog).toHaveCSS('position', 'fixed');
  await expect(dock).toHaveCount(0);
  expect((await dialog.boundingBox())!.width).toBe(390);
  await dialog.getByRole('button', { name: 'Close icon details' }).focus();
  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('button', { name: 'Next icon' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(tile).toBeFocused();
});

test('toggle icons follow pressed state and inherited demo colors', async ({
  page,
}) => {
  await page.goto('/examples/');
  for (const [label, off, on] of [
    ['Like this track', 'heart', 'heart-filled'],
    ['Bookmark this document', 'bookmark', 'bookmark-fill'],
    ['Toggle quote', 'quote-outline', 'quote-default'],
  ]) {
    const control = page.getByRole('button', { name: label, exact: true });
    await expect(control.locator('svg:visible')).toHaveAttribute(
      'data-source-id',
      catalog.icons.find((icon) => icon.name === off)!.id,
    );
    await control.click();
    await expect(control).toHaveAttribute('aria-pressed', 'true');
    await expect(control.locator('svg:visible')).toHaveAttribute(
      'data-source-id',
      catalog.icons.find((icon) => icon.name === on)!.id,
    );
    const colors = await control.evaluate((node) => {
      const style = getComputedStyle(node);
      const reference = document.createElement('span');
      reference.style.backgroundColor = `color-mix(in oklab, ${style.color} 20%, transparent)`;
      node.appendChild(reference);
      const expected = getComputedStyle(reference).backgroundColor;
      reference.remove();
      return { actual: style.backgroundColor, expected };
    });
    expect(colors.actual).toBe(colors.expected); // Hovered, pressed state: currentColor at 20%.
  }
  await page.locator('.demo-card').last().scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/refined-toggle-demos.png' });
  await page.getByRole('tab', { name: 'Post', exact: true }).click();
  const favorite = page.getByRole('button', {
    name: 'Favorite message',
    exact: true,
  });
  await favorite.click();
  await expect(favorite.locator('svg:visible')).toHaveAttribute(
    'data-source-id',
    catalog.icons.find((icon) => icon.name === 'heart-filled')!.id,
  );
});

test('volume glyphs and both switch sizes follow their values with reduced-motion support', async ({
  page,
}) => {
  await page.goto('/examples/');
  const volume = page.getByRole('slider', { name: 'Volume', exact: true });
  await volume.focus();
  for (const [keys, name, value] of [
    [['Home'], 'volume-slash', '0'],
    [['ArrowRight'], 'volume-low', '1'],
    [['PageUp', 'PageUp', 'PageUp', 'PageUp'], 'volume-med', '41'],
    [['End'], 'volume-high', '100'],
  ] as const) {
    for (const key of keys) await page.keyboard.press(key);
    await expect(volume).toHaveValue(value);
    await expect(
      page.locator(
        `span[aria-label="${value === '0' ? 'Muted' : `Volume ${value}%`}"] svg`,
      ),
    ).toHaveAttribute(
      'data-source-id',
      catalog.icons.find((item) => item.name === name)!.id,
    );
  }
  const small = page.getByRole('switch', { name: 'Border', exact: true });
  await expect(small).toHaveAttribute('data-size', 'sm');
  await expect(small).toHaveCSS('width', '28px');
  const smallThumb = small.locator('[data-slot=switch-thumb]');
  await expect(smallThumb).toHaveCSS('transition-duration', '0.2s');
  await small.focus();
  await page.keyboard.press('Space');
  await expect(small).toBeChecked();
  await expect(smallThumb).toHaveCSS('translate', '12px');
  await page.getByRole('tab', { name: 'Preferences', exact: true }).click();
  const standard = page.getByRole('switch', {
    name: 'Reduce motion',
    exact: true,
  });
  await expect(standard).toHaveCSS('width', '36px');
  await page.getByText('Reduce motion', { exact: true }).click();
  await expect(standard).toBeChecked();
  await expect(standard).toHaveAccessibleDescription(
    'Use fewer animations throughout the app.',
  );
  await expect(standard.locator('[data-slot=switch-thumb]')).toHaveCSS(
    'translate',
    '16px',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(standard.locator('[data-slot=switch-thumb]')).toHaveCSS(
    'transition-duration',
    '0s',
  );
});

test('touch design controls do not overlap the canvas object', async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 320, height: 844 },
    hasTouch: true,
  });
  const page = await context.newPage();
  try {
    await page.goto('/examples/');
    const tools = page.getByRole('group', {
      name: 'Design tools',
      exact: true,
    });
    await tools.scrollIntoViewIfNeeded();
    const toolbar = await tools.boundingBox();
    const object = await page.locator('.forma-object').boundingBox();
    expect(toolbar!.y + toolbar!.height).toBeLessThanOrEqual(object!.y);
    await page.getByRole('switch', { name: 'Border', exact: true }).click();
    await expect(
      page.getByRole('switch', { name: 'Border', exact: true }),
    ).toBeChecked();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({ path: 'test-results/touch-design-controls.png' });
  } finally {
    await context.close();
  }
});

test('inspector usage follows the current component and copies JSX or original SVG', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search icons' }).fill('scissors');
  await page.locator('.icon-tile').first().click();
  const dialog = page.locator('#inspector');
  const usage = dialog.getByRole('region', { name: 'React usage' });
  const currentIcon = async () => {
    const id = await dialog
      .locator('.preview-canvas svg')
      .getAttribute('data-source-id');
    return catalog.icons.find((icon) => icon.id === id)!;
  };
  const checkUsage = async () => {
    const item = await currentIcon();
    const snippet = `import {\n  ${item.componentName},\n} from '@/icons';\n\n<${item.componentName} size={16} />`;
    await expect(usage.locator('code')).toHaveText(snippet);
    await dialog.getByRole('button', { name: 'Copy JSX', exact: true }).click();
    expect(await page.evaluate(() => (window as any).__copied)).toBe(snippet);
    return item;
  };
  const first = await checkUsage();
  await usage.focus();
  await page.keyboard.press('ArrowRight');
  expect((await currentIcon()).id).toBe(first.id);
  await dialog.getByRole('button', { name: 'Next icon', exact: true }).click();
  expect((await checkUsage()).id).not.toBe(first.id);
  await dialog
    .getByRole('button', { name: /^Compare variant / })
    .last()
    .click();
  const variant = await checkUsage();
  await dialog.getByRole('button', { name: 'Copy SVG', exact: true }).click();
  expect(await page.evaluate(() => (window as any).__copied)).toBe(variant.svg);
  const pending = page.waitForEvent('download');
  await dialog
    .getByRole('button', { name: 'Download SVG', exact: true })
    .click();
  const svg = await pending;
  expect(svg.suggestedFilename()).toBe(variant.filename);
  expect(await readFile((await svg.path())!, 'utf8')).toBe(variant.svg);
  await page.screenshot({ path: 'test-results/inspector-usage-desktop.png' });

  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 740 });
    await checkUsage();
    await expect(
      dialog.getByRole('button', { name: 'Download SVG', exact: true }),
    ).toBeVisible();
    expect(
      await dialog.evaluate((node) => node.scrollWidth <= node.clientWidth),
    ).toBe(true);
    const bounds = await usage.boundingBox();
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
  }
  await page.screenshot({ path: 'test-results/inspector-usage-mobile.png' });
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error('Clipboard denied');
    };
  });
  await dialog.getByRole('button', { name: 'Copy JSX', exact: true }).click();
  await expect(
    page.getByText('Clipboard unavailable. Select and copy the code.', {
      exact: true,
    }),
  ).toBeVisible();
  await usage.focus();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});
