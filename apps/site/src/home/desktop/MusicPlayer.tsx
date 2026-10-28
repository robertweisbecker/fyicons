import { useRef, useState, type ReactNode, type Ref } from 'react';
import { Popover } from '@base-ui/react/popover';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  DemoHint,
  DemoIconButton,
  DemoToggle,
} from '@/demos/components/DemoControls';
import { AlbumArtwork, tracks, trackTime } from './musicData';

function PlayerSlider({
  label,
  value,
  max,
  onValueChange,
  formatValue,
  className,
}: {
  label: string;
  value: number;
  max: number;
  onValueChange: (value: number) => void;
  formatValue: (value: number) => string;
  className: string;
}) {
  return (
    <Slider.Root
      min={0}
      max={max}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      <Slider.Label className="sr-only">{label}</Slider.Label>
      <Slider.Control className="group/slider flex h-5 touch-none items-center select-none">
        <Slider.Track className="relative h-1 w-full rounded-full bg-white/25">
          <Slider.Indicator className="rounded-full bg-white group-focus-within/slider:bg-green-400 group-hover/slider:bg-green-400" />
          <Slider.Thumb
            getAriaValueText={(_, next) => formatValue(next)}
            className="block size-2.5 rounded-full bg-white opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white data-dragging:opacity-100"
          />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

function PlayerPopover({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <Popover.Root>
      <DemoHint label={label}>
        <Popover.Trigger
          render={<Button variant="ghost" size="icon-xs" />}
          aria-label={label}
          className="data-popup-open:text-green-400"
        >
          <Icon name={icon} />
        </Popover.Trigger>
      </DemoHint>
      <Popover.Portal>
        <Popover.Positioner
          side="top"
          align="end"
          sideOffset={10}
          collisionPadding={16}
          className="z-50"
        >
          <Popover.Popup
            className="dark w-56 max-w-(--available-width) rounded-xl bg-dialog p-4 text-xs text-ink shadow-xl outline outline-offset-(--surface-outline-offset) outline-border"
            data-theme="dark"
          >
            <Popover.Title className="mb-3 text-sm font-semibold">
              {label}
            </Popover.Title>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function MusicPlayer({
  track,
  playing,
  onPlayingChange,
  position,
  onPositionChange,
  onSkip,
  queueOpen,
  onQueueChange,
  queueId,
  queueToggle,
  onNowPlaying,
}: {
  track: (typeof tracks)[number];
  playing: boolean;
  onPlayingChange: (playing: boolean) => void;
  position: number;
  onPositionChange: (position: number) => void;
  onSkip: (step: number, shuffle: boolean) => void;
  queueOpen: boolean;
  onQueueChange: (open: boolean) => void;
  queueId: string;
  queueToggle: Ref<HTMLButtonElement>;
  onNowPlaying: () => void;
}) {
  const [volume, setVolume] = useState(70);
  const previousVolume = useRef(70);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);
  const repeatLabel = ['Repeat off', 'Repeat all', 'Repeat one'][repeat];
  return (
    <footer
      aria-label="Now playing"
      className="grid shrink-0 items-center gap-2 bg-neutral-950 p-3 text-xs @3xl/window:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] @3xl/window:gap-4"
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <AlbumArtwork className="size-10 @3xl/window:size-12" decorative />
        <div className="min-w-0" aria-live="polite">
          <p className="truncate font-medium">{track.title}</p>
          <p className="mt-1 truncate text-muted">{track.artist}</p>
        </div>
        <DemoToggle
          label="Save track"
          icon="circle-plus"
          activeIcon="circle-check-fill"
          size="icon-xs"
          pressed={saved.includes(track.title)}
          onPressedChange={(next) =>
            setSaved((current) =>
              next
                ? [...current, track.title]
                : current.filter((title) => title !== track.title),
            )
          }
          className="ml-auto text-muted data-pressed:bg-transparent data-pressed:text-green-400 @3xl/window:ml-0"
        />
      </div>
      <div className="min-w-0">
        <div className="flex items-center justify-center gap-3">
          <DemoToggle
            label="Shuffle"
            icon="shuffle"
            size="icon-xs"
            pressed={shuffle}
            onPressedChange={setShuffle}
            className="relative text-muted data-pressed:bg-transparent data-pressed:text-green-400 data-pressed:after:absolute data-pressed:after:-bottom-0.5 data-pressed:after:size-1 data-pressed:after:rounded-full data-pressed:after:bg-current"
          />
          <DemoIconButton
            label="Previous track"
            icon="skip-backward-fill"
            size="icon-xs"
            onClick={() => onSkip(-1, shuffle)}
            className="text-muted hover:text-white"
          />
          <Button
            size="icon"
            aria-label={playing ? 'Pause track' : 'Play track'}
            className="rounded-full bg-white text-black hover:bg-white/90"
            onClick={() => {
              if (position === track.length) onPositionChange(0);
              onPlayingChange(!playing);
            }}
          >
            <Icon name={playing ? 'pause-fill' : 'play-fill'} />
          </Button>
          <DemoIconButton
            label="Next track"
            icon="skip-forward-fill"
            size="icon-xs"
            onClick={() => onSkip(1, shuffle)}
            className="text-muted hover:text-white"
          />
          <DemoIconButton
            label={repeatLabel}
            icon={repeat === 2 ? 'repeat-one' : 'repeat'}
            size="icon-xs"
            aria-pressed={repeat > 0}
            onClick={() => setRepeat((current) => (current + 1) % 3)}
            className="relative text-muted aria-pressed:bg-transparent aria-pressed:text-green-400 aria-pressed:after:absolute aria-pressed:after:-bottom-0.5 aria-pressed:after:size-1 aria-pressed:after:rounded-full aria-pressed:after:bg-current"
          />
        </div>
        <div className="mt-1 flex items-center gap-2 text-[10px] text-muted tabular-nums">
          <span className="w-7 text-right">{trackTime(position)}</span>
          <PlayerSlider
            label="Playback position"
            max={track.length}
            value={position}
            onValueChange={onPositionChange}
            formatValue={trackTime}
            className="min-w-0 flex-1"
          />
          <span className="w-7">{trackTime(track.length)}</span>
        </div>
      </div>
      <div
        aria-label="Listening tools"
        className="flex items-center justify-center gap-0.5 text-muted @3xl/window:justify-end"
      >
        <DemoIconButton
          label="Now playing view"
          icon="video"
          size="icon-xs"
          onClick={onNowPlaying}
        />
        <PlayerPopover label="Lyrics" icon="microphone-music">
          <p className="font-medium">{track.title}</p>
          <p className="mt-1 leading-relaxed text-muted">
            No lyrics yet. The Quiet Hours are keeping quiet.
          </p>
        </PlayerPopover>
        <DemoHint label={queueOpen ? 'Hide queue' : 'Show queue'}>
          <Button
            ref={queueToggle}
            variant="ghost"
            size="icon-xs"
            aria-label={queueOpen ? 'Hide queue' : 'Show queue'}
            aria-expanded={queueOpen}
            aria-controls={queueId}
            onClick={() => onQueueChange(!queueOpen)}
            className="relative aria-expanded:text-green-400 aria-expanded:after:absolute aria-expanded:after:-bottom-0.5 aria-expanded:after:size-1 aria-expanded:after:rounded-full aria-expanded:after:bg-current"
          >
            <Icon name="queue" />
          </Button>
        </DemoHint>
        <PlayerPopover label="Connect to a device" icon="speakers">
          <div className="flex items-center gap-3 text-green-400">
            <Icon name="computer" size={24} />
            <span>This device</span>
            <Icon name="check" className="ml-auto" />
          </div>
          <p className="mt-3 leading-relaxed text-muted">
            You're listening right here. No other devices connected.
          </p>
        </PlayerPopover>
        <DemoIconButton
          label={volume ? 'Mute' : 'Unmute'}
          icon={
            !volume
              ? 'volume-slash'
              : volume < 34
                ? 'volume-none'
                : volume < 67
                  ? 'volume-low'
                  : 'volume-high'
          }
          size="icon-xs"
          onClick={() => {
            if (volume) {
              previousVolume.current = volume;
              setVolume(0);
            } else setVolume(previousVolume.current);
          }}
        />
        <PlayerSlider
          label="Volume"
          max={100}
          value={volume}
          onValueChange={setVolume}
          formatValue={(value) => `${value}%`}
          className="mr-1 w-14 shrink-0"
        />
        <DemoToggle
          label="Picture in picture"
          icon="picture-in-picture"
          activeIcon="picture-in-picture-exit"
          size="icon-xs"
          className="data-pressed:bg-transparent data-pressed:text-green-400"
        />
        <DemoToggle
          label="Expand player"
          icon="arrows-expand"
          activeIcon="arrows-collapse"
          size="icon-xs"
          className="data-pressed:bg-transparent data-pressed:text-green-400"
        />
      </div>
    </footer>
  );
}
