import { cn } from './lib/utils';
import {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { Icon } from './components/Icon';
import { Button, Choice } from './components/ui';
import { IconTile } from './components/IconTile';
import { SiteHeader } from './components/SiteHeader';
import { PreviewSizeControl } from './components/PreviewSizeControl';
import { pageFromLocation, pageHref, type Page } from './lib/navigation';
import { Inspector } from './components/Inspector';
import { byId, categories, icons, type IconRecord } from './lib/catalog';
import { downloadIcons } from './lib/downloads';
import { usePreference } from './lib/preferences';

const Examples = lazy(() => import('./demos/Examples'));
const editable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest('[role=combobox], [role=listbox], [role=menu]'));

export function App() {
  const [view, setView] = useState(pageFromLocation);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [review, setReview] = useState('all');
  const [previewSize, setPreviewSize] = useState(16);
  const [inspectedId, setInspectedId] = useState<string | null>(null);
  // Retain the legacy storage key so existing saved choices remain selected.
  const [selectedIds, setSelectedIds] = usePreference<string[]>(
    'fyicons-shortlist-v1',
    [],
  );
  const [theme, setTheme] = usePreference<string>('fyicons-theme-v1', 'light');
  const [message, setMessage] = useState('');
  const [packing, setPacking] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  const lastSelected = useRef<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const visible = useMemo(() => {
    const words = query.toLowerCase().trim().split(/\s+/);
    return icons.filter(
      (icon) =>
        (category === 'all' || icon.category === category) &&
        (review === 'all' ||
          (review === 'duplicates'
            ? icon.duplicate
            : selectedIds.includes(icon.id))) &&
        words.every((word) =>
          (
            icon.name +
            ' ' +
            icon.originalName +
            ' ' +
            icon.category +
            ' ' +
            icon.id
          )
            .toLowerCase()
            .includes(word),
        ),
    );
  }, [query, category, review, selectedIds]);
  const current = byId.get(inspectedId ?? '') ?? null;
  function select(icon: IconRecord) {
    lastSelected.current = icon.id;
    setInspectedId(icon.id);
  }
  function navigate(step: number) {
    const next =
      visible[visible.findIndex((icon) => icon.id === inspectedId) + step];
    if (next) {
      select(next);
      document
        .querySelector<HTMLElement>('[data-id="' + next.id + '"]')
        ?.scrollIntoView({ block: 'nearest' });
    }
  }
  function notify(text: string) {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(''), 2800);
  }
  function toggleSelection(id: string) {
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
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        editable(event.target)
      )
        return;
      if (event.key === '/' && view === 'library') {
        event.preventDefault();
        search.current?.focus();
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
    document.title = `FYIcons — ${view === 'examples' ? 'Examples' : 'Icons'}`;
  }, [view]);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className={cn('group/app pt-14', current && 'has-inspector')}>
      <SiteHeader
        page={view}
        navigate={changeView}
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        packing={packing}
        download={() => exportIcons()}
      />
      <div
        className={cn(
          'min-[761px]:group-[.has-inspector]/app:mr-(--inspector-width)',
        )}
      >
        <main className={cn('mx-auto max-w-400 px-4 pb-10 sm:px-6')}>
          {view === 'library' ? (
            <div id="library">
              <section
                className={cn('flex items-start justify-between gap-6 py-9')}
              >
                <div>
                  <h1
                    className={cn(
                      'mb-2 text-3xl font-semibold tracking-normal',
                    )}
                  >
                    Icons
                  </h1>
                  <p
                    className={cn(
                      'max-w-150 text-sm leading-relaxed text-muted',
                    )}
                  >
                    Click an icon to inspect, copy, or download it. Select icons
                    to export a set.
                  </p>
                </div>
              </section>
              <div
                className={cn(
                  'library-tools flex flex-wrap items-center gap-2 border-t border-line pt-6',
                )}
              >
                <label
                  className={cn(
                    'search-field flex min-h-10 min-w-56 flex-1 items-center gap-3 rounded-lg border border-line bg-surface px-3 group-[.has-inspector]/app:basis-full focus-within:ring-2 focus-within:ring-zinc-500 max-[760px]:basis-full',
                  )}
                >
                  <Icon name="search-1" />
                  <input
                    ref={search}
                    type="search"
                    aria-label="Search icons"
                    placeholder="Search icons…"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className={cn(
                      'min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted sm:text-sm',
                    )}
                  />
                  <kbd>/</kbd>
                </label>
                <Choice
                  label="Icon category"
                  value={category}
                  onChange={setCategory}
                  options={[
                    { value: 'all', label: 'All categories' },
                    ...categories.map((value) => ({ value, label: value })),
                  ]}
                />
                <Choice
                  label="Selection filter"
                  value={review}
                  onChange={setReview}
                  options={[
                    { value: 'all', label: 'All components' },
                    { value: 'duplicates', label: 'Name variants' },
                    { value: 'selected', label: 'Selected' },
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
                <Button
                  variant="text"
                  disabled={packing || !selectedIds.some((id) => byId.has(id))}
                  onClick={() => exportIcons(true)}
                >
                  <Icon name="download-square" />
                  Export selected
                  <span
                    className={cn(
                      'rounded bg-hover px-1.5 py-0.5 text-xs font-medium text-muted tabular-nums',
                    )}
                  >
                    {selectedIds.filter((id) => byId.has(id)).length}
                  </span>
                </Button>
              </div>
              <div
                className={cn(
                  'icon-grid group/grid grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-2 max-[760px]:grid-cols-[repeat(auto-fill,minmax(96px,1fr))] [&.large]:grid-cols-[repeat(auto-fill,minmax(156px,1fr))]',
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
                    selected={selectedIds.includes(icon.id)}
                    inspect={() => select(icon)}
                    toggleSelection={() => toggleSelection(icon.id)}
                  />
                ))}
              </div>
              {!visible.length && (
                <div
                  className={cn(
                    'flex min-h-70 flex-col items-center justify-center gap-4',
                  )}
                >
                  <Icon name="search-2" />
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
          ) : (
            <div id="examples">
              <Suspense
                fallback={
                  <p className={cn('py-10 text-sm text-muted')}>
                    Loading UI examples…
                  </p>
                }
              >
                <Examples notify={notify} />
              </Suspense>
            </div>
          )}
        </main>
        <footer
          className={cn(
            'mx-auto flex max-w-400 items-center justify-between border-t border-line px-4 py-6 text-xs text-muted sm:px-6',
          )}
        >
          <span>FYIcons</span>
          <span>16px SVG icons</span>
        </footer>
      </div>
      <Inspector
        item={current}
        visible={visible}
        selectedIds={selectedIds}
        select={select}
        navigate={navigate}
        close={() => setInspectedId(null)}
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
      <div
        role="status"
        aria-live="polite"
        className={cn(
          'toast fixed bottom-6 left-1/2 z-90 max-w-[calc(100%-32px)] -translate-x-1/2 rounded-lg border border-line bg-ink px-4 py-3 text-sm text-canvas shadow-lg',
          !message && 'invisible',
        )}
      >
        {message}
      </div>
    </div>
  );
}
