'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { byId, categories, icons } from './catalog';
import {
  getCategoryReadiness,
  useCategoryReadiness,
} from './category-readiness';
import { assetPath } from './navigation';
import { useIconInspection, type IconShareLink } from './icon-inspection';
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
  const inspection = useIconInspection();
  const previousUrlIcon = useRef<string | null | undefined>(undefined);
  const publishedIcon = useRef<string | null | undefined>(undefined);
  const pending = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const previous = previousUrlIcon.current;
    previousUrlIcon.current = state.icon;
    if (previous === state.icon) return;
    if (publishedIcon.current === state.icon) {
      publishedIcon.current = undefined;
      return;
    }
    // Deep links and browser navigation select an icon. A plain library entry
    // preserves a selection handed over by global search in the shared shell.
    if (state.icon || previous !== undefined) {
      inspection.inspect(
        icons.find(({ name }) => name === state.icon)?.id ?? null,
      );
    }
  }, [state.icon, inspection.inspect]);

  useEffect(() => {
    clearTimeout(pending.current);
    setQuery(read(searchParams.toString()).query);
    return () => clearTimeout(pending.current);
  }, [searchParams]);

  function hrefFor(patch: Partial<IconFilters>) {
    const next = { ...read(location.search), query, ...patch };
    return assetPath('/icons/') + iconFilterSearch(next);
  }

  function update(
    patch: Partial<IconFilters>,
    mode: 'push' | 'replace' = 'replace',
  ) {
    clearTimeout(pending.current);
    const href = hrefFor(patch);
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
    inspectedId: inspection.id,
    setQuery: (value: string) => {
      setQuery(value);
      clearTimeout(pending.current);
      pending.current = setTimeout(() => update({ query: value }), 200);
    },
    setCategory: (category: string) => {
      update({ category, query: '' }, 'push');
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    inspect: inspection.inspect,
    share: (id: string): IconShareLink => {
      const icon = byId.get(id)?.name ?? null;
      const href = hrefFor({ icon });
      return {
        url: new URL(href, location.origin).href,
        publish: () => {
          publishedIcon.current = icon;
          clearTimeout(pending.current);
          if (href !== location.pathname + location.search)
            history.replaceState(null, '', href);
        },
      };
    },
    reset: () => update(emptyIconFilters),
  };
}
