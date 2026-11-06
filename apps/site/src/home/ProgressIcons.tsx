import { useState } from 'react';
import IconCircle from 'fyicons/icons/IconCircle';
import IconCircleFill from 'fyicons/icons/IconCircleFill';
import IconProgressPie20 from 'fyicons/icons/IconProgressPie20';
import IconProgressPie40 from 'fyicons/icons/IconProgressPie40';
import IconProgressPie60 from 'fyicons/icons/IconProgressPie60';
import IconProgressPie80 from 'fyicons/icons/IconProgressPie80';
import IconStar from 'fyicons/icons/IconStar';
import IconStarFill from 'fyicons/icons/IconStarFill';
import IconStarHalfFill from 'fyicons/icons/IconStarHalfFill';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { levelSteps } from '@/lib/icon-progress';

const pieSteps = [
  IconCircle,
  IconProgressPie20,
  IconProgressPie40,
  IconProgressPie60,
  IconProgressPie80,
  IconCircleFill,
];

const families = [
  ['IconBattery', 'Battery'],
  ['IconProgressTask', 'Progress'],
  ['IconProgressPie', 'Progress pie'],
  ['IconChecklist', 'Checklist'],
  ['IconVolume', 'Volume'],
  ['IconSignalFour', 'Four-bar signal'],
  ['IconSignalThree', 'Three-bar signal'],
  ['IconGauge', 'Gauge'],
  ['IconMeter', 'Meter'],
  ['IconEmoji', 'Emoji'],
] as const;

export function ProgressIcons() {
  const [level, setLevel] = useState(50);
  const currentStep = levelSteps.reduce((current, step) =>
    step.value <= level ? step : current,
  );
  const previews = Object.entries({
    ...currentStep.icons,
    ...currentStep.landingIcons,
    IconProgressPie: pieSteps[Math.floor(level / 20)]!,
  })
    .map(([name, Icon]) => {
      const index = families.findIndex(([prefix]) => name.startsWith(prefix));
      const isEmoji = name.startsWith('IconEmoji');
      return {
        Icon,
        isEmoji,
        family:
          isEmoji && name.endsWith('Fill')
            ? 'Filled emoji'
            : (families[index]?.[1] ?? name),
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
      className="flex min-w-0 flex-1 flex-col gap-2 rounded-xl bg-surface p-2 sm:gap-6 sm:rounded-2xl sm:p-5 lg:p-8"
    >
      <TooltipGroup>
        <div className="flex flex-1 flex-col justify-center gap-1 sm:gap-4">
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
                {[0, 1, 2, 3].map((index) => {
                  const Star =
                    rating >= index + 1
                      ? IconStarFill
                      : rating >= index + 0.5
                        ? IconStarHalfFill
                        : IconStar;
                  return <Star key={index} size={24} className="size-6" />;
                })}
              </span>
            </Tooltip>
          </div>
        </div>
      </TooltipGroup>
      <div className="flex min-h-11 items-center justify-center">
        <Slider.Root
          className="grid w-full max-w-80 grid-cols-[minmax(0,1fr)_3rem] items-center gap-1 sm:gap-3"
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
