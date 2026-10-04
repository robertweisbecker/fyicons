import { useEffect, useRef, useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Slider, SliderControl } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { DemoIconButton, DemoToggle, DemoHint } from './DemoControls';

const tracks = [
  { title: 'Soft Signal', artist: 'The Quiet Hours', length: 222 },
  { title: 'Window Seat', artist: 'The Quiet Hours', length: 196 },
  { title: 'After Hours', artist: 'The Quiet Hours', length: 248 },
];
const time = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
type RepeatMode = 'off' | 'all' | 'one';
export function PlaybackDemo() {
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [volume, setVolume] = useState(70);
  const lastVolume = useRef(70);
  const [position, setPosition] = useState(84);
  const [repeat, setRepeat] = useState<RepeatMode>('off');
  const [shuffle, setShuffle] = useState(false);
  const [queue, setQueue] = useState(false);
  const track = tracks[index];
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () => setPosition((value) => Math.min(value + 1, track.length)),
      1000,
    );
    return () => clearInterval(timer);
  }, [playing, track.length]);
  useEffect(() => {
    if (position < track.length || !playing) return;
    if (repeat === 'off') {
      setPlaying(false);
      return;
    }
    if (repeat === 'all') setIndex((i) => (i + 1) % tracks.length);
    setPosition(0);
  }, [position, track.length, playing, repeat]);
  function skip(step: number) {
    setIndex(
      (i) =>
        (i +
          (shuffle ? 1 + Math.floor(Math.random() * 2) : step) +
          tracks.length) %
        tracks.length,
    );
    setPosition(0);
  }
  const repeatLabel =
    repeat === 'off'
      ? 'Repeat off'
      : repeat === 'all'
        ? 'Repeat all'
        : 'Repeat one';
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center gap-4">
        <div
          role="img"
          aria-label="Abstract blue record sleeve"
          className="relative grid size-18 shrink-0 place-items-center overflow-hidden rounded-xl bg-sky-200 shadow-xs"
        >
          <span className="absolute -right-5 -bottom-5 size-24 rounded-full border-12 border-sky-50" />
          <span className="absolute -right-1 -bottom-1 size-16 rounded-full border-8 border-sky-400/40" />
          <Icon name="waveform" className="relative text-sky-950" />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="truncate text-lg font-semibold tracking-tight"
            aria-live="polite"
          >
            {track.title}
          </h3>
          <p className="mt-1 text-xs text-muted">{track.artist}</p>
        </div>
        <DemoToggle
          label="Like track"
          icon="heart-wide"
          activeIcon="heart-wide-fill"
        />
      </div>
      <div className="flex items-center justify-center gap-1 sm:gap-3">
        <DemoToggle
          label="Shuffle"
          icon="arrow-shuffle"
          pressed={shuffle}
          onPressedChange={setShuffle}
        />
        <DemoIconButton
          label="Previous track"
          icon="skip-backward-fill"
          onClick={() => skip(-1)}
        />
        <DemoHint label={playing ? 'Pause track' : 'Play track'}>
          <Button
            variant="unstyled"
            size="unstyled"
            aria-label={playing ? 'Pause track' : 'Play track'}
            className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-transform duration-150 ease-out active:scale-[0.97]"
            onClick={() => {
              if (position === track.length) setPosition(0);
              setPlaying(!playing);
            }}
          >
            <Icon name={playing ? 'pause-fill' : 'play-fill'} size={24} />
          </Button>
        </DemoHint>
        <DemoIconButton
          label="Next track"
          icon="skip-forward-fill"
          onClick={() => skip(1)}
        />
        <DemoIconButton
          label={repeatLabel}
          icon={repeat === 'one' ? 'arrow-repeat-one' : 'arrow-repeat'}
          aria-pressed={repeat !== 'off'}
          className={cn(repeat !== 'off' && 'bg-current/10')}
          onClick={() =>
            setRepeat(
              repeat === 'off' ? 'all' : repeat === 'all' ? 'one' : 'off',
            )
          }
        />
      </div>
      <Slider.Root
        min={0}
        max={track.length}
        value={position}
        onValueChange={setPosition}
      >
        <Slider.Label className="sr-only">Playback position</Slider.Label>
        <SliderControl getAriaValueText={(_, value) => time(value)} />
        <div className="flex justify-between text-xs text-muted tabular-nums">
          <span>{time(position)}</span>
          <span>{time(track.length)}</span>
        </div>
      </Slider.Root>
      <div className="flex items-center gap-2">
        <DemoIconButton
          label={volume === 0 ? 'Unmute' : 'Mute'}
          icon={
            volume === 0
              ? 'volume-slash-fill'
              : volume < 34
                ? 'volume-none-fill'
                : volume < 67
                  ? 'volume-low-fill'
                  : 'volume-high-fill'
          }
          onClick={() => {
            if (volume) {
              lastVolume.current = volume;
              setVolume(0);
            } else setVolume(lastVolume.current);
          }}
        />
        <Slider.Root
          className="flex min-w-0 flex-1 items-center gap-3"
          min={0}
          max={100}
          value={volume}
          onValueChange={setVolume}
        >
          <Slider.Label className="sr-only">Volume</Slider.Label>
          <SliderControl getAriaValueText={(_, value) => `${value}%`} />
          <Slider.Value className="w-7 text-right text-xs text-muted tabular-nums" />
        </Slider.Root>
        <DemoToggle
          label="Show queue"
          icon="list-media"
          activeIcon="list-log"
          pressed={queue}
          onPressedChange={setQueue}
        />
      </div>
      <Collapsible.Root open={queue} onOpenChange={setQueue}>
        <Collapsible.Panel className="rounded-xl border border-line bg-surface p-1">
          {tracks.map((item, i) => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                'h-9 w-full justify-start text-xs font-normal pointer-coarse:h-11',
                i === index && 'bg-current/10',
              )}
              onClick={() => {
                setIndex(i);
                setPosition(0);
              }}
            >
              <Icon name={i === index ? 'waveform' : 'play'} />
              {item.title}
              <span className="ml-auto text-muted tabular-nums">
                {time(item.length)}
              </span>
            </Button>
          ))}
        </Collapsible.Panel>
      </Collapsible.Root>
      <div className="mt-auto flex items-center gap-2 text-xs text-muted">
        <Icon name="headphones" />
        This device
        <span className="ml-auto" role="status">
          {repeat === 'off'
            ? 'Repeat off'
            : repeat === 'all'
              ? 'Repeat all'
              : 'Repeat one'}
        </span>
      </div>
    </div>
  );
}
