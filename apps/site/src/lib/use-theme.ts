import { useSyncExternalStore } from 'react';
import type { Theme } from '@/lib/theme';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

const read = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

/** The theme currently applied to the document. Light on the server. */
export function useTheme() {
  return useSyncExternalStore<Theme>(subscribe, read, () => 'light');
}
