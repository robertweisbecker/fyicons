import { Slider } from '@base-ui/react/slider';
import { cn } from '../../lib/utils';

export { Slider };

export function SliderControl({
  getAriaValueText,
}: Pick<Slider.Thumb.Props, 'getAriaValueText'>) {
  return (
    <Slider.Control
      className={cn(
        'flex h-8 min-w-0 flex-1 touch-none items-center select-none pointer-coarse:h-11',
      )}
    >
      <Slider.Track
        className={cn('relative h-1 w-full rounded-full bg-current/20')}
      >
        <Slider.Indicator className={cn('rounded-full bg-current')} />
        <Slider.Thumb
          className={cn(
            'block size-4 rounded-full border border-current bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current',
          )}
          getAriaValueText={getAriaValueText}
        />
      </Slider.Track>
    </Slider.Control>
  );
}
