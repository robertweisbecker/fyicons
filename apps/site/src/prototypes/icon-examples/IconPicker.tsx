'use client';

import { useMemo, useState, type RefObject } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { InputGroup } from '@/components/ui/input-group';
import { icons, byName } from '@/lib/catalog';
import { cn } from '@/lib/utils';

export function IconPicker({
  open,
  onOpenChange,
  target,
  current,
  suggestions,
  onPick,
  finalFocus,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  target: string;
  current: string;
  suggestions: string[];
  onPick: (name: string) => void;
  finalFocus: RefObject<HTMLElement | null>;
}) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState('suggested');
  const [limit, setLimit] = useState(60);
  const suggested = useMemo(
    () =>
      [...new Set(suggestions)]
        .map((name) => byName.get(name))
        .filter((icon) => !!icon),
    [suggestions],
  );
  const found = useMemo(() => {
    const term = query.trim().toLowerCase().replaceAll(' ', '-');
    const pool = scope === 'suggested' && !term ? suggested : icons;
    return pool.filter(
      (icon) =>
        icon.name.includes(term) ||
        icon.componentName.toLowerCase().includes(term.replaceAll('-', '')),
    );
  }, [query, scope, suggested]);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-80 bg-black/35 backdrop-blur-xs" />
        <Dialog.Popup
          finalFocus={finalFocus}
          className="fixed top-1/2 left-1/2 z-90 flex max-h-[85svh] w-[min(44rem,calc(100vw-2rem))] -translate-1/2 flex-col overflow-hidden rounded-2xl bg-surface text-ink shadow-2xl ring-1 ring-line"
        >
          <header className="flex items-start justify-between gap-4 px-5 pt-5">
            <div>
              <Dialog.Title className="text-lg font-medium">
                Choose an icon
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-muted">
                {target}
              </Dialog.Description>
            </div>
            <Dialog.Close
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close icon library"
                />
              }
            >
              <Icon name="x" />
            </Dialog.Close>
          </header>
          <div className="space-y-3 px-5 pt-4 pb-3">
            <Field.Root>
              <Field.Label className="sr-only">
                Search the icon library
              </Field.Label>
              <InputGroup className="flex-row items-center gap-2 rounded-lg px-3 py-2">
                <Icon name="search" className="text-muted" />
                <Field.Control
                  autoFocus
                  value={query}
                  onValueChange={(value) => {
                    setQuery(value);
                    setLimit(60);
                  }}
                  placeholder={`Search ${icons.length.toLocaleString()} icons…`}
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
                {query && (
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label="Clear icon search"
                    onClick={() => setQuery('')}
                  >
                    <Icon name="x" />
                  </Button>
                )}
              </InputGroup>
            </Field.Root>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <ToggleGroup
                value={[query ? 'all' : scope]}
                onValueChange={(values) => {
                  if (values[0]) {
                    setScope(values[0]);
                    setQuery('');
                    setLimit(60);
                  }
                }}
                aria-label="Icon library filter"
              >
                <Toggle value="suggested" size="sm">
                  Suggested
                </Toggle>
                <Toggle value="all" size="sm">
                  All icons
                </Toggle>
              </ToggleGroup>
              <span className="text-xs text-muted">
                {found.length.toLocaleString()} icons
              </span>
            </div>
          </div>
          <ScrollArea.Root className="min-h-0 flex-1">
            <ScrollArea.Viewport
              className="max-h-[48svh] overflow-y-auto overscroll-contain px-4 py-2"
              scrollFade={false}
            >
              <ScrollArea.Content>
                <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 md:grid-cols-6">
                  {found.slice(0, limit).map((icon) => (
                    <Button
                      key={icon.id}
                      variant="ghost"
                      size="unstyled"
                      aria-label={`Use ${icon.name}`}
                      aria-pressed={current === icon.name}
                      onClick={() => {
                        onPick(icon.name);
                        onOpenChange(false);
                      }}
                      className={cn(
                        'min-w-0 flex-col gap-3 rounded-xl px-2 py-4 text-center',
                        current === icon.name && 'bg-hover ring-1 ring-border',
                      )}
                    >
                      <Icon name={icon.name} size={24} />
                      <span className="w-full truncate text-[10px] text-muted">
                        {icon.name}
                      </span>
                    </Button>
                  ))}
                </div>
                {!found.length && (
                  <p className="px-2 py-10 text-center text-sm text-muted">
                    No icons match “{query}”. Try a different word.
                  </p>
                )}
                {found.length > limit && (
                  <div className="flex justify-center py-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLimit(limit + 60)}
                    >
                      Show more icons
                    </Button>
                  </div>
                )}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
          <footer className="border-t border-line px-5 py-3 text-xs text-muted">
            Choosing an icon updates only this slot’s selected state.
          </footer>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
