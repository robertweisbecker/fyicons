import type { IconRecord } from './catalog';
import { assetPath } from './navigation';
import { iconSourceUrl } from './icon-source';
import { play, unlock } from './sounds';

export function downloadUrl(url: string, filename: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
}
export function download(content: BlobPart, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  downloadUrl(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
export function downloadIcon(icon: IconRecord) {
  downloadUrl(iconSourceUrl(icon), icon.filename);
}
export async function copy(text: string) {
  // Resume audio within the gesture, before the clipboard promise settles.
  void unlock();
  try {
    await navigator.clipboard.writeText(text);
    play('success', { emphasis: 'subtle' });
    return true;
  } catch {
    play('error', { emphasis: 'subtle' });
    return false;
  }
}
export async function downloadIcons(
  selection?: IconRecord[],
  filename = 'fyicons.zip',
) {
  if (!selection) {
    downloadUrl(assetPath('/downloads/fyicons.zip'), filename);
    return;
  }
  const { createSelectedArchive } = await import('./download-selection');
  const bytes = await createSelectedArchive(selection);
  download(bytes.buffer as ArrayBuffer, filename, 'application/zip');
}
