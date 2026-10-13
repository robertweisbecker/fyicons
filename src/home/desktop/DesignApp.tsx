import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { FormatStudy } from '../FormatStudy';
import { Window } from './Window';

const tools = [
  ['pointer', 'Select'],
  ['pen-tip', 'Pen'],
  ['brush-tip', 'Brush'],
  ['pencil-tip', 'Pencil'],
  ['frame', 'Frame'],
  ['square', 'Rectangle'],
  ['pen-tool', 'Vector'],
  ['text', 'Text'],
  ['chat-round', 'Comment'],
  ['apps-plus', 'Resources'],
] as const;
const fills = [
  { name: 'Lavender', color: 'var(--color-violet-300)' },
  { name: 'Blue', color: 'var(--color-sky-300)' },
  { name: 'Peach', color: 'var(--color-orange-200)' },
  { name: 'Mint', color: 'var(--color-emerald-200)' },
];

function DesignRail() {
  return (
    <div className="row-span-2 flex w-12 flex-col items-center gap-4 border-r border-line bg-surface px-1 py-4 text-xs text-muted @lg/window:w-16">
      <Icon name="atom-spiral" />
      <span className="h-px w-5 bg-line" />
      {[
        ['file', 'File'],
        ['sparkle', 'Agents'],
        ['circle-plus', 'Assets'],
        ['toolbox', 'Tools'],
        ['token', 'Variables'],
      ].map(([icon, label]) => (
        <span key={icon} className="flex flex-col items-center gap-1">
          <Icon name={icon} />
          <span className="sr-only @lg/window:not-sr-only">{label}</span>
        </span>
      ))}
      <span className="mt-auto flex flex-col items-center gap-1">
        <Icon name="book-open" />
        <span className="sr-only @lg/window:not-sr-only">Libraries</span>
      </span>
    </div>
  );
}

export function DesignApp() {
  const [tool, setTool] = useState(['pointer']);
  const [fill, setFill] = useState(['Lavender']);
  const color = fills.find((item) => item.name === fill[0])!.color;
  return (
    <Window title="Design">
      <div className="grid min-h-0 flex-1 grid-cols-[auto_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto]">
        <DesignRail />
        <div className="grid min-h-0 min-w-0 content-start items-start gap-6 overflow-y-auto overscroll-y-contain bg-inset p-4 @3xl/window:grid-cols-2 @3xl/window:content-center @3xl/window:p-6">
          <div className="relative grid min-h-64 place-items-center py-8">
            <div
              className="relative flex h-44 w-40 flex-col items-center justify-center gap-3 rounded-3xl text-center text-violet-950 shadow-lg"
              style={{ backgroundColor: color }}
            >
              <Icon
                name={
                  tool[0] === 'text'
                    ? 'font-serif'
                    : tool[0] === 'pen-tool'
                      ? 'vector-path'
                      : tool[0] === 'pencil-tip'
                        ? 'scribble'
                        : 'asterisk'
                }
              />
              <span className="font-serif text-2xl leading-tight font-semibold">
                Quiet
                <br />
                by design.
              </span>
              <span className="text-xs opacity-60">Studio notes</span>
              {tool[0] === 'pointer' && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 border border-control-accent"
                >
                  <span className="absolute -top-1 -left-1 size-2 border border-control-accent bg-surface" />
                  <span className="absolute -top-1 -right-1 size-2 border border-control-accent bg-surface" />
                  <span className="absolute -bottom-1 -left-1 size-2 border border-control-accent bg-surface" />
                  <span className="absolute -right-1 -bottom-1 size-2 border border-control-accent bg-surface" />
                </span>
              )}
            </div>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap text-muted">
              160 × 176
            </span>
          </div>
          <div className="mx-auto flex w-full max-w-72 flex-col gap-3">
            <div className="flex justify-center">
              <FormatStudy />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface p-3 text-xs shadow-sm">
              <span className="flex items-center gap-2">
                <Icon name="paint-bucket" />
                Fill
              </span>
              <ToggleGroup
                aria-label="Cover fill"
                value={fill}
                onValueChange={(v) => v.length && setFill(v)}
              >
                {fills.map((item) => (
                  <Toggle
                    key={item.name}
                    value={item.name}
                    aria-label={`${item.name} cover`}
                    size="icon-sm"
                    className="pointer-coarse:size-11"
                  >
                    <span
                      className="grid size-5 place-items-center rounded-full border border-black/10 text-violet-950"
                      style={{ backgroundColor: item.color }}
                    >
                      {fill[0] === item.name && <Icon name="check-sm" />}
                    </span>
                  </Toggle>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>
        <div className="col-start-2 min-w-0 overflow-x-auto overscroll-x-contain border-t border-line bg-bg p-3">
          <div className="mx-auto flex w-max items-center gap-1 rounded-xl bg-surface p-1 shadow-md ring ring-line">
            <ToggleGroup
              aria-label="Canvas tools"
              value={tool}
              onValueChange={(v) => v.length && setTool(v)}
              className="gap-0.5"
            >
              {tools.map(([icon, label]) => (
                <DemoToggle
                  key={icon}
                  value={icon}
                  icon={icon}
                  label={`${label} canvas tool`}
                  size="icon-sm"
                  className="data-pressed:bg-control-accent data-pressed:text-white data-pressed:hover:bg-control-accent pointer-coarse:size-11"
                />
              ))}
            </ToggleGroup>
            <span className="mx-1 h-4 w-px shrink-0 bg-line" />
            <ToggleGroup
              defaultValue={['pointer-rulers']}
              aria-label="Canvas mode"
              className="gap-0 rounded-md bg-canvas p-px"
            >
              {[
                ['scribble', 'Draw'],
                ['pointer-rulers', 'Measure'],
                ['code', 'Code'],
              ].map(([icon, label]) => (
                <DemoToggle
                  key={icon}
                  value={icon}
                  icon={icon}
                  label={`${label} mode`}
                  variant="elevated"
                  size="icon-sm"
                  className="pointer-coarse:size-11"
                />
              ))}
            </ToggleGroup>
          </div>
        </div>
      </div>
    </Window>
  );
}
