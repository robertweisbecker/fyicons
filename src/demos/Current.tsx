import { Slider, SliderControl } from '../components/ui/slider';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Toggle } from '@/components/ui/toggle';
import { Icon } from '../components/Icon';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';

export function Current() {
  const tracks = ['Soft Signal', 'Window Seat', 'After Hours'];
  const [track, setTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(84);
  const [volume, setVolume] = useState(75);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () =>
        setPosition((value) => (value < 222 ? value + 1 : repeat ? 0 : 222)),
      1000,
    );
    return () => clearInterval(timer);
  }, [playing, repeat]);
  useEffect(() => {
    if (position === 222 && !repeat) setPlaying(false);
  }, [position, repeat]);
  function next(step: number) {
    setTrack(
      (value) =>
        (value +
          (shuffle ? 1 + Math.floor(Math.random() * 2) : step) +
          tracks.length) %
        tracks.length,
    );
    setPosition(0);
  }
  return (
    <div
      className={cn(
        'demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-slate-100 p-4 text-slate-600 scheme-light shadow-sm max-[680px]:h-117.5 sm:p-6',
      )}
    >
      <div className={cn('flex items-center justify-between')}>
        <strong className={cn('flex items-center gap-2')}>
          <Icon name="waveform" />
          current
        </strong>
        <Toggle size="icon" aria-label="Like this track">
          <ToggleIcon icon="heart" activeIcon="heart-filled" />
        </Toggle>
      </div>
      <div className={cn('my-7 flex min-w-0 items-center gap-5')}>
        <div
          className={cn(
            "record-art relative flex aspect-square w-[43%] max-w-47.5 shrink-0 flex-col justify-between overflow-hidden rounded bg-slate-300 p-4 before:absolute before:top-[19%] before:left-[30%] before:size-[85%] before:rounded-full before:border-14 before:border-mauve-100 before:shadow-[0_0_0_14px_var(--color-blue-300),0_0_0_28px_var(--color-slate-200)] before:content-[''] max-[680px]:p-3 [&_small]:relative [&_small]:text-xs [&_small]:tracking-normal [&>span]:relative [&>span]:text-2xl [&>span]:leading-tight [&>span]:font-semibold [&>span]:tracking-normal max-[680px]:[&>span]:text-xl",
          )}
          role="img"
          aria-label="Blue and cream circular album artwork"
        >
          <span>
            After
            <br />
            hours
          </span>
          <small>Vol. 4</small>
        </div>
        <div className={cn('min-w-0 flex-1')}>
          <span className={cn('text-xs tracking-normal text-slate-500')}>
            Now playing
          </span>
          <h4
            className={cn(
              'mt-2 text-2xl leading-tight font-medium tracking-normal',
            )}
          >
            {tracks[track]}
          </h4>
          <p className={cn('mt-2 text-xs text-slate-500')}>The Quiet Hours</p>
          <span className={cn('mt-4 flex items-center gap-2 text-xs')}>
            <Icon name="headphones" />
            Evening essentials
          </span>
          <div
            className={cn(
              'mt-5 flex items-center gap-2 text-xs text-slate-500',
            )}
          >
            <Icon name="list-bullet" />
            <span>
              Up next
              <br />
              <strong className={cn('font-medium')}>
                {tracks[(track + 1) % tracks.length]}
              </strong>
            </span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'mt-auto flex items-center justify-center gap-1 sm:gap-5',
        )}
      >
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
          title="Previous track"
          onClick={() => next(-1)}
        >
          <Icon name="fast-backward-fill" />
        </Button>
        <Toggle
          variant="unstyled"
          size="unstyled"
          className={cn(
            'grid size-12 place-items-center rounded-full bg-slate-500 text-white',
          )}
          aria-label={playing ? 'Pause track' : 'Play track'}
          pressed={playing}
          onPressedChange={(pressed) => {
            if (position === 222) setPosition(0);
            setPlaying(pressed);
          }}
        >
          <Icon
            name={playing ? 'pause-filled' : 'play-filled'}
            className="size-6"
          />
        </Toggle>
        <IconButton
          icon="fast-forward-fill"
          label="Next track"
          onClick={() => next(1)}
        />
        <Toggle
          size="icon"
          aria-label="Repeat"
          pressed={repeat}
          onPressedChange={setRepeat}
        >
          <Icon name="arrow-repeat" />
        </Toggle>
      </div>
      <div className={cn('my-2 flex items-center gap-3 text-xs tabular-nums')}>
        <span>
          {Math.floor(position / 60)}:{String(position % 60).padStart(2, '0')}
        </span>
        <Slider.Root
          className={cn('flex min-w-0 flex-1 text-slate-500')}
          min={0}
          max={222}
          value={position}
          onValueChange={setPosition}
        >
          <Slider.Label className="sr-only">Playback position</Slider.Label>
          <SliderControl
            getAriaValueText={(_, value) =>
              `${Math.floor(value / 60)} minutes ${value % 60} seconds`
            }
          />
        </Slider.Root>
        <span>3:42</span>
      </div>
      <div
        className={cn(
          'flex items-center justify-between border-t border-zinc-200 pt-3 text-xs',
        )}
      >
        <span className={cn('flex items-center gap-2')}>
          <Icon name="device-laptop" />
          This device
        </span>
        <div className={cn('flex items-center gap-2')}>
          <span aria-label={volume === 0 ? 'Muted' : `Volume ${volume}%`}>
            <Icon
              name={
                volume === 0
                  ? 'volume-slash'
                  : volume <= 33
                    ? 'volume-low'
                    : volume <= 66
                      ? 'volume-med'
                      : 'volume-high'
              }
            />
          </span>
          <Slider.Root
            className={cn('flex w-20 text-slate-500')}
            min={0}
            max={100}
            value={volume}
            onValueChange={setVolume}
          >
            <Slider.Label className="sr-only">Volume</Slider.Label>
            <SliderControl getAriaValueText={(_, value) => `${value}%`} />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
}
