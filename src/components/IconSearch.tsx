import { Autocomplete } from '@base-ui/react/autocomplete';
import { Dialog } from '@base-ui/react/dialog';
import { useRef, useState, type Ref } from 'react';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { cn } from '@/lib/utils';
import {
  getIconDisplayName,
  getIconCategoryLabel,
  icons,
  type IconRecord,
} from '@/lib/catalog';

export function matchesIcon(icon: IconRecord, query: string) {
  const text =
    `${getIconDisplayName(icon)} ${icon.name} ${icon.originalName} ${getIconCategoryLabel(icon)} ${icon.id}`.toLowerCase();
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .every((word) => text.includes(word));
}
const alphabetical = [...icons].sort((a, b) =>
  getIconDisplayName(a).localeCompare(getIconDisplayName(b), 'en', {
    numeric: true,
    sensitivity: 'base',
  }),
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
  const [popupOpen, setPopupOpen] = useState(false);
  const queryReady = value.replace(/\s/g, '').length >= 3;
  const matches = items.filter((icon) => matchesIcon(icon, value));
  const results = matches.slice(0, inline ? 100 : 8);
  const list = (
    <>
      <Autocomplete.Empty className="text-center text-sm text-muted">
        <p className="p-6">No matching icons.</p>
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
            <span className="min-w-0 flex-1 truncate">
              {getIconDisplayName(icon)}
            </span>
            <span
              className="max-w-1/2 truncate text-xs text-muted"
              title={getIconCategoryLabel(icon)}
            >
              {getIconCategoryLabel(icon)}
            </span>
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
      itemToStringValue={getIconDisplayName}
      autoHighlight={inline ? 'always' : true}
      openOnInputClick={queryReady}
      inline={inline && queryReady}
      open={queryReady && (inline || popupOpen)}
      onOpenChange={setPopupOpen}
    >
      <Autocomplete.InputGroup
        className={cn(
          'flex min-w-0 items-center gap-3 bg-surface px-3',
          inline
            ? 'h-11 shrink-0 border-b border-line'
            : 'h-10 rounded-xl shadow-sm ring-1 ring-line focus-within:ring-2 focus-within:ring-muted hover:not-focus-within:ring-border',
        )}
      >
        <Icon name="search" />
        <Autocomplete.Input
          ref={inputRef}
          type="search"
          aria-label={inline ? 'Search all icons' : 'Search icons'}
          placeholder="Search icons…"
          className="h-full min-w-0 flex-1 bg-transparent py-0 text-base outline-none placeholder:text-muted/50 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <Autocomplete.Clear
          render={<IconButton icon="xmark" label="Clear search" />}
        />
        {!inline && (
          <kbd className="p-px">
            <Icon name="slash-sm" aria-label="Slash" size={16} />
          </kbd>
        )}
      </Autocomplete.InputGroup>
      {queryReady &&
        (inline ? (
          list
        ) : (
          <Autocomplete.Portal>
            <Autocomplete.Positioner sideOffset={6} className="z-70">
              <Autocomplete.Popup className="flex max-h-[min(28rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden rounded-xl bg-surface text-ink shadow-xl outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0">
                {list}
              </Autocomplete.Popup>
            </Autocomplete.Positioner>
          </Autocomplete.Portal>
        ))}
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
        <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/10 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          initialFocus={input}
          finalFocus={() => !selecting.current}
          className="fixed inset-x-3 top-[max(1rem,env(safe-area-inset-top))] z-70 flex max-h-[min(36rem,80dvh)] flex-col overflow-hidden rounded-2xl bg-surface text-ink shadow-xl outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 transition-[opacity,transform] duration-200 ease-out data-ending-style:translate-y-2 data-ending-style:opacity-0 data-starting-style:translate-y-2 data-starting-style:opacity-0 sm:inset-x-auto sm:top-[15dvh] sm:left-1/2 sm:w-xl sm:-translate-x-1/2"
        >
          <div className="flex shrink-0 items-center justify-between">
            <Dialog.Title className="sr-only text-sm font-medium">
              Find an icon
            </Dialog.Title>
            {/* <Dialog.Close
              render={
                <IconButton
                  icon="xmark"
                  label="Close search"
                  className="absolute top-1.5 right-1.5"
                />
              }
            /> */}
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
