import { useEffect, useRef, useState } from 'react';
import { byId, categories, icons } from './catalog';
import {
  getCategoryReadiness,
  useCategoryReadiness,
} from './category-readiness';
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

// Preserve category intent until it can be validated. Canonical icon names are
// available immediately, independently of category readiness and filters.
function readLocation(): LibraryNavigation {
  const page = pageFromLocation();
  const state =
    page === 'library'
      ? readLibraryHash(
          location.hash,
          getCategoryReadiness().status === 'loading'
            ? null
            : new Set(categories.map(({ id }) => id)),
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
  const categoryReadiness = useCategoryReadiness();
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
    const urlFor = (value: LibraryNavigation) =>
      new URL(
        pageHref(value.page) +
          (value.page === 'library' ? libraryHash(value) : ''),
        location.href,
      ).href;
    const url = urlFor(next);
    const write = () => {
      // Category validation may settle during the search debounce. Write the
      // latest fields so its fallback cannot resurrect an obsolete category.
      const url = urlFor(latest.current);
      if (url !== location.href) {
        if (mode === 'push') history.pushState(null, '', url);
        else history.replaceState(history.state, '', url);
      }
    };
    latest.current = next;
    if (delay) pendingUrl.current = setTimeout(write, delay);
    else write();
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

  useEffect(() => {
    const current = latest.current;
    if (
      categoryReadiness.status !== 'loading' &&
      current.category !== 'all' &&
      !categories.some(({ id }) => id === current.category)
    ) {
      const next = { ...current, category: 'all' };
      latest.current = next;
      setState(next);
    }
  }, [categoryReadiness, state.category]);

  return {
    ...state,
    category:
      categoryReadiness.status !== 'loading' &&
      state.category !== 'all' &&
      !categories.some(({ id }) => id === state.category)
        ? 'all'
        : state.category,
    categoryReadiness,
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
