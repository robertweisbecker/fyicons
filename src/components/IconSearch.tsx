import { Autocomplete } from '@base-ui/react/autocomplete';
import { Dialog } from '@base-ui/react/dialog';
import { useRef, useState, type Ref } from 'react';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { cn } from '@/lib/utils';
import { icons, type IconRecord } from '@/lib/catalog';

export function matchesIcon(icon: IconRecord, query: string) {
  const text =
    `${icon.name} ${icon.originalName} ${icon.category} ${icon.id}`.toLowerCase();
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .every((word) => text.includes(word));
}
const alphabetical = [...icons].sort((a, b) =>
  a.name.localeCompare(b.name, 'en', { numeric: true, sensitivity: 'base' }),
);

export function IconSearch({
  value,
  onValueChange,
  select,
  items = alphabetical,
  inline = false,
  inputRef,
}: {
  value: string;
  onValueChange: (value: string) => void;
  select: (icon: IconRecord) => void;
  items?: IconRecord[];
  inline?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}) {
  const matches = items.filter((icon) => matchesIcon(icon, value));
  const results = matches.slice(0, inline ? 100 : 8);
  const list = (
    <>
      <Autocomplete.Empty className="p-6 text-center text-sm text-muted">
        No matching icons.
      </Autocomplete.Empty>
      <Autocomplete.List className="min-h-0 overflow-y-auto overscroll-contain p-1.5">
        {(icon: IconRecord) => (
          <Autocomplete.Item
            key={icon.id}
            value={icon}
            onClick={() => select(icon)}
            className="flex min-h-11 cursor-default items-center gap-3 rounded-lg px-3 text-sm outline-none data-highlighted:bg-hover"
          >
            <Icon name={icon.id} />
            <span className="min-w-0 flex-1 truncate">{icon.name}</span>
            <span className="text-xs text-muted">{icon.category}</span>
          </Autocomplete.Item>
        )}
      </Autocomplete.List>
      <Autocomplete.Status className="border-t border-line px-4 py-2 text-xs text-muted">
        {matches.length} matching icons
        {matches.length > results.length
          ? ` · First ${results.length} shown`
          : ''}
      </Autocomplete.Status>
    </>
  );
  return (
    <Autocomplete.Root
      items={items}
      filteredItems={results}
      filter={null}
      value={value}
      onValueChange={(next, details) => {
        if (details.reason !== 'item-press') onValueChange(next);
      }}
      itemToStringValue={(icon) => icon.name}
      autoHighlight={inline ? 'always' : true}
      openOnInputClick
      inline={inline}
      open={inline ? true : undefined}
    >
      <Autocomplete.InputGroup
        className={cn(
          'flex min-h-11 min-w-0 items-center gap-3 bg-surface px-3 focus-within:ring-2 focus-within:ring-muted',
          inline
            ? 'shrink-0 border-b border-line'
            : 'rounded-lg border border-line',
        )}
      >
        <Icon name="search-1" />
        <Autocomplete.Input
          ref={inputRef}
          type="search"
          aria-label={inline ? 'Search all icons' : 'Search icons'}
          placeholder="Search icons…"
          className="min-w-0 flex-1 bg-transparent py-3 text-base outline-none placeholder:text-muted sm:text-sm"
        />
        <Autocomplete.Clear
          render={<IconButton icon="xmark" label="Clear search" />}
        />
        {!inline && <kbd>/</kbd>}
      </Autocomplete.InputGroup>
      {inline ? (
        list
      ) : (
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={6} className="z-70">
            <Autocomplete.Popup className="flex max-h-[min(28rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden rounded-xl border border-line bg-surface text-ink shadow-xl transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0">
              {list}
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      )}
    </Autocomplete.Root>
  );
}
export function GlobalSearch({
  open,
  onOpenChange,
  select,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  select: (icon: IconRecord) => void;
}) {
  const [value, setValue] = useState('');
  const input = useRef<HTMLInputElement>(null);
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
        <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/30 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          initialFocus={input}
          finalFocus={() => !selecting.current}
          className="fixed inset-x-3 top-[max(1rem,env(safe-area-inset-top))] z-70 flex max-h-[min(36rem,80dvh)] flex-col overflow-hidden rounded-2xl border border-line bg-surface text-ink shadow-xl transition-[opacity,transform] duration-200 ease-out outline-none data-ending-style:translate-y-2 data-ending-style:opacity-0 data-starting-style:translate-y-2 data-starting-style:opacity-0 sm:inset-x-auto sm:top-[15dvh] sm:left-1/2 sm:w-xl sm:-translate-x-1/2"
        >
          <div className="flex shrink-0 items-center justify-between px-4 py-2">
            <Dialog.Title className="text-sm font-medium">
              Find an icon
            </Dialog.Title>
            <Dialog.Close
              render={
                <IconButton
                  icon="xmark"
                  label="Close search"
                  className="size-11"
                />
              }
            />
          </div>
          <IconSearch
            inline
            value={value}
            onValueChange={setValue}
            inputRef={input}
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
