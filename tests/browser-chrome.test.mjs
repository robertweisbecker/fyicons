import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { act } from 'react';
import { mountApp } from './helpers/app-readiness-harness.mjs';

const source = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), 'utf8');

// These are source contracts, not a simulation of iOS Safari's browser chrome.
// Keep the real-device checks in docs/safari-browser-chrome.md as the final gate.
test('every entry point extends into safe areas and has a matching light tint', async () => {
  for (const path of [
    'index.html',
    'library/index.html',
    'examples/index.html',
  ]) {
    const html = await source(path);
    assert.match(html, /name="viewport"\s+content="[^"]*viewport-fit=cover"/);
    assert.match(html, /name="theme-color" content="#f5f5f5"/);
  }
});

test('the top sample is opaque and the header reserves the top safe area', async () => {
  const css = await source('src/styles.css');
  const header = await source('src/components/SiteHeader.tsx');
  const app = await source('src/App.tsx');
  assert.match(css, /html\s*\{[^}]*background-color: var\(--canvas\)/);
  assert.match(
    css,
    /--site-header-height: calc\(3\.5rem \+ env\(safe-area-inset-top\)\)/,
  );
  assert.match(header, /fixed inset-x-0 top-0[^']*\bbg-canvas\b/);
  assert.match(header, /pt-\[env\(safe-area-inset-top\)\]/);
  assert.doesNotMatch(header, /bg-canvas\/|backdrop-(?:blur|filter)/);
  assert.match(app, /pt-\(--site-header-height\)/);
});

test('the bottom sampler uses the page color independently of the floating drawer', async () => {
  const css = await source('src/styles.css');
  const edge = css.match(/body::after\s*\{([^}]+)\}/)?.[1];
  assert.ok(edge, 'The bottom sample belongs to the untransformed body.');
  assert.match(css, /@media \(width < 768px\)\s*\{[^{}]*body::after/);
  assert.match(edge, /position: fixed/);
  assert.match(edge, /inset: auto 0 0/);
  assert.match(edge, /height: max\(12px, env\(safe-area-inset-bottom\)\)/);
  assert.match(edge, /background-color: var\(--bg\)/);
  assert.match(edge, /pointer-events: none/);
  assert.match(edge, /z-index: 40/);
  assert.doesNotMatch(edge, /(?:backdrop-)?filter:|transform:|opacity:/);
  const drawer = await source('src/components/ui/drawer.tsx');
  assert.match(drawer, /fixed inset-0 z-50/);
  const inspector = await source('src/components/Inspector.tsx');
  assert.match(inspector, /mobile-inspector-frame[^']*rounded-2xl bg-dialog/);
});

test('changing the selected theme keeps legacy theme-color metadata in sync', async (t) => {
  const app = await mountApp(t, 'https://icons.example/library/');
  const meta = app.document.createElement('meta');
  meta.name = 'theme-color';
  meta.content = '#f5f5f5';
  app.document.head.append(meta);
  for (const [theme, color, button] of [
    ['dark', '#0a0a0a', 'Switch to dark theme'],
    ['light', '#f5f5f5', 'Switch to light theme'],
  ]) {
    await act(async () =>
      app.document.querySelector(`[aria-label="${button}"]`).click(),
    );
    assert.equal(app.document.documentElement.dataset.theme, theme);
    assert.equal(meta.content, color);
  }
});
