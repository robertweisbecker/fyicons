import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { NumberField } from '@base-ui/react/number-field';
import { createIconLookup } from '@/components/createIconLookup';

import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';
import { Slider, SliderControl } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { createDemoControls, ControlDivider } from './DemoControls';

import Glyph0 from 'fyicons/icons/IconAlert';
import Glyph1 from 'fyicons/icons/IconAlertFill';
import Glyph2 from 'fyicons/icons/IconArrowRestart';
import Glyph3 from 'fyicons/icons/IconArrowToLeft';
import Glyph4 from 'fyicons/icons/IconArrowToRight';
import Glyph5 from 'fyicons/icons/IconArrowX';
import Glyph6 from 'fyicons/icons/IconArrowY';
import Glyph7 from 'fyicons/icons/IconArrowsToCenter';
import Glyph8 from 'fyicons/icons/IconAsterisk';
import Glyph9 from 'fyicons/icons/IconBorderOuter';
import Glyph10 from 'fyicons/icons/IconBorderRadius';
import Glyph11 from 'fyicons/icons/IconBucket';
import Glyph12 from 'fyicons/icons/IconCheckSm';
import Glyph13 from 'fyicons/icons/IconCircleHalftone';
import Glyph14 from 'fyicons/icons/IconCopied';
import Glyph15 from 'fyicons/icons/IconCopiedFill';
import Glyph16 from 'fyicons/icons/IconCopy';
import Glyph17 from 'fyicons/icons/IconDrawing';
import Glyph18 from 'fyicons/icons/IconError';
import Glyph19 from 'fyicons/icons/IconErrorFill';
import Glyph20 from 'fyicons/icons/IconEye';
import Glyph21 from 'fyicons/icons/IconEyeClosed';
import Glyph22 from 'fyicons/icons/IconEyeFill';
import Glyph23 from 'fyicons/icons/IconFrame';
import Glyph24 from 'fyicons/icons/IconGhost';
import Glyph25 from 'fyicons/icons/IconGrid';
import Glyph26 from 'fyicons/icons/IconGridFill';
import Glyph27 from 'fyicons/icons/IconHand';
import Glyph28 from 'fyicons/icons/IconHandGrab';
import Glyph29 from 'fyicons/icons/IconLayers';
import Glyph30 from 'fyicons/icons/IconLinkSide';
import Glyph31 from 'fyicons/icons/IconLinkSideUnlink';
import Glyph32 from 'fyicons/icons/IconLock';
import Glyph33 from 'fyicons/icons/IconLockFill';
import Glyph34 from 'fyicons/icons/IconLockOpen';
import Glyph35 from 'fyicons/icons/IconLockOpenFill';
import Glyph36 from 'fyicons/icons/IconPenTool';
import Glyph37 from 'fyicons/icons/IconPointer';
import Glyph38 from 'fyicons/icons/IconPointerFill';
import Glyph39 from 'fyicons/icons/IconScribble';
import Glyph40 from 'fyicons/icons/IconShadow';
import Glyph41 from 'fyicons/icons/IconTextTitle';
import Glyph42 from 'fyicons/icons/IconTextTitleFill';
import Glyph43 from 'fyicons/icons/IconTextTitle';
import Glyph44 from 'fyicons/icons/IconTextTitleFill';
import Glyph45 from 'fyicons/icons/IconVectorPath';
const Icon = createIconLookup({
  alert: { Component: Glyph0, id: '667:563' },
  'alert-fill': { Component: Glyph1, id: '667:570' },
  'arrow-restart': { Component: Glyph2, id: '101:4348' },
  'arrow-to-left': { Component: Glyph3, id: '558:8903' },
  'arrow-to-right': { Component: Glyph4, id: '558:8904' },
  'arrow-x': { Component: Glyph5, id: '518:4795' },
  'arrow-y': { Component: Glyph6, id: '510:4786' },
  'arrows-to-center': { Component: Glyph7, id: '558:8902' },
  asterisk: { Component: Glyph8, id: '378:8045' },
  'border-outer': { Component: Glyph9, id: '114:2149' },
  'border-radius': { Component: Glyph10, id: '114:2223' },
  bucket: { Component: Glyph11, id: '137:4742' },
  'check-sm': { Component: Glyph12, id: '158:11581' },
  'circle-halftone': { Component: Glyph13, id: '506:1656' },
  copied: { Component: Glyph14, id: '548:8698' },
  'copied-fill': { Component: Glyph15, id: '892:30476' },
  copy: { Component: Glyph16, id: '245:15242' },
  drawing: { Component: Glyph17, id: '140:6027' },
  error: { Component: Glyph18, id: '1001:675' },
  'error-fill': { Component: Glyph19, id: '1001:681' },
  eye: { Component: Glyph20, id: '120:2551' },
  'eye-closed': { Component: Glyph21, id: '120:2553' },
  'eye-fill': { Component: Glyph22, id: '1010:19329' },
  frame: { Component: Glyph23, id: '125:2609' },
  ghost: { Component: Glyph24, id: '727:314' },
  grid: { Component: Glyph25, id: '102:4381' },
  'grid-fill': { Component: Glyph26, id: '811:8579' },
  hand: { Component: Glyph27, id: '183:12549' },
  'hand-grab': { Component: Glyph28, id: '395:11432' },
  layers: { Component: Glyph29, id: '509:4575' },
  'link-side': { Component: Glyph30, id: '1042:708' },
  'link-side-unlink': { Component: Glyph31, id: '1042:735' },
  lock: { Component: Glyph32, id: '101:4339' },
  'lock-fill': { Component: Glyph33, id: '752:4245' },
  'lock-open': { Component: Glyph34, id: '193:13627' },
  'lock-open-fill': { Component: Glyph35, id: '752:4267' },
  'pen-tool': { Component: Glyph36, id: '58:9553' },
  pointer: { Component: Glyph37, id: '140:6033' },
  'pointer-fill': { Component: Glyph38, id: '498:2179' },
  scribble: { Component: Glyph39, id: '118:2178' },
  shadow: { Component: Glyph40, id: '130:2688' },
  text: { Component: Glyph41, id: '58:9540' },
  'text-fill': { Component: Glyph42, id: '1084:12366' },
  'text-title': { Component: Glyph43, id: '58:9540' },
  'text-title-fill': { Component: Glyph44, id: '1084:12366' },
  'vector-path': { Component: Glyph45, id: '679:515' },
});

