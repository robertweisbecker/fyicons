import type { IconRecord } from '@/lib/catalog';
import { assetPath } from '@/lib/navigation';
import { iconSourceUrl } from '@/lib/icon-source';

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
export async function downloadIcons(
  selection?: IconRecord[],
  filename = 'fyicons.zip',
) {
  if (!selection) {
    downloadUrl(assetPath('/downloads/fyicons.zip'), filename);
    return;
  }
  const { createSelectedArchive } = await import('@/lib/download-selection');
  const bytes = await createSelectedArchive(selection);
  download(bytes.buffer as ArrayBuffer, filename, 'application/zip');
}
