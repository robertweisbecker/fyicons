import { IconSpinner, IconWarning } from 'fyicons';
import type { ReactNode } from 'react';
import { getIconDisplayName, type IconRecord } from '@/lib/catalog';
import { copy } from '@/lib/downloads';
import { loadIconSvg } from '@/lib/icon-source';
import { CatalogIcon } from './CatalogIcon';
import { CopiedTitle } from './copy-feedback';
import { toastManager } from './ui/toast';

// The menu closes on selection. Each operation owns its toast and any retries.
export function copyMenuSvg(icon: IconRecord, readyText?: string) {
  const name = getIconDisplayName(icon);
  let toastId: string | undefined;
  let copying = false;

  function show(type: 'loading' | 'success' | 'error', title: ReactNode) {
    const options = {
      type,
      title,
      data: {
        icon:
          type === 'loading' ? (
            <IconSpinner className="animate-spin motion-reduce:animate-none" />
          ) : type === 'error' ? (
            <IconWarning />
          ) : (
            <CatalogIcon name={icon.id} />
          ),
      },
      timeout: type === 'error' ? 0 : undefined,
      actionProps:
        type === 'error' ? { children: 'Retry', onClick: run } : undefined,
    };
    if (toastId) toastManager.update(toastId, options);
    else
      toastId = toastManager.add({
        ...options,
        id: type === 'success' ? `copy:${icon.id}:SVG` : undefined,
      });
  }

  async function run() {
    if (copying) return;
    copying = true;
    const timer = setTimeout(() => show('loading', `Copying “${name}”…`), 150);
    let loadFailed = false;
    try {
      const value = readyText ?? loadIconSvg(icon);
      if (typeof value !== 'string') {
        // A clipboard denial can arrive before the source settles. Keep its
        // verified text for Retry even after the menu has closed.
        void value.then(
          (text) => {
            readyText = text;
          },
          () => {
            loadFailed = true;
          },
        );
        if (
          typeof navigator.clipboard?.writeText === 'function' &&
          (typeof ClipboardItem === 'undefined' ||
            typeof navigator.clipboard.write !== 'function')
        ) {
          await value;
          show('error', `“${name}” is ready. Retry to copy.`);
          return;
        }
      }
      if (await copy(value)) {
        show('success', <CopiedTitle name={name} />);
        return;
      }
    } catch {
      loadFailed = true;
    } finally {
      clearTimeout(timer);
      copying = false;
    }
    show(
      'error',
      loadFailed
        ? `Couldn’t load the SVG for “${name}”.`
        : `Couldn’t copy “${name}” to the clipboard.`,
    );
  }

  return run();
}
