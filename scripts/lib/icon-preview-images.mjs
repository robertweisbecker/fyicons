import { PNG } from 'pngjs';

// Keep labels in Markdown; PNGs contain only the existing report's raster data.
export function previewImage(views) {
  const hasOverlay = Object.values(views).some(
    (view) => view.overlayBefore && view.overlayAfter,
  );
  const output = new PNG({ width: hasOverlay ? 480 : 384, height: 192 });
  for (const [row, theme] of ['light', 'dark'].entries()) {
    const shade = row ? 23 : 255;
    for (let y = row * 96; y < (row + 1) * 96; y++)
      for (let x = 0; x < output.width; x++)
        output.data.set([shade, shade, shade, 255], (y * output.width + x) * 4);
    for (const [sizeIndex, size] of [16, 64].entries()) {
      for (const [sideIndex, side] of ['before', 'after'].entries()) {
        const url = views[`${theme}-${size}`][side];
        if (!url) continue;
        const input = PNG.sync.read(Buffer.from(url.split(',')[1], 'base64'));
        const column = (hasOverlay ? 1 : 0) + sizeIndex * 2 + sideIndex;
        PNG.bitblt(
          input,
          output,
          0,
          0,
          size,
          size,
          column * 96 + (96 - size) / 2,
          row * 96 + (96 - size) / 2,
        );
      }
    }
    if (hasOverlay) {
      // Prefer the larger overlay; retain native size if only 16 px differs.
      const size = views[`${theme}-64`].overlayBefore ? 64 : 16;
      const view = views[`${theme}-${size}`];
      const x = (96 - size) / 2;
      const y = row * 96 + (96 - size) / 2;
      // Match the HTML report: pink before, then blue after, each at 50%.
      // Retain each source pixel's alpha so masks and translucent paint work.
      for (const url of [view.overlayBefore, view.overlayAfter]) {
        if (!url) continue;
        const layer = PNG.sync.read(Buffer.from(url.split(',')[1], 'base64'));
        for (let py = 0; py < size; py++) {
          for (let px = 0; px < size; px++) {
            const source = (py * size + px) * 4;
            const target = ((y + py) * output.width + x + px) * 4;
            const alpha = (layer.data[source + 3] / 255) * 0.5;
            for (let channel = 0; channel < 3; channel++)
              output.data[target + channel] = Math.round(
                layer.data[source + channel] * alpha +
                  output.data[target + channel] * (1 - alpha),
              );
          }
        }
      }
    }
  }
  return PNG.sync.write(output);
}

export function previewManifest(report) {
  return {
    base: report.base,
    head: report.head,
    changes: report.changes.map((change, index) => ({
      before: change.before?.componentName ?? null,
      after: change.after?.componentName ?? null,
      flags: change.flags,
      image: `${String(index).padStart(4, '0')}.png`,
      overlay: change.flags.includes('pixels-changed'),
    })),
  };
}
