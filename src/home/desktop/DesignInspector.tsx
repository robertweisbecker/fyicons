import { type ComponentProps } from 'react';
import { Icon } from '@/components/Icon';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { FormatControls, TextAlignment } from '../FormatStudy';
import { Glyph } from '../Study';

export const designFills = [
  { name: 'Lavender', color: 'var(--color-violet-300)' },
  { name: 'Blue', color: 'var(--color-sky-300)' },
  { name: 'Peach', color: 'var(--color-orange-200)' },
  { name: 'Mint', color: 'var(--color-emerald-200)' },
];

/** Read-only properties keep this UI specimen compact without adding fake inputs. */
function PropertyValue({
  label,
  icon,
  value,
}: {
  label: string;
  icon?: string;
  value: string;
}) {
  return (
    <div className="flex h-6 min-w-0 items-center gap-2 rounded-md bg-inset px-2">
      <dt className="text-muted">
        {icon ? (
          <Icon name={icon} />
        ) : (
          <span className="inline-block size-4 text-center" aria-hidden>
            {label[0]}
          </span>
        )}
        <span className="sr-only">{label}</span>
      </dt>
      <dd className="m-0 truncate tabular-nums">{value}</dd>
    </div>
  );
}

export function DesignInspector({
  fill,
  onFillChange,
  fillVisible,
  onFillVisibleChange,
  className,
  ...props
}: {
  fill: (typeof designFills)[number];
  onFillChange: (fill: (typeof designFills)[number]) => void;
  fillVisible: boolean;
  onFillVisibleChange: (visible: boolean) => void;
} & ComponentProps<'aside'>) {
  return (
    <aside
      {...props}
      aria-label="Design inspector"
      className={cn(
        'z-10 min-h-0 w-56 shrink-0 flex-col overflow-y-auto overscroll-y-contain border-l border-line bg-surface text-xs',
        className,
      )}
    >
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-line px-3">
        <Icon name="frame" />
        <span className="flex-1 font-medium">Frame</span>
        <Glyph name="eye" />
        <Glyph name="lock" />
      </div>
      <div className="space-y-2 border-b border-line p-3">
        <h3 className="font-medium">Layout</h3>
        <dl className="grid grid-cols-2 gap-1">
          <PropertyValue label="X position" value="0" />
          <PropertyValue label="Y position" value="0" />
          <PropertyValue label="Width" icon="arrow-x" value="160" />
          <PropertyValue label="Height" icon="arrow-y" value="176" />
          <PropertyValue label="Rotation" icon="arrows-rotate" value="0°" />
          <PropertyValue
            label="Corner radius"
            icon="border-radius"
            value="24"
          />
        </dl>
      </div>
      <div className="space-y-2 border-b border-line p-3">
        <h3 className="font-medium">Typography</h3>
        <div className="flex h-6 items-center gap-2 rounded-md bg-inset px-2">
          <Icon name="font-family" className="text-muted" />
          <span className="flex-1">Georgia</span>
          <Icon name="chevron-down-sm" className="text-muted" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span className="flex h-6 items-center justify-between rounded-md bg-inset px-2">
            Semibold <Icon name="chevron-down-sm" className="text-muted" />
          </span>
          <dl>
            <PropertyValue label="Font size" icon="text" value="24" />
          </dl>
        </div>
        <TextAlignment compact />
        <FormatControls compact />
      </div>
      <div className="space-y-2 border-b border-line p-3">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-medium">
            <Icon name="paint-bucket" />
            Fill
          </h3>
          <span className="text-muted tabular-nums">100%</span>
        </div>
        <div className="flex items-center">
          <ToggleGroup
            aria-label="Cover fill"
            value={[fill.name]}
            onValueChange={(values) => {
              const next = designFills.find((item) => item.name === values[0]);
              if (next) onFillChange(next);
            }}
          >
            {designFills.map((item) => (
              <Toggle
                key={item.name}
                value={item.name}
                aria-label={`${item.name} cover`}
                size="icon-xs"
              >
                <span
                  className="flex size-4 items-center justify-center rounded-full border border-black/10 text-violet-950"
                  style={{ backgroundColor: item.color }}
                >
                  {fill.name === item.name && <Icon name="check-sm" />}
                </span>
              </Toggle>
            ))}
          </ToggleGroup>
          <DemoToggle
            pressed={!fillVisible}
            onPressedChange={(hidden) => onFillVisibleChange(!hidden)}
            icon="eye"
            activeIcon="eye-slash"
            label={fillVisible ? 'Hide fill' : 'Show fill'}
            size="icon-xs"
            className="ml-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <h3 className="font-medium">Stroke</h3>
        <Glyph name="plus" className="text-muted" />
      </div>
      <div className="space-y-2 p-3">
        <h3 className="font-medium">Effects</h3>
        <div className="flex h-6 items-center gap-2 rounded-md bg-inset px-2">
          <Icon name="shadow" className="text-muted" />
          <span className="flex-1">Drop shadow</span>
          <Icon name="eye" className="text-muted" />
        </div>
      </div>
    </aside>
  );
}
