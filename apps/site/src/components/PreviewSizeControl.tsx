import { Slider, SliderControl } from './ui/slider';

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
      thumbAlignment="edge"
      min={16}
      max={64}
      step={4}
      largeStep={16}
      className="grid w-full min-w-0 grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3"
    >
      <Slider.Label className="text-xs text-muted">Preview size</Slider.Label>
      <Slider.Value className="text-right text-xs tabular-nums">
        {([size]) => `${size}px`}
      </Slider.Value>
      <div className="col-span-2">
        <SliderControl getAriaValueText={(_, size) => `${size} pixels`} />
      </div>
    </Slider.Root>
  );
}
