import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluate } from '@mdx-js/mdx';
import { createElement } from 'react';
import * as runtime from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import changelog from '../../.changeset/changelog.mjs';

test('changeset entries render leading headings and lists as Markdown blocks', async () => {
  for (const [summary, selector, expected] of [
    ['### Breaking changes\n\nDetails.', 'li h3', 'Breaking changes'],
    ['- First icon\n- Second icon', 'li ul li', 'First icon'],
  ]) {
    const entry = changelog.getReleaseLine({
      commit: '123456789abcdef',
      summary,
    });
    const mdx = await evaluate(entry, runtime);
    const html = renderToStaticMarkup(createElement(mdx.default));
    const document = new JSDOM(html).window.document;
    assert.equal(document.querySelector(selector)?.textContent, expected);
    assert.match(document.querySelector('li').textContent, /1234567:/);
  }
  assert.equal(
    changelog.getReleaseLine({ commit: '123456789abcdef', summary: 'A fix.' }),
    '- 1234567: A fix.',
  );
});
