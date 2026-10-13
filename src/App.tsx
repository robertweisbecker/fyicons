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
import { Icon } from './components/Icon';
import { Button } from '@/components/ui/button';
import { FilterSelect } from '@/components/FilterSelect';
import { GlobalSearch, IconSearch, matchesIcon } from './components/IconSearch';
import { IconTile } from './components/IconTile';
import { SiteHeader } from './components/SiteHeader';
import { PreviewSizeControl } from './components/PreviewSizeControl';
import { pageFromLocation, pageHref, type Page } from './lib/navigation';
import { CategorySidebar } from './components/CategorySidebar';
import { notify } from './components/ui/toast';
import { Inspector } from './components/Inspector';
import {
  byId,
  getIconDisplayName,
  icons,
  type IconRecord,
} from './lib/catalog';
import { downloadIcons } from './lib/downloads';
import { useMobile, usePreference } from './lib/preferences';
import { Badge } from './components/ui/badge';

const Examples = lazy(() => import('./demos/Examples'));
const Landing = lazy(() => import('./home/Landing'));
const editable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest(
      '[role=combobox], [role=listbox], [role=menu], [data-slot=toggle-group], [role=slider], [role=separator]',
    ));

export function App({ categoryError }: { categoryError?: string }) {
  const mobile = useMobile();
  const [view, setView] = useState(pageFromLocation);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState('all');
  const [review, setReview] = useState('all');
  const activeReview = mobile && review === 'selected' ? 'all' : review;
  const [previewSize, setPreviewSize] = useState(16);
  const [inspectedId, setInspectedId] = useState<string | null>(null);
  const [inspectorDocked, setInspectorDocked] = useState(false);
  const gridAnchor = useRef<{ element: HTMLElement; top: number } | null>(null);
  // Retain the legacy storage key so existing saved choices remain selected.
  const [selectedIds, setSelectedIds] = usePreference<string[]>(
    'fyicons-shortlist-v1',
    [],
  );
  const [theme, setTheme] = usePreference<string>('fyicons-theme-v1', 'light');
  const [packing, setPacking] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  const lastSelected = useRef<string | null>(null);
  const visible = useMemo(() => {
    return icons
      .filter(
        (icon) =>
          (category === 'all' || icon.categories.includes(category)) &&
          (activeReview === 'all' ||
            (activeReview === 'duplicates'
              ? icon.duplicate
              : selectedIds.includes(icon.id))) &&
          matchesIcon(icon, query),
      )
      .sort((a, b) =>
        getIconDisplayName(a).localeCompare(getIconDisplayName(b), 'en', {
          numeric: true,
          sensitivity: 'base',
        }),
      );
  }, [query, category, activeReview, selectedIds]);
  const current = byId.get(inspectedId ?? '') ?? null;
  // Keep the inspected tile (or the first visible tile) in place when columns reflow.
  function preserveGridPosition(preferredId = inspectedId) {
    if (!matchMedia('(min-width: 768px)').matches) return;
    const headerBottom =
      document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
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
    setInspectedId(null);
  }
  function changeInspectorDocked(docked: boolean) {
    preserveGridPosition();
    setInspectorDocked(docked);
  }
  function select(icon: IconRecord) {
    if (!current && inspectorDocked) preserveGridPosition(icon.id);
    lastSelected.current = icon.id;
    setInspectedId(icon.id);
  }
  function navigate(step: number) {
    const next =
      visible[visible.findIndex((icon) => icon.id === inspectedId) + step];
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
    history.pushState(null, '', pageHref(value));
    setView(value);
    setInspectedId(null);
    window.scrollTo(0, 0);
  }
  async function exportIcons(onlySelected = false) {
    if (onlySelected && mobile) return;
    setPacking(true);
    try {
      await downloadIcons(
        onlySelected
          ? icons.filter((icon) => selectedIds.includes(icon.id))
          : icons,
        onlySelected ? 'fyicons-selected.zip' : 'fyicons.zip',
      );
    } catch {
      notify('Download failed. Please try again.');
    } finally {
      setPacking(false);
    }
  }
  function reset() {
    setQuery('');
    setCategory('all');
    setReview('all');
    search.current?.focus();
  }
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const update = () => {
      const page = pageFromLocation();
      setView(page);
      if (location.hash === '#examples' || location.hash === '#library')
        history.replaceState(null, '', pageHref(page));
      setInspectedId(null);
    };
    update();
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);
  useEffect(() => {
    if (inspectedId && !visible.some((icon) => icon.id === inspectedId)) {
      if (visible[0]) select(visible[0]);
      else setInspectedId(null);
    }
  }, [visible, inspectedId]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (
        !editable(event.target) &&
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault();
        setSearchOpen((open) => !open);
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
        if (view === 'library') search.current?.focus();
        else setSearchOpen(true);
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
    document.title = `FYIcons — ${view === 'home' ? '16 × 16 px icons' : view === 'examples' ? 'Examples' : 'Library'}`;
  }, [view]);
  return (
    <div
      className={cn(
        'group/app pt-14',
        current && 'max-md:pb-[calc(12rem+env(safe-area-inset-bottom))]',
        current && inspectorDocked && 'has-docked-inspector',
      )}
    >
      <a
        href="#main-content"
        className="sr-only fixed top-2 left-2 z-50 rounded bg-ink px-4 py-3 text-canvas focus:not-sr-only"
      >
        Skip to content
      </a>
      <SiteHeader
        page={view}
        navigate={changeView}
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        packing={packing}
        download={() => exportIcons()}
        search={() => setSearchOpen(true)}
      />
      <GlobalSearch
        open={searchOpen}
        onOpenChange={setSearchOpen}
        select={(icon) => {
          if (view !== 'library') {
            history.pushState(null, '', pageHref('library'));
            setView('library');
          }
          setQuery('');
          setCategory('all');
          setReview('all');
          select(icon);
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
                fallback={<p className="py-20 text-sm text-muted">Loading…</p>}
              >
                <Landing navigate={changeView} />
              </Suspense>
            ) : view === 'library' ? (
              <div
                id="library"
                className="flex flex-col gap-6 pt-8 [--category-sidebar-width:13rem] lg:grid lg:min-h-[calc(100dvh-3.5rem)] lg:grid-cols-[var(--category-sidebar-width)_minmax(0,1fr)_var(--category-sidebar-width)] lg:group-[.has-docked-inspector]/app:grid-cols-[var(--category-sidebar-width)_minmax(0,1fr)]"
              >
                <CategorySidebar value={category} onValueChange={setCategory} />
                <div className="w-full max-w-5xl min-w-0">
                  {categoryError && (
                    <p role="alert" className="mb-4 text-sm text-muted">
                      {categoryError}
                    </p>
                  )}
                  <h1 className="sr-only">Icons</h1>
                  <div
                    className={cn(
                      'library-tools relative -m-1 flex flex-nowrap items-center gap-2 overflow-x-auto p-1',
                    )}
                  >
                    <div className="min-w-48 flex-1">
                      <IconSearch
                        value={query}
                        onValueChange={setQuery}
                        inputRef={search}
                        items={visible}
                        select={select}
                      />
                    </div>
                    <FilterSelect
                      label="Icon filter"
                      value={activeReview}
                      onValueChange={setReview}
                      options={[
                        { value: 'all', label: 'All' },
                        { value: 'duplicates', label: 'Variant Pairs' },
                        ...(!mobile
                          ? [{ value: 'selected', label: 'Selected' }]
                          : []),
                      ]}
                    />
                    <PreviewSizeControl
                      value={previewSize}
                      onChange={setPreviewSize}
                    />
                  </div>
                  <div
                    className={cn(
                      'my-4 flex min-h-9 items-center justify-between gap-4 text-xs text-muted',
                    )}
                  >
                    <p role="status">
                      {visible.length} of {icons.length} icons
                    </p>
                    {!mobile && (
                      <Button
                        variant="text"
                        size="sm"
                        disabled={
                          packing || !selectedIds.some((id) => byId.has(id))
                        }
                        onClick={() => exportIcons(true)}
                      >
                        <Icon name="download-square" />
                        Selected
                        <Badge variant="elevated">
                          {selectedIds.filter((id) => byId.has(id)).length}
                        </Badge>
                      </Button>
                    )}
                  </div>
                  <div
                    className={cn(
                      'icon-grid group/grid grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-2 max-[760px]:grid-cols-[repeat(auto-fill,minmax(64px,1fr))] [&.large]:grid-cols-[repeat(auto-fill,minmax(156px,1fr))]',
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
                      <Icon name="search-lg" />
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
          <footer
            className={cn(
              'mx-auto flex max-w-400 items-center justify-between border-t border-line px-4 py-6 text-xs text-muted sm:px-6',
              view === 'home' && 'max-w-7xl',
            )}
          >
            <span>FYIcons</span>
            <span>Some icons for you.</span>
          </footer>
        </div>
        <Inspector
          item={current}
          visible={visible}
          selectedIds={selectedIds}
          select={select}
          navigate={navigate}
          close={closeInspector}
          docked={inspectorDocked}
          onDockedChange={changeInspectorDocked}
          toggleSelection={toggleSelection}
          notify={notify}
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
