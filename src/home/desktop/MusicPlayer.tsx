import { useRef, useState, type Ref } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Slider, SliderControl } from '@/components/ui/slider';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';
import { AlbumArtwork, tracks, trackTime } from './musicData';

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
}) {
  const [volume, setVolume] = useState(70);
  const previousVolume = useRef(70);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [liked, setLiked] = useState<string[]>([]);
  const repeatLabel = ['Repeat off', 'Repeat all', 'Repeat one'][repeat];
  return (
    <footer
      aria-label="Now playing"
      className="shrink-0 border-t border-line bg-surface p-3 text-xs"
    >
      <div className="flex items-center gap-2">
        <AlbumArtwork className="size-10" decorative />
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="truncate font-medium">{track.title}</p>
          <p className="mt-1 truncate text-muted">{track.artist}</p>
        </div>
        <DemoToggle
          label="Like track"
          icon="heart-wide"
          activeIcon="heart-wide-fill"
          size="icon-xs"
          pressed={liked.includes(track.title)}
          onPressedChange={(next) =>
            setLiked((current) =>
              next
                ? [...current, track.title]
                : current.filter((title) => title !== track.title),
            )
          }
          className="data-pressed:text-green-400"
        />
        <div className="ml-1 flex items-center gap-1">
          <DemoToggle
            label="Shuffle"
            icon="arrows-shuffle"
            size="icon-sm"
            pressed={shuffle}
            onPressedChange={setShuffle}
            className="hidden data-pressed:text-green-400 @lg/window:inline-flex"
          />
          <DemoIconButton
            label="Previous track"
            icon="skip-backward-fill"
            size="icon-xs"
            onClick={() => onSkip(-1, shuffle)}
          />
          <Button
            size="icon"
            aria-label={playing ? 'Pause track' : 'Play track'}
            className="rounded-full"
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
          />
          <DemoIconButton
            label={repeatLabel}
            icon={repeat === 2 ? 'arrows-repeat-one' : 'arrows-repeat'}
            size="icon-sm"
            aria-pressed={repeat > 0}
            onClick={() => setRepeat((current) => (current + 1) % 3)}
            className="hidden aria-pressed:text-green-400 @lg/window:inline-flex"
          />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-muted tabular-nums">{trackTime(position)}</span>
        <Slider.Root
          min={0}
          max={track.length}
          value={position}
          onValueChange={onPositionChange}
          className="min-w-0 flex-1"
        >
          <Slider.Label className="sr-only">Playback position</Slider.Label>
          <SliderControl getAriaValueText={(_, value) => trackTime(value)} />
        </Slider.Root>
        <span className="text-muted tabular-nums">
          {trackTime(track.length)}
        </span>
        <Button
          ref={queueToggle}
          variant="ghost"
          size="icon-xs"
          aria-label={queueOpen ? 'Hide queue' : 'Show queue'}
          aria-expanded={queueOpen}
          aria-controls={queueId}
          onClick={() => onQueueChange(!queueOpen)}
          className="aria-expanded:text-green-400 @3xl/window:hidden"
        >
          <Icon name={queueOpen ? 'queue' : 'queue-play'} />
        </Button>
        <DemoIconButton
          label={volume ? 'Mute' : 'Unmute'}
          icon={
            !volume
              ? 'volume-slash-fill'
              : volume < 34
                ? 'volume-none-fill'
                : volume < 67
                  ? 'volume-low-fill'
                  : 'volume-high-fill'
          }
          size="icon-xs"
          onClick={() => {
            if (volume) {
              previousVolume.current = volume;
              setVolume(0);
            } else setVolume(previousVolume.current);
          }}
        />
        <Slider.Root
          min={0}
          max={100}
          value={volume}
          onValueChange={setVolume}
          className="hidden w-20 @lg/window:block"
        >
          <Slider.Label className="sr-only">Volume</Slider.Label>
          <SliderControl getAriaValueText={(_, value) => `${value}%`} />
        </Slider.Root>
        <Icon name="speakers" className="hidden text-muted @lg/window:block" />
      </div>
    </footer>
  );
}
