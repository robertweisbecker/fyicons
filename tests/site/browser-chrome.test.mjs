import test from 'node:test';
import assert from 'node:assert/strict';
import { act } from 'react';
import { mountApp } from './helpers/app-readiness-harness.mjs';

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
