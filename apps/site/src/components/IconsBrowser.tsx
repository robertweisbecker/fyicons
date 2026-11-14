'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Popover } from '@base-ui/react/popover';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SelectedIconsDialog } from './SelectedIconsDialog';
import { IconSearch } from './Search';
import { searchIcons, type IconSort } from '@/lib/icon-search';
import { IconTile } from './IconTile';
import { PreviewSizeControl } from './PreviewSizeControl';
import { useIconFilters } from '@/lib/use-icon-filters';
import { CategoryMenu, CategorySidebar } from './CategorySidebar';
import { notify } from './ui/toast';
import { Inspector } from './Inspector';
import { byId, icons, type IconRecord } from '@/lib/catalog';
import { downloadIcons } from '@/lib/downloads';
import { isStringArray, useMobile, usePreference } from '@/lib/preferences';
import { isEditableTarget } from '@/lib/keyboard';

const sortOptions = {
  alphabetical: { label: 'Name (A to Z)', icon: 'sort-down' },
  addedAt: { label: 'Newest', icon: 'fire-alt-fill' },
  updatedAt: { label: 'Last updated', icon: 'history' },
} satisfies Record<IconSort, { label: string; icon: string }>;
const sortItems = Object.entries(sortOptions).map(([value, option]) => ({
  ...option,
  value: value as IconSort,
}));

