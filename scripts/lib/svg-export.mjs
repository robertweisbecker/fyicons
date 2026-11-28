import { JSDOM } from 'jsdom';
import paper from 'paper';
import { optimize } from 'svgo';
import { SVGPathData as Path } from 'svg-pathdata';
import {
  anchorStrokeClosures,
  mergeTouchingHalfDiscs,
} from './svg-geometry.mjs';
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
    const references = [...document.querySelectorAll('[mask]')].map((node) => {
      const value = node.getAttribute('mask').trim();
      if (value === 'none') return { node, id: null };
      const match =
        /^url\(\s*(?:'(#[-\w.:]+)'|"(#[-\w.:]+)"|(#[-\w.:]+))\s*\)$/i.exec(
          value,
        );
      return {
        node,
        id: match ? (match[1] || match[2] || match[3]).slice(1) : undefined,
      };
    });
    // Unknown CSS URL syntax may reference a candidate mask. Keep its definition.
    if (references.some(({ id }) => id === undefined)) return svg;
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
          (key) =>
            mask.hasAttribute(key) &&
            white.hasAttribute(key) &&
            white.getAttribute(key) === mask.getAttribute(key),
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
      const uses = references
        .filter((reference) => reference.id === id)
        .map((reference) => reference.node);
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
      const fillRule = inherited(fill, 'fill-rule', 'nonzero');
      const outlineRule = inherited(outline, 'fill-rule', 'nonzero');
      if (
        ![fillRule, outlineRule].every((rule) =>
          ['nonzero', 'evenodd'].includes(rule),
        )
      )
        continue;
      const scope = new paper.PaperScope();
      scope.setup(new paper.Size(16, 16));
      try {
        const makePath = (node, rule) =>
          new scope.CompoundPath({
            pathData: node.getAttribute('d'),
            fillRule: rule,
            insert: false,
          });
        const a = makePath(fill, fillRule),
          b = makePath(outline, outlineRule);
        const bounds = ['x', 'y', 'width', 'height'].map((key) =>
          Number(mask.getAttribute(key)),
        );
        if (!bounds.every(Number.isFinite) || bounds[2] <= 0 || bounds[3] <= 0)
          continue;
        const [x, y, width, height] = bounds;
        const contained = (path) =>
          path.bounds.left >= x &&
          path.bounds.top >= y &&
          path.bounds.right <= x + width &&
          path.bounds.bottom <= y + height;
        if (!contained(a) || !contained(b)) continue;
        const union = a.unite(b, { insert: false });
        const d = union.getPathData(null, 12);
        if (!d) continue;
        if (/NaN|Infinity/.test(d))
          throw new Error('Invalid filled stroke union.');
        edits.push({
          start: source.index,
          length: source[0].length + following[0].length,
          replacement: `<path d="${d}" fill="${paint}" fill-rule="${union.fillRule}"/>`,
        });
      } finally {
        scope.remove();
      }
    }
    for (const { start, length, replacement } of edits.reverse())
      svg = svg.slice(0, start) + replacement + svg.slice(start + length);
    return svg;
  } finally {
    dom.window.close();
  }
}

const canvasCorners = ['0,0', '16,0', '16,16', '0,16'];
const hasOnly = (node, names) =>
  Object.keys(node.attributes).every((name) => names.includes(name));
const elements = (node) =>
  node.children.filter((child) => child.type === 'element');

/** True when a clip shape is exactly the 16 × 16 canvas rectangle. */
function coversCanvas(shape) {
  if (shape.children.length) return false;
  if (shape.name === 'rect') {
    const { x = '0', y = '0', width, height } = shape.attributes;
    return (
      hasOnly(shape, ['x', 'y', 'width', 'height', 'fill']) &&
      Number(x) === 0 &&
      Number(y) === 0 &&
      Number(width) === 16 &&
      Number(height) === 16
    );
  }
  if (shape.name !== 'path' || !hasOnly(shape, ['d', 'fill'])) return false;
  let commands;
  try {
    commands = new Path(shape.attributes.d ?? '')
      .toAbs()
      .normalizeHVZ().commands;
  } catch {
    return false;
  }
  if (
    commands[0]?.type !== Path.MOVE_TO ||
    commands.slice(1).some(({ type }) => type !== Path.LINE_TO)
  )
    return false;
  const points = commands.map(({ x, y }) => `${x},${y}`);
  if (points.length > 1 && points.at(-1) === points[0]) points.pop();
  if (points.length !== 4) return false;
  // Four distinct canvas corners joined by axis-aligned edges form the canvas.
  const start = canvasCorners.indexOf(points[0]);
  if (start < 0) return false;
  const forward = canvasCorners.map((_, i) => canvasCorners[(start + i) % 4]);
  const backward = canvasCorners.map(
    (_, i) => canvasCorners[(start - i + 4) % 4],
  );
  return [forward, backward].some((order) =>
    order.every((point, i) => point === points[i]),
  );
}

