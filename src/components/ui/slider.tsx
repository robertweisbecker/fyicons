import { Slider } from '@base-ui/react/slider';
import { cn } from '../../lib/utils';

export { Slider };

export function SliderControl({
  getAriaValueText,
}: Pick<Slider.Thumb.Props, 'getAriaValueText'>) {
  return (
    <Slider.Control
      className={cn(
        'flex h-8 min-w-0 flex-1 touch-none items-center select-none',
      )}
    >
      <Slider.Track
        className={cn('relative h-1 w-full rounded-full bg-control-track/50')}
      >
        <Slider.Indicator className={cn('rounded-[inherit] bg-muted')} />
        <Slider.Thumb
          className={cn(
            'relative block size-4 cursor-grab rounded-full bg-white shadow-sm outline outline-offset-(--surface-outline-offset) outline-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current active:cursor-grabbing data-dragging:cursor-grabbing',
            'max-sm:before:absolute max-sm:before:inset-0 max-sm:before:size-11',
          )}
          getAriaValueText={getAriaValueText}
        />
      </Slider.Track>
    </Slider.Control>
  );
}
