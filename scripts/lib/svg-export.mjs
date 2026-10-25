import { JSDOM } from 'jsdom';
import PathKitInit from 'pathkit-wasm';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const pathKit = await PathKitInit({
  wasmBinary: await readFile(
    createRequire(import.meta.url).resolve('pathkit-wasm/bin/pathkit.wasm'),
  ),
});
import { normalizeDisplayPaint } from './react-icons.mjs';

const attributesOnly = (node, allowed) =>
  [...node.attributes].every(({ name }) => allowed.includes(name));
const inherited = (node, name, fallback) => {
  for (let current = node; current; current = current.parentElement)
    if (current.hasAttribute(name)) return current.getAttribute(name);
  return fallback;
};
const opaquePaint = (value) =>
  /^(?:currentColor|black|white|#[\da-f]{3}|#[\da-f]{6})$/i.test(value);
const tagAttributes = `(?:[^"'<>]|"[^"]*"|'[^']*')*`;

/**
 * Union an expanded outside stroke with its matching opaque fill.
 * Only accept a redundant inverse mask and paths fully inside its bounds.
 * Unsupported compositions pass through unchanged; no general optimization runs.
 */
export function repairFillStrokeSeams(svg) {
  if (!svg.includes('<mask')) return svg;
  if (/<!|<\?|<(?:style|use|animate\w*|set)\b|\bstyle\s*=/i.test(svg))
    return svg;
  const dom = new JSDOM(svg, { contentType: 'image/svg+xml' });
  try {
    const document = dom.window.document;
    const masks = [...document.querySelectorAll('mask')];
    const sources = [
      ...svg.matchAll(
        new RegExp(`<mask\\b${tagAttributes}>[\\s\\S]*?<\\/mask\\s*>`, 'g'),
      ),
    ];
    if (masks.length !== sources.length) return svg;
    const edits = [];
    for (const [index, mask] of masks.entries()) {
      if (
        !attributesOnly(mask, [
          'id',
          'maskUnits',
          'x',
          'y',
          'width',
          'height',
          'fill',
        ]) ||
        mask.getAttribute('maskUnits') !== 'userSpaceOnUse' ||
        mask.getAttribute('fill') !== 'black' ||
        mask.children.length !== 2
      )
        continue;
      const [white, cutout] = mask.children;
      if (
        white.localName !== 'rect' ||
        cutout.localName !== 'path' ||
        white.children.length ||
        cutout.children.length ||
        !attributesOnly(white, ['fill', 'x', 'y', 'width', 'height']) ||
        white.getAttribute('fill') !== 'white' ||
        !attributesOnly(cutout, ['d', 'fill', 'fill-rule', 'clip-rule']) ||
        inherited(cutout, 'fill', 'black') !== 'black'
      )
        continue;
      // Preserve the original mask viewport and its rectangular coverage.
      if (
        !['x', 'y', 'width', 'height'].every(
          (key) => white.getAttribute(key) === mask.getAttribute(key),
        )
      )
        continue;
      const id = mask.getAttribute('id');
      if (
        !id ||
        [...document.querySelectorAll('[id]')].filter((node) => node.id === id)
          .length !== 1
      )
        continue;
      const uses = [...document.querySelectorAll('[mask]')].filter(
        (node) => node.getAttribute('mask') === `url(#${id})`,
      );
      if (uses.length !== 1) continue;
      const outline = uses[0],
        fill = outline.previousElementSibling;
      if (
        outline.parentElement !== mask.parentElement ||
        outline.localName !== 'path' ||
        !attributesOnly(outline, [
          'd',
          'fill',
          'fill-rule',
          'clip-rule',
          'mask',
        ]) ||
        !fill ||
        fill.localName !== 'path' ||
        fill.previousElementSibling !== mask ||
        fill.children.length ||
        outline.children.length ||
        !attributesOnly(fill, ['d', 'fill', 'fill-rule', 'clip-rule']) ||
        fill.getAttribute('d') !== cutout.getAttribute('d')
      )
        continue;
      const paint = fill.getAttribute('fill');
      if (
        !paint ||
        !opaquePaint(paint) ||
        outline.getAttribute('fill') !== paint ||
        inherited(fill, 'fill-rule', 'nonzero') !==
          inherited(cutout, 'fill-rule', 'nonzero')
      )
        continue;
      let safe = true;
      for (
        let parent = outline.parentElement;
        parent;
        parent = parent.parentElement
      ) {
        if (
          !['svg', 'g'].includes(parent.localName) ||
          (parent.hasAttribute('color') &&
            !opaquePaint(parent.getAttribute('color'))) ||
          !attributesOnly(parent, [
            'xmlns',
            'width',
            'height',
            'viewBox',
            'fill',
            'color',
            'transform',
            'clip-path',
            'opacity',
            'fill-rule',
          ])
        )
          safe = false;
      }
      if (!safe) continue;
      // Match the raw adjacent nodes so all unrelated source bytes survive.
      const source = sources[index];
      const following = svg
        .slice(source.index + source[0].length)
        .match(
          new RegExp(
            `^\\s*(<path\\b${tagAttributes}\\/>)\\s*(<path\\b${tagAttributes}\\/>)`,
          ),
        );
      if (!following) continue;
      const a = pathKit.FromSVGString(fill.getAttribute('d'));
      const b = pathKit.FromSVGString(outline.getAttribute('d'));
      try {
        if (!a || !b) throw new Error('Cannot parse filled stroke geometry.');
        for (const [path, node] of [
          [a, fill],
          [b, outline],
        ]) {
          const rule = inherited(node, 'fill-rule', 'nonzero');
          if (!['nonzero', 'evenodd'].includes(rule))
            throw new Error('Unsupported fill rule.');
          path.setFillType(
            rule === 'evenodd'
              ? pathKit.FillType.EVENODD
              : pathKit.FillType.WINDING,
          );
        }
        const bounds = ['x', 'y', 'width', 'height'].map((key) =>
          Number(mask.getAttribute(key)),
        );
        if (!bounds.every(Number.isFinite) || bounds[2] <= 0 || bounds[3] <= 0)
          continue;
        const [x, y, width, height] = bounds;
        const contained = (path) => {
          const box = path.computeTightBounds();
          return (
            box.fLeft >= x &&
            box.fTop >= y &&
            box.fRight <= x + width &&
            box.fBottom <= y + height
          );
        };
        if (!contained(a) || !contained(b)) continue;
        if (!a.op(b, pathKit.PathOp.UNION))
          throw new Error('Filled stroke union failed.');
        const d = a.toSVGString();
        if (!d || /NaN|Infinity/.test(d))
          throw new Error('Invalid filled stroke union.');
        edits.push({
          start: source.index,
          length: source[0].length + following[0].length,
          replacement: `<path d="${d}" fill="${paint}" fill-rule="${a.getFillTypeString()}"/>`,
        });
      } finally {
        a?.delete();
        b?.delete();
      }
    }
    for (const { start, length, replacement } of edits.reverse())
      svg = svg.slice(0, start) + replacement + svg.slice(start + length);
    return svg;
  } finally {
    dom.window.close();
  }
}

/** Apply the monochrome export policy, then repair eligible opaque layers. */
export function normalizeSvgExport(svg) {
  return repairFillStrokeSeams(normalizeDisplayPaint(svg));
}
