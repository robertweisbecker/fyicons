import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
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

function DriveLocations() {
  return (
    <div className="flex h-full flex-col gap-3 px-3 text-sm">
      <span className="flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-surface shadow-xs">
        <Icon name="circle-plus-fill" />
        New
      </span>
      <ul className="space-y-1">
        {locations.map(([icon, label]) => (
          <li key={label} className="flex min-h-8 items-center gap-2 px-2">
            <Icon name={icon} />
            {label}
          </li>
        ))}
      </ul>
      <span className="mt-auto flex items-center gap-2 py-2">
        <Icon name="cloud" />
        <span>Storage</span>
        <span className="ml-auto text-xs whitespace-nowrap text-muted">
          50% used
        </span>
      </span>
    </div>
  );
}

export function FilesApp() {
  const [view, setView] = useState(['grid']);
  return (
    <Window title="Files" className="bg-canvas">
      <div className="relative flex min-w-0 shrink-0 items-center gap-3 p-3">
        <div className="hidden w-40 shrink-0 items-center gap-2 @2xl/window:flex">
          <Icon name="truck-moving" />
          Drive
        </div>
        <details className="relative shrink-0 @2xl/window:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1">
            <Icon name="truck-moving" />
            Drive
            <Icon name="chevron-down-sm" />
          </summary>
          <div className="absolute top-full left-0 z-10 w-52 rounded-xl border border-line bg-surface p-2 shadow-lg">
            <DriveLocations />
          </div>
        </details>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-inset px-3 py-2 text-xs text-muted">
          <Icon name="search-simple" />
          <span>Search</span>
          <Icon name="filter-lines" className="ml-auto" />
          <Icon name="sliders" />
        </div>
        <div className="hidden items-center gap-3 @3xl/window:flex">
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
          className="hidden w-44 shrink-0 @2xl/window:block"
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
              className="hidden items-center gap-2 text-muted @3xl/window:flex"
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
            className="group/files grid grid-cols-2 gap-2 data-[view=list]:grid-cols-1 @2xl/window:grid-cols-3"
            data-view={view[0]}
            aria-label="Album files"
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="min-w-0 rounded-lg bg-canvas p-1">
                <div className="flex items-center gap-1 px-1 py-1 text-xs">
                  <Icon name="image" className="text-rose-500" />
                  <span>file.png</span>
                  <Icon name="ellipsis-v-sm" className="ml-auto" />
                </div>
                <div className="h-24 rounded-md bg-inset group-data-[view=list]/files:hidden" />
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
