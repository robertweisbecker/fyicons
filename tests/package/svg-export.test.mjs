import test, { before, after } from 'node:test';
import { SVGPathData } from 'svg-pathdata';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { readFile } from 'node:fs/promises';
import {
  repairFillStrokeSeams,
  normalizeSvgExport,
} from '../../scripts/lib/svg-export.mjs';
import {
  createIconRenderer,
  views,
} from '../../scripts/lib/icon-diff-images.mjs';
const source = await readFile(
  new URL('./fixtures/filled-outside-stroke.svg', import.meta.url),
  'utf8',
);
let renderer;
before(async () => {
  renderer = await createIconRenderer();
});
after(async () => {
  await renderer?.close();
});

test('unsupported paint, masking, ordering and geometry pass through byte-for-byte', () => {
  const cases = [
    source.replace('fill="black"/>', 'fill="none"/>'),
    source.replace('fill="black"/>', 'fill="white"/>'),
    source.replace('fill="black"/>', 'fill="black" fill-opacity=".5"/>'),
    source.replace('fill="black"/>', 'fill="black" opacity=".5"/>'),
    source.replace('fill="black"/>', 'fill="black" transform="translate(1)"/>'),
    source.replace('fill="black"/>', 'fill="black" clip-path="url(#crop)"/>'),
    source.replace('fill="black"/>', 'fill="black" fill-rule="evenodd"/>'),
    source.replace(
      '<path d="M2.75',
      '<rect width="1" height="1"/><path d="M2.75',
    ),
    source.replace(
      '</svg>',
      '<path d="M0 0H1V1Z" mask="url(#outside)"/></svg>',
    ),
    source.replace('<rect fill="white"', '<rect fill="gray"'),
    source.replaceAll('width="16"', 'width="8"'),
    source.replace('<path d="M3.25', '<path d="M4.25'),
    source
      .replace('<mask', '<g fill-opacity=".5"><mask')
      .replace('</svg>', '</g></svg>'),
    source
      .replace('<mask', '<g stroke="black"><mask')
      .replace('</svg>', '</g></svg>'),
    source.replace(
      'maskUnits="userSpaceOnUse"',
      'maskUnits="objectBoundingBox"',
    ),
    source.replace('<svg ', '<svg color="rgba(0,0,0,.5)" '),
    source.replace('<mask', '<style>path {opacity:.5}</style><mask'),
  ];
  for (const candidate of cases)
    assert.equal(repairFillStrokeSeams(candidate), candidate);
  const inside =
    '<svg xmlns="http://www.w3.org/2000/svg"><mask id="inside" fill="white"><path d="M1 1H8V8Z"/></mask><path d="M1 1H8V8Z" fill="none" stroke="black" mask="url(#inside)"/></svg>';
  assert.equal(repairFillStrokeSeams(inside), inside);
});

test('normalization joins redundant layers, uses currentColor and is idempotent', () => {
  const normalized = normalizeSvgExport(source);
  assert.match(normalized, /fill="currentColor"/);
  assert.doesNotMatch(normalized, /<mask/);
  assert.equal(normalizeSvgExport(normalized), normalized);
  const differentPaint = source.replace('fill="black"/>', 'fill="#ff0000"/>');
  const first = normalizeSvgExport(differentPaint);
  assert.equal(first, normalized);
  assert.equal(normalizeSvgExport(first), first);
});

test('complex overlapping curve exports retain the full opaque silhouette', async () => {
  const raw = await readFile(
    new URL('./fixtures/filled-curve-stroke.svg', import.meta.url),
    'utf8',
  );
  const repaired = normalizeSvgExport(raw);
  assert.doesNotMatch(repaired, /<mask/);
  // This fixture's inverse masks remove only regions covered by opaque fills.
  // The unmasked layers provide a separate raster reference for coverage.
  const overlapping = raw.replace(/ mask="url\(#[^"]+\)"/g, '');
  const size = 64;
  const view = { ...views[0], size };
  const reference = await renderer.raster(overlapping, view, true);
  const result = await renderer.raster(repaired, view, true);
  for (let y = 1; y < size - 1; y++)
    for (let x = 1; x < size - 1; x++) {
      const alpha = reference.data[(y * size + x) * 4 + 3];
      if (alpha !== 0 && alpha !== 255) continue;
      let interior = true;
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++)
          if (reference.data[((y + dy) * size + x + dx) * 4 + 3] !== alpha)
            interior = false;
      if (interior)
        assert.equal(
          result.data[(y * size + x) * 4 + 3],
          alpha,
          `Unexpected hole or extra region at ${size}px (${x}, ${y})`,
        );
    }
});

test('mask guards recognize equivalent references and require explicit bounds', () => {
  for (const reference of [
    "url('#outside')",
    'url( \"#outside\" )',
    'url( #outside )',
    'url(#out\\73 ide)',
  ]) {
    const quoted = reference.replaceAll('"', '&quot;');
    const shared = source.replace(
      '</svg>',
      `<rect width="16" height="16" mask="${quoted}"/></svg>`,
    );
    assert.equal(repairFillStrokeSeams(shared), shared);
  }
  const quotedTarget = source.replace('url(#outside)', "url( '#outside' )");
  assert.doesNotMatch(repairFillStrokeSeams(quotedTarget), /<mask/);
  const extended = source
    .replaceAll('10.75', '14.5')
    .replaceAll('11.25', '15')
    .replaceAll('10.25', '14');
  for (const attr of ['x="0"', 'y="0"', 'width="16"', 'height="16"']) {
    const omitted = extended.replaceAll(' ' + attr, '');
    assert.equal(repairFillStrokeSeams(omitted), omitted);
  }
});

