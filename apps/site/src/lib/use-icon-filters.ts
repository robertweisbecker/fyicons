'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { byId, categories, icons } from './catalog';
import {
  getCategoryReadiness,
  useCategoryReadiness,
} from './category-readiness';
import { assetPath } from './navigation';
import {
  emptyIconFilters,
  iconFilterSearch,
  readIconFilters,
  type IconFilters,
} from './icon-filters';

const names = new Set(icons.map(({ name }) => name));
function read(search: string) {
  return readIconFilters(
    search,
    getCategoryReadiness().status === 'loading'
      ? null
      : new Set(categories.map(({ id }) => id)),
    names,
  );
}

/** Next owns routes; the browser history stores this page's filter choices. */
export function useIconFilters() {
  const searchParams = useSearchParams();
  const categoryReadiness = useCategoryReadiness();
  const state = read(searchParams.toString());
  const [query, setQuery] = useState(state.query);
  const pending = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    clearTimeout(pending.current);
    setQuery(read(searchParams.toString()).query);
    return () => clearTimeout(pending.current);
  }, [searchParams]);

  function update(
    patch: Partial<IconFilters>,
    mode: 'push' | 'replace' = 'replace',
  ) {
    clearTimeout(pending.current);
    const next = { ...read(location.search), query, ...patch };
    const href = assetPath('/icons/') + iconFilterSearch(next);
    if (href !== location.pathname + location.search) {
      if (mode === 'push') history.pushState(null, '', href);
      else history.replaceState(null, '', href);
    }
    return new URL(href, location.origin).href;
  }

  return {
    ...state,
    query,
    categoryReadiness,
    inspectedId: icons.find(({ name }) => name === state.icon)?.id ?? null,
    setQuery: (value: string) => {
      setQuery(value);
      clearTimeout(pending.current);
      pending.current = setTimeout(() => update({ query: value }), 200);
    },
    setCategory: (category: string) => {
      update({ category, query: '' }, 'push');
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    inspect: (id: string | null) =>
      update({ icon: byId.get(id ?? '')?.name ?? null }),
    share: () => update({}),
    reset: () => update(emptyIconFilters),
  };
}
