import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  normalizeDisplayPaint,
  renderReactIconFiles,
} from '../../scripts/lib/react-icons.mjs';

const catalog = JSON.parse(
  await readFile(new URL('../../icons/manifest.json', import.meta.url), 'utf8'),
);
const generatedFiles = await renderReactIconFiles(
  await Promise.all(
    catalog.icons.map(async (icon) => ({
      ...icon,
      svg: await readFile(
        new URL(`../../icons/${icon.filename}`, import.meta.url),
        'utf8',
      ),
    })),
  ),
);

// Exercise generated modules and their shared SVG root as executable code.
const svgRootModule = (async () => {
  const { transformWithOxc } = await import('vite');
  const { code } = await transformWithOxc(
    generatedFiles.get('packages/fyicons/src/base.tsx'),
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
async function componentModule(source) {
  const { transformWithOxc } = await import('vite');
  const { code } = await transformWithOxc(source, 'Icon.tsx', {
    jsx: { runtime: 'classic' },
  });
  const executable = code
    .replace('"react"', JSON.stringify(import.meta.resolve('react')))
    .replace('"./base"', JSON.stringify(await svgRootModule));
  return (
    'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
  );
}
async function loadComponent(source) {
  return (await import(await componentModule(source))).default;
}

const clientIcons = (async () => {
  const { transformWithOxc } = await import('vite');
  const files = await renderReactIconFiles([
    {
      name: 'fixture',
      componentName: 'IconFixture',
      svg: '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M1 1h14v14H1Z"/></svg>',
    },
  ]);
  const moduleUrl = (code) =>
    'data:text/javascript;base64,' + Buffer.from(code).toString('base64');
  const provider = await transformWithOxc(
    files.get('packages/fyicons/src/provider.tsx'),
    'provider.tsx',
    { jsx: { runtime: 'classic' } },
  );
  const providerUrl = moduleUrl(
    provider.code.replace(
      '"react"',
      JSON.stringify(import.meta.resolve('react')),
    ),
  );
  const client = await transformWithOxc(
    files.get('packages/fyicons/src/client.tsx'),
    'client.tsx',
    { jsx: { runtime: 'classic' } },
  );
  return import(
    moduleUrl(
      client.code
        .replaceAll('"./provider"', JSON.stringify(providerUrl))
        .replace(
          '"./IconFixture"',
          JSON.stringify(
            await componentModule(
              files.get('packages/fyicons/src/IconFixture.tsx'),
            ),
          ),
        ),
    )
  );
})();

test('provider defaults compose across scopes and yield to local icon props', async () => {
  const { createElement: h } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { JSDOM } = await import('jsdom');
  const { FyiProvider, IconFixture } = await clientIcons;
  const html = renderToStaticMarkup(
    h(
      'div',
      null,
      h(
        FyiProvider,
        {
          size: 20,
          color: 'red',
          className: 'outer',
          style: { opacity: 0.5, verticalAlign: 'middle' },
        },
        h(IconFixture),
        h(
          FyiProvider,
          { size: 24, className: 'inner', style: { opacity: 0.75 } },
          h(IconFixture),
          h(IconFixture, {
            size: 0,
            width: 32,
            color: 'blue',
            className: 'local',
            style: { opacity: 1 },
            'aria-label': 'Local icon',
            id: 'local',
          }),
        ),
        h(IconFixture, { size: undefined, color: undefined }),
      ),
      h(IconFixture),
      h(FyiProvider, { size: '1em', color: 'currentColor' }, h(IconFixture)),
    ),
  );
  const dom = new JSDOM(html);
  const icons = [...dom.window.document.querySelectorAll('svg')];
  assert.equal(
    dom.window.document.querySelector('div').children.length,
    6,
    'Providers add no DOM wrappers',
  );
  assert.deepEqual(
    icons.map((icon) => [
      icon.getAttribute('width'),
      icon.getAttribute('height'),
    ]),
    [
      ['20', '20'],
      ['24', '24'],
      ['32', '0'],
      ['20', '20'],
      ['16', '16'],
      ['1em', '1em'],
    ],
  );
  assert.deepEqual(
    icons.map((icon) => icon.getAttribute('color')),
    ['red', 'red', 'blue', 'red', null, 'currentColor'],
  );
  assert.deepEqual(
    icons.map((icon) => icon.getAttribute('class')),
    [
      'fy-icon fy-fixture outer',
      'fy-icon fy-fixture outer inner',
      'fy-icon fy-fixture outer inner local',
      'fy-icon fy-fixture outer',
      'fy-icon fy-fixture',
      'fy-icon fy-fixture',
    ],
  );
  assert.deepEqual(
    icons
      .slice(0, 3)
      .map((icon) => [icon.style.opacity, icon.style.verticalAlign]),
    [
      ['0.5', 'middle'],
      ['0.75', 'middle'],
      ['1', 'middle'],
    ],
  );
  assert.equal(icons[2].getAttribute('aria-label'), 'Local icon');
  assert.equal(icons[2].getAttribute('role'), 'img');
  assert.equal(icons[2].getAttribute('id'), 'local');
  for (const icon of icons.filter((_, index) => index !== 2))
    assert.equal(icon.getAttribute('aria-hidden'), 'true');
  dom.window.close();
});

test('every generated component renders with default sizing, accessibility, and classes', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  for (const icon of catalog.icons) {
    const source = generatedFiles.get(
      `packages/fyicons/src/${icon.componentName}.tsx`,
    );
    const Component = await loadComponent(source);
    const html = renderToStaticMarkup(createElement(Component));
    assert.match(html, /width="16"/, icon.name);
    assert.match(html, /height="16"/, icon.name);
    assert.match(html, /viewBox="0 0 16 16"/, icon.name);
    assert.match(html, /xmlns="http:\/\/www.w3.org\/2000\/svg"/, icon.name);
    assert.match(html, /aria-hidden="true"/, icon.name);
    assert.doesNotMatch(html, /role=|iconName=|idPrefix=/, icon.name);
    assert.ok(html.includes(`class="fy-icon fy-${icon.name}"`), icon.name);
  }
});

test('foreground normalization preserves geometry, opacity, and mask paint', () => {
  const source = `<svg viewBox="0 0 16 16" fill="none"><defs><mask id="cut"><path fill="white" d="M0 0h16v16H0Z"/><path fill="black" d="M4 4h8v8H4Z"/></mask><clipPath id="clip"><path fill="#1D1D1B" d="M1 1h14v14H1Z"/></clipPath></defs><path fill="#1D1D1B" style="fill:color(display-p3 0.114 0.114 0.106);fill-opacity:0.5" d="M2 2h12v12H2Z" mask="url(#cut)"/><path fill="none" stroke="#1d1d1b" stroke-opacity="0.4" d="M3 3h10"/></svg>`;
  const expected = source
    .replace(
      'fill="#1D1D1B" style="fill:color(display-p3 0.114 0.114 0.106)',
      'fill="currentColor" style="fill:currentColor',
    )
    .replace('stroke="#1d1d1b"', 'stroke="currentColor"');
  assert.equal(normalizeDisplayPaint(source), expected);
  assert.equal(normalizeDisplayPaint(expected), expected);
});

test('foreground colors inherit independently of the exported palette', () => {
  const source = `<svg><path fill="#0D0D0D" stroke="#F02D2D"/><path fill="#00C950"/><path fill="navy"/><path style="fill:color(display-p3 0.1 0.2 0.3);stroke:rgb(12,34,56)"/><path fill="none" stroke="transparent"/><path fill="var(--paint)"/><path fill="url(#paint)"/><path fill="rgb(0 0 0 / 0.5)"/><path fill="black" style="fill:none"/><path fill="black" style="fill:rgb(0 0 0 / 0.5)"/></svg>`;
  const expected = `<svg><path fill="currentColor" stroke="currentColor"/><path fill="currentColor"/><path fill="currentColor"/><path style="fill:currentColor;stroke:currentColor"/><path fill="none" stroke="transparent"/><path fill="var(--paint)"/><path fill="url(#paint)"/><path fill="rgb(0 0 0 / 0.5)"/><path fill="currentColor" style="fill:none"/><path fill="currentColor" style="fill:rgb(0 0 0 / 0.5)"/></svg>`;
  assert.equal(normalizeDisplayPaint(source), expected);
});

test('rendered components honor SVG props and keep repeated definition and title IDs unique', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const files = await renderReactIconFiles([
    {
      id: 'fixture:2',
      name: 'fixture',
      componentName: 'IconFixture',
      svg: `<svg viewBox='0 0 16 16'><defs><linearGradient id='paint'><stop stop-color='black'/></linearGradient><mask id='cut'><rect width='16' height='16' fill='white'/></mask></defs><path mask='url(#cut)' d='M1 1h14v14H1Z' fill='black' style='fill:color(display-p3 0 0 0)'/><path fill='url(#paint)' d='M2 2h2v2H2Z'/></svg>`,
    },
  ]);
  const Component = await loadComponent(
    files.get('packages/fyicons/src/IconFixture.tsx'),
  );
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
        'aria-label': 'Sample',
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
  assert.match(html, /class="fy-icon fy-fixture sample"/);
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

test('generated components render nested SVG children after their artwork', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { JSDOM } = await import('jsdom');
  const files = await renderReactIconFiles([
    {
      id: 'fixture:nested-child',
      name: 'fixture',
      componentName: 'IconFixture',
      svg: '<svg viewBox="0 0 16 16"><path d="M1 1h14v14H1Z"/></svg>',
    },
  ]);
  const Component = await loadComponent(
    files.get('packages/fyicons/src/IconFixture.tsx'),
  );
  const html = renderToStaticMarkup(
    createElement(
      Component,
      null,
      createElement('circle', {
        cx: 8,
        cy: 8,
        r: 2,
        'data-child': 'nested',
      }),
    ),
  );
  const dom = new JSDOM(html);
  const svg = dom.window.document.querySelector('svg');
  assert.deepEqual(
    [...svg.children].map((child) => child.tagName.toLowerCase()),
    ['path', 'circle'],
  );
  assert.equal(svg.lastElementChild.getAttribute('data-child'), 'nested');
  dom.window.close();
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
        name: `literal-references-${index}`,
        componentName,
        svg: `<svg viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id=${attribute(sourceId)} d="M1 1h2v2H1Z"/></defs><use href=${attribute('#' + sourceId)}/><use xlink:href=${attribute('#' + sourceId)}/><path fill=${attribute(prefix + 'url(#' + sourceId + ')' + suffix)} style=${attribute('mask:' + prefix + 'url(#' + sourceId + ')' + suffix)} d="M1 1h2v2H1Z"/></svg>`,
      },
    ]);
    const source = files.get(`packages/fyicons/src/${componentName}.tsx`);
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

test('aria-label controls accessibility defaults while explicit SVG attributes pass through', async () => {
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const Component = await loadComponent(
    generatedFiles.get(
      `packages/fyicons/src/${catalog.icons[0].componentName}.tsx`,
    ),
  );
  const cases = [
    {
      name: 'title only',
      props: { title: 'Artwork' },
      hidden: 'true',
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
      hidden: 'true',
    },

    {
      name: 'whitespace-only aria-label',
      props: { 'aria-label': '   ' },
      label: '   ',
      hidden: 'true',
    },

    {
      name: 'explicit external label and visibility',
      props: {
        'aria-labelledby': 'external-name',
        role: 'img',
        'aria-hidden': false,
      },
      labelledby: 'external-name',
      role: 'img',
      hidden: 'false',
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
  ];
  for (const { name, props, label, labelledby, role, hidden } of cases) {
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
    assert.equal(attributes['aria-labelledby'], labelledby, name);
    assert.equal(attributes.role, role, name);
    assert.equal(attributes['aria-hidden'], hidden, name);
  }
});
