import { assetPath } from '@/lib/navigation';
import type { CatalogIcon } from '@/lib/catalog-codec';

type SourceIcon = Pick<CatalogIcon, 'sha256' | 'filename'>;
const pending = new Map<string, Promise<string>>();

export function iconSourceUrl(icon: SourceIcon) {
  if (!/^[a-f0-9]{64}$/.test(icon.sha256))
    throw new Error('Invalid icon checksum.');
  return assetPath(`/icon-sources/${icon.sha256}.svg`);
}

/** Successful immutable sources are reused; failures can always be retried. */
export function loadIconSvg(icon: SourceIcon): Promise<string> {
  const cached = pending.get(icon.sha256);
  if (cached) return cached;
  const request = (async () => {
    const response = await fetch(iconSourceUrl(icon), { cache: 'force-cache' });
    if (!response.ok)
      throw new Error(`Could not load ${icon.filename}. Please retry.`);
    const bytes = await response.arrayBuffer();
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
    const hash = Array.from(digest, (byte) =>
      byte.toString(16).padStart(2, '0'),
    ).join('');
    if (hash !== icon.sha256)
      throw new Error('SVG checksum mismatch. Refresh and retry.');
    return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(
      bytes,
    );
  })();
  pending.set(icon.sha256, request);
  request.catch(() => {
    if (pending.get(icon.sha256) === request) pending.delete(icon.sha256);
  });
  return request;
}

export async function resolveIconSources<T extends SourceIcon>(
  selection: readonly T[],
) {
  const result: (T & { svg: string })[] = new Array(selection.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(6, selection.length) }, async () => {
      while (cursor < selection.length) {
        const index = cursor++;
        const icon = selection[index];
        result[index] = { ...icon, svg: await loadIconSvg(icon) };
      }
    }),
  );
  return result;
}
