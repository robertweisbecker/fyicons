// During multipass optimization, Figma’s Bézier half-discs simplify to SVG arcs.
import { SVGPathData as Path } from 'svg-pathdata';

const curveTypes = new Set([
  Path.CURVE_TO,
  Path.SMOOTH_CURVE_TO,
  Path.QUAD_TO,
  Path.SMOOTH_QUAD_TO,
]);

function anchorClosingCurves(d) {
  if (!/[zZ]/.test(d)) return d;
  const path = new Path(d);
  const absolute = new Path(d).toAbs().round(1e12).commands;
  let start;
  let changed = false;
  for (const [index, command] of path.commands.entries()) {
    if (command.type === Path.MOVE_TO) start = index;
    if (
      !command.relative ||
      !curveTypes.has(command.type) ||
      path.commands[index + 1]?.type !== Path.CLOSE_PATH
    )
      continue;
    const move = absolute[start];
    const end = absolute[index];
    if (end.x !== move.x || end.y !== move.y) continue;
    // Reaching M through relative deltas can leave a microscopic closing line
    // in float32. Its miter is visible in GPU rasterizers. Give both ends the
    // same absolute coordinates; a real closing line must retain its length.
    path.commands[start] = move;
    path.commands[index] = end;
    changed = true;
  }
  return changed ? path.encode() : d;
}

const onlyAttributes = (node, names) =>
  Object.keys(node.attributes).every((name) => names.includes(name));

function joinRingAndHalfDisc(svg) {
  // Restrict the union to two plain layers with one fully opaque paint.
  if (
    svg.children.length !== 2 ||
    !onlyAttributes(svg, ['xmlns', 'width', 'height', 'viewBox', 'fill'])
  )
    return;
  const [ring, disc] = svg.children;
  if (
    ring.name !== 'circle' ||
    disc.name !== 'path' ||
    ring.children.length ||
    disc.children.length ||
    !onlyAttributes(ring, [
      'cx',
      'cy',
      'r',
      'fill',
      'stroke',
      'stroke-width',
    ]) ||
    !onlyAttributes(disc, ['d', 'fill', 'fill-rule', 'clip-rule']) ||
    (ring.attributes.fill ?? svg.attributes.fill) !== 'none' ||
    ring.attributes.stroke !== 'currentColor' ||
    disc.attributes.fill !== 'currentColor' ||
    !disc.attributes.d
  )
    return;

  const cx = Number(ring.attributes.cx ?? 0);
  const cy = Number(ring.attributes.cy ?? 0);
  const radius = Number(ring.attributes.r);
  const width = Number(ring.attributes['stroke-width'] ?? 1);
  const inner = radius - width / 2;
  const outer = radius + width / 2;
  const commands = new Path(disc.attributes.d).toAbs().commands;
  const [start, arc, close] = commands;
  if (
    commands.length !== 3 ||
    start.type !== Path.MOVE_TO ||
    arc.type !== Path.ARC ||
    close.type !== Path.CLOSE_PATH ||
    !(inner > 0 && width > 0) ||
    arc.rX !== inner ||
    arc.rY !== inner ||
    (start.x + arc.x) / 2 !== cx ||
    (start.y + arc.y) / 2 !== cy ||
    Math.hypot(start.x - cx, start.y - cy) !== inner
  )
    return;

  // Fill the outer circle, cutting out the half opposite the original disc.
  arc.sweepFlag = 1 - arc.sweepFlag;
  disc.attributes.d = `M${cx} ${cy - outer}a${outer} ${outer} 0 1 1 0 ${2 * outer}a${outer} ${outer} 0 1 1 0 ${-2 * outer}z${Path.encode(commands)}`;
  disc.attributes['fill-rule'] = 'evenodd';
  svg.children = [disc];
}

export const mergeTouchingHalfDiscs = {
  name: 'mergeTouchingHalfDiscs',
  fn: () => ({
    element: {
      enter(node, parent) {
        if (node.name === 'svg' && parent.type === 'root')
          joinRingAndHalfDisc(node);
      },
    },
  }),
};

export const anchorStrokeClosures = {
  name: 'anchorStrokeClosures',
  fn: () => ({
    element: {
      enter({ name, attributes }) {
        if (
          name === 'path' &&
          attributes.d &&
          attributes.stroke === 'currentColor' &&
          (attributes['stroke-linejoin'] ?? 'miter') === 'miter'
        )
          attributes.d = anchorClosingCurves(attributes.d);
      },
    },
  }),
};
