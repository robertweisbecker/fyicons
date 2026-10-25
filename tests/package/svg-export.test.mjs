import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
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
