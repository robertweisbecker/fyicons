import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph } from '../Study';
import { DesignInspector, designFills } from './DesignInspector';
import { DesignRail } from './DesignRail';
import { Window, WindowControls } from './Window';

const tools = [
  ['pointer', 'Move'],
  ['frame', 'Frame'],
  ['square', 'Rectangle'],
  ['pen-tool', 'Pen'],
  ['text-title', 'Text'],
  ['chat-round', 'Comment'],
  ['apps-plus', 'Actions'],
] as const;
export function DesignApp() {
  const [tool, setTool] = useState(['pointer']);
  const [fill, setFill] = useState(designFills[0]);
  const [fillVisible, setFillVisible] = useState(true);
  return (
    <Window
      title="Design"
      header={
        <div
          className="flex h-9 shrink-0 items-center border-b border-line bg-bg text-xs text-muted"
          aria-label="Design app bar"
        >
          <WindowControls />
          <DemoIconButton
            label="Design home"
            icon="home"
            size="icon-sm"
            className="mx-1"
          />
          <DemoIconButton
            label="Community"
            icon="globe-simple"
            size="icon-sm"
            className="mr-1"
          />
          <div className="flex h-full min-w-0 items-center gap-2 border-x border-line bg-surface px-3 text-ink">
            <Icon name="pen-tool" className="text-control-accent" />
            <span className="min-w-0 truncate">Design</span>
            <Glyph name="x" className="ml-3 text-muted" />
          </div>
        </div>
      }
    >
      <div className="relative flex min-h-0 flex-1">
        <DesignRail />
        <div
          className="@container/design-canvas relative isolate flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden bg-inset p-2 pb-28 @2xl/window:p-4 @2xl/window:pb-28"
          role="region"
          aria-label="Design canvas"
        >
          <div className="relative shrink-0 scale-40 @min-[6rem]/design-canvas:scale-60 @min-[8rem]/design-canvas:scale-75 @min-[10rem]/design-canvas:scale-90 @min-[12rem]/design-canvas:scale-100">
            <div
              className="relative h-12 w-40 rounded-xl p-px shadow-[0_2px_1px_#00000012,0_7px_10px_-3px_#00000026]"
              style={{
                backgroundColor: fillVisible
                  ? `color-mix(in srgb, ${fill.color}, black 24%)`
                  : 'transparent',
              }}
            >
              <div
                className={cn(
                  'inline-flex h-[calc(100%-3px)] w-full shrink-0 items-center justify-center gap-2 rounded-[11px] border border-white/40 bg-linear-to-b from-white/45 via-white/10 to-black/5 text-sm leading-5 font-medium shadow-[inset_0_1px_0_#ffffffb3,inset_0_-1px_0_#0000000f]',
                  fillVisible
                    ? 'text-violet-950 [text-shadow:0_1px_0_#ffffff60]'
                    : 'text-ink',
                )}
                style={{
                  backgroundColor: fillVisible ? fill.color : 'transparent',
                }}
              >
                <Icon name="plus" />
                Create
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-control-accent"
              >
                <span className="absolute -top-1 -left-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -top-1 -right-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -bottom-1 -left-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -right-1 -bottom-1 size-2 border border-control-accent bg-white" />
              </span>
            </div>
            <span className="absolute top-full left-1/2 mt-3 -translate-x-1/2 rounded bg-control-accent px-1.5 py-px text-xs whitespace-nowrap text-white">
              160 × 48
            </span>
          </div>
          <div className="absolute inset-x-2 bottom-4 flex justify-center">
            <div
              className="flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-xl bg-surface p-1 shadow-md ring ring-line"
              aria-label="Canvas toolbar"
            >
              <ToggleGroup
                aria-label="Canvas tools"
                value={tool}
                onValueChange={(v) => v.length && setTool(v)}
                className="max-w-full shrink-0 flex-wrap justify-center gap-0.5"
              >
                {tools.map(([icon, label]) => (
                  <DemoToggle
                    key={icon}
                    value={icon}
                    icon={icon}
                    label={`${label}`}
                    size="icon-sm"
                    className={cn(
                      'data-pressed:bg-control-accent data-pressed:text-white data-pressed:hover:bg-control-accent',
                      [
                        'square',
                        'text-title',
                        'chat-round',
                        'apps-plus',
                      ].includes(icon) && 'max-md:hidden',
                    )}
                  />
                ))}
              </ToggleGroup>
              <ToggleGroup
                defaultValue={['rulers-pointer']}
                aria-label="Canvas mode"
                className="max-w-full shrink-0 flex-wrap justify-center gap-0 rounded-md bg-canvas p-px"
              >
                {[
                  ['scribble', 'Draw'],
                  ['rulers-pointer', 'Design'],
                  ['code', 'Dev Mode'],
                ].map(([icon, label]) => (
                  <DemoToggle
                    key={icon}
                    value={icon}
                    icon={icon}
                    label={`${label}`}
                    variant="elevated"
                    size="icon-sm"
                  />
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>
        <DesignInspector
          fill={fill}
          onFillChange={setFill}
          fillVisible={fillVisible}
          onFillVisibleChange={setFillVisible}
        />
      </div>
    </Window>
  );
}
