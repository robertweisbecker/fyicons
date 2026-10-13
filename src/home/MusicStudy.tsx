import { useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Slider, SliderControl } from '@/components/ui/slider';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';
import { Glyph } from './Study';

export function MusicStudy() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const previousVolume = useRef(50);
  return (
    <div className="w-full max-w-80 rounded-2xl bg-surface p-4 text-ink shadow-lg">
      <div className="flex items-center justify-between gap-1">
        <DemoToggle label="Shuffle" icon="arrows-shuffle" size="icon-sm" />
        <div className="flex items-center gap-1 max-sm:gap-0">
          <Glyph name="skip-backward-fill" />
          <Glyph name="fast-backward-fill" />
          <Button
            size="icon"
            className="size-9 rounded-full pointer-coarse:size-11"
            aria-label={playing ? 'Pause' : 'Play'}
            onClick={() => setPlaying(!playing)}
          >
            <Icon name={playing ? 'pause-fill' : 'play-fill'} size={24} />
          </Button>
          <Glyph name="fast-forward-fill" />
          <Glyph name="skip-forward-fill" />
        </div>
        <DemoToggle
          label="Repeat"
          icon="arrows-repeat-one"
          size="icon-sm"
          defaultPressed
          className="data-pressed:text-green-700 dark:data-pressed:text-green-400"
        />
      </div>
      <div className="mt-2 flex items-center gap-1">
        <Glyph name="queue-play" />
        <DemoIconButton
          label={volume ? 'Mute' : 'Unmute'}
          icon={volume ? 'volume-none-fill' : 'volume-slash'}
          size="icon-xs"
          variant="ghost"
          className="[&_svg]:opacity-64"
          onClick={() => {
            if (volume) {
              previousVolume.current = volume;
              setVolume(0);
            } else setVolume(previousVolume.current);
          }}
        />
        <Slider.Root
          thumbAlignment="edge"
          className="flex min-w-0 flex-1"
          min={0}
          max={100}
          value={volume}
          onValueChange={setVolume}
        >
          <Slider.Label className="sr-only">Volume</Slider.Label>
          <SliderControl getAriaValueText={(_, value) => `${value}%`} />
        </Slider.Root>
        <Glyph name="volume-high" />
        <Glyph name="speakers" />
      </div>
    </div>
  );
}