const escapeId = (id) => id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** Every attribute, on any element, that refers to `#id`. */
function referencesTo(nodes, id) {
  const reference = new RegExp(`#${escapeId(id)}(?![-\\w.:])`);
  return nodes.flatMap((node) =>
    Object.entries(node.attributes)
      .filter(([, value]) => reference.test(value))
      .map(([name, value]) => ({ node, name, value })),
  );
}

/**
 * Remove a clip that only repeats the 16 × 16 root viewport.
 * Accept one clip shape, one group reference, and no transforms, filters,
 * reuse, or CSS on the path to the root. Every other clip stays.
 */
export const removeFullCanvasClips = {
  name: 'removeFullCanvasClips',
  fn: (root) => {
    const svg = root.children.find(
      (node) => node.type === 'element' && node.name === 'svg',
    );
    if (
      !svg ||
      svg.attributes.viewBox
        ?.trim()
        .split(/[\s,]+/)
        .join(' ') !== '0 0 16 16' ||
      ['filter', 'overflow', 'preserveAspectRatio', 'style', 'transform'].some(
        (name) => name in svg.attributes,
      ) ||
      (svg.attributes.width ?? '16') !== (svg.attributes.height ?? '16')
    )
      return null;
    const parents = new Map();
    const all = [];
    const visit = (node) => {
      for (const child of node.children ?? []) {
        if (child.type !== 'element') continue;
        parents.set(child, node);
        all.push(child);
        visit(child);
      }
    };
    visit(svg);
    // CSS and escaped URLs can reference clips in ways a plain match misses.
    if (
      all.some(
        (node) =>
          node.name === 'style' ||
          'style' in node.attributes ||
          Object.values(node.attributes).some((value) => value.includes('\\')),
      )
    )
      return null;
    for (const clip of all.filter((node) => node.name === 'clipPath')) {
      const id = clip.attributes.id;
      const shapes = elements(clip);
      if (
        !id ||
        !hasOnly(clip, ['id', 'clipPathUnits']) ||
        (clip.attributes.clipPathUnits ?? 'userSpaceOnUse') !==
          'userSpaceOnUse' ||
        clip.children.some(
          (child) => child.type !== 'element' && child.value?.trim(),
        ) ||
        shapes.length !== 1 ||
        !coversCanvas(shapes[0]) ||
        !['defs', 'svg'].includes(parents.get(clip).name) ||
        all.filter((node) => node.attributes.id === id).length !== 1
      )
        continue;
      // Count every attribute that refers to the ID, not only clip-path values.
      const escaped = escapeId(id);
      const mentions = referencesTo(all, id);
      if (mentions.length !== 1) continue;
      const [{ node: group, name, value }] = mentions;
      if (
        group.name !== 'g' ||
        name !== 'clip-path' ||
        !new RegExp(`^url\\(\\s*(['"]?)#${escaped}\\1\\s*\\)$`).test(
          value.trim(),
        )
      )
        continue;
      // The group must render once, in root coordinates, with nothing between
      // it and the viewport that moves pixels: no transform, no filter, and
      // no ID reference (such as <use>) that draws it somewhere else.
      let safe = true;
      for (let node = group; node !== svg; node = parents.get(node))
        if (
          node.name !== 'g' ||
          'transform' in node.attributes ||
          'filter' in node.attributes ||
          (node.attributes.id && referencesTo(all, node.attributes.id).length)
        )
          safe = false;
      if (!safe) continue;
      delete group.attributes['clip-path'];
      const holder = parents.get(clip);
      holder.children = holder.children.filter((child) => child !== clip);
      if (!Object.keys(group.attributes).length) {
        // Unwrap the group; its children keep their order.
        const parent = parents.get(group);
        const index = parent.children.indexOf(group);
        parent.children.splice(index, 1, ...group.children);
      }
    }
    return null;
  },
};

/** Apply the color policy, repair eligible layers, then optimize for distribution. */
export function normalizeSvgExport(svg) {
  return (
    optimize(repairFillStrokeSeams(normalizeDisplayPaint(svg)), {
      multipass: true,
      floatPrecision: 3,
      plugins: [
        removeFullCanvasClips,
        mergeTouchingHalfDiscs,
        {
          name: 'preset-default',
          params: {
            // Keep definition IDs and foreground/mask paint under our control.
            overrides: { cleanupIds: false, convertColors: false },
          },
        },
        anchorStrokeClosures,
      ],
    }).data + '\n'
  );
}
