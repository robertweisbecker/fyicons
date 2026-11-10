import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluate } from '@mdx-js/mdx';
import { createElement } from 'react';
import * as runtime from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import rehypeDocHeadings from '../../apps/site/src/lib/rehype-doc-headings.mjs';

async function render(source, components = {}) {
  const mdx = await evaluate(source, {
    ...runtime,
    rehypePlugins: [rehypeDocHeadings],
  });
  let contents;
  const html = renderToStaticMarkup(
    createElement(mdx.default, {
      components: {
        ...components,
        DocsArticle: ({ headings, children }) => {
          contents = headings;
          return createElement('article', null, children);
        },
      },
    }),
  );
  return { document: new JSDOM(html).window.document, contents };
}

test('MDX headings supply matching permalinks and nested contents, including literal headings', async () => {
  const { document, contents } = await render(
    `
export const metadata = { title: 'Guide' };

# Guide

## Color & **size**

### Inline \`1em\`

<h4>Details</h4>

## <Mark /> Café
`,
    { Mark: () => createElement('svg', { 'aria-hidden': true }) },
  );
  assert.deepEqual(contents, [
    { id: 'color-size', title: 'Color & size', level: 2 },
    { id: 'inline-1em', title: 'Inline 1em', level: 3 },
    { id: 'details', title: 'Details', level: 4 },
    { id: 'cafe', title: 'Café', level: 2 },
  ]);
  for (const { id } of contents) {
    assert.equal(
      document.getElementById(id).querySelector('a').getAttribute('href'),
      `#${id}`,
    );
  }
  assert.equal(document.querySelector('h1 > a').getAttribute('href'), '#guide');
  assert.equal(
    document.querySelector('h1 > a').getAttribute('aria-label'),
    'Guide',
  );
});

test('duplicate titles avoid existing IDs and old published fragments remain usable', async () => {
  const { document, contents } = await render(`
# Reference

<span id="size">Existing target</span>

## Size

## Size

<h2 id="props">API</h2>

<h3 id="shared-defaults">Shared defaults with FyiProvider</h3>
`);
  assert.deepEqual(
    contents.map(({ id }) => id),
    ['size-1', 'size-2', 'api', 'shared-defaults-with-fyiprovider'],
  );
  const ids = [...document.querySelectorAll('[id]')].map(
    (element) => element.id,
  );
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(document.getElementById('props').closest('h2').id, 'api');
  assert.equal(
    document.getElementById('shared-defaults').closest('h3').id,
    'shared-defaults-with-fyiprovider',
  );
});
