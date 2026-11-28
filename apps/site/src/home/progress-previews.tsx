import {
  IconCircle,
  IconCircleFill,
  IconProgressPie20,
  IconProgressPie40,
  IconProgressPie60,
  IconProgressPie80,
  IconStar,
  IconStarFill,
  IconStarHalfFill,
} from 'fyicons';

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

export function getProgressPreviews(level: number) {
  const currentStep = levelSteps.reduce((current, step) =>
    step.value <= level ? step : current,
  );
  return Object.entries({
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
}

export function RatingStars({ rating }: { rating: number }) {
  return [0, 1, 2, 3].map((index) => {
    const Star =
      rating >= index + 1
        ? IconStarFill
        : rating >= index + 0.5
          ? IconStarHalfFill
          : IconStar;
    return <Star key={index} size={24} />;
  });
}
