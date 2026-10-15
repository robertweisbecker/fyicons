import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderReactIconFiles } from '../scripts/lib/react-icons.mjs';

const catalog = JSON.parse(
  await readFile(new URL('../src/data/catalog.json', import.meta.url), 'utf8'),
);
const generatedFiles = await renderReactIconFiles(catalog.icons);

// Exercise generated modules and their shared SVG root as executable code.
const svgRootModule = (async () => {
  const { transformWithOxc } = await import('vite');
  const { code } = await transformWithOxc(
    generatedFiles.get('src/icons/base.tsx'),
    'base.tsx',
    {
      jsx: { runtime: 'classic' },
    },
  );
  const executable = code.replace(
    '"react"',
    JSON.stringify(import.meta.resolve('react')),
  );
  return (
    'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
  );
})();
async function loadComponent(source) {
  const { transformWithOxc } = await import('vite');
  const { code } = await transformWithOxc(source, 'Icon.tsx', {
    jsx: { runtime: 'classic' },
  });
  const executable = code
    .replace('"react"', JSON.stringify(import.meta.resolve('react')))
    .replace('"./base"', JSON.stringify(await svgRootModule));
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
    const source = generatedFiles.get(`src/icons/${icon.componentName}.tsx`);
    const Component = await loadComponent(source);
    const html = renderToStaticMarkup(createElement(Component));
    assert.match(html, /width="16"/, icon.name);
    assert.match(html, /height="16"/, icon.name);
    assert.match(html, /viewBox="0 0 16 16"/, icon.name);
    assert.match(html, /xmlns="http:\/\/www.w3.org\/2000\/svg"/, icon.name);
  }
});

test('Collection and Home Fill inherit color without dark paint overrides', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  for (const name of ['collection', 'home-fill']) {
    const icon = catalog.icons.find((item) => item.name === name);
    const Component = await loadComponent(
      generatedFiles.get(`src/icons/${icon.componentName}.tsx`),
    );
    const html = renderToStaticMarkup(
      createElement(Component, { color: '#ff00aa' }),
    );
    assert.match(html, /fill="currentColor"/, name);
    assert.doesNotMatch(html, /display-p3|#131313|#0C0C0C/i, name);
  }
});

