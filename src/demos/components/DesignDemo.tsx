import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { NumberField } from '@base-ui/react/number-field';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';
import { Slider, SliderControl } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { DemoIconButton, DemoToggle, ControlDivider } from './DemoControls';

const tools = [
  ['Select', 'pointer', 'pointer-fill'],
  ['Move', 'hand', 'hand-grab'],
  ['Frame', 'frame', 'frame'],
  ['Pen', 'pen-tool', 'pen-tool'],
  ['Draw', 'drawing', 'drawing'],
  ['Text', 'text', 'text'],
] as const;
const fills = [
  { name: 'Lavender', value: 'var(--color-violet-300)' },
  { name: 'Blue', value: 'var(--color-sky-300)' },
  { name: 'Peach', value: 'var(--color-orange-200)' },
  { name: 'Mint', value: 'var(--color-emerald-200)' },
];
function Dimension({
  label,
  icon,
  value,
  onChange,
  disabled,
}: {
  disabled?: boolean;
  label: string;
  icon: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <NumberField.Root
      disabled={disabled}
      value={value}
      onValueChange={(v) => v != null && onChange(v)}
      min={80}
      max={240}
      step={8}
      className="flex-1"
    >
      <NumberField.Group className="flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 pointer-coarse:h-11">
        <Icon name={icon} className="text-muted" />
        <NumberField.Input
          aria-label={label}
          className="w-full min-w-0 bg-transparent text-right text-sm tabular-nums outline-none pointer-coarse:text-base"
        />
      </NumberField.Group>
    </NumberField.Root>
  );
}
export function DesignDemo() {
  const [tool, setTool] = useState(['Select']);
  const [align, setAlign] = useState(['center']);
  const [fill, setFill] = useState(['Lavender']);
  const [radius, setRadius] = useState(24);
  const [opacity, setOpacity] = useState(100);
  const [width, setWidth] = useState(160);
  const [height, setHeight] = useState(176);
  const [shadow, setShadow] = useState(true);
  const [border, setBorder] = useState(false);
  const [grid, setGrid] = useState(true);
  const [visible, setVisible] = useState(true);
  const [locked, setLocked] = useState(false);
  const [linked, setLinked] = useState(false);
  const color = fills.find((item) => item.name === fill[0])!.value;
  return (
    <div className="@container flex flex-1 flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ToggleGroup
          value={tool}
          onValueChange={(v) => v.length && setTool(v)}
          aria-label="Design tools"
          className="max-w-full flex-wrap rounded-lg border border-line bg-surface p-1"
        >
          {tools.map(([name, icon, activeIcon]) => (
            <DemoToggle
              key={name}
              value={name}
              label={name + ' tool'}
              icon={icon}
              activeIcon={activeIcon}
            />
          ))}
        </ToggleGroup>
        <DemoToggle
          label="Canvas grid"
          icon="grid"
          activeIcon="grid-lines"
          pressed={grid}
          onPressedChange={setGrid}
        />
      </div>
      <div className="grid flex-1 gap-5 @min-[560px]:grid-cols-[minmax(0,1fr)_220px]">
        <div
          className={cn(
            'relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface',
            grid &&
              'bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px]',
          )}
        >
          <div
            className={cn(
              'relative max-w-[calc(100%-3rem)] border-2 text-violet-950',
              border ? 'border-violet-800/40' : 'border-transparent',
              shadow && 'shadow-xl shadow-violet-950/15',
              !visible && 'invisible',
            )}
            style={{
              width,
              height,
              borderRadius: radius,
              background: color,
              opacity: opacity / 100,
            }}
          >
            <div
              className={cn(
                'flex h-full flex-col justify-center gap-3 p-5',
                align[0] === 'left'
                  ? 'items-start text-left'
                  : align[0] === 'right'
                    ? 'items-end text-right'
                    : 'items-center text-center',
              )}
            >
              <Icon
                name={
                  tool[0] === 'Text'
                    ? 'font-serif'
                    : tool[0] === 'Pen'
                      ? 'vector-path'
                      : tool[0] === 'Draw'
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
            </div>
            {!locked && tool[0] === 'Select' && (
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-sm border border-violet-500"
              >
                <span className="absolute -top-1 -left-1 size-1.5 border border-violet-500 bg-white" />
                <span className="absolute -right-1 -bottom-1 size-1.5 border border-violet-500 bg-white" />
              </div>
            )}
          </div>
          <span
            className="absolute bottom-3 left-3 text-xs text-muted"
            role="status"
          >
            {!visible ? 'Layer hidden' : locked ? 'Layer locked' : tool[0]}
          </span>
          <span className="absolute right-3 bottom-3 text-xs text-muted tabular-nums">
            {width} × {height}
          </span>
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex items-center justify-between pointer-coarse:min-h-11">
            <h3 className="text-sm font-medium">Layout</h3>
            <ToggleGroup
              value={align}
              onValueChange={(v) => v.length && setAlign(v)}
              disabled={locked}
              aria-label="Design text alignment"
            >
              {[
                ['left', 'align-start'],
                ['center', 'align-horizontal-center'],
                ['right', 'align-end'],
              ].map(([value, icon]) => (
                <DemoToggle
                  key={value}
                  value={value}
                  label={'Design align ' + value}
                  icon={icon}
                />
              ))}
            </ToggleGroup>
          </div>
          <div className="flex items-center gap-2">
            <Dimension
              disabled={locked}
              label="Object width"
              icon="arrow-x"
              value={width}
              onChange={(v) => {
                setWidth(v);
                if (linked)
                  setHeight(
                    Math.max(
                      80,
                      Math.min(240, Math.round((v * height) / width)),
                    ),
                  );
              }}
            />
            <DemoToggle
              disabled={locked}
              label="Lock aspect ratio"
              icon="link-break"
              activeIcon="link"
              pressed={linked}
              onPressedChange={setLinked}
            />
            <Dimension
              disabled={locked}
              label="Object height"
              icon="arrow-y"
              value={height}
              onChange={(v) => {
                setHeight(v);
                if (linked)
                  setWidth(
                    Math.max(
                      80,
                      Math.min(240, Math.round((v * width) / height)),
                    ),
                  );
              }}
            />
          </div>
          <Slider.Root
            disabled={locked}
            value={radius}
            onValueChange={setRadius}
            min={0}
            max={80}
          >
            <div className="flex items-center gap-2 text-xs">
              <Icon name="border-radius" />
              <Slider.Label>Corner radius</Slider.Label>
              <Slider.Value className="ml-auto tabular-nums" />
            </div>
            <SliderControl />
          </Slider.Root>
          <div className="flex items-center justify-between pointer-coarse:min-h-11">
            <span className="flex items-center gap-2 text-xs">
              <Icon name="paint-bucket" />
              Fill
            </span>
            <ToggleGroup
              value={fill}
              onValueChange={(v) => v.length && setFill(v)}
              disabled={locked}
              aria-label="Fill color"
            >
              {fills.map((item) => (
                <Toggle
                  key={item.name}
                  value={item.name}
                  aria-label={item.name + ' fill'}
                  size="icon"
                  className="group/fill size-7 pointer-coarse:size-11"
                >
                  <span
                    style={{ background: item.value }}
                    className="grid size-5 place-items-center rounded-full border border-ink/10 text-violet-950"
                  >
                    <Icon
                      name="check-sm"
                      className="invisible group-data-pressed/fill:visible"
                    />
                  </span>
                </Toggle>
              ))}
            </ToggleGroup>
          </div>
          <Slider.Root
            disabled={locked}
            value={opacity}
            onValueChange={setOpacity}
            min={0}
            max={100}
          >
            <div className="flex items-center gap-2 text-xs">
              <Icon name="circle-halftone" />
              <Slider.Label>Opacity</Slider.Label>
              <Slider.Value className="ml-auto tabular-nums">
                {(value) => `${value}%`}
              </Slider.Value>
            </div>
            <SliderControl />
          </Slider.Root>
          <div className="flex flex-col gap-3">
            {[
              {
                label: 'Shadow',
                icon: 'shadow',
                checked: shadow,
                onChange: setShadow,
              },
              {
                label: 'Border',
                icon: 'border',
                checked: border,
                onChange: setBorder,
              },
            ].map(({ label, icon, checked, onChange }) => (
              <Field.Root
                key={label}
                className="flex items-center justify-between pointer-coarse:min-h-11"
              >
                <Field.Label className="flex items-center gap-2 text-xs">
                  <Icon name={icon} />
                  {label}
                </Field.Label>
                <Switch
                  size="sm"
                  disabled={locked}
                  checked={checked}
                  onCheckedChange={onChange}
                />
              </Field.Root>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1">
        <Icon name="layers" />
        <span className="min-w-0 flex-1 truncate text-xs">Cover card</span>
        <DemoToggle
          label="Layer visible"
          icon="eye-closed"
          activeIcon="eye"
          pressed={visible}
          onPressedChange={setVisible}
        />
        <ControlDivider />
        <DemoToggle
          label="Lock layer"
          icon="lock-open"
          activeIcon="lock"
          pressed={locked}
          onPressedChange={setLocked}
        />
        <DemoIconButton
          label="Reset appearance"
          icon="arrow-restart"
          onClick={() => {
            setRadius(24);
            setOpacity(100);
            setWidth(160);
            setHeight(176);
            setFill(['Lavender']);
            setVisible(true);
            setLocked(false);
            setBorder(false);
            setShadow(true);
            setTool(['Select']);
            setAlign(['center']);
            setLinked(false);
          }}
        />
      </div>
    </div>
  );
}
