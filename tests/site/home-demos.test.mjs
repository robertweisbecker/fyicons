import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createDomFixture } from './helpers/dom-fixture.mjs';

for (const name of ['Design', 'Files', 'Code', 'Agents', 'Social', 'Music']) {
  test(`${name} demo renders with its explicit icon imports`, async (t) => {
    const fixture = createDomFixture(t, 'https://example.test/');
    const module = await fixture.load(`home/desktop/${name}App.tsx`);
    const html = renderToString(createElement(module[`${name}App`]));
    assert.ok(html.includes('<svg'), 'demo retains its icon artwork');
  });
}
