import { cn } from './lib/utils';
import {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { flushSync } from 'react-dom';
import { Icon } from './components/Icon';
import { Button } from '@/components/ui/button';
import { Popover } from '@base-ui/react/popover';
import { Switch } from '@/components/ui/switch';
import { SelectedIconsDialog } from '@/components/SelectedIconsDialog';
import { GlobalSearch, LibrarySearch } from './components/Search';
import { searchIcons } from './lib/icon-search';
import { IconTile } from './components/IconTile';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { PreviewSizeControl } from './components/PreviewSizeControl';
import { type Page } from './lib/navigation';
import { useLibraryNavigation } from './lib/use-library-navigation';
import { CategoryMenu, CategorySidebar } from './components/CategorySidebar';
import { notify } from './components/ui/toast';
import { Inspector } from './components/Inspector';
import { byId, icons, type IconRecord } from './lib/catalog';
import { downloadIcons } from './lib/downloads';
import { isStringArray, useMobile, usePreference } from './lib/preferences';

const Examples = lazy(() => import('./demos/Examples'));
const Landing = lazy(() => import('./home/Landing'));
const editable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest(
      '[role=combobox], [role=listbox], [role=menu], [data-slot=toggle-group], [role=slider], [role=separator], [data-selection-dialog], [data-display-popover]',
    ));

