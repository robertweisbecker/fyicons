'use client';

import { useRef, type PointerEvent } from 'react';
import { motion, useMotionTemplate, useTransform } from 'motion/react';
import { IconCaretsX } from 'fyicons';
import { VariantIconGrid } from '@/home/IconVariants';

import { useTrackedAxis } from './useTrackedAxis';

const restingSplit = 50;

export function IconReveal() {
  const input = useRef<HTMLInputElement>(null);
  const touchStartValue = useRef(restingSplit);
  const {
    value: split,
    track: moveSplit,
    reset,
  } = useTrackedAxis(restingSplit);
  const clipPath = useMotionTemplate`inset(0 0 0 ${split}%)`;
  const left = useMotionTemplate`${split}%`;
  const handleOpacity = useTransform(split, [0, 3], [0, 1]);

  function reveal(percent: number, direct: boolean) {
    if (input.current) input.current.value = String(Math.round(percent));
    moveSplit(percent, direct);
  }

  function rollBack() {
    if (input.current) input.current.valueAsNumber = restingSplit;
    reset();
  }

  function track(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const percent = ((event.clientX - bounds.left) / bounds.width) * 100;
    reveal(Math.max(0, Math.min(100, percent)), event.pointerType === 'touch');
  }

  return (
    <figure>
      <div
        className="relative isolate aspect-square cursor-ew-resize touch-pan-y touch-pinch-zoom overflow-hidden rounded-xl bg-surface text-ink select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-focus sm:rounded-2xl"
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          if (event.pointerType === 'touch') {
            touchStartValue.current = split.get();
            event.currentTarget.setPointerCapture(event.pointerId);
          } else {
            input.current?.focus({ preventScroll: true });
          }
          track(event);
        }}
        onPointerEnter={(event) => {
          if (event.pointerType !== 'touch') track(event);
        }}
        onPointerCancel={(event) => {
          if (event.isPrimary && event.pointerType === 'touch')
            reveal(touchStartValue.current, true);
        }}
        onPointerMove={track}
        onPointerLeave={(event) => {
          if (event.isPrimary && event.pointerType !== 'touch') rollBack();
        }}
      >
        <div aria-hidden="true">
          <VariantIconGrid variant="Outline" />
        </div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-surface"
          style={{ clipPath }}
        >
          <VariantIconGrid variant="Filled" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-ink/35"
          style={{ left, opacity: handleOpacity }}
        >
          <span className="absolute top-1/2 left-1/2 grid size-7 -translate-1/2 place-items-center rounded-full bg-surface shadow-sm ring-1 ring-ink/15">
            <IconCaretsX size={16} />
          </span>
        </motion.div>
        <input
          ref={input}
          className="sr-only"
          type="range"
          min={0}
          max={100}
          defaultValue={restingSplit}
          aria-label="Percentage of outline icons revealed"
          onChange={(event) => reveal(event.currentTarget.valueAsNumber, true)}
        />
      </div>
      <figcaption className="mt-2 flex justify-between text-sm font-medium text-muted">
        <span>Outline</span>
        <span>Filled</span>
      </figcaption>
    </figure>
  );
}
