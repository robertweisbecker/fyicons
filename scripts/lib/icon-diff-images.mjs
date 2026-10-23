import { Resvg } from '@resvg/resvg-js';
import { PNG } from 'pngjs';
import { normalizeDisplayPaint } from './react-icons.mjs';

export const views = [
  { name: 'light-16', size: 16, background: '#ffffff', color: '#171717' },
  { name: 'dark-16', size: 16, background: '#171717', color: '#ffffff' },
  { name: 'light-64', size: 64, background: '#ffffff', color: '#171717' },
  { name: 'dark-64', size: 64, background: '#171717', color: '#ffffff' },
];

export function raster(svg, view, transparent = false) {
  if (
    svg &&
    /<(?:script|image|foreignObject)\b|(?:href\s*=\s*['"](?!#))|@import/i.test(
      svg,
    )
  )
    throw new Error('Diff previews require self-contained SVG artwork.');
  const source = svg
    ? normalizeDisplayPaint(svg).replace(/<svg\b/, `<svg color="${view.color}"`)
    : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"/>';
  const renderer = new Resvg(source, {
    fitTo: { mode: 'width', value: view.size },
    ...(!transparent && { background: view.background }),
    font: { loadSystemFonts: false },
  });
  if (renderer.imagesToResolve().length)
    throw new Error('External SVG resources are not supported.');
  const image = renderer.render();
  return {
    data: image.pixels,
    png: image.asPng(),
    width: image.width,
    height: image.height,
  };
}

export function pixelDiff(before, after, background = '#ffffff') {
  if (before.width !== after.width || before.height !== after.height)
    throw new Error('Image dimensions differ.');
  const png = new PNG({ width: before.width, height: before.height });
  let changedPixels = 0;
  const bg = parseInt(background.slice(1, 3), 16);
  for (let i = 0; i < before.data.length; i += 4) {
    const a = before.data.subarray(i, i + 4),
      b = after.data.subarray(i, i + 4);
    const changed = !a.equals(b);
    if (changed) changedPixels++;
    const oldInk = Math.abs(bg - (a[0] + a[1] + a[2]) / 3);
    const newInk = Math.abs(bg - (b[0] + b[1] + b[2]) / 3);
    const color = changed
      ? oldInk > newInk
        ? [210, 48, 66]
        : [0, 151, 90]
      : [bg, bg, bg];
    png.data.set([...color, 255], i);
  }
  return { changedPixels, png: PNG.sync.write(png) };
}

export function compareImages(before, after) {
  const url = (bytes) => 'data:image/png;base64,' + bytes.toString('base64');
  const layer = (svg, view, color) => {
    const image = raster(svg, view, true);
    const png = new PNG({ width: image.width, height: image.height });
    for (let i = 0; i < image.data.length; i += 4)
      png.data.set([...color, image.data[i + 3]], i);
    return url(PNG.sync.write(png));
  };
  return Object.fromEntries(
    views.map((view) => {
      const a = before ? raster(before, view) : null,
        b = after ? raster(after, view) : null;
      const diff = a && b ? pixelDiff(a, b, view.background) : null;
      return [
        view.name,
        {
          changedPixels: diff?.changedPixels ?? null,
          before: a ? url(a.png) : null,
          after: b ? url(b.png) : null,
          diff: diff?.changedPixels ? url(diff.png) : null,
          overlayBefore: diff?.changedPixels
            ? layer(before, view, [224, 55, 129])
            : null,
          overlayAfter: diff?.changedPixels
            ? layer(after, view, [0, 121, 215])
            : null,
        },
      ];
    }),
  );
}
