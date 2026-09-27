import { Slider, SliderControl } from '../components/ui/slider';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { IconToggle as Toggle } from '../components/ui/icon-toggle';
import { Icon } from '../components/Icon';
import { Button, IconButton } from '../components/ui';

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
        'demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-[#dfe1dd] bg-[#f1f4fa] p-6 text-[#526584] scheme-light shadow-[0_12px_30px_-26px_#243c263b] max-[680px]:h-117.5',
      )}
    >
      <div className={cn('flex items-center justify-between')}>
        <strong className={cn('flex items-center gap-2')}>
          <Icon name="waveform" />
          current
        </strong>
        <Toggle aria-label="Like this track">
          <Icon name="heart" />
        </Toggle>
      </div>
      <div className={cn('my-7 flex min-w-0 items-center gap-5')}>
        <div
          className={cn(
            "record-art relative flex aspect-square w-[43%] max-w-47.5 shrink-0 flex-col justify-between overflow-hidden rounded bg-[#c4d0e2] p-4 before:absolute before:top-[19%] before:left-[30%] before:size-[85%] before:rounded-full before:border-14 before:border-[#edf1f3] before:shadow-[0_0_0_14px_#adc0dd,0_0_0_28px_#e1e9f0] before:content-[''] max-[680px]:p-3 [&_small]:relative [&_small]:text-xs [&_small]:tracking-normal [&>span]:relative [&>span]:text-2xl [&>span]:leading-tight [&>span]:font-semibold [&>span]:tracking-normal max-[680px]:[&>span]:text-xl",
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
          <span className={cn('text-xs tracking-normal text-[#93a4bf]')}>
            Now playing
          </span>
          <h4
            className={cn(
              'mt-2 text-2xl leading-tight font-medium tracking-normal',
            )}
          >
            {tracks[track]}
          </h4>
          <p className={cn('mt-2 text-xs text-[#8c9bb4]')}>The Quiet Hours</p>
          <span className={cn('mt-4 flex items-center gap-2 text-xs')}>
            <Icon name="headphones" />
            Evening essentials
          </span>
          <div
            className={cn(
              'mt-5 flex items-center gap-2 text-xs text-[#91a0b9]',
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
      <div className={cn('mt-auto flex items-center justify-center gap-5')}>
        <Toggle
          aria-label="Shuffle"
          pressed={shuffle}
          onPressedChange={setShuffle}
        >
          <Icon name="arrow-shuffle" />
        </Toggle>
        <IconButton
          icon="arrow-undo"
          label="Previous track"
          onClick={() => next(-1)}
        />
        <Button
          className={cn(
            'grid size-12 place-items-center rounded-full bg-[#7790b8] text-white',
          )}
          aria-label={playing ? 'Pause track' : 'Play track'}
          aria-pressed={playing}
          onClick={() => {
            if (position === 222) setPosition(0);
            setPlaying(!playing);
          }}
        >
          <Icon name={playing ? 'pause-filled' : 'play-filled'} />
        </Button>
        <IconButton
          icon="arrow-redo"
          label="Next track"
          onClick={() => next(1)}
        />
        <Toggle
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
          className={cn('flex min-w-0 flex-1 text-[#8099bf]')}
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
          'flex items-center justify-between border-t border-[#dbe2ee] pt-3 text-xs',
        )}
      >
        <span className={cn('flex items-center gap-2')}>
          <Icon name="device-laptop" />
          This device
        </span>
        <div className={cn('flex items-center gap-2')}>
          <Icon name="volume-high" />
          <Slider.Root
            className={cn('flex w-20 text-[#8099bf]')}
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
