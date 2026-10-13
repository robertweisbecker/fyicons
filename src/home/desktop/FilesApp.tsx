import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';

const locations = [
  ['home-simple', 'Home'],
  ['collection', 'Projects'],
  ['hard-drive', 'My Drive'],
  ['devices', 'Devices'],
  ['users-group', 'Shared with me'],
  ['clock', 'Recent'],
  ['star', 'Starred'],
  ['circle-warning', 'Spam'],
  ['trash', 'Trash'],
] as const;

const files = [
  ['file.png', 'image', 'text-rose-500'],
  ['file.mp4', 'video', 'text-violet-500'],
  ['file.svg', 'file-svg', 'text-amber-500'],
  ['file.txt', 'file-text', 'text-sky-600'],
  ['file.js', 'file-code', 'text-blue-500'],
  ['file.zip', 'archive', 'text-emerald-600'],
] as const;

function DriveLocations() {
  return (
    <div className="flex min-h-full flex-col gap-3 px-2 text-sm @2xl/window:px-3">
      <span
        title="New"
        className="flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-surface shadow-xs"
      >
        <Icon name="circle-plus-fill" />
        <span className="sr-only @2xl/window:not-sr-only">New</span>
      </span>
      <ul className="space-y-1">
        {locations.map(([icon, label]) => (
          <li
            key={label}
            title={label}
            className="flex min-h-8 items-center justify-center gap-2 px-2 @2xl/window:justify-start"
          >
            <Icon name={icon} />
            <span className="sr-only @2xl/window:not-sr-only">{label}</span>
          </li>
        ))}
      </ul>
      <span
        title="Storage: 50% used"
        className="mt-auto flex items-center justify-center gap-2 py-2 @2xl/window:justify-start"
      >
        <Icon name="cloud" />
        <span className="sr-only @2xl/window:not-sr-only">Storage</span>
        <span className="sr-only ml-auto text-xs whitespace-nowrap text-muted @2xl/window:not-sr-only">
          50% used
        </span>
      </span>
    </div>
  );
}

export function FilesApp() {
  const [view, setView] = useState(['grid']);
  const list = view[0] === 'list';
  return (
    <Window title="Files" className="bg-canvas">
      <div className="flex min-w-0 shrink-0 items-center gap-2 p-3">
        <div className="flex shrink-0 items-center gap-2 @2xl/window:w-40">
          <Icon name="truck-moving" />
          <span className="hidden @sm/window:inline">Drive</span>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-inset px-3 py-2 text-xs text-muted">
          <Icon name="search-simple" />
          <span>Search</span>
          <Icon name="filter-lines" className="ml-auto" />
          <Icon name="sliders" />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {[
            'circle-question',
            'settings',
            'sparkles',
            'apps',
            'circle-user-fill',
          ].map((icon) => (
            <Icon key={icon} name={icon} />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 gap-2 pb-3">
        <aside
          className="w-12 shrink-0 overflow-y-auto overscroll-y-contain @2xl/window:w-44"
          aria-label="Drive locations"
        >
          <DriveLocations />
        </aside>
        <div className="min-w-0 flex-1 overflow-y-auto overscroll-y-contain rounded-xl bg-surface p-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="flex items-center gap-2">
              <Icon name="clock" />
              Recent
            </span>
            <Icon name="chevron-right-sm" className="text-muted" />
            <span className="hidden items-center gap-2 @3xl/window:flex">
              <Icon name="ellipsis" />
              <Icon name="chevron-right-sm" />
            </span>
            <span className="flex items-center gap-1">
              <Icon name="folder-open" />
              Album
              <Icon name="caret-down" />
            </span>
            <Icon
              name="users-team-fill"
              className="hidden text-muted @3xl/window:block"
            />
            <ToggleGroup
              value={view}
              onValueChange={(v) => v.length && setView(v)}
              aria-label="File view"
              className="ml-auto gap-0 rounded-lg bg-canvas p-px"
            >
              <DemoToggle
                value="list"
                icon="list-thumbnails"
                label="List view"
                size="icon-sm"
                variant="elevated"
                className="pointer-coarse:size-11"
              />
              <DemoToggle
                value="grid"
                icon="grid"
                label="Grid view"
                size="icon-sm"
                variant="elevated"
                className="pointer-coarse:size-11"
              />
            </ToggleGroup>
          </div>
          <div className="my-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="flex min-h-7 items-center gap-1 rounded-full bg-selection px-2 text-control-accent">
              <Icon name="sparkle-fill" />
              Ask
            </span>
            <span className="h-4 w-px bg-line" />
            {['Type', 'People', 'Modified'].map((label) => (
              <span
                key={label}
                className="inline-flex min-h-7 items-center gap-1 rounded-lg border border-border px-2"
              >
                {label}
                <Icon name="caret-down" />
              </span>
            ))}
          </div>
          <div
            className={cn(
              'grid gap-2',
              !list && '@sm/window:grid-cols-2 @2xl/window:grid-cols-3',
            )}
            data-view={view[0]}
            aria-label="Album files"
          >
            {files.map(([name, icon, color]) => (
              <div
                key={name}
                className={cn(
                  'min-w-0 rounded-lg bg-canvas p-1',
                  list && 'flex items-center gap-2',
                )}
              >
                <div className="flex min-w-0 flex-1 items-center gap-1 p-1 text-xs">
                  {!list && <Icon name={icon} className={color} />}
                  <span className="truncate">{name}</span>
                  <Icon name="ellipsis-v-sm" className="ml-auto" />
                </div>
                <div
                  className={cn(
                    'flex items-center justify-center rounded-md bg-current/10',
                    color,
                    list ? 'order-first size-10 shrink-0' : 'h-24',
                  )}
                >
                  <Icon name={icon} size={list ? 20 : 32} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex w-8 shrink-0 flex-col items-center gap-5 pt-3"
          aria-hidden
        >
          <Icon name="calendar-fill" className="text-blue-500" />
          <Icon name="lightbulb-simple-fill" className="text-amber-500" />
          <Icon name="circle-check-fill" className="text-sky-600" />
          <Icon name="user-fill" className="text-violet-500" />
          <span className="h-px w-4 bg-line" />
          <Icon name="plus" />
        </div>
      </div>
    </Window>
  );
}
