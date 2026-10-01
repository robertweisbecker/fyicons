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
  const { createIconArchive } = await import('./icon-archive');
  const bytes = createIconArchive(selection, manifest, readme);
  download(bytes.buffer as ArrayBuffer, filename, 'application/zip');
}