export function App() {
  const mobile = useMobile();
  const library = useLibraryNavigation();
  const {
    page: view,
    query,
    category,
    inspectedId,
    setQuery,
    setCategory,
  } = library;
  const [searchOpen, setSearchOpen] = useState(false);
  const { categoryReadiness } = library;
  const activeCategory =
    query.trim() || categoryReadiness.status === 'loading' ? 'all' : category;
  const [showFilled, setShowFilled] = useState(true);
  const [previewSize, setPreviewSize] = useState(32);
  const [inspectorDocked, setInspectorDocked] = useState(false);
  const gridAnchor = useRef<{ element: HTMLElement; top: number } | null>(null);
  // Retain the legacy storage key so existing saved choices remain selected.
  const [selectedIds, setSelectedIds] = usePreference<string[]>(
    'fyicons-shortlist-v1',
    [],
    isStringArray,
  );
  const [theme, setTheme] = usePreference<string>('fyicons-theme-v1', 'light');
  const [packing, setPacking] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  const globalSearchInput = useRef<HTMLInputElement>(null);
  const globalSearchReturnFocus = useRef<HTMLElement>(null);
  const lastSelected = useRef<string | null>(null);
  function openGlobalSearch(trigger?: HTMLElement) {
    const focused = trigger ?? document.activeElement;
    globalSearchReturnFocus.current =
      focused instanceof HTMLElement && focused !== document.body
        ? focused
        : null;
    // Focus within the tap gesture so mobile browsers can open the keyboard.
    flushSync(() => setSearchOpen(true));
    globalSearchInput.current?.focus({ preventScroll: true });
  }
  const visible = useMemo(() => {
    return searchIcons(
      icons.filter(
        (icon) =>
          (activeCategory === 'all' ||
            icon.categories.includes(activeCategory)) &&
          (showFilled || !icon.name.split('-').includes('fill')),
      ),
      query,
    );
  }, [query, activeCategory, showFilled, categoryReadiness.version]);
  const selectedIcons = useMemo(
    () =>
      selectedIds.flatMap((id) => {
        const icon = byId.get(id);
        return icon ? [icon] : [];
      }),
    [selectedIds],
  );
  const current = byId.get(inspectedId ?? '') ?? null;
  // Keep the inspected tile (or the first visible tile) in place when columns reflow.
  function preserveGridPosition(preferredId = inspectedId) {
    if (!matchMedia('(min-width: 768px)').matches) return;
    const headerBottom =
      document.querySelector('.library-tools')?.getBoundingClientRect()
        .bottom ??
      document.querySelector('header')?.getBoundingClientRect().bottom ??
      0;
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
    library.inspect(null);
  }
  function changeInspectorDocked(docked: boolean) {
    preserveGridPosition();
    setInspectorDocked(docked);
  }
  function select(icon: IconRecord) {
    if (!current && inspectorDocked) preserveGridPosition(icon.id);
    lastSelected.current = icon.id;
    library.inspect(icon.id);
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
  function changeView(value: Page, event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    if (value === view) return;
    library.changePage(value);
    window.scrollTo(0, 0);
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
    library.reset();
    setShowFilled(true);
    search.current?.focus();
  }
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // Legacy browser chrome follows the selected theme; Safari 26 samples the
    // opaque header and bottom edge in CSS instead of this metadata.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#f5f5f5');
  }, [theme]);
  const previousReadiness = useRef(categoryReadiness);
  useEffect(() => {
    if (previousReadiness.current !== categoryReadiness) {
      previousReadiness.current = categoryReadiness;
      return; // Metadata arrival must not replace a user's current inspection.
    }
    if (
      inspectedId &&
      !library.icon &&
      !visible.some((icon) => icon.id === inspectedId)
    ) {
      if (visible[0]) select(visible[0]);
      else library.inspect(null);
    }
  }, [visible, inspectedId, library.icon, categoryReadiness]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (
        !editable(event.target) &&
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault();
        if (searchOpen) setSearchOpen(false);
        else openGlobalSearch();
        return;
      }
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        editable(event.target)
      )
        return;
      if (event.key === '/') {
        event.preventDefault();
        openGlobalSearch();
      }
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
  useEffect(() => {
    document.title = `fyicons — ${view === 'home' ? '16×16 icons' : view === 'examples' ? 'Examples' : 'Library'}`;
  }, [view]);
  const displayOptions = (
    <>
      <PreviewSizeControl value={previewSize} onChange={setPreviewSize} />
      <label className="flex cursor-pointer items-center justify-between gap-3 text-xs text-ink">
        Include filled variants
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
        'group/app pt-(--site-header-height)',
        current && 'max-md:pb-[calc(12rem+env(safe-area-inset-bottom))]',
        current && inspectorDocked && 'has-docked-inspector',
      )}
    >
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
        className="sr-only fixed top-2 left-2 z-50 rounded bg-ink px-4 py-3 text-canvas focus:not-sr-only"
      >
        Skip to content
      </a>
      <SiteHeader
        page={view}
        navigate={changeView}
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        search={(event) => openGlobalSearch(event.currentTarget)}
      />
      <GlobalSearch
        open={searchOpen}
        onOpenChange={setSearchOpen}
        inputRef={globalSearchInput}
        returnFocusRef={globalSearchReturnFocus}
        select={(icon) => {
          if (!current && inspectorDocked) preserveGridPosition(icon.id);
          setShowFilled(true);
          lastSelected.current = icon.id;
          library.openSearchResult(icon.id);
        }}
      />
      <div className="flex items-start">
        <div className="min-w-0 flex-1">
          <main
            id="main-content"
            tabIndex={-1}
            className={cn(
              'mx-auto px-4 pb-10 sm:px-6',
              view === 'home' ? 'max-w-7xl' : 'max-w-400',
            )}
          >
            {view === 'home' ? (
              <Suspense
                fallback={
                  <p className="mx-auto py-20 text-center text-sm text-muted">
                    <Icon name="spinner" className="inline animate-spin" />{' '}
                    Loading…
                  </p>
                }
              >
                <Landing
                  navigate={changeView}
                  packing={packing}
                  download={() => exportIcons()}
                />
              </Suspense>
            ) : view === 'library' ? (
              <div
                id="library"
                className="flex flex-col gap-6 pt-4 [--category-sidebar-width:13rem] lg:grid lg:min-h-[calc(100dvh-3.5rem)] lg:grid-cols-[var(--category-sidebar-width)_minmax(0,1fr)_var(--category-sidebar-width)] lg:group-[.has-docked-inspector]/app:grid-cols-[var(--category-sidebar-width)_minmax(0,1fr)]"
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
                  <div className="library-tools sticky top-(--site-header-height) z-20 -mx-1 flex items-center gap-2 px-1 py-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-bottom-5 before:-z-10 before:bg-linear-to-b before:from-canvas before:from-65% before:to-transparent">
                    <CategoryMenu
                      value={activeCategory}
                      onValueChange={setCategory}
                    />
                    <div className="min-w-0 flex-1">
                      <LibrarySearch
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
                  <div
                    className={cn(
                      'mb-4 flex min-h-9 items-center justify-between gap-4 text-xs text-muted',
                    )}
                  >
                    <p role="status">
                      {visible.length} of {icons.length} icons
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
                  <div
                    className={cn(
                      'icon-grid group/grid grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-2 md:grid-cols-[repeat(auto-fill,minmax(128px,1fr))] [&.large]:grid-cols-[repeat(auto-fill,minmax(156px,1fr))]',
                      previewSize > 40 && 'large',
                    )}
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
                          inspectedId === icon.id
                            ? closeInspector()
                            : select(icon)
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
              </div>
            ) : (
              <div id="examples">
                <Suspense
                  fallback={
                    <p className={cn('py-10 text-sm text-muted')}>
                      Loading UI examples…
                    </p>
                  }
                >
                  <Examples />
                </Suspense>
              </div>
            )}
          </main>
          <SiteFooter page={view} navigate={changeView} />
        </div>
        <Inspector
          item={current}
          visible={visible}
          selectedIds={selectedIds}
          select={select}
          navigate={navigate}
          close={closeInspector}
          share={library.share}
          docked={inspectorDocked}
          onDockedChange={changeInspectorDocked}
          onCategoryChange={setCategory}
          toggleSelection={toggleSelection}
          finalFocus={() =>
            view === 'library'
              ? (document.querySelector<HTMLElement>(
                  '[data-id="' + lastSelected.current + '"]',
                ) ??
                search.current ??
                false)
              : false
          }
        />
      </div>
    </div>
  );
}
