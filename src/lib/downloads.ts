import { icons, manifest, type IconRecord } from './catalog';
import readme from '../data/README.txt?raw';

export function download(content: BlobPart, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
export async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
export async function downloadIcons(
  selection: IconRecord[] = icons,
  filename = 'fyicons.zip',
) {
  // Generated on demand: no duplicate SVG files or ZIP stored in each deployment.
  const { zipSync, strToU8 } = await import('fflate');
  const files = Object.fromEntries(
    selection.map((icon) => [icon.file, strToU8(icon.svg)]),
  );
  const selectedIds = new Set(selection.map((icon) => icon.id));
  const selectedManifest = {
    ...manifest,
    count: selection.length,
    native16Count: selection.length,
    duplicateGroups: Object.fromEntries(
      Object.entries(manifest.duplicateGroups)
        .map(
          ([name, variants]) =>
            [
              name,
              variants.filter((icon) => selectedIds.has(icon.id)),
            ] as const,
        )
        .filter(([, variants]) => variants.length > 0),
    ),
    icons: selection.map(({ svg: _svg, ...record }) => record),
  };
  files['manifest.json'] = strToU8(
    JSON.stringify(selectedManifest, null, 2) + '\n',
  );
  files['README.md'] = strToU8(readme);
  const bytes = zipSync(files, { level: 6 });
  download(bytes.buffer as ArrayBuffer, filename, 'application/zip');
}