export function IconsBrowser() {
  const mobile = useMobile();
  const filters = useIconFilters();
  const {
    query,
    category,
    inspectedId,
    setQuery,
    setCategory,
    categoryReadiness,
  } = filters;
  const activeCategory =
    query.trim() || categoryReadiness.status === 'loading' ? 'all' : category;
  const [showFilled, setShowFilled] = useState(true);
  const [previewSize, setPreviewSize] = useState(32);
  const [sort, setSort] = useState<IconSort>('alphabetical');
  const [inspectorDocked, setInspectorDocked] = usePreference<boolean>(
    'fyicons-inspector-docked-v1',
    false,
    (value): value is boolean => typeof value === 'boolean',
  );
  const gridAnchor = useRef<{ element: HTMLElement; top: number } | null>(null);
  // Retain the legacy storage key so existing saved choices remain selected.
  const [selectedIds, setSelectedIds] = usePreference<string[]>(
    'fyicons-shortlist-v1',
    [],
    isStringArray,
  );
  const [packing, setPacking] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  const lastSelected = useRef<string | null>(null);
  const visible = useMemo(() => {
    return searchIcons(
      icons.filter(
        (icon) =>
          (activeCategory === 'all' ||
            icon.categories.includes(activeCategory)) &&
          (showFilled || !icon.name.split('-').includes('fill')),
      ),
      query,
      sort,
    );
  }, [query, activeCategory, showFilled, categoryReadiness.version, sort]);
  const selectedIcons = useMemo(
    () =>
      selectedIds.flatMap((id) => {
        const icon = byId.get(id);
        return icon ? [icon] : [];
      }),
    [selectedIds],
  );
  const current = byId.get(inspectedId ?? '') ?? null;
  // Keep the inspected tile visible when only the icon grid changes columns.
  function preserveGridPosition(preferredId = inspectedId) {
    if (!matchMedia('(min-width: 768px)').matches) return;
    const headerBottom =
      document.querySelector('.icon-browser-tools')?.getBoundingClientRect()
        .bottom ?? 0;
    const isVisible = (tile: HTMLElement) => {
      const rect = tile.getBoundingClientRect();
      return rect.top >= headerBottom && rect.bottom <= window.innerHeight;
    };
    const preferred = document.querySelector<HTMLElement>(
      '.icon-tile[data-id="' + preferredId + '"]',
    );
    const element =
      preferred && isVisible(preferred)
        ? preferred
        : Array.from(document.querySelectorAll<HTMLElement>('.icon-tile')).find(
            isVisible,
          );
    if (element)
      gridAnchor.current = {
        element,
        top: element.getBoundingClientRect().top,
      };
  }
  useLayoutEffect(() => {
    const anchor = gridAnchor.current;
    if (!anchor) return;
    gridAnchor.current = null;
    if (anchor.element.isConnected)
      window.scrollBy(
        0,
        anchor.element.getBoundingClientRect().top - anchor.top,
      );
  }, [current, inspectorDocked]);
  function closeInspector() {
    if (inspectorDocked) preserveGridPosition();
    filters.inspect(null);
  }
  function changeInspectorDocked(docked: boolean) {
    preserveGridPosition();
    setInspectorDocked(docked);
  }
  function select(icon: IconRecord) {
    if (!current && inspectorDocked) preserveGridPosition(icon.id);
    lastSelected.current = icon.id;
    filters.inspect(icon.id);
  }
  function navigate(step: number) {
    const index = visible.findIndex((icon) => icon.id === inspectedId);
    if (index < 0) return;
    const next = visible[index + step];
    if (next) {
      select(next);
      if (matchMedia('(min-width: 768px)').matches)
        document
          .querySelector<HTMLElement>('[data-id="' + next.id + '"]')
          ?.scrollIntoView({ block: 'nearest' });
    }
  }
  function toggleSelection(id: string) {
    if (mobile) return;
    setSelectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((value) => value !== id)
        : [...previous, id],
    );
  }
  async function exportIcons(onlySelected = false) {
    if (onlySelected && (mobile || !selectedIcons.length)) return false;
    setPacking(true);
    try {
      await downloadIcons(
        onlySelected ? selectedIcons : icons,
        onlySelected ? 'fyicons-selected.zip' : 'fyicons.zip',
      );
      return true;
    } catch {
      notify('Download failed. Please try again.');
      return false;
    } finally {
      setPacking(false);
    }
  }
  function reset() {
    filters.reset();
    setShowFilled(true);
    search.current?.focus();
  }
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        isEditableTarget(event.target)
      )
        return;
      if (
        inspectedId &&
        ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
      ) {
        event.preventDefault();
        navigate(event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1);
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  });
  const sortControl = (
    <Select
      size="sm"
      items={sortItems}
      value={sort}
      onValueChange={(value) => {
        if (value !== null) setSort(value);
      }}
    >
      <SelectTrigger
        aria-label={`Sort icons by ${sortOptions[sort].label}`}
        variant="text"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent aria-label="Sort icons by">
        {sortItems.map(({ value, label, icon }) => (
          <SelectItem
            key={value}
            value={value}
            leading={<Icon name={icon} className="text-muted" />}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
  const displayOptions = (
    <>
      <div className="flex items-center justify-between gap-3 text-xs text-ink md:hidden">
        <span>Sort</span>
        {sortControl}
      </div>
      <PreviewSizeControl value={previewSize} onChange={setPreviewSize} />
      <label className="flex items-center justify-between gap-3 text-xs text-ink">
        Show filled variants
        <Switch
          size="sm"
          checked={showFilled}
          onCheckedChange={setShowFilled}
        />
      </label>
    </>
  );
  return (
    <div
      className={cn(
        '[--icon-browser-max-width:100rem]',
        current && 'max-md:pb-[calc(12rem+env(safe-area-inset-bottom))]',
      )}
    >
      <div className="mx-auto max-w-(--icon-browser-max-width) min-w-0 px-4 pb-10 sm:px-6">
        <div
          id="icons"
          className="flex flex-col gap-6 pt-4 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-0 lg:min-h-[calc(100dvh-3.5rem)] lg:grid-cols-[calc(var(--sidebar-width)+1.5rem)_minmax(0,1fr)_auto]"
        >
          <CategorySidebar
            value={activeCategory}
            onValueChange={setCategory}
            displayControls={displayOptions}
          />
          <div className="w-full min-w-0">
            {categoryReadiness.error && (
              <p role="alert" className="mb-4 text-sm text-muted">
                {categoryReadiness.error}
              </p>
            )}
            <h1 className="sr-only">Icons</h1>
            <>
              <div className="icon-browser-tools sticky top-(--site-header-height) z-20 -mx-1 flex items-center gap-2 bg-canvas px-1 py-4">
                <div className="min-w-0 flex-1">
                  <IconSearch
                    value={query}
                    onValueChange={setQuery}
                    inputRef={search}
                  />
                </div>
                <div className="shrink-0 lg:hidden">
                  <Popover.Root>
                    <Popover.Trigger
                      aria-label="Display options"
                      render={
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-11 rounded-xl data-popup-open:bg-hover"
                        />
                      }
                    >
                      <Icon name="sliders" />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Positioner
                        align="end"
                        sideOffset={8}
                        collisionPadding={16}
                        className="z-70"
                      >
                        <Popover.Popup
                          data-display-popover=""
                          className="flex w-60 max-w-[calc(100vw-2rem)] flex-col gap-5 rounded-xl bg-surface p-4 text-ink shadow-xl outline-1 outline-ink/10 [&>div]:w-full"
                        >
                          <Popover.Title className="sr-only">
                            Display options
                          </Popover.Title>
                          {displayOptions}
                        </Popover.Popup>
                      </Popover.Positioner>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
              </div>
              {/* The search row is h-11 with py-4, so this row sticks directly below it. */}
              <div className="sticky top-[calc(var(--site-header-height)+4.75rem)] z-20 -mx-1 mb-4 flex min-h-9 items-center justify-between gap-x-2 bg-canvas px-1 pb-2 text-xs text-muted before:pointer-events-none before:absolute before:inset-x-0 before:top-full before:h-4 before:bg-linear-to-b before:from-canvas before:to-transparent">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="hidden shrink-0 md:block">{sortControl}</div>
                  <CategoryMenu
                    value={activeCategory}
                    onValueChange={setCategory}
                  />
                </div>
                <p
                  role="status"
                  aria-label="Matching icons"
                  className="shrink-0 tabular-nums"
                >
                  {visible.length.toLocaleString('en-US')}{' '}
                  {visible.length === 1 ? 'icon' : 'icons'}
                </p>
                {!mobile && (
                  <SelectedIconsDialog
                    icons={selectedIcons}
                    onRemove={toggleSelection}
                    onClear={() => setSelectedIds([])}
                    onDownload={() => exportIcons(true)}
                    packing={packing}
                  />
                )}
              </div>
            </>
            <div
              className="icon-grid grid grid-cols-[repeat(auto-fill,minmax(min(100%,var(--tile-min-size)),1fr))] gap-2 [--tile-min-size:max(4rem,calc(var(--preview-size)+1rem))] md:[--tile-min-size:clamp(4rem,calc(var(--preview-size)*4),10rem)]"
              style={
                {
                  '--preview-size': `${previewSize}px`,
                } as React.CSSProperties
              }
            >
              {visible.map((icon) => (
                <IconTile
                  key={icon.id}
                  icon={icon}
                  inspected={inspectedId === icon.id}
                  selected={!mobile && selectedIds.includes(icon.id)}
                  inspect={() =>
                    inspectedId === icon.id ? closeInspector() : select(icon)
                  }
                  toggleSelection={
                    mobile ? undefined : () => toggleSelection(icon.id)
                  }
                />
              ))}
            </div>
            {!visible.length && (
              <div
                className={cn(
                  'flex min-h-70 flex-col items-center justify-center gap-4',
                )}
              >
                <Icon name="search" />
                <h2 className={cn('text-lg font-semibold')}>
                  No matching icons
                </h2>
                <p className={cn('text-sm text-muted')}>
                  Try another search or filter.
                </p>
                <Button variant="outline" onClick={reset}>
                  Reset filters
                </Button>
              </div>
            )}
          </div>
          <Inspector
            item={current}
            visible={visible}
            selectedIds={selectedIds}
            select={select}
            navigate={navigate}
            close={closeInspector}
            share={filters.share}
            docked={inspectorDocked}
            onDockedChange={changeInspectorDocked}
            onCategoryChange={setCategory}
            toggleSelection={toggleSelection}
            finalFocus={() =>
              document.querySelector<HTMLElement>(
                '[data-id="' + lastSelected.current + '"]',
              ) ??
              search.current ??
              false
            }
          />
        </div>
      </div>
    </div>
  );
}
