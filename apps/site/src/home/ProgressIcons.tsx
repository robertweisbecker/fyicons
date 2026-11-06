import { useState } from 'react';
import IconStar from 'fyicons/icons/IconStar';
import IconStarFill from 'fyicons/icons/IconStarFill';
import IconStarHalfFill from 'fyicons/icons/IconStarHalfFill';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { levelSteps } from '@/lib/icon-progress';

const families = [
  ['IconBattery', 'Battery'],
  ['IconProgressTask', 'Progress'],
  ['IconChecklist', 'Checklist'],
  ['IconVolume', 'Volume'],
  ['IconSignalFour', 'Four-bar signal'],
  ['IconSignalThree', 'Three-bar signal'],
  ['IconGauge', 'Simple gauge'],
  ['IconMeter', 'Gauge'],
  ['IconEmoji', 'Emotion'],
] as const;

export function ProgressIcons() {
  const [level, setLevel] = useState(50);
  const currentStep = levelSteps.reduce((current, step) =>
    step.value <= level ? step : current,
  );
  const previews = Object.entries({
    ...currentStep.icons,
    ...currentStep.landingIcons,
  })
    .map(([name, Icon]) => {
      const index = families.findIndex(([prefix]) => name.startsWith(prefix));
      return {
        Icon,
        family: families[index]?.[1] ?? name,
        description: name
          .replace(/^Icon/, '')
          .replace(/([a-z])([A-Z0-9])/g, '$1 $2'),
        order: index < 0 ? families.length : index,
      };
    })
    .sort((a, b) => a.order - b.order);
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
          className="grid min-h-11 min-w-11 place-items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          <Icon size={24} className="size-5 sm:size-6" />
        </span>
      </Tooltip>
    );
  }

  return (
    <div
      role="group"
      aria-label="Progress"
      className="flex min-h-80 min-w-0 flex-col gap-6 rounded-2xl bg-surface p-2 sm:p-5 lg:p-8"
    >
      <TooltipGroup>
        <div className="flex flex-1 flex-col justify-center gap-3 sm:gap-4">
          <div className="mx-auto grid w-full max-w-64 grid-cols-[repeat(auto-fit,minmax(min(100%,3rem),1fr))] gap-2 sm:gap-4">
            {previews
              .filter(({ family }) => family !== 'Emotion')
              .map(renderPreview)}
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-3">
            {previews
              .filter(({ family }) => family === 'Emotion')
              .map(renderPreview)}
            <Tooltip label="Rating">
              <span
                role="img"
                aria-label={`${rating} out of 4 stars`}
                tabIndex={0}
                className="flex min-h-11 items-center justify-center gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:gap-1"
              >
                {[0, 1, 2, 3].map((index) => {
                  const Star =
                    rating >= index + 1
                      ? IconStarFill
                      : rating >= index + 0.5
                        ? IconStarHalfFill
                        : IconStar;
                  return (
                    <Star key={index} size={24} className="size-4 sm:size-6" />
                  );
                })}
              </span>
            </Tooltip>
          </div>
        </div>
      </TooltipGroup>
      <div className="flex min-h-11 items-center justify-center">
        <Slider.Root
          className="grid w-full max-w-80 grid-cols-[minmax(0,1fr)_3rem] items-center gap-3"
          value={level}
          onValueChange={setLevel}
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
