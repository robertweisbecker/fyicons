import { Field } from '@base-ui/react/field';
import { Slider, SliderControl } from '../components/ui/slider';
import { cn } from '../lib/utils';
import { useState, type CSSProperties } from 'react';
import { Icon } from '../components/Icon';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

export function Forma() {
  const [tool, setTool] = useState('Select');
  const [align, setAlign] = useState('center');
  const [radius, setRadius] = useState(12);
  // Native color inputs use an RGB hex value; this is editable document content.
  const [color, setColor] = useState('#c5b5fa');
  const [grid, setGrid] = useState(true);
  const [border, setBorder] = useState(false);
  const [shadow, setShadow] = useState(true);
  return (
    <div className="demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-violet-200 bg-violet-50 text-violet-900 scheme-light [--control-accent:var(--color-violet-500)] max-[680px]:h-117.5">
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-violet-200 bg-white px-5">
        <strong className="flex items-center gap-2">
          <Icon name="component" />
          forma
        </strong>
        <span className="flex items-center gap-1 text-xs">
          <Icon name="save" />
          Saved
        </span>
      </div>
      <div className="flex min-h-0 flex-1">
        <div
          className={cn(
            'forma-canvas relative flex min-w-0 flex-1 flex-col items-center justify-center bg-violet-100 bg-[radial-gradient(var(--color-violet-400)_.7px,transparent_.7px)] bg-size-[12px_12px]',
            !grid && 'bg-none',
          )}
        >
          <ToggleGroup
            aria-label="Design tools"
            className="relative mb-4 w-fit max-w-[calc(100%-0.5rem)] flex-wrap justify-center gap-0 rounded-lg bg-white p-1 shadow-sm outline outline-violet-400/20 sm:absolute sm:top-4 sm:left-1/2 sm:mb-0 sm:max-w-none sm:-translate-x-1/2"
            value={[tool]}
            onValueChange={(values) => {
              if (values[0]) setTool(values[0]);
            }}
          >
            {['Select', 'Frame', 'Pen', 'Draw', 'Text'].map((name, i) => (
              <Toggle
                size="icon-sm"
                key={name}
                value={name}
                aria-label={name + ' tool'}
              >
                {i === 0 ? (
                  <ToggleIcon icon="pointer" activeIcon="pointer-fill" />
                ) : (
                  <Icon
                    name={
                      ['pointer', 'frame', 'pen-tool', 'drawing', 'text'][i]
                    }
                  />
                )}
              </Toggle>
            ))}
          </ToggleGroup>
          <div
            className={cn(
              'forma-object flex h-54 w-45 max-w-[calc(100%-2rem)] flex-col items-center justify-center border p-5 text-violet-950 outline outline-offset-5 outline-violet-400 max-[680px]:h-48 max-[680px]:p-3',
              border ? 'border-violet-500' : 'border-transparent',
              shadow && 'shadow-lg shadow-violet-900/15',
            )}
            style={
              {
                borderRadius: radius,
                background: color,
                textAlign: align,
              } as CSSProperties
            }
          >
            <Icon name="asterisk-simple" />
            <strong className="my-5 w-full font-serif text-xl leading-tight">
              Project
              <br />
              overview
            </strong>
          </div>
          <span className="absolute bottom-3 left-3 text-xs">{tool}</span>
          <span className="absolute right-3 bottom-3 text-xs">100%</span>
        </div>
        <aside className="w-44 shrink-0 overflow-y-auto border-l border-violet-200 bg-white sm:w-52">
          <div className="border-b border-violet-100 p-4 text-xs font-medium">
            Design
          </div>
          <div className="border-b border-violet-100 p-3">
            <h5 className="mb-3 text-xs font-medium">Layout</h5>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <ToggleGroup
                aria-label="Text alignment"
                value={[align]}
                onValueChange={(values) => {
                  if (values[0]) setAlign(values[0]);
                }}
              >
                {['left', 'center', 'right'].map((value, i) => (
                  <Toggle
                    size="icon-sm"
                    key={value}
                    value={value}
                    aria-label={'Align ' + value}
                  >
                    <Icon
                      name={
                        [
                          'text-align-start',
                          'text-align-center',
                          'text-align-end',
                        ][i]
                      }
                    />
                  </Toggle>
                ))}
              </ToggleGroup>
              <Toggle
                size="icon-sm"
                aria-label="Toggle canvas grid"
                pressed={grid}
                onPressedChange={setGrid}
              >
                <Icon name="grid" />
              </Toggle>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              <span className="rounded border border-violet-100 p-2">
                W 180
              </span>
              <span className="rounded border border-violet-100 p-2">
                H 216
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-3 text-xs">
            <h5 className="font-medium">Appearance</h5>
            <Slider.Root
              min={0}
              max={40}
              value={radius}
              onValueChange={setRadius}
            >
              <div className="flex items-center gap-2">
                <Icon name="border-radius" />
                <Slider.Label>Radius</Slider.Label>
                <Slider.Value className="ml-auto tabular-nums" />
              </div>
              <div className="text-violet-500">
                <SliderControl
                  getAriaValueText={(_, value) => `${value} pixels`}
                />
              </div>
            </Slider.Root>
            <label className="flex items-center gap-2">
              <Icon name="paint-bucket" />
              Fill
              <input
                type="color"
                aria-label="Card fill color"
                className="ml-auto h-5 w-7"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </label>
            <Field.Root className="flex min-h-7 items-center justify-between">
              <Field.Label className="flex items-center gap-2">
                <Icon name="border" />
                Border
              </Field.Label>
              <Switch size="sm" checked={border} onCheckedChange={setBorder} />
            </Field.Root>
            <Field.Root className="flex min-h-7 items-center justify-between">
              <Field.Label className="flex items-center gap-2">
                <Icon name="shadow-ball" />
                Shadow
              </Field.Label>
              <Switch size="sm" checked={shadow} onCheckedChange={setShadow} />
            </Field.Root>
          </div>
        </aside>
      </div>
    </div>
  );
}
