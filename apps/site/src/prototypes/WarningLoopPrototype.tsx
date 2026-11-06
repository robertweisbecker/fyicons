'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StudyTile } from '@/home/optical/OpticalStudy';
import {
  DrawingStage,
  WarningDrawing,
  loopInitial,
  poster,
  resizeWarningPart,
  type Scene,
} from '@/home/optical/OpticalDrawings';
import type { Act } from '@/vendor/stageshow/act';
import { useReducedMotion } from '@/vendor/stageshow/reduced-motion';

async function warningLoop(a: Act<Scene>) {
  a.mark('warning-loop-start');
  await a.wait(650);
  await a.set({ phase: 'measure' });
  await resizeWarningPart(a, 'stem', 0, 1);
  await a.wait(350);
  await resizeWarningPart(a, 'dot', 0, 1);
  a.mark('warning-loop-balanced');
  await a.set(poster);
  await a.move('warning-rest');
  await a.wait(1800);

  await a.set({ phase: 'measure' });
  await resizeWarningPart(a, 'dot', 1, 0);
  await a.wait(350);
  await resizeWarningPart(a, 'stem', 1, 0);
  await a.move('warning-rest');
  await a.click();
  a.mark('warning-loop-restored');
  await a.set(loopInitial);
  await a.wait(1000);
}

export function WarningLoopPrototype() {
  const [playing, setPlaying] = useState(true);
  const [run, setRun] = useState(0);
  const reducedMotion = useReducedMotion();
  const animate = playing && !reducedMotion;

  return (
    <section
      className="@container/study max-w-200 text-ink"
      aria-labelledby="warning-loop-title"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <h2
            id="warning-loop-title"
            className="text-[clamp(25px,3vw,36px)] leading-[1.1] font-[580] tracking-[-0.04em]"
          >
            Warning, on repeat
          </h2>
          <p className="mt-2 text-sm text-muted">
            Start with the icon. Watch the small details find their balance.
          </p>
        </div>
        {!reducedMotion && (
          <Button
            variant="outline"
            size="sm"
            className="min-h-11"
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? 'Show final frame' : 'Play warning loop'}
          </Button>
        )}
      </div>
      <StudyTile
        className="min-h-95 bg-(--optical-paper) [--optical-accent:#38664a] [--optical-paper:#e4eee3] **:data-[phase=draft]:[--optical-ink-opacity:1] @min-[600px]/study:min-h-87.5 dark:[--optical-accent:#9ecaaa] dark:[--optical-paper:#203027]"
        captionClassName="absolute inset-x-(--optical-pad) bottom-6 @min-[600px]/study:max-w-70"
        title="Balance, back and forth"
        description="The stem widens, the dot grows, and both return to their starting sizes."
        onReplay={animate ? () => setRun((value) => value + 1) : undefined}
      >
        <DrawingStage
          key={run}
          className="absolute end-0 top-2 max-w-140 @min-[600px]/study:end-3 @min-[600px]/study:top-0"
          initialScene={loopInitial}
          script={animate ? warningLoop : undefined}
          play="loop"
          cursorTarget="warning-rest"
        >
          {(scene) => <WarningDrawing scene={scene} showBalance />}
        </DrawingStage>
      </StudyTile>
    </section>
  );
}