const tools = [
  ['Select', 'pointer', 'pointer-fill'],
  ['Move', 'hand', 'hand-grab'],
  ['Frame', 'frame', 'frame'],
  ['Pen', 'pen-tool', 'pen-tool'],
  ['Draw', 'drawing', 'drawing'],
  ['Text', 'text-title', 'text-title'],
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
      <NumberField.Group className="flex h-8 items-center gap-1 rounded-lg border border-line bg-surface focus-within:border-current">
        <NumberField.ScrubArea className="cursor-ew-resize px-2">
          <Icon name={icon} className="text-muted" />
        </NumberField.ScrubArea>
        <NumberField.Input
          aria-label={label}
          className="w-full min-w-0 bg-transparent px-2 text-end text-sm tabular-nums outline-none"
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
              label={name}
              icon={icon}
              activeIcon={activeIcon}
            />
          ))}
        </ToggleGroup>
        <DemoToggle
          label="Canvas grid"
          icon="grid"
          activeIcon="grid-fill"
          pressed={grid}
          onPressedChange={setGrid}
        />
      </div>
      <div className="grid flex-1 gap-5 @xl:grid-cols-[minmax(0,1fr)_220px]">
        <div
          className={cn(
            'relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface',
            grid &&
              'bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[16px_16px]',
          )}
        >
          <div
            className={cn(
              'relative max-w-[calc(100%-3rem)] text-violet-950 outline-2 outline-offset-(--surface-outline-offset)',
              border ? 'outline-violet-800/40' : 'outline-transparent',
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
                    ? 'font-capital'
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
                className="pointer-events-none absolute -inset-2 rounded-sm border border-control-accent"
              >
                <span className="absolute -top-1 -left-1 size-1.5 border border-control-accent bg-surface" />
                <span className="absolute -right-1 -bottom-1 size-1.5 border border-control-accent bg-surface" />
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
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Layout</h3>
            <ToggleGroup
              value={align}
              onValueChange={(v) => v.length && setAlign(v)}
              disabled={locked}
              aria-label="Design text alignment"
            >
              {[
                ['left', 'arrow-to-left'],
                ['center', 'arrows-to-center'],
                ['right', 'arrow-to-right'],
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
              label="Width"
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
              variant="text"
              disabled={locked}
              label="Lock aspect ratio"
              icon="link-side-unlink"
              activeIcon="link-side"
              pressed={linked}
              onPressedChange={setLinked}
            />
            <Dimension
              disabled={locked}
              label="Height"
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
            thumbAlignment="edge"
            value={radius}
            onValueChange={setRadius}
            min={0}
            max={80}
          >
            <div className="flex items-center gap-2 text-xs">
              <Icon name="border-radius" />
              <Slider.Label>Radius</Slider.Label>
              <Slider.Value className="ml-auto tabular-nums" />
            </div>
            <SliderControl />
          </Slider.Root>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs">
              <Icon name="bucket" />
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
                  className="group/fill size-7"
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
            thumbAlignment="edge"
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
                label: 'Outline',
                icon: 'border-outer',
                checked: border,
                onChange: setBorder,
              },
            ].map(({ label, icon, checked, onChange }) => (
              <Field.Root
                key={label}
                className="flex items-center justify-between"
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

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
