import { Autocomplete } from '@base-ui/react/autocomplete';
import { Dialog } from '@base-ui/react/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import { UIIcon } from '@/components/UIIcon';
import { IconButton } from '@/components/IconButton';
import { Button } from '@/components/ui/button';
import type { IconRecord } from '@/lib/catalog';
import { getIconDisplayName } from '@/lib/icon-names';
import catalogSummary from '@/data/catalog-summary.json';
type SearchCatalog = Awaited<
  ReturnType<typeof import('./search-catalog').loadSearchCatalog>
>;
let catalogRequest: Promise<SearchCatalog> | undefined;
function requestCatalog() {
  return (catalogRequest ??= import('./search-catalog')
    .then((module) => module.loadSearchCatalog())
    .catch((error) => {
      catalogRequest = undefined;
      throw error;
    }));
}
import Link from 'next/link';

const searchPlaceholder = `Search ${catalogSummary.count.toLocaleString('en-US')} icons…`;
// Divisible by every responsive column count: 3, 4, 6, and 8.
const searchPageSize = 96;
export function IconSearch({
  value,
  onValueChange,
  inputRef,
}: {
  value: string;
  onValueChange: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div
      role="search"
      className="flex h-11 min-w-0 items-center gap-3 rounded-xl bg-surface ps-3 pe-2 shadow-sm outline-1 outline-offset-[--surface-outline-offset] outline-line focus-within:ring-2 focus-within:ring-focus hover:not-focus-within:outline-border"
    >
      <UIIcon name="search" />
      <input
        ref={inputRef}
        type="search"
        aria-label="Search icons"
        placeholder={searchPlaceholder}
        autoComplete="off"
        spellCheck={false}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onValueChange('');
        }}
        className="h-full min-w-0 flex-1 bg-transparent py-0 text-base outline-none placeholder:text-muted sm:text-sm [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <IconButton
          icon="circle-x-fill"
          label="Clear"
          onClick={() => {
            onValueChange('');
            inputRef.current?.focus();
          }}
        />
      )}
    </div>
  );
}

