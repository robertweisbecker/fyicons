'use client';

import { useEffect, useId, useState, type ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Tooltip } from '@/components/ui/tooltip';

type Option = [icon: string, label: string, activeIcon?: string];
const rail =
  'flex w-fit items-center gap-1 rounded-xl border border-line bg-surface p-1.5';

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = useId();
  return (
    <section aria-labelledby={id} className="mb-10">
      <h2 id={id} className="mb-4 text-sm font-medium">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article
      aria-label={title}
      className="flex min-w-0 flex-col rounded-xl border border-line"
    >
      <div className="flex min-h-36 flex-1 items-center justify-center px-5 py-8">
        {children}
      </div>
      <h3 className="px-4 pb-3 text-xs text-muted">{title}</h3>
    </article>
  );
}

function IconToggle({
  icons,
  label,
  labels,
}: {
  icons: [string, string];
  label: string;
  labels?: [string, string];
}) {
  const [active, setActive] = useState(false);
  return (
    <Tooltip label={label}>
      <Toggle
        variant="outline"
        size={labels ? 'default' : 'icon'}
        pressed={active}
        onPressedChange={setActive}
        aria-label={labels ? undefined : label}
      >
        <Icon name={icons[+active]} />
        {labels?.[+active]}
      </Toggle>
    </Tooltip>
  );
}

function Options({
  label,
  options,
  multiple = false,
}: {
  label: string;
  options: Option[];
  multiple?: boolean;
}) {
  const [selected, setSelected] = useState<string[]>(
    multiple ? [] : [options[0][1]],
  );
  return (
    <ToggleGroup
      aria-label={label}
      multiple={multiple}
      value={selected}
      onValueChange={(values) => {
        if (multiple || values.length) setSelected(values);
      }}
      className={rail}
    >
      {options.map(([icon, name, activeIcon]) => (
        <Tooltip key={name} label={name}>
          <Toggle value={name} variant="elevated" size="icon" aria-label={name}>
            <Icon
              name={selected.includes(name) && activeIcon ? activeIcon : icon}
            />
          </Toggle>
        </Tooltip>
      ))}
    </ToggleGroup>
  );
}

function Playback({
  style,
  video = false,
}: {
  style: 'outline' | 'filled' | 'circle';
  video?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(24);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(
      () => setPosition((p) => (p + 1) % 60),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [playing]);
  const suffix = style === 'filled' ? '-fill' : '';
  const play = style === 'circle' ? 'circle-play' : `play${suffix}`;
  const pause = style === 'circle' ? 'circle-pause' : `pause${suffix}`;
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="group"
        aria-label={video ? 'Video controls' : 'Audio controls'}
        className={rail}
      >
        <Tooltip label={'Back 10 seconds'}>
          <Button
            variant="ghost"
            size="icon"
            aria-label={'Back 10 seconds'}
            onClick={() => setPosition((p) => Math.max(0, p - 10))}
          >
            <Icon
              name={`${video ? 'fast-backward' : 'skip-backward'}${suffix}`}
            />
          </Button>
        </Tooltip>
        <Tooltip label={playing ? 'Pause' : 'Play'}>
          <Button
            variant="ghost"
            size="icon"
            aria-label={playing ? 'Pause' : 'Play'}
            onClick={() => setPlaying(!playing)}
          >
            <Icon name={playing ? pause : play} />
          </Button>
        </Tooltip>
        <Tooltip label={'Forward 10 seconds'}>
          <Button
            variant="ghost"
            size="icon"
            aria-label={'Forward 10 seconds'}
            onClick={() => setPosition((p) => Math.min(59, p + 10))}
          >
            <Icon
              name={`${video ? 'fast-forward' : 'skip-forward'}${suffix}`}
            />
          </Button>
        </Tooltip>
        <span className="mx-1 h-4 w-px bg-line" />
        <IconToggle
          icons={[`volume-high${suffix}`, `volume-slash${suffix}`]}
          label="Mute"
        />
        {!video && (
          <IconToggle icons={['repeat', 'repeat-one']} label="Repeat one" />
        )}
      </div>
      <output aria-live="off" className="text-xs text-muted tabular-nums">
        0:{String(position).padStart(2, '0')}
      </output>
    </div>
  );
}

