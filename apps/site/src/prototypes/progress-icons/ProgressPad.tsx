'use client';

import { useRef, useState, type PointerEvent } from 'react';
import { useMotionValueEvent, useTransform } from 'motion/react';
import {
  IconBrightnessLow,
  IconBrightnessMedium,
  IconBrightnessHigh,
  IconCostLow,
  IconCostMedium,
  IconCostHigh,
  IconThermometerMin,
  IconThermometer,
  IconThermometerMax,
  IconContrastLow,
  IconContrastHigh,
} from 'fyicons';
import { getProgressPreviews, RatingStars } from '@/home/progress-previews';
import { useTrackedAxis } from '@/prototypes/use-tracked-axis';

const sequences = [
  ['Cost', [IconCostLow, IconCostMedium, IconCostHigh]],
  ['Temperature', [IconThermometerMin, IconThermometer, IconThermometerMax]],
  ['Brightness', [IconBrightnessLow, IconBrightnessMedium, IconBrightnessHigh]],
  ['Contrast', [IconContrastLow, IconContrastHigh]],
] as const;

function SequenceGrid({ level }: { level: number }) {
  const families = [
    ...getProgressPreviews(level),
    ...sequences.map(([family, steps]) => ({
      family,
      Icon: steps[
        Math.min(steps.length - 1, Math.floor((level * steps.length) / 100))
      ]!,
    })),
  ];
  return (
    <>
      <ul className="grid flex-1 auto-rows-fr grid-cols-5 place-items-center">
        {families.map(({ family, Icon }) => (
          <li
            key={family}
            aria-label={family}
            title={family}
            className="grid size-9 place-items-center"
          >
            <Icon size={24} />
          </li>
        ))}
      </ul>
      <div
        role="img"
        aria-label={`${level / 25} out of 4 stars`}
        className="flex h-12 items-center justify-center gap-1"
      >
        <RatingStars rating={level / 25} />
      </div>
    </>
  );
}

export function ProgressPad() {
  const progress = useTrackedAxis(50);
  const touchStart = useRef(50);
  const [level, setLevel] = useState(50);
  const percent = useTransform(progress.value, (v) =>
    Math.max(0, Math.min(100, Math.round(v))),
  );
  useMotionValueEvent(percent, 'change', setLevel);

  function track(e: PointerEvent<HTMLDivElement>) {
    if (!e.isPrimary) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    // Keep both endpoints reachable inside the rounded corners.
    const inset = 8;
    const right = clamp(
      (e.clientX - rect.left - inset) / (rect.width - 2 * inset),
    );
    const up = clamp(
      (rect.bottom - e.clientY - inset) / (rect.height - 2 * inset),
    );
    progress.track(50 * (right + up), e.pointerType === 'touch');
  }

  return (
    <div>
      <div
        aria-label="Progress icon field"
        role="group"
        className="flex aspect-square touch-pinch-zoom flex-col rounded-2xl bg-surface p-4 text-ink select-none sm:p-7"
        onPointerEnter={(e) => {
          if (e.pointerType !== 'touch') track(e);
        }}
        onPointerDown={(e) => {
          if (!e.isPrimary || e.button !== 0) return;
          if (e.pointerType === 'touch') {
            touchStart.current = progress.value.get();
            e.currentTarget.setPointerCapture(e.pointerId);
          }
          track(e);
        }}
        onPointerMove={track}
        onPointerCancel={(e) => {
          if (!e.isPrimary || e.pointerType !== 'touch') return;
          progress.track(touchStart.current, true);
        }}
        onPointerLeave={(e) => {
          if (!e.isPrimary || e.pointerType === 'touch') return;
          progress.reset();
        }}
      >
        <SequenceGrid level={level} />
      </div>
      <label className="mt-4 grid gap-1.5 text-xs text-muted">
        <span className="flex justify-between">
          Progress <span className="text-ink tabular-nums">{level}%</span>
        </span>
        <input
          type="range"
          aria-label="Progress"
          min={0}
          max={100}
          value={level}
          className="w-full accent-ink"
          onChange={(e) => progress.track(e.currentTarget.valueAsNumber, true)}
        />
      </label>
    </div>
  );
}
