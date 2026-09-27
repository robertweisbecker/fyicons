import { Slider, SliderControl } from './ui/slider';
import { cn } from '../lib/utils';

export function PreviewSizeControl({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <Slider.Root
      value={value}
      onValueChange={onChange}
      min={16}
      max={64}
      step={4}
      largeStep={16}
      className={cn('flex min-h-10 w-44 shrink-0 items-center gap-3 px-2')}
    >
      <Slider.Label className="sr-only">Preview size</Slider.Label>
      <SliderControl getAriaValueText={(_, size) => `${size} pixels`} />
      <Slider.Value
        className={cn('w-11 shrink-0 text-right text-sm tabular-nums')}
      >
        {([size]) => `${size}px`}
      </Slider.Value>
    </Slider.Root>
  );
}