function SettingSlider({
  label,
  endpoints,
  levels,
  initial = 50,
  unit = '%',
}: {
  label: string;
  endpoints?: [string, string];
  levels?: string[];
  initial?: number;
  unit?: string;
}) {
  const [value, setValue] = useState(initial);
  const icon =
    levels?.[
      Math.min(levels.length - 1, Math.floor((value / 101) * levels.length))
    ];
  return (
    <Slider.Root
      value={value}
      onValueChange={setValue}
      className="w-full max-w-64"
    >
      <div className="mb-3 flex items-center justify-between text-xs">
        <Slider.Label>{label}</Slider.Label>
        <Slider.Value className="text-muted tabular-nums">
          {() => `${value}${unit}`}
        </Slider.Value>
      </div>
      <div className="flex items-center gap-3">
        <Icon name={endpoints?.[0] ?? icon!} />
        <SliderControl />
        {endpoints && <Icon name={endpoints[1]} />}
      </div>
    </Slider.Root>
  );
}

export function Gallery() {
  return (
    <div>
      <Section title="Appearance">
        <Example title="Lights">
          <IconToggle icons={['lightbulb', 'lightbulb-on']} label="Lights on" />
        </Example>
        <Example title="Light · Dark · System">
          <Options
            label="Appearance with desktop"
            options={[
              ['sun', 'Light'],
              ['moon', 'Dark'],
              ['desktop', 'System'],
            ]}
          />
        </Example>
        <Example title="Light · Dark · Auto">
          <Options
            label="Appearance with auto"
            options={[
              ['sun', 'Light'],
              ['moon', 'Dark'],
              ['appearance', 'Auto'],
            ]}
          />
        </Example>
        <Example title="Filled selection">
          <Options
            label="Appearance with filled selection"
            options={[
              ['sun', 'Light', 'sun-fill'],
              ['moon', 'Dark', 'moon-fill'],
            ]}
          />
        </Example>
        <Example title="Labeled appearance">
          <IconToggle
            icons={['appearance-simple', 'appearance-simple-reverse']}
            label="Dark mode"
            labels={['Light', 'Dark']}
          />
        </Example>
        <Example title="Sun & moon">
          <IconToggle icons={['sun-lg', 'moon-fill']} label="Dark mode" />
        </Example>
      </Section>
      <Section title="Toolbars">
        <Example title="Text formatting">
          <Options
            label="Text formatting"
            multiple
            options={[
              ['text-bold', 'Bold'],
              ['italic', 'Italic'],
              ['text-underline', 'Underline'],
              ['text-strikethrough', 'Strikethrough'],
            ]}
          />
        </Example>
        <Example title="Paragraph alignment">
          <Options
            label="Paragraph alignment"
            options={[
              ['text-align-start', 'Align left'],
              ['text-align-center', 'Align center'],
              ['text-align-end', 'Align right'],
              ['text-align-justify', 'Justify'],
            ]}
          />
        </Example>
        <Example title="Lists & quotes">
          <Options
            label="Paragraph style"
            options={[
              ['text-block', 'Paragraph'],
              ['list-bullet', 'Bulleted list'],
              ['list-ordered', 'Numbered list'],
              ['paragraph-blockquote', 'Quote'],
            ]}
          />
        </Example>
        <Example title="Audio · Outline">
          <Playback style="outline" />
        </Example>
        <Example title="Audio · Filled">
          <Playback style="filled" />
        </Example>
        <Example title="Audio · Circular">
          <Playback style="circle" />
        </Example>
        <Example title="Video · Outline">
          <Playback style="outline" video />
        </Example>
        <Example title="Video · Filled">
          <Playback style="filled" video />
        </Example>
        <Example title="Video · Circular">
          <Playback style="circle" video />
        </Example>
        <Example title="Drawing">
          <Options
            label="Drawing tool"
            options={[
              ['pointer', 'Select'],
              ['pen-tip', 'Pen'],
              ['brush-tip', 'Brush'],
              ['pencil-tip', 'Pencil'],
              ['eraser', 'Eraser'],
            ]}
          />
        </Example>
        <Example title="Shapes">
          <Options
            label="Shape tool"
            options={[
              ['frame', 'Frame'],
              ['square', 'Rectangle'],
              ['circle', 'Ellipse'],
              ['text-title', 'Text'],
            ]}
          />
        </Example>
        <Example title="View">
          <Options
            label="View layout"
            options={[
              ['list-thumbnails', 'List', 'list-thumbnails-fill'],
              ['grid', 'Grid', 'grid-fill'],
              ['grid-masonry', 'Masonry', 'grid-masonry-fill'],
            ]}
          />
        </Example>
      </Section>
      <Section title="Sliders">
        <Example title="Slow to fast">
          <SettingSlider label="Speed" endpoints={['turtle', 'rabbit']} />
        </Example>
        <Example title="Dynamic gauge">
          <SettingSlider
            label="Speed"
            levels={['gauge-min', 'gauge-low', 'gauge-high', 'gauge-max']}
          />
        </Example>
        <Example title="Dynamic meter">
          <SettingSlider
            label="Intensity"
            levels={['meter-low', 'meter', 'meter-high']}
          />
        </Example>
        <Example title="Dynamic signal">
          <SettingSlider
            label="Strength"
            levels={[
              'signal-four-0',
              'signal-four-1',
              'signal-four-2',
              'signal-four-3',
              'signal-four',
            ]}
          />
        </Example>
        <Example title="Quiet to loud">
          <SettingSlider
            label="Volume"
            endpoints={['volume-none', 'volume-high']}
            initial={65}
          />
        </Example>
        <Example title="Dynamic volume">
          <SettingSlider
            label="Volume"
            levels={[
              'volume-none-fill',
              'volume-low-fill',
              'volume-medium-fill',
              'volume-high-fill',
            ]}
            initial={65}
          />
        </Example>
        <Example title="Less to more">
          <SettingSlider
            label="Quantity"
            endpoints={['minus', 'plus']}
            unit=""
            initial={12}
          />
        </Example>
        <Example title="Cool to warm">
          <SettingSlider
            label="Temperature"
            endpoints={['thermometer-min', 'thermometer-max']}
            unit="°"
            initial={22}
          />
        </Example>
        <Example title="Dim to bright">
          <SettingSlider
            label="Brightness"
            endpoints={['sun', 'sun-lg']}
            initial={75}
          />
        </Example>
      </Section>
      <Section title="States">
        <Example title="Save">
          <div className="flex gap-4">
            <IconToggle icons={['heart', 'heart-fill']} label="Like" />
            <IconToggle
              icons={['bookmark', 'bookmark-fill']}
              label="Bookmark"
            />
            <IconToggle icons={['star', 'star-fill']} label="Favorite" />
          </div>
        </Example>
        <Example title="Notifications">
          <div className="flex gap-4">
            <IconToggle
              icons={['bell', 'bell-slash']}
              label="Mute notifications"
            />
            <IconToggle
              icons={['bell-2', 'bell-2-slash']}
              label="Silence alerts"
            />
          </div>
        </Example>
        <Example title="Visibility">
          <div className="flex gap-4">
            <IconToggle icons={['eye', 'eye-slash']} label="Hide" />
            <IconToggle
              icons={['eye-pupil', 'eye-pupil-slash']}
              label="Conceal"
            />
          </div>
        </Example>
        <Example title="Lock">
          <div className="flex gap-4">
            <IconToggle icons={['lock-open', 'lock']} label="Lock" />
            <IconToggle
              icons={['lock-open-fill', 'lock-fill']}
              label="Lock filled"
            />
          </div>
        </Example>
        <Example title="Reactions">
          <Options
            label="Reaction"
            options={[
              ['emoji-beam', 'Happy', 'emoji-beam-fill'],
              ['emoji-grin', 'Grinning', 'emoji-grin-fill'],
              ['emoji-happy', 'Delighted', 'emoji-happy-fill'],
            ]}
          />
        </Example>
        <Example title="Playback">
          <div className="flex gap-4">
            <IconToggle icons={['play', 'pause']} label="Playing outline" />
            <IconToggle
              icons={['play-fill', 'pause-fill']}
              label="Playing filled"
            />
            <IconToggle
              icons={['circle-play', 'circle-pause']}
              label="Playing circular"
            />
          </div>
        </Example>
      </Section>
    </div>
  );
}
