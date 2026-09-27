import { cn } from './lib/utils';
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react/toggle';
import { Icon } from './components/Icon';
import { Button, Choice, IconButton } from './components/ui';
import { Inspector } from './components/Inspector';
import {
  byId,
  catalog,
  categories,
  icons,
  manifest,
  type IconRecord,
} from './lib/catalog';
import { download, downloadAll } from './lib/downloads';
import { usePreference } from './lib/preferences';

const Examples = lazy(() => import('./demos/Examples'));
const viewFromHash = () =>
  location.hash === '#examples' ? 'examples' : 'library';
const editable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest('[role=combobox], [role=listbox], [role=menu]'));

export function App() {
  const [view, setView] = useState(viewFromHash);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [review, setReview] = useState('all');
  const [zoom, setZoom] = useState('1');
  const [selected, setSelected] = useState<string | null>(null);
  const [saved, setSaved] = usePreference<string[]>('fyicons-shortlist-v1', []);
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
            : saved.includes(icon.id))) &&
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
  }, [query, category, review, saved]);
  const current = byId.get(selected ?? '') ?? null;
  function select(icon: IconRecord) {
    lastSelected.current = icon.id;
    setSelected(icon.id);
  }
  function navigate(step: number) {
    const next =
      visible[visible.findIndex((icon) => icon.id === selected) + step];
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
  function toggleSaved(id: string) {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((value) => value !== id)
        : [...previous, id],
    );
  }
  function changeView(value: string) {
    setView(value);
    location.hash = value;
    if (value !== 'library') setSelected(null);
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
      setView(viewFromHash());
      setSelected(null);
    };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    if (selected && !visible.some((icon) => icon.id === selected)) {
      if (visible[0]) select(visible[0]);
      else setSelected(null);
    }
  }, [visible, selected]);
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
        selected &&
        ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
      ) {
        event.preventDefault();
        navigate(event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1);
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  });
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className={cn('group/app', current && 'has-inspector')}>
      <div
        className={cn(
          'min-[761px]:group-[.has-inspector]/app:mr-(--inspector-width)',
        )}
      >
        <header
          className={cn(
            'flex min-h-20 items-center justify-between gap-4 border-b border-line px-5 sm:px-9',
          )}
        >
          <a
            className={cn(
              'flex items-center gap-3 text-[22px] font-semibold tracking-tight',
            )}
            href="#library"
          >
            <Icon name="asterisk-star" />
            FYIcons
          </a>
          <nav className={cn('flex items-center gap-2')} aria-label="Main">
            <a
              href={
                catalog.icons[0].sourceUrl.split('?')[0] + '?node-id=404-440'
              }
              target="_blank"
              rel="noreferrer"
              className={cn(
                'source-link mr-3 hidden items-center gap-2 text-xs text-muted group-[.has-inspector]/app:hidden lg:flex',
              )}
            >
              View in Figma
              <Icon name="external-link" />
            </a>
            <IconButton
              icon={theme === 'dark' ? 'sun' : 'moon'}
              label={
                'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'
              }
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <Button
              variant="primary"
              disabled={packing}
              onClick={async () => {
                setPacking(true);
                try {
                  await downloadAll();
                } catch {
                  notify('Download failed. Please try again.');
                } finally {
                  setPacking(false);
                }
              }}
            >
              <Icon name="download-square" />
              {packing ? 'Preparing…' : 'Download SVGs'}
            </Button>
          </nav>
        </header>
        <main className={cn('mx-auto max-w-400 px-5 pb-10 sm:px-9')}>
          <section
            className={cn('flex items-start justify-between gap-6 py-9')}
          >
            <div>
              <h1 className={cn('mb-2 text-3xl font-semibold tracking-tight')}>
                Icons
              </h1>
              <p
                className={cn(
                  'max-w-150 text-[13px] leading-relaxed text-muted',
                )}
              >
                Click an icon to inspect it, copy it as SVG, or download it. Use
                the arrow keys to browse.
              </p>
            </div>
            <p className={cn('mt-1 hidden shrink-0 text-xs sm:block')}>
              <strong className={cn('font-semibold')}>{icons.length}</strong>{' '}
              icons · 16px
            </p>
          </section>
          <Tabs.Root
            value={view}
            onValueChange={(value) => changeView(String(value))}
          >
            <Tabs.List
              className={cn('view-tabs flex gap-7 border-b border-line')}
              aria-label="Preview views"
            >
              <Tabs.Tab
                className={cn(
                  'view-tab relative flex items-center gap-2 border-b-2 border-transparent py-4 text-[13px] text-muted data-active:border-ink data-active:font-semibold data-active:text-ink',
                )}
                value="library"
              >
                <Icon name="grid" />
                Icon library
                <span
                  className={cn(
                    'count rounded bg-hover px-1.5 py-0.5 text-[10px] font-medium text-muted tabular-nums',
                  )}
                >
                  {icons.length}
                </span>
              </Tabs.Tab>
              <Tabs.Tab
                className={cn(
                  'view-tab relative flex items-center gap-2 border-b-2 border-transparent py-4 text-[13px] text-muted data-active:border-ink data-active:font-semibold data-active:text-ink',
                )}
                value="examples"
              >
                <Icon name="apps" />
                In use
                <span
                  className={cn(
                    'count rounded bg-hover px-1.5 py-0.5 text-[10px] font-medium text-muted tabular-nums',
                  )}
                >
                  7
                </span>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="library" id="library">
              <div className={cn('library-tools mt-6 flex flex-wrap gap-2')}>
                <label
                  className={cn(
                    'search-field flex min-h-10 min-w-56 flex-1 items-center gap-3 rounded-lg border border-line bg-surface px-3 group-[.has-inspector]/app:basis-full focus-within:ring-2 focus-within:ring-[#729183] max-[760px]:basis-full [&_input]:min-w-0 [&_input]:flex-1 [&_input]:bg-transparent [&_input]:py-2 [&_input]:text-[13px] [&_input]:outline-none [&_input]:placeholder:text-muted',
                  )}
                >
                  <Icon name="search-1" />
                  <input
                    ref={search}
                    type="search"
                    aria-label="Search icons"
                    placeholder="Search icons, names, or Figma IDs…"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
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
                  label="Review filter"
                  value={review}
                  onChange={setReview}
                  options={[
                    { value: 'all', label: 'All components' },
                    { value: 'duplicates', label: 'Name variants' },
                    { value: 'saved', label: 'Shortlist' },
                  ]}
                />
                <ToggleGroup
                  className={cn(
                    'scale-control flex items-center gap-0.5 rounded-lg border border-line bg-hover p-1 [&_[data-pressed]]:bg-surface [&_[data-pressed]]:text-ink [&_[data-pressed]]:shadow-sm [&_button]:size-8 [&_button]:rounded-md [&_button]:text-xs [&_button]:text-muted',
                  )}
                  value={[zoom]}
                  onValueChange={(values) => {
                    if (values[0]) setZoom(values[0]);
                  }}
                  aria-label="Preview scale"
                >
                  {['1', '2', '4'].map((value) => (
                    <Toggle
                      key={value}
                      value={value}
                      aria-label={value + '× preview'}
                    >
                      {value}×
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>
              <div
                className={cn(
                  'my-4 flex items-center justify-between gap-4 text-xs text-muted',
                )}
              >
                <p role="status">
                  {visible.length} of {icons.length} components
                </p>
                <Button
                  variant="text"
                  onClick={() => {
                    const selection = manifest.icons.filter((icon) =>
                      saved.includes(icon.id),
                    );
                    if (!selection.length)
                      return notify('Bookmark an icon to start a shortlist.');
                    download(
                      JSON.stringify(
                        {
                          source: catalog.source,
                          count: selection.length,
                          icons: selection,
                        },
                        null,
                        2,
                      ),
                      'fyicons-shortlist.json',
                      'application/json',
                    );
                  }}
                >
                  <Icon name="list-task" />
                  Export shortlist
                  <span
                    className={cn(
                      'count rounded bg-hover px-1.5 py-0.5 text-[10px] font-medium text-muted tabular-nums',
                    )}
                  >
                    {saved.filter((id) => byId.has(id)).length}
                  </span>
                </Button>
              </div>
              <div
                className={cn(
                  'icon-grid group/grid grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-2 max-[760px]:grid-cols-[repeat(auto-fill,minmax(96px,1fr))] [&.large]:grid-cols-[repeat(auto-fill,minmax(156px,1fr))]',
                  zoom === '4' ? 'large' : '',
                )}
                style={{ '--zoom': zoom } as React.CSSProperties}
              >
                {visible.map((icon) => (
                  <Button
                    key={icon.id}
                    className={cn(
                      'icon-tile relative flex h-28 min-w-0 flex-col items-center justify-center gap-5 rounded-lg border border-line bg-surface px-2 group-[.large]/grid:h-36 hover:border-[#98a28f] aria-pressed:border-[#7b9383] aria-pressed:bg-selection max-[760px]:h-26 [&>svg]:size-[calc(16px*var(--zoom,1))]',
                    )}
                    data-id={icon.id}
                    aria-label={'Inspect ' + icon.name}
                    aria-pressed={selected === icon.id}
                    onClick={() => select(icon)}
                  >
                    {icon.duplicate && (
                      <span
                        className={cn(
                          'variant-badge absolute top-1.5 right-1.5 rounded bg-hover px-1 py-0.5 text-[8px] leading-3 text-muted',
                        )}
                      >
                        {icon.variantCount} variants
                      </span>
                    )}
                    <Icon name={icon.id} />
                    <span
                      className={cn(
                        'tile-name max-w-full truncate text-[10px] leading-4 text-muted',
                      )}
                      title={icon.name}
                    >
                      {icon.name}
                    </span>
                    {saved.includes(icon.id) && (
                      <span
                        className={cn(
                          'saved-dot absolute top-2 left-2 size-1.5 rounded-full bg-[#71977c]',
                        )}
                        aria-label="Shortlisted"
                      />
                    )}
                  </Button>
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
              <p className={cn('mt-5 text-[11px] text-muted')}>
                Variants retain their Figma IDs. 1× = 16px display.
              </p>
            </Tabs.Panel>
            <Tabs.Panel value="examples" id="examples" keepMounted>
              <Suspense
                fallback={
                  <p className={cn('py-10 text-sm text-muted')}>
                    Loading UI examples…
                  </p>
                }
              >
                {view === 'examples' && <Examples notify={notify} />}
              </Suspense>
            </Tabs.Panel>
          </Tabs.Root>
        </main>
        <footer
          className={cn(
            'flex items-center justify-between border-t border-line px-5 py-6 text-xs text-muted sm:px-9',
          )}
        >
          <span>FYIcons</span>
          <span>16px SVG icons</span>
          <Button
            variant="text"
            onClick={() =>
              download(
                JSON.stringify(manifest, null, 2),
                'manifest.json',
                'application/json',
              )
            }
          >
            Manifest
            <Icon name="arrow-up-right" />
          </Button>
        </footer>
      </div>
      <Inspector
        item={current}
        visible={visible}
        saved={saved}
        select={select}
        navigate={navigate}
        close={() => setSelected(null)}
        toggleSaved={toggleSaved}
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
          message ? '' : 'invisible',
        )}
      >
        {message}
      </div>
    </div>
  );
}