test('rendered components honor SVG props and keep repeated definition and title IDs unique', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const files = await renderReactIconFiles([
    {
      id: 'fixture:2',
      componentName: 'IconFixture',
      svg: `<svg viewBox='0 0 16 16'><defs><linearGradient id='paint'><stop stop-color='black'/></linearGradient><mask id='cut'><rect width='16' height='16' fill='white'/></mask></defs><path mask='url(#cut)' d='M1 1h14v14H1Z' fill='black' style='fill:color(display-p3 0 0 0)'/><path fill='url(#paint)' d='M2 2h2v2H2Z'/></svg>`,
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
        viewBox: '0 0 32 24',
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
  assert.match(html, /viewBox="0 0 32 24"/);
  assert.match(html, /role="img"/);
  assert.match(html, /aria-hidden="true"/);
  assert.match(html, /<title[^>]+>Sample<\/title>/);
  assert.match(html, /stop-color="black"/);
  assert.match(html, /fill="white"/);
  assert.match(html, /fill="currentColor"/);
  assert.match(html, /fill:currentColor/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, 6);
  assert.equal(new Set(ids).size, 6);
  for (const match of html.matchAll(
    /url\(#([^)]+)\)|aria-labelledby="([^"]+)"/g,
  )) {
    assert.ok(
      ids.includes(match[1] ?? match[2]),
      'Every generated reference resolves in the rendered markup',
    );
  }
});

test('reference delimiters remain literal data in repeated rendered instances', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const sourceIds = [
    'paint`',
    'paint\\',
    'paint${1 + 2}',
    "paint'",
    'paint"',
    'paintΩ',
  ];
  const prefix = 'before`${3 + 4}雪 ';
  const suffix = ' after`${5 + 6}λ';
  const decodeHtml = (value) =>
    value
      .replaceAll('&quot;', '"')
      .replaceAll('&#x27;', "'")
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&amp;', '&');
  for (const [index, sourceId] of sourceIds.entries()) {
    const quote = sourceId.includes('"') ? "'" : '"';
    const attribute = (value) => quote + value + quote;
    const componentName = `IconLiteralReferences${index}`;
    const files = await renderReactIconFiles([
      {
        id: `fixture:literal-references-${index}`,
        componentName,
        svg: `<svg viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id=${attribute(sourceId)} d="M1 1h2v2H1Z"/></defs><use href=${attribute('#' + sourceId)}/><use xlink:href=${attribute('#' + sourceId)}/><path fill=${attribute(prefix + 'url(#' + sourceId + ')' + suffix)} style=${attribute('mask:' + prefix + 'url(#' + sourceId + ')' + suffix)} d="M1 1h2v2H1Z"/></svg>`,
      },
    ]);
    const source = files.get(`src/icons/${componentName}.tsx`);
    const Component = await loadComponent(source);
    const html = renderToStaticMarkup(
      createElement(
        'div',
        null,
        createElement(Component),
        createElement(Component),
      ),
    );
    const instances = [...html.matchAll(/<svg\b[^>]*>(.*?)<\/svg>/g)];
    assert.equal(instances.length, 2);
    const ids = [];
    for (const [, markup] of instances) {
      const id = decodeHtml(markup.match(/\bid="([^"]+)"/)[1]);
      // SVGR preserves escaped backslashes in JSX attribute values.
      assert.ok(
        id.endsWith(sourceId.replaceAll('\\', '\\\\')),
        JSON.stringify({ id, sourceId }),
      );
      ids.push(id);
      const hrefs = [...markup.matchAll(/(?:href|xlink:href)="([^"]+)"/g)].map(
        (match) => decodeHtml(match[1]),
      );
      assert.deepEqual(hrefs, ['#' + id, '#' + id]);
      const reference = prefix + 'url(#' + id + ')' + suffix;
      assert.equal(decodeHtml(markup.match(/\bfill="([^"]+)"/)[1]), reference);
      assert.equal(
        decodeHtml(markup.match(/\bstyle="([^"]+)"/)[1]),
        'mask:' + reference,
      );
    }
    assert.equal(new Set(ids).size, 2, 'Each instance owns its references');
  }
});

test('rendered accessible names honor explicit naming and decorative overrides', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const Component = await loadComponent(
    generatedFiles.get(`src/icons/${catalog.icons[0].componentName}.tsx`),
  );
  const cases = [
    { name: 'decorative default', props: {}, hidden: 'true' },
    {
      name: 'title only',
      props: { title: 'Artwork' },
      label: 'Artwork',
      titleLink: true,
      role: 'img',
    },
    {
      name: 'aria-label only',
      props: { 'aria-label': 'Label' },
      label: 'Label',
      role: 'img',
    },
    {
      name: 'aria-labelledby only',
      props: { 'aria-labelledby': 'external-name' },
      labelledby: 'external-name',
      role: 'img',
    },
    {
      name: 'title with aria-label',
      props: { title: 'Artwork', 'aria-label': 'Label' },
      label: 'Label',
      role: 'img',
    },
    {
      name: 'title with aria-labelledby',
      props: { title: 'Artwork', 'aria-labelledby': 'external-name' },
      label: 'Artwork',
      labelledby: 'external-name',
      role: 'img',
    },
    {
      name: 'title with both explicit names',
      props: {
        title: 'Artwork',
        'aria-label': 'Label',
        'aria-labelledby': 'external-name',
      },
      label: 'Label',
      labelledby: 'external-name',
      role: 'img',
    },
    {
      name: 'empty explicit aria-label',
      props: { title: 'Artwork', 'aria-label': '' },
      label: '',
      role: 'img',
    },
    {
      name: 'empty explicit aria-labelledby',
      props: { title: 'Artwork', 'aria-labelledby': '' },
      label: 'Artwork',
      labelledby: '',
      role: 'img',
    },
    {
      name: 'explicit role and hidden',
      props: {
        title: 'Artwork',
        'aria-label': 'Label',
        role: 'presentation',
        'aria-hidden': true,
      },
      label: 'Label',
      role: 'presentation',
      hidden: 'true',
    },
    {
      name: 'explicit visible decorative icon',
      props: { role: 'img', 'aria-hidden': false },
      role: 'img',
      hidden: 'false',
    },
  ];
  for (const {
    name,
    props,
    label,
    labelledby,
    titleLink,
    role,
    hidden,
  } of cases) {
    const html = renderToStaticMarkup(createElement(Component, props));
    const root = html.match(/^<svg\b([^>]*)>/)[1];
    const attributes = Object.fromEntries(
      [...root.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [
        match[1],
        match[2],
      ]),
    );
    const titleId = html.match(/<title id="([^"]+)">Artwork<\/title>/)?.[1];
    assert.equal(Boolean(titleId), Boolean(props.title), name);
    assert.equal(attributes['aria-label'], label, name);
    assert.equal(
      attributes['aria-labelledby'],
      titleLink ? titleId : labelledby,
      name,
    );
    assert.equal(attributes.role, role, name);
    assert.equal(attributes['aria-hidden'], hidden, name);
  }
});
