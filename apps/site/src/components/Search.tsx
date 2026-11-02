import { Autocomplete } from '@base-ui/react/autocomplete';
import { Dialog } from '@base-ui/react/dialog';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { useEffect, useRef, useState, type Ref, type RefObject } from 'react';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { Button } from '@/components/ui/button';
import { searchIcons } from '@/lib/icon-search';
import { useCategoryReadiness } from '@/lib/category-readiness';
import { getIconDisplayName, icons, type IconRecord } from '@/lib/catalog';

const searchPlaceholder = `Search ${icons.length.toLocaleString('en-US')} icons…`;
const searchPageSize = 100;
const gridBreakpoints = [
  { query: '(min-width: 64rem)', columns: 8 },
  { query: '(min-width: 40rem)', columns: 6 },
  { query: '(min-width: 30rem)', columns: 4 },
];

function getSearchColumns() {
  return (
    gridBreakpoints.find(({ query }) => matchMedia(query).matches)?.columns ?? 3
  );
}

function useSearchColumns() {
  const [columns, setColumns] = useState(8);
  useEffect(() => {
    const queries = gridBreakpoints.map(({ query }) => matchMedia(query));
    const update = () => setColumns(getSearchColumns());
    update();
    queries.forEach((query) => query.addEventListener('change', update));
    return () => {
      queries.forEach((query) => query.removeEventListener('change', update));
    };
  }, []);
  return columns;
}

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
      <Icon name="search" />
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

function SearchResults({ select }: { select: (icon: IconRecord) => void }) {
  const columns = useSearchColumns();
  const results = Autocomplete.useFilteredItems<IconRecord>();
  // Real rows keep Base UI's arrow-key navigation and grid semantics aligned
  // with the visible column count, including the final incomplete row.
  const rows = Array.from(
    { length: Math.ceil(results.length / columns) },
    (_, index) => results.slice(index * columns, (index + 1) * columns),
  );
  return rows.map((row) => (
    <Autocomplete.Row
      key={row[0].id}
      className="grid gap-0"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {row.map((icon) => (
        <Autocomplete.Item
          key={icon.id}
          value={icon}
          onClick={() => select(icon)}
          aria-label={getIconDisplayName(icon)}
          className="relative flex min-h-24 min-w-0 cursor-default flex-col items-center justify-center gap-3 px-4 pt-4 pb-1 outline-none after:absolute after:inset-1 after:-z-1 after:rounded-xl after:bg-current/5 data-highlighted:after:bg-current/10 data-highlighted:after:outline-2 data-highlighted:after:-outline-offset-1 data-highlighted:after:outline-current"
        >
          <Icon name={icon.id} size={16} />
          <span
            className="max-w-full truncate text-[11px] leading-3 text-muted/50"
            title={getIconDisplayName(icon)}
          >
            {getIconDisplayName(icon)}
          </span>
        </Autocomplete.Item>
      ))}
    </Autocomplete.Row>
  ));
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
  inputRef?: Ref<HTMLInputElement>;
}) {
  useCategoryReadiness();
  const [limit, setLimit] = useState(searchPageSize);
  const matches = searchIcons(icons, value);
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
    >
      <Autocomplete.InputGroup className="flex h-14 min-w-0 shrink-0 items-center gap-3 border-b border-line px-4">
        <Icon name="search" />
        <Autocomplete.Input
          ref={inputRef}
          type="search"
          aria-label="Search all icons"
          placeholder={searchPlaceholder}
          className="h-full min-w-0 flex-1 bg-transparent py-0 text-base outline-none placeholder:text-muted sm:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <Autocomplete.Clear
          aria-label="Clear search"
          tabIndex={0}
          render={<Button variant="text" size="sm" />}
        >
          Clear
        </Autocomplete.Clear>
        <Dialog.Close render={<IconButton icon="x" label="Close search" />} />
      </Autocomplete.InputGroup>
      <Autocomplete.Empty className="text-center text-sm text-muted">
        <p className="px-4 py-12">No matching icons. Try another search.</p>
      </Autocomplete.Empty>
      <ScrollArea.Root className="group/search-scroll flex min-h-0 flex-1 flex-col">
        <ScrollArea.Viewport className="min-h-0 flex-1 overscroll-y-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-muted">
          <Autocomplete.List
            render={<ScrollArea.Content />}
            aria-label="Icon search results"
            className="min-w-0! p-3 empty:hidden sm:p-4"
          >
            <SearchResults select={select} />
          </Autocomplete.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="flex w-1.5 justify-center opacity-0 group-has-[:focus-visible]/search-scroll:opacity-100 data-hovering:opacity-100 data-scrolling:opacity-100">
          <ScrollArea.Thumb className="w-1 rounded-full bg-muted/50" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line px-4 py-3">
        <Autocomplete.Status className="text-xs text-muted">
          {shownCount < matches.length
            ? `${shownCount.toLocaleString('en-US')} of `
            : ''}
          {matches.length.toLocaleString('en-US')} results
        </Autocomplete.Status>
        {matches.length > searchPageSize && (
          <Button
            variant="neutral"
            size="sm"
            disabled={moreCount === 0}
            focusableWhenDisabled
            onClick={() => setLimit((current) => current + searchPageSize)}
            className="data-disabled:opacity-40"
          >
            {moreCount > 0 ? `Load ${moreCount} more` : 'All results shown'}
          </Button>
        )}
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
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        selecting.current = false;
        onOpenChange(next);
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/10 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          initialFocus={inputRef}
          finalFocus={() =>
            selecting.current ? false : returnFocusRef.current
          }
          className="fixed inset-x-3 top-[max(1rem,env(safe-area-inset-top))] z-70 flex max-h-[min(40rem,80dvh)] flex-col overflow-hidden rounded-2xl bg-surface text-ink shadow-xl outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 transition-[opacity,transform] duration-200 ease-out data-ending-style:translate-y-2 data-ending-style:opacity-0 data-starting-style:translate-y-2 data-starting-style:opacity-0 sm:inset-x-auto sm:top-[12dvh] sm:left-1/2 sm:w-[calc(100%-3rem)] sm:max-w-4xl sm:-translate-x-1/2"
        >
          <div className="flex shrink-0 items-center justify-between">
            <Dialog.Title className="sr-only text-sm font-medium">
              Find an icon
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
