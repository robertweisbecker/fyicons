import { Autocomplete } from '@base-ui/react/autocomplete';
import { Dialog } from '@base-ui/react/dialog';
import { useEffect, useRef, useState, type Ref, type RefObject } from 'react';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { searchIcons } from '@/lib/icon-search';
import { useCategoryReadiness } from '@/lib/category-readiness';
import { getIconDisplayName, icons, type IconRecord } from '@/lib/catalog';

const searchPlaceholder = `Search ${icons.length.toLocaleString('en-US')} icons…`;
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
  const [columns, setColumns] = useState(getSearchColumns);
  useEffect(() => {
    const queries = gridBreakpoints.map(({ query }) => matchMedia(query));
    const update = () => setColumns(getSearchColumns());
    queries.forEach((query) => query.addEventListener('change', update));
    return () => {
      queries.forEach((query) => query.removeEventListener('change', update));
    };
  }, []);
  return columns;
}

export function LibrarySearch({
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
      className="flex h-11 min-w-0 items-center gap-3 rounded-xl bg-surface px-3 shadow-sm ring-1 ring-line focus-within:ring-2 focus-within:ring-muted hover:not-focus-within:ring-border"
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
          icon="x"
          label="Clear search"
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
  inputRef?: Ref<HTMLInputElement>;
}) {
  useCategoryReadiness();
  const columns = useSearchColumns();
  const matches = searchIcons(icons, value);
  const results = matches.slice(0, 100);
  // Real rows keep Base UI's arrow-key navigation and grid semantics aligned
  // with the visible column count, including the final incomplete row.
  const rows = Array.from(
    { length: Math.ceil(results.length / columns) },
    (_, index) => results.slice(index * columns, (index + 1) * columns),
  );
  return (
    <Autocomplete.Root
      grid
      inline
      open
      items={matches}
      filteredItems={results}
      filter={null}
      value={value}
      onValueChange={(next, details) => {
        if (details.reason !== 'item-press') onValueChange(next);
      }}
      itemToStringValue={getIconDisplayName}
      autoHighlight="always"
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
          render={<IconButton icon="x" label="Clear search" />}
        />
      </Autocomplete.InputGroup>
      <Autocomplete.Empty className="text-center text-sm text-muted">
        <p className="px-4 py-12">No matching icons. Try another search.</p>
      </Autocomplete.Empty>
      <Autocomplete.List
        aria-label="Icon search results"
        className="min-h-0 space-y-2 overflow-y-auto overscroll-contain p-3 empty:hidden sm:p-4"
      >
        {rows.map((row) => (
          <Autocomplete.Row
            key={row[0].id}
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {row.map((icon) => (
              <Autocomplete.Item
                key={icon.id}
                value={icon}
                onClick={() => select(icon)}
                aria-label={getIconDisplayName(icon)}
                className="flex min-h-24 min-w-0 cursor-default flex-col items-center justify-center gap-3 rounded-xl bg-canvas px-2 py-4 outline-none data-highlighted:bg-selection data-highlighted:ring-2 data-highlighted:ring-focus data-highlighted:ring-inset sm:min-h-28"
              >
                <Icon name={icon.id} size={32} />
                <span
                  className="max-w-full truncate text-[11px] leading-4 text-muted"
                  title={getIconDisplayName(icon)}
                >
                  {getIconDisplayName(icon)}
                </span>
              </Autocomplete.Item>
            ))}
          </Autocomplete.Row>
        ))}
      </Autocomplete.List>
      <Autocomplete.Status className="shrink-0 border-t border-line px-4 py-3 text-xs text-muted">
        {matches.length.toLocaleString('en-US')} results
        {matches.length > results.length
          ? ` · First ${results.length} shown`
          : ''}
      </Autocomplete.Status>
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
            {/* <Dialog.Close
              render={
                <IconButton
                  icon="x"
                  label="Close search"
                  className="absolute top-1.5 right-1.5"
                />
              }
            /> */}
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
