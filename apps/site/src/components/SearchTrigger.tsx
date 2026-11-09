'use client';

import { createContext, useContext } from 'react';
import IconSearch from 'fyicons/icons/IconSearch';
import { Button } from './ui/button';
import IconKbdCommandK from 'fyicons/icons/IconKbdCommandK';

export const SearchTriggerContext = createContext<
  ((trigger: HTMLElement) => void) | null
>(null);

export function SearchTrigger({ iconCount }: { iconCount: number }) {
  const openSearch = useContext(SearchTriggerContext);
  if (!openSearch) {
    throw new Error('SearchTrigger must be rendered within SiteShell.');
  }

  return (
    <Button
      variant="neutral"
      size="lg"
      aria-haspopup="dialog"
      aria-keyshortcuts="Meta+K Control+K"
      className="w-full justify-start text-muted"
      onClick={(event) => openSearch(event.currentTarget)}
    >
      <IconSearch />
      <span>Search {iconCount.toLocaleString('en-US')} icons…</span>
      <kbd
        aria-hidden="true"
        className="ms-auto inline-flex items-center gap-0.5 rounded-full px-1.5 py-px font-normal max-md:hidden"
      >
        <IconKbdCommandK size="20" />
      </kbd>
    </Button>
  );
}
