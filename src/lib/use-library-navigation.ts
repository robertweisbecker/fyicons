import { useEffect, useRef, useState } from 'react';
import { byId, categories, icons } from './catalog';
import { pageFromLocation, pageHref, type Page } from './navigation';
import {
  emptyLibraryState,
  libraryHash,
  readLibraryHash,
  type LibraryUrlState,
} from './library-url';

type LibraryNavigation = LibraryUrlState & {
  page: Page;
  inspectedId: string | null;
};

// Categories are loaded before App mounts. Only current canonical names link icons.
function readLocation(): LibraryNavigation {
  const page = pageFromLocation();
  const state =
    page === 'library'
      ? readLibraryHash(
          location.hash,
          new Set(categories.map(({ id }) => id)),
          new Set(icons.map(({ name }) => name)),
        )
      : emptyLibraryState;
  return {
    ...state,
    page,
    inspectedId: icons.find(({ name }) => name === state.icon)?.id ?? null,
  };
}

/** Keep URL writes in user actions so restoring history never writes it back. */
export function useLibraryNavigation() {
  const [state, setState] = useState(readLocation);
  const latest = useRef(state);
  const pendingUrl = useRef<ReturnType<typeof setTimeout>>(undefined);

  function update(
    patch: Partial<LibraryNavigation>,
    mode: 'push' | 'replace' = 'replace',
    delay = 0,
  ) {
    clearTimeout(pendingUrl.current);
    const next = { ...latest.current, ...patch };
    const href =
      pageHref(next.page) + (next.page === 'library' ? libraryHash(next) : '');
    const url = new URL(href, location.href).href;
    const write = () => {
      if (url !== location.href) {
        if (mode === 'push') history.pushState(null, '', url);
        else history.replaceState(history.state, '', url);
      }
    };
    if (delay) pendingUrl.current = setTimeout(write, delay);
    else write();
    latest.current = next;
    setState(next);
    return url;
  }

  useEffect(() => {
    const restore = () => {
      clearTimeout(pendingUrl.current);
      // Native document anchors are not library navigation.
      if (location.hash === '#main-content') return;
      const next = readLocation();
      latest.current = next;
      setState(next);
      if (location.hash === '#library' || location.hash === '#examples')
        history.replaceState(history.state, '', pageHref(next.page));
    };
    restore();
    window.addEventListener('popstate', restore);
    window.addEventListener('hashchange', restore);
    return () => {
      clearTimeout(pendingUrl.current);
      window.removeEventListener('popstate', restore);
      window.removeEventListener('hashchange', restore);
    };
  }, []);

  return {
    ...state,
    setQuery: (query: string) => update({ query }, 'replace', 200),
    setCategory: (category: string) => update({ category, query: '' }, 'push'),
    inspect: (inspectedId: string | null) =>
      update({ inspectedId, icon: null }),
    share: () =>
      update({
        icon: byId.get(latest.current.inspectedId ?? '')?.name ?? null,
      }),
    changePage: (page: Page) =>
      update({ page, inspectedId: null, icon: null }, 'push'),
    openSearchResult: (inspectedId: string) =>
      update(
        { ...emptyLibraryState, page: 'library', inspectedId },
        latest.current.page === 'library' ? 'replace' : 'push',
      ),
    reset: () => update({ ...emptyLibraryState, inspectedId: null }),
  };
}
