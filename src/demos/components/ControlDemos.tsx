import { useEffect, useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export function StateDemo() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-5">
      {(
        [
          [
            'Favorites',
            [
              ['Like', 'heart-alt', 'heart-alt-fill'],
              ['Star', 'star', 'star-fill'],
              ['Save', 'bookmark', 'bookmark-fill'],
            ],
          ],
          [
            'Tools',
            [
              ['Select', 'pointer', 'pointer-fill'],
              ['Edit', 'pencil-edit', 'pencil-edit-fill'],
              ['Settings', 'settings', 'settings-fill'],
            ],
          ],
          [
            'Visibility',
            [
              ['Visible', 'eye-closed', 'eye-open'],
              ['Light', 'sun', 'sun-fill'],
              ['People', 'users-two', 'users-two-fill'],
            ],
          ],
        ] as const
      ).map(([label, items]) => (
        <div key={label} className="flex items-center justify-between gap-3">
          <span className="text-sm text-muted">{label}</span>
          <ToggleGroup multiple defaultValue={[items[0][0]]} aria-label={label}>
            {items.map(([name, icon, activeIcon]) => (
              <Toggle key={name} value={name} size="icon" aria-label={name}>
                <ToggleIcon icon={icon} activeIcon={activeIcon} />
              </Toggle>
            ))}
          </ToggleGroup>
        </div>
      ))}
    </div>
  );
}
export function PlaybackDemo() {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [volume, setVolume] = useState(70);
  const [position, setPosition] = useState(84);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const tracks = ['Soft Signal', 'Window Seat', 'After Hours'];
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(
      () =>
        setPosition((value) => (value < 222 ? value + 1 : repeat ? 0 : 222)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [playing, repeat]);
  useEffect(() => {
    if (position === 222 && !repeat) setPlaying(false);
  }, [position, repeat]);
  function next(step: number) {
    setTrack(
      (track +
        (shuffle ? 1 + Math.floor(Math.random() * 2) : step) +
        tracks.length) %
        tracks.length,
    );
    setPosition(0);
  }
  return (
    <div className="flex flex-1 flex-col justify-center gap-5">
      <div className="flex items-center gap-4">
        <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-current/10">
          <Icon name="waveform" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{tracks[track]}</h3>
          <p className="mt-1 text-xs text-muted">The Quiet Hours</p>
        </div>
        <Toggle className="ml-auto" size="icon" aria-label="Like track">
          <ToggleIcon icon="heart" activeIcon="heart-fill" />
        </Toggle>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Toggle
          size="icon"
          aria-label="Shuffle"
          pressed={shuffle}
          onPressedChange={setShuffle}
        >
          <Icon name="arrow-shuffle" />
        </Toggle>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Previous track"
          onClick={() => next(-1)}
        >
          <Icon name="skip-backward-fill" />
        </Button>
        <Toggle
          pressed={playing}
          onPressedChange={(value) => {
            if (position === 222) setPosition(0);
            setPlaying(value);
          }}
          aria-label={playing ? 'Pause track' : 'Play track'}
          className="size-12 rounded-full bg-ink text-canvas"
          variant="unstyled"
          size="unstyled"
        >
          <Icon name={playing ? 'pause-fill' : 'play-fill'} size={24} />
        </Toggle>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Next track"
          onClick={() => next(1)}
        >
          <Icon name="skip-forward-fill" />
        </Button>
        <Toggle
          size="icon"
          aria-label="Repeat"
          pressed={repeat}
          onPressedChange={setRepeat}
        >
          <Icon name="arrow-repeat" />
        </Toggle>
      </div>
      <Slider.Root
        min={0}
        max={222}
        value={position}
        onValueChange={setPosition}
      >
        <Slider.Label className="sr-only">Playback position</Slider.Label>
        <SliderControl />
        <div className="flex justify-between text-xs text-muted tabular-nums">
          <span>
            {Math.floor(position / 60)}:{String(position % 60).padStart(2, '0')}
          </span>
          <span>3:42</span>
        </div>
      </Slider.Root>
      <div className="flex items-center gap-3">
        <Icon
          name={
            volume === 0
              ? 'volume-slash'
              : volume < 34
                ? 'volume-none'
                : volume < 67
                  ? 'volume-low'
                  : 'volume-high'
          }
        />
        <Slider.Root
          className="flex flex-1 items-center gap-3"
          min={0}
          max={100}
          value={volume}
          onValueChange={setVolume}
        >
          <Slider.Label className="sr-only">Volume</Slider.Label>
          <SliderControl />
          <Slider.Value className="w-6 text-right text-xs tabular-nums" />
        </Slider.Root>
      </div>
    </div>
  );
}
export function AppearanceDemo() {
  const [radius, setRadius] = useState(16);
  const [shadow, setShadow] = useState(true);
  const [border, setBorder] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="grid h-32 place-items-center rounded-xl bg-current/5">
        <div
          style={{ borderRadius: radius }}
          className={cn(
            'grid size-20 place-items-center bg-ink text-canvas',
            shadow && 'shadow-lg shadow-ink/20',
            border && 'outline-2 outline-offset-4 outline-muted',
          )}
        >
          <Icon name="component" />
        </div>
      </div>
      <Slider.Root min={0} max={40} value={radius} onValueChange={setRadius}>
        <div className="flex items-center gap-2 text-sm">
          <Icon name="border-radius" />
          <Slider.Label>Corner radius</Slider.Label>
          <Slider.Value className="ml-auto text-xs tabular-nums" />
        </div>
        <SliderControl />
      </Slider.Root>
      {[
        {
          label: 'Shadow',
          icon: 'shadow-ball',
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
        <Field.Root key={label} className="flex items-center justify-between">
          <Field.Label className="flex items-center gap-2 text-sm">
            <Icon name={icon} />
            {label}
          </Field.Label>
          <Switch size="sm" checked={checked} onCheckedChange={onChange} />
        </Field.Root>
      ))}
    </div>
  );
}
export function SettingsDemo() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <Field.Root className="flex items-center gap-3">
        <Icon name="bell-1" />
        <div className="flex-1">
          <Field.Label className="text-sm font-medium">
            Notifications
          </Field.Label>
          <p className="mt-1 text-xs text-muted">
            Stay up to date with your projects.
          </p>
        </div>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
      </Field.Root>
      <div className="ml-7 flex flex-col gap-4 border-l border-line pl-4">
        {[
          ['Task updates', 'circle-check'],
          ['New messages', 'chat'],
          ['Quiet hours', 'moon'],
        ].map(([label, icon], i) => (
          <Field.Root
            key={label}
            className="flex items-center justify-between gap-3"
          >
            <Field.Label className="flex items-center gap-2 text-sm">
              <Icon name={icon} />
              {label}
            </Field.Label>
            <Switch size="sm" defaultChecked={i < 2} disabled={!enabled} />
          </Field.Root>
        ))}
      </div>
      <Field.Root className="mt-auto flex items-center justify-between gap-3">
        <Field.Label className="flex items-center gap-2 text-sm">
          <Icon name="cloud" />
          Sync across devices
        </Field.Label>
        <Switch defaultChecked />
      </Field.Root>
    </div>
  );
}