function Search({
  value,
  onValueChange,
  select,
  inputRef,
}: {
  value: string;
  onValueChange: (value: string) => void;
  select: (icon: IconRecord) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  const [catalog, setCatalog] = useState<SearchCatalog>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setError(false);
    requestCatalog().then(
      (value) => {
        if (active) setCatalog(value);
      },
      () => {
        if (active) setError(true);
      },
    );
    return () => {
      active = false;
    };
  }, [attempt]);
  const [limit, setLimit] = useState(searchPageSize);
  const [highlightedIcon, setHighlightedIcon] = useState<IconRecord>();
  const matches = useMemo(() => catalog?.search(value) ?? [], [catalog, value]);
  const shownCount = Math.min(limit, matches.length);
  const moreCount = Math.min(searchPageSize, matches.length - shownCount);
  return (
    <Autocomplete.Root
      grid
      inline
      open
      items={matches}
      limit={limit}
      filter={null}
      value={value}
      onValueChange={(next, details) => {
        if (details.reason !== 'item-press') {
          setLimit(searchPageSize);
          onValueChange(next);
        }
      }}
      itemToStringValue={getIconDisplayName}
      autoHighlight={false}
      onItemHighlighted={setHighlightedIcon}
    >
      <Autocomplete.InputGroup className="flex h-14 min-w-0 shrink-0 items-center gap-3 ps-6 pe-3">
        <UIIcon name="search" size={20} />
        <Autocomplete.Input
          ref={inputRef}
          aria-label="Search all icons"
          placeholder={searchPlaceholder}
          className="h-full min-w-0 flex-1 bg-transparent py-0 text-lg outline-none placeholder:text-muted sm:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <Autocomplete.Clear
          aria-label="Clear search"
          tabIndex={0}
          render={<Button variant="ghost" size="sm" />}
        >
          Clear
        </Autocomplete.Clear>
        <Dialog.Close
          render={
            <IconButton
              icon="x"
              variant="fancy"
              className="rounded-full"
              label="Close search"
            />
          }
        />
      </Autocomplete.InputGroup>
      {catalog && (
        <Autocomplete.Empty className="text-center">
          <div className="flex flex-col items-center justify-center gap-3 px-4 py-12">
            <UIIcon name="ghost" size={32} />
            <h3 className="text-lg font-medium">
              Boo! <span className="opacity-50">No matches.</span>
            </h3>
            <p className="">
              Try another search, or{' '}
              <Link
                prefetch={false}
                href="/icons"
                className="text-ink underline decoration-1 underline-offset-4 hover:text-focus"
              >
                view all icons
              </Link>
              .
            </p>
          </div>
        </Autocomplete.Empty>
      )}
      {!catalog && (
        <div role="status" className="p-6 text-sm text-muted">
          {error ? (
            <>
              <p>Search could not be loaded.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setAttempt((value) => value + 1);
                  inputRef.current?.focus({ preventScroll: true });
                }}
              >
                Retry search
              </Button>
            </>
          ) : (
            'Loading icons…'
          )}
        </div>
      )}
      {catalog?.warning && (
        <p role="status" className="px-6 text-sm text-muted">
          {catalog.warning}
        </p>
      )}
      <ScrollArea.Root className="flex flex-1 flex-col">
        <ScrollArea.Viewport className="flex-1">
          <ScrollArea.Content className="min-w-0!">
            <Autocomplete.List
              aria-label="Icon search results"
              className="p-3 empty:hidden sm:p-4"
            >
              {catalog && <catalog.Results select={select} />}
            </Autocomplete.List>
            {matches.length > searchPageSize && (
              <div className="flex justify-center px-4 pb-4">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={moreCount === 0}
                  focusableWhenDisabled
                  onClick={() =>
                    setLimit((current) => current + searchPageSize)
                  }
                  className="data-disabled:opacity-40"
                >
                  <UIIcon name="arrow-down" size={16} />
                  {moreCount > 0
                    ? `Load ${moreCount} more`
                    : 'All results shown'}
                </Button>
              </div>
            )}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
      </ScrollArea.Root>
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line px-4 py-3 text-xs text-muted">
        <Autocomplete.Status className="shrink-0">
          {shownCount < matches.length
            ? `${shownCount.toLocaleString('en-US')} of `
            : ''}
          {matches.length.toLocaleString('en-US')} results
        </Autocomplete.Status>
        <div className="ms-auto flex min-w-0 flex-wrap items-center justify-end gap-x-3 gap-y-2">
          {highlightedIcon && (
            <>
              <span className="flex min-w-0 items-center gap-2">
                <span className="wrap-anywhere">
                  View{' '}
                  <span className="text-ink">
                    {getIconDisplayName(highlightedIcon)}
                  </span>
                </span>
                <kbd aria-label="Enter" className="flex shrink-0 items-center">
                  <UIIcon name="kbd-return" size={12} />
                </kbd>
              </span>
              <span aria-hidden="true" className="hidden sm:inline">
                ∙
              </span>
            </>
          )}
          <span className="hidden shrink-0 items-center gap-1 sm:flex">
            <kbd aria-label="Left arrow" className="flex items-center">
              <UIIcon name="arrow-left" size={12} />
            </kbd>
            <kbd aria-label="Right arrow" className="flex items-center">
              <UIIcon name="arrow-right" size={12} />
            </kbd>
            <span className="ms-1">Navigate</span>
          </span>
        </div>
      </div>
    </Autocomplete.Root>
  );
}
export function GlobalSearch({
  open,
  onOpenChange,
  select,
  inputRef,
  returnFocusRef,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  select: (icon: IconRecord) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  returnFocusRef: RefObject<HTMLElement | null>;
}) {
  const [value, setValue] = useState('');
  const selecting = useRef(false);
  const popup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!open || !viewport) return;
    // The software keyboard resizes the visual viewport, not Safari's dvh.
    const update = () => {
      popup.current?.style.setProperty(
        '--search-viewport-height',
        `${viewport.height}px`,
      );
      popup.current?.style.setProperty(
        '--search-viewport-top',
        `${viewport.offsetTop}px`,
      );
    };
    update();
    viewport.addEventListener('resize', update);
    viewport.addEventListener('scroll', update);
    return () => {
      viewport.removeEventListener('resize', update);
      viewport.removeEventListener('scroll', update);
    };
  }, [open]);
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        selecting.current = false;
        onOpenChange(next);
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/30 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          ref={popup}
          initialFocus={inputRef}
          finalFocus={() =>
            selecting.current ? false : returnFocusRef.current
          }
          className="fixed inset-x-3 top-[calc(var(--search-viewport-top,0px)+var(--search-top-space))] z-70 flex max-h-[min(40rem,calc(var(--search-viewport-height,100dvh)-var(--search-top-space)-1rem))] flex-col overflow-hidden rounded-3xl bg-dialog text-ink shadow-xl outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 transition-[opacity,transform] duration-200 ease-out [--search-top-space:max(1rem,env(safe-area-inset-top))] data-ending-style:translate-y-2 data-ending-style:opacity-0 data-starting-style:translate-y-2 data-starting-style:opacity-0 sm:inset-x-auto sm:left-1/2 sm:w-[calc(100%-3rem)] sm:max-w-4xl sm:-translate-x-1/2 sm:[--search-top-space:calc(var(--search-viewport-height,100dvh)*0.12)]"
        >
          <div className="flex shrink-0 items-center justify-between">
            <Dialog.Title className="sr-only text-sm font-medium">
              Search icons
            </Dialog.Title>
          </div>
          <Search
            value={value}
            onValueChange={setValue}
            inputRef={inputRef}
            select={(icon) => {
              selecting.current = true;
              onOpenChange(false);
              select(icon);
            }}
          />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