test('valid CSS-wide fill rules and empty geometry pass through unchanged', () => {
  for (const rule of [
    'inherit',
    'initial',
    'unset',
    'revert',
    'revert-layer',
  ]) {
    const rootRule = source.replace('<svg ', `<svg fill-rule="${rule}" `);
    assert.equal(repairFillStrokeSeams(rootRule), rootRule);
    const outlineRule = source.replace(
      'mask="url(#outside)"',
      `fill-rule="${rule}" mask="url(#outside)"`,
    );
    assert.equal(repairFillStrokeSeams(outlineRule), outlineRule);
  }
  const empty = source.replace(/\bd="[^"]*"/g, 'd=""');
  assert.equal(repairFillStrokeSeams(empty), empty);
});

test('optimization rounds coordinates while retaining mask IDs, paint and transparency', () => {
  const normalized = normalizeSvgExport(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><mask id="stroke-mask" maskUnits="userSpaceOnUse"><rect width="16" height="16" fill="white"/><path fill="black" d="M4 4H12V12H4Z"/></mask></defs><path mask="url(#stroke-mask)" opacity=".5" fill="black" d="M1.123456 1H15V15H1.123456Z"/></svg>',
  );
  const dom = new JSDOM(normalized, { contentType: 'image/svg+xml' });
  try {
    const svg = dom.window.document.documentElement;
    const mask = svg.querySelector('mask');
    const artwork = svg.querySelector('[mask]');
    assert.equal(svg.getAttribute('viewBox'), '0 0 16 16');
    assert.equal(mask.id, 'stroke-mask');
    assert.deepEqual(
      [...mask.children].map((node) => node.getAttribute('fill')),
      ['white', 'black'],
    );
    assert.equal(artwork.getAttribute('mask'), 'url(#stroke-mask)');
    assert.equal(artwork.getAttribute('fill'), 'currentColor');
    assert.equal(Number(artwork.getAttribute('opacity')), 0.5);
    assert.match(artwork.getAttribute('d'), /1\.123(?: |[A-Za-z])/);
    assert.doesNotMatch(artwork.getAttribute('d'), /\.\d{4}/);
    assert.equal(normalizeSvgExport(normalized), normalized);
  } finally {
    dom.window.close();
  }
});

test('a stroked curve that returns to its start has an exact closing endpoint', () => {
  // Relative arithmetic at this Figma join leaves a tiny extra segment on GPUs.
  const curve =
    'M8.00001 5.04023C8.74299 4.69092 9.48642 4.40847 10.1821 4.22071C9.75857 2.62869 9.0312 1.50014 8.00001 1.5C6.9687 1.49986 6.24133 2.62856 5.81787 4.22087C6.51357 4.40859 7.25702 4.69098 8.00001 5.04023Z';
  const svg = (d) => `<svg fill="none"><path stroke="black" d="${d}"/></svg>`;
  const commands = (svg) => SVGPathData.parse(svg.match(/ d="([^"]+)"/)[1]);
  const normalized = normalizeSvgExport(svg(curve));
  const [move, ...rest] = commands(normalized);
  const end = rest.at(-2);
  assert.equal(end.relative, false);
  assert.deepEqual([end.x, end.y], [move.x, move.y]);
  assert.equal(normalizeSvgExport(normalized), normalized);
  const gap = commands(
    normalizeSvgExport(svg(curve.replace('5.04023Z', '5.05Z'))),
  );
  const gapEnd = new SVGPathData(gap).toAbs().round(1000).commands.at(-2);
  assert.equal(gapEnd.y, 5.05);
});

test('a half-disc touching an opaque ring paints one continuous surface', async () => {
  const svg = (attrs = '', radius = 6) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="black"/><path ${attrs} fill="black" d="M8 ${8 - radius}a${radius} ${radius} 0 1 0 0 ${2 * radius}Z"/></svg>`;
  const raw = await readFile(
    new URL('./fixtures/touching-half-disc.svg', import.meta.url),
    'utf8',
  );
  const reverse = svg().replace(
    'M8 2a6 6 0 1 0 0 12Z',
    'M8 14a6 6 0 1 0 0 -12Z',
  );
  for (const [source, direction] of [
    [raw, -1],
    [reverse, 1],
  ]) {
    const normalized = normalizeSvgExport(source);
    assert.equal(normalizeSvgExport(normalized), normalized);
    const { data } = await renderer.raster(
      normalized,
      { ...views[0], size: 64 },
      true,
    );
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const dx = x + 0.5 - 32,
          radius = Math.hypot(dx, y + 0.5 - 32);
        const alpha = data[(y * 64 + x) * 4 + 3];
        if (direction * dx > 1 && radius < 26) assert.equal(alpha, 255);
        if (direction * dx < -1 && radius < 22) assert.equal(alpha, 0);
        if (radius > 30) assert.equal(alpha, 0);
      }
    }
  }
  for (const unsupported of [
    svg('opacity=".5"'),
    svg('', 5),
    svg().replace('stroke="black"', 'stroke="black" stroke-dasharray="1 1"'),
  ])
    assert.match(normalizeSvgExport(unsupported), /<circle\b/);
});
