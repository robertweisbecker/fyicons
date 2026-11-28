import { useState } from 'react';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { getProgressPreviews, RatingStars } from './progress-previews';
import { play } from '@/lib/sounds';

export function ProgressIcons() {
  const [level, setLevel] = useState(50);
  const previews = getProgressPreviews(level);
  const rating = level / 25;

  function renderPreview({
    Icon,
    family,
    description,
  }: (typeof previews)[number]) {
    return (
      <Tooltip key={family} label={family}>
        <span
          role="img"
          aria-label={`${description}: ${level} percent`}
          tabIndex={0}
          className="grid size-8 place-items-center justify-self-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:size-11"
        >
          <Icon size={24} />
        </span>
      </Tooltip>
    );
  }

  return (
    <div
      role="group"
      aria-label="Progress"
      className="flex min-w-0 flex-1 flex-col justify-center gap-2 rounded-xl bg-surface p-2 sm:gap-6 sm:rounded-2xl sm:p-5 lg:p-8"
    >
      <TooltipGroup>
        <div className="flex flex-col gap-1 sm:gap-4">
          <div className="mx-auto grid w-full max-w-64 grid-cols-3 sm:gap-4">
            {previews.filter(({ isEmoji }) => !isEmoji).map(renderPreview)}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-1 sm:gap-3">
            <div className="flex gap-1 sm:gap-3">
              {previews.filter(({ isEmoji }) => isEmoji).map(renderPreview)}
            </div>
            <Tooltip label="Rating">
              <span
                role="img"
                aria-label={`${rating} out of 4 stars`}
                tabIndex={0}
                className="flex min-h-11 items-center justify-center gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:gap-1"
              >
                <RatingStars rating={rating} />
              </span>
            </Tooltip>
          </div>
        </div>
      </TooltipGroup>
      <div className="flex min-h-11 items-center justify-center">
        <Slider.Root
          className="grid w-full max-w-80 grid-cols-[minmax(0,1fr)_3rem] items-center gap-1 sm:gap-3"
          value={level}
          onValueChange={(value) => {
            if (value !== level) {
              play('select', {
                emphasis: 'subtle',
                direction: value > level ? 'forward' : 'back',
              });
            }
            setLevel(value);
          }}
          min={0}
          max={100}
          step={12.5}
          largeStep={25}
          thumbAlignment="edge"
        >
          <Slider.Label className="sr-only">Progress level</Slider.Label>
          <SliderControl
            getAriaValueText={(formatted) =>
              `${formatted} percent; ${rating} out of 4 stars`
            }
          />
          <Slider.Value className="text-right text-sm whitespace-nowrap text-muted tabular-nums">
            {(value) => `${value}%`}
          </Slider.Value>
        </Slider.Root>
      </div>
    </div>
  );
}
