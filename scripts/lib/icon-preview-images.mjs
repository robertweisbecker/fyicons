import { PNG } from 'pngjs';

// Keep labels in Markdown; PNGs contain only the existing report's raster data.
export function previewImage(views) {
  const output = new PNG({ width: 384, height: 192 });
  for (const [row, theme] of ['light', 'dark'].entries()) {
    const shade = row ? 23 : 255;
    for (let y = row * 96; y < (row + 1) * 96; y++)
      for (let x = 0; x < output.width; x++)
        output.data.set([shade, shade, shade, 255], (y * output.width + x) * 4);
    for (const [column, side] of ['before', 'after'].entries()) {
      for (const size of [16, 64]) {
        const url = views[`${theme}-${size}`][side];
        if (!url) continue;
        const input = PNG.sync.read(Buffer.from(url.split(',')[1], 'base64'));
        PNG.bitblt(
          input,
          output,
          0,
          0,
          size,
          size,
          column * 192 + (size === 16 ? 24 : 72),
          row * 96 + (96 - size) / 2,
        );
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
    })),
  };
}
