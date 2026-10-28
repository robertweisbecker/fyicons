import { useId, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
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
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const inspectorId = useId();
  const inspectorToggle = useRef<HTMLButtonElement>(null);
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
          <Button
            ref={inspectorToggle}
            variant="ghost"
            size="icon-sm"
            aria-label={
              inspectorOpen ? 'Hide design inspector' : 'Show design inspector'
            }
            aria-expanded={inspectorOpen}
            aria-controls={inspectorId}
            onClick={() => setInspectorOpen(!inspectorOpen)}
            className="mr-1 ml-auto aria-expanded:bg-inset @2xl/window:hidden"
          >
            <Icon
              name={inspectorOpen ? 'sidebar-right-open' : 'sidebar-right'}
            />
          </Button>
        </div>
      }
    >
      <div className="relative flex min-h-0 flex-1">
        <DesignRail />
        <div
          className={cn(
            'relative isolate min-h-0 min-w-0 flex-1 place-items-center bg-inset p-4 pb-28',
            inspectorOpen ? 'hidden @2xl/window:grid' : 'grid',
          )}
          role="region"
          aria-label="Design canvas"
        >
          <div className="relative">
            <div
              className="relative flex h-44 w-40 flex-col items-center justify-center gap-3 rounded-3xl text-center text-violet-950 shadow-lg"
              style={{
                backgroundColor: fillVisible ? fill.color : 'transparent',
              }}
            >
              <Icon name="asterisk" />
              <span className="font-serif text-2xl leading-tight font-semibold">
                Quiet
                <br />
                by design.
              </span>
              <span className="text-xs opacity-60">Studio notes</span>
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-control-accent"
              >
                <span className="absolute -top-1 -left-1 size-2 border border-control-accent bg-surface" />
                <span className="absolute -top-1 -right-1 size-2 border border-control-accent bg-surface" />
                <span className="absolute -bottom-1 -left-1 size-2 border border-control-accent bg-surface" />
                <span className="absolute -right-1 -bottom-1 size-2 border border-control-accent bg-surface" />
              </span>
            </div>
            <span className="absolute top-full left-1/2 mt-6 -translate-x-1/2 text-xs whitespace-nowrap text-muted">
              160 × 176
            </span>
          </div>
          <div className="absolute inset-x-2 bottom-4 flex justify-center">
            <div
              className="flex w-fit max-w-full items-center gap-1 overflow-x-auto overscroll-x-contain rounded-xl bg-surface p-1 shadow-md ring ring-line"
              aria-label="Canvas toolbar"
            >
              <ToggleGroup
                aria-label="Canvas tools"
                value={tool}
                onValueChange={(v) => v.length && setTool(v)}
                className="shrink-0 gap-0.5"
              >
                {tools.map(([icon, label]) => (
                  <DemoToggle
                    key={icon}
                    value={icon}
                    icon={icon}
                    label={`${label}`}
                    size="icon-sm"
                    className="data-pressed:bg-control-accent data-pressed:text-white data-pressed:hover:bg-control-accent"
                  />
                ))}
              </ToggleGroup>
              <ToggleGroup
                defaultValue={['pointer-rulers']}
                aria-label="Canvas mode"
                className="shrink-0 gap-0 rounded-md bg-canvas p-px"
              >
                {[
                  ['scribble', 'Draw'],
                  ['pointer-rulers', 'Design'],
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
          id={inspectorId}
          fill={fill}
          onFillChange={setFill}
          fillVisible={fillVisible}
          onFillVisibleChange={setFillVisible}
          className={
            inspectorOpen
              ? 'flex flex-1 @2xl/window:flex-none'
              : 'hidden @2xl/window:flex'
          }
          onKeyDown={(event) => {
            if (
              event.key === 'Escape' &&
              inspectorToggle.current?.offsetParent
            ) {
              setInspectorOpen(false);
              inspectorToggle.current.focus();
            }
          }}
        />
      </div>
    </Window>
  );
}
