import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderReactIconFiles } from '../scripts/lib/react-icons.mjs';

const catalog = JSON.parse(
  await readFile(new URL('../src/data/catalog.json', import.meta.url), 'utf8'),
);
const generatedFiles = await renderReactIconFiles(catalog.icons);

test('renders a named, typed React component for every catalog SVG', async () => {
  const files = generatedFiles;
  assert.equal(files.size, catalog.icons.length + 3);
  assert.equal(files.has('src/icons/index.ts'), true);
  assert.equal(files.has('src/icons/registry.ts'), true);
  assert.equal(files.has('src/icons/types.ts'), true);
  assert.equal(
    files
      .get('src/icons/index.ts')
      .split('\n')
      .filter((line) => line.startsWith('export { default as ')).length,
    catalog.icons.length,
  );
  for (const icon of catalog.icons) {
    const source = files.get(`src/icons/${icon.componentName}.tsx`);
    assert.ok(source, `component missing for ${icon.id}`);
    assert.match(source, /React\.forwardRef/);
    assert.match(source, /width=\{svgProps\["width"\] \?\? size\}/);
    assert.match(source, /height=\{svgProps\["height"\] \?\? size\}/);
    assert.doesNotMatch(source, /dangerouslySetInnerHTML|DOMParser/);
  }
});

test('preserves definition paint and scopes definition IDs for repeated instances', async () => {
  const svg = `<svg width="16" height="16" viewBox="0 0 16 16"><defs><linearGradient id="paint"><stop stop-color="black"/></linearGradient><mask id="cut"><rect width="16" height="16" fill="white"/></mask></defs><path d="M0 0" fill="black" style="fill:black;stroke:black" clip-path="url(#cut)" fill-opacity="1"/></svg>`;
  const [file] = (
    await renderReactIconFiles([
      {
        id: 'fixture:1',
        name: 'fixture',
        baseName: 'fixture',
        filename: 'fixture.svg',
        svg,
        componentName: 'IconFixture',
        aliases: ['old-fixture'],
      },
    ])
  ).values();

  assert.match(file, /React\.useId\(\)/);
  assert.match(file, /id=\{idPrefix \+ "paint"\}/);
  assert.match(file, /id=\{idPrefix \+ "cut"\}/);
  assert.match(file, /clipPath=\{`url\(#\$\{idPrefix\}cut\)`\}/);
  assert.match(file, /stopColor="black"/);
  assert.match(file, /fill="white"/);
  assert.match(file, /fill="currentColor"/);
  assert.match(file, /style=\{\{/);
  assert.match(file, /title \? <title id=\{idPrefix \+ "title"\}>/);
  assert.match(
    file,
    /aria-labelledby=\{svgProps\["aria-labelledby"\] \?\? \(title \? idPrefix \+ "title"/,
  );
});

// Exercise the generated module, rather than just inspecting its source text.
async function loadComponent(source) {
  const { transformWithOxc } = await import('vite');
  const { code } = await transformWithOxc(source, 'Icon.tsx', {
    jsx: { runtime: 'classic' },
  });
  const executable = code.replace(
    '"react"',
    JSON.stringify(import.meta.resolve('react')),
  );
  return (
    await import(
      'data:text/javascript;base64,' +
        Buffer.from(executable).toString('base64')
    )
  ).default;
}

test('every generated component renders on the server at 16px', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  for (const icon of catalog.icons) {
    const source = await readFile(
      new URL(`../src/icons/${icon.componentName}.tsx`, import.meta.url),
      'utf8',
    );
    const Component = await loadComponent(source);
    const html = renderToStaticMarkup(createElement(Component));
    assert.match(html, /width="16"/, icon.name);
    assert.match(html, /height="16"/, icon.name);
    assert.match(html, /viewBox="0 0 16 16"/, icon.name);
    assert.match(html, /aria-hidden="true"/, icon.name);
  }
});

test('rendered components honor SVG props and keep repeated definition and title IDs unique', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const files = await renderReactIconFiles([
    {
      id: 'fixture:2',
      componentName: 'IconFixture',
      svg: `<svg viewBox='0 0 16 16'><defs><mask id='cut'><rect width='16' height='16' fill='white'/></mask></defs><path mask='url(#cut)' d='M1 1h14v14H1Z' fill='black' style='fill:color(display-p3 0 0 0)'/></svg>`,
    },
  ]);
  const Component = await loadComponent(files.get('src/icons/IconFixture.tsx'));
  const html = renderToStaticMarkup(
    createElement(
      'div',
      null,
      createElement(Component, {
        size: 24,
        width: 32,
        color: 'red',
        className: 'sample',
        title: 'Sample',
        style: { opacity: 0.5 },
        'data-test': 'first',
      }),
      createElement(Component, { title: 'Second', 'aria-hidden': true }),
    ),
  );
  assert.match(html, /width="32"/);
  assert.match(html, /height="24"/);
  assert.match(html, /color="red"/);
  assert.match(html, /class="sample"/);
  assert.match(html, /style="opacity:0.5"/);
  assert.match(html, /data-test="first"/);
  assert.match(html, /role="img"/);
  assert.match(html, /aria-hidden="true"/);
  assert.match(html, /<title[^>]+>Sample<\/title>/);
  assert.match(html, /fill="white"/);
  assert.match(html, /fill="currentColor"/);
  assert.match(html, /fill:currentColor/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, 4);
  assert.equal(new Set(ids).size, 4);
  for (const match of html.matchAll(
    /url\(#([^)]+)\)|aria-labelledby="([^"]+)"/g,
  )) {
    assert.ok(
      ids.includes(match[1] ?? match[2]),
      'Every generated reference resolves in the rendered markup',
    );
  }
});
