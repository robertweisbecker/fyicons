import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { decodeCatalog } from '../../apps/site/src/lib/catalog-codec.ts';
import { prepareIcons } from '../../scripts/lib/prepare-icons.mjs';

const manifest = JSON.parse(
  await readFile(new URL('../../icons/manifest.json', import.meta.url), 'utf8'),
);
const catalog = decodeCatalog(
  JSON.parse(
    await readFile(
      new URL('../../apps/site/src/data/catalog-runtime.json', import.meta.url),
      'utf8',
    ),
  ),
);

test('SVG exports add default classes and hash their bytes without changing source artwork', async () => {
  assert.equal(catalog.icons.length, manifest.icons.length);
  for (const icon of manifest.icons) {
    const generated = catalog.icons.find(({ id }) => id === icon.id);
    const svg = await readFile(
      new URL(`../../icons/${icon.filename}`, import.meta.url),
    );
    assert.ok(generated, `missing catalog record ${icon.id}`);
    assert.equal(
      generated.svg.replace(` class="fy-icon fy-${icon.name}"`, ''),
      svg.toString(),
      `${icon.filename} changes more than its root classes`,
    );
    assert.match(
      generated.svg,
      new RegExp(`^<svg class="fy-icon fy-${icon.name}"\\s`),
    );
    assert.equal(
      generated.sha256,
      createHash('sha256').update(generated.svg).digest('hex'),
      `${icon.filename} hash is stale`,
    );
    assert.equal(
      'sha256' in icon,
      false,
      'source metadata must not retain a derived checksum',
    );
  }
});

test('all downloadable icons inherit foreground color without altering definition paint', async () => {
  const { JSDOM } = await import('jsdom');
  const dom = new JSDOM(
    catalog.icons
      .map((icon) => `<div data-icon-id="${icon.id}">${icon.svg}</div>`)
      .join(''),
  );
  try {
    for (const element of dom.window.document.querySelectorAll('svg, svg *')) {
      if (element.closest('defs, mask, clipPath')) continue;
      const name = element
        .closest('[data-icon-id]')
        .getAttribute('data-icon-id');
      const paints = [
        element.getAttribute('fill'),
        element.getAttribute('stroke'),
        element.style.fill,
        element.style.stroke,
      ];
      for (const paint of paints.filter(Boolean))
        assert.ok(
          /^(?:none|currentcolor|url\(.*\))$/i.test(paint),
          `${name} has fixed foreground paint ${paint}`,
        );
    }
  } finally {
    dom.window.close();
  }
});

test('SVG export classes merge on the root and leave source hashes, attributes, and child classes intact', async () => {
  const svg = `<svg data-note=" class='untouched' " class='custom fy-icon fy-fixture' viewBox='0 0 16 16'><path class="detail" fill="currentColor" d="M1 1h2v2H1Z"/></svg>\n`;
  const sourceHash = createHash('sha256').update(svg).digest('hex');
  const prepared = await prepareIcons(
    {
      name: 'FYIcons',
      icons: [
        {
          id: 'fixture:1',
          name: 'fixture',
          filename: 'fixture-16.svg',
          componentName: 'IconFixture',
          width: 16,
          height: 16,
          sha256: sourceHash,
        },
      ],
    },
    { categories: [] },
    async () => svg,
  );
  assert.equal(prepared.icons[0].svg, svg);
  assert.equal(prepared.icons[0].sha256, sourceHash);
  const exported = prepared.exportedIcons[0];
  assert.equal(
    exported.svg,
    svg.replace(
      "class='custom fy-icon fy-fixture'",
      "class='fy-icon fy-fixture custom'",
    ),
  );
  assert.equal(
    exported.sha256,
    createHash('sha256').update(exported.svg).digest('hex'),
  );
  assert.equal(
    decodeCatalog(
      JSON.parse(
        prepared.expected.get('apps/site/src/data/catalog-runtime.json'),
      ),
    ).icons[0].svg,
    exported.svg,
  );
});
