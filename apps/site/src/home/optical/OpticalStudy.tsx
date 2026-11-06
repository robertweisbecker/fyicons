'use client';

import { useState, type ReactNode } from 'react';
import IconReplay from 'fyicons/icons/IconReplay';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/vendor/stageshow/reduced-motion';
import {
  centerStudy,
  warningStudy,
  soloWarningStudy,
  DrawingStage,
  PlayDrawing,
  WarningDrawing,
} from './OpticalDrawings';
import './OpticalStudy.css';

export function StudyTile({
  title,
  description,
  onReplay,
  descriptionId,
  className,
  captionClassName,
  children,
}: {
  title: string;
  description: string;
  descriptionId?: string;
  className: string;
  captionClassName?: string;
  onReplay?: () => void;
  children: ReactNode;
}) {
  return (
    <figure
      className={cn(
        'relative min-h-65 min-w-0 overflow-clip rounded-2xl bg-inset text-ink [--optical-accent:var(--color-indigo-700)] [--optical-pad:clamp(14px,2.2vw,26px)] dark:[--optical-accent:var(--color-cyan-200)]',
        className,
      )}
    >
      {onReplay && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute end-3.5 top-3 z-2 size-11"
          aria-label={`Replay ${title}`}
          title="Replay"
          onClick={onReplay}
        >
          <IconReplay />
        </Button>
      )}
      {children}
      <figcaption className={cn('z-1 max-w-90', captionClassName)}>
        <strong className="text-lg leading-tight font-[620] tracking-tight">
          {title}
        </strong>
        <p
          id={descriptionId}
          className="mt-0.75 text-[13px] leading-[1.45] text-pretty text-muted"
        >
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

export function OpticalStudy({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  const [centerRun, setCenterRun] = useState(0);
  const [warningRun, setWarningRun] = useState(0);
  const animate = !useReducedMotion();
  const warningScript = warningRun > 0 ? soloWarningStudy : warningStudy;
  const replayCenter = () => setCenterRun((value) => value + 1);
  const replayWarning = () => setWarningRun((value) => value + 1);

  return (
    <div className="@container/study text-ink">
      <div className="mb-5">{heading}</div>

      <div className="grid grid-cols-1 gap-3.5 @min-[600px]/study:grid-cols-2 @min-[900px]/study:grid-cols-3">
        <StudyTile
          className="col-span-full grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-(--optical-pad) px-(--optical-pad) @min-[900px]/study:col-span-2"
          captionClassName="col-start-1 row-start-1"
          title="Optical centering"
          description="Alignment baked into icons, so you don't have to think about it."
          onReplay={animate ? replayCenter : undefined}
        >
          <DrawingStage
            key={centerRun}
            className="col-start-2 row-start-1 text-blue-700 dark:text-blue-300"
            script={animate ? centerStudy : undefined}
          >
            {(scene) => <PlayDrawing scene={scene} />}
          </DrawingStage>
        </StudyTile>

        <StudyTile
          className="col-span-full min-h-95 @min-[900px]/study:col-span-1"
          captionClassName="absolute inset-x-(--optical-pad) bottom-6"
          title="Ovals & overshoots"
          description="Dots extend beyond 1px to remain legible at small sizes."
          onReplay={animate ? replayWarning : undefined}
        >
          <DrawingStage
            key={warningRun}
            className="absolute end-0 top-2 text-amber-800 dark:text-amber-300"
            script={animate ? warningScript : undefined}
          >
            {(scene) => <WarningDrawing scene={scene} />}
          </DrawingStage>
        </StudyTile>

        {children}
      </div>
    </div>
  );
}
