import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
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

test('filled outside strokes have no internal seam and retain their outer coverage', async () => {
  const repaired = repairFillStrokeSeams(source);
  assert.notEqual(repaired, source);
  assert.equal(repairFillStrokeSeams(repaired), repaired);
  const dom = new JSDOM(repaired, { contentType: 'image/svg+xml' });
  assert.equal(dom.window.document.querySelector('mask'), null);
  assert.equal(dom.window.document.querySelectorAll('path').length, 1);
  dom.window.close();
  const solid =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2.75" y="2.75" width="8.5" height="8.5" fill="black"/></svg>';
  for (const view of views) {
    const a = await renderer.raster(source, view, true),
      b = await renderer.raster(repaired, view, true);
    const ideal = await renderer.raster(solid, view, true);
    for (let i = 3; i < ideal.data.length; i += 4) {
      const alpha = ideal.data[i];
      if (alpha === 0 || alpha === 255)
        assert.equal(b.data[i], alpha, `Solid silhouette at ${view.name}`);
      else
        assert.ok(
          Math.abs(b.data[i] - alpha) <= 1,
          'Chromium path and rect edge quantization can differ by one alpha level',
        );
    }
    if (view.size === 16)
      assert.ok(
        a.data[(4 * 16 + 3) * 4 + 3] < 255,
        'Fixture must reproduce the seam',
      );
  }
  const translucent = await renderer.raster(
    repaired
      .replace('<path', '<g opacity=".5"><path')
      .replace('</svg>', '</g></svg>'),
    views[0],
    true,
  );
  assert.equal(
    translucent.data[(4 * 16 + 3) * 4 + 3],
    128,
    'Group opacity remains applied once to the combined artwork',
  );
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

test('monochrome export normalization is idempotent and retains mask paint', () => {
  const normalized = normalizeSvgExport(source);
  assert.match(normalized, /fill="currentColor"/);
  assert.doesNotMatch(normalized, /<mask/);
  assert.equal(normalizeSvgExport(normalized), normalized);
  const differentPaint = source.replace('fill="black"/>', 'fill="#ff0000"/>');
  const first = normalizeSvgExport(differentPaint);
  assert.equal(first, normalized);
  assert.equal(normalizeSvgExport(first), first);
});

test('union retains holes and skips shapes clipped by the mask bounds', async () => {
  const holed = source.replaceAll(
    'd="M3.25 3.25H10.75V10.75H3.25Z"',
    'fill-rule="evenodd" d="M3.25 3.25H10.75V10.75H3.25Z M5 5H9V9H5Z"',
  );
  const joined = repairFillStrokeSeams(holed);
  assert.notEqual(joined, holed);
  const image = await renderer.raster(joined, views[0], true);
  assert.equal(image.data[(7 * 16 + 7) * 4 + 3], 0);
  assert.equal(image.data[(4 * 16 + 3) * 4 + 3], 255);
  const clipped = source
    .replace(
      'x="0" y="0" width="16" height="16" fill="black"',
      'x="0" y="0" width="8" height="16" fill="black"',
    )
    .replace(
      'x="0" y="0" width="16" height="16"/>',
      'x="0" y="0" width="8" height="16"/>',
    );
  assert.equal(repairFillStrokeSeams(clipped), clipped);
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
  for (const size of [16, 64, 256]) {
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
  }
});
