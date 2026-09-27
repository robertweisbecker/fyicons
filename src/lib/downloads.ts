import { icons, manifest } from './catalog';
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
export async function downloadAll() {
  // Generated on demand: no duplicate SVG files or ZIP stored in each deployment.
  const { zipSync, strToU8 } = await import('fflate');
  const files = Object.fromEntries(
    icons.map((icon) => [icon.file, strToU8(icon.svg)]),
  );
  files['manifest.json'] = strToU8(JSON.stringify(manifest, null, 2) + '\n');
  files['README.md'] = strToU8(readme);
  const bytes = zipSync(files, { level: 6 });
  download(bytes.buffer as ArrayBuffer, 'fyicons.zip', 'application/zip');
}
