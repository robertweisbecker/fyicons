'use client';

import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import IconPlay from 'fyicons/icons/IconPlay';
import IconWarning from 'fyicons/icons/IconWarning';
import warningSvg from 'fyicons/svg/warning-16.svg?raw';
import type { Act } from '@/vendor/stageshow/act';
import { ThemedStage } from '@/components/ThemedStage';
import { cn } from '@/lib/utils';
import { easeInOutCubic } from '@/vendor/stageshow/util';

export type Scene = {
  phase:
    | 'grid'
    | 'trace'
    | 'round'
    | 'draft'
    | 'measure'
    | 'drag'
    | 'resize'
    | 'resize-dot'
    | 'adjusted';
  adjustment: number;
  dotAdjustment: number;
  lifted: boolean;
  liftY: number;
  trace: number;
  playRounding: number;
};
const initial: Scene = {
  phase: 'grid',
  adjustment: 0,
  dotAdjustment: 0,
  lifted: false,
  liftY: 0,
  trace: 0,
  playRounding: 0,
};
export const poster: Scene = {
  ...initial,
  phase: 'adjusted',
  adjustment: 1,
  dotAdjustment: 1,
  playRounding: 1,
};
export const loopInitial: Scene = { ...initial, phase: 'draft' };

// The released Warning outline starts with the outer boundary, followed by the cutouts.
function outerContour(svg: string) {
  const contour = svg.match(/<path\b[^>]*?\sd="([^"]*?[zZ])/);
  if (!contour) throw new Error('Expected a closed optical study outline');
  return contour[1];
}

const warningContour = outerContour(warningSvg);
// Figma measures the triangle's vertices before rounding its corners or outlining the stroke.
const playBox = { left: 3.5, top: 2, width: 11, height: 12 };
const playDraftLeft = 2;
const playShift = playBox.left - playDraftLeft;
const playDraftCenter = playDraftLeft + playBox.width / 2;
const playHalfHeight = playBox.height / 2;
const playSlopeLength = Math.hypot(playBox.width, playHalfHeight);
const playTipInset = playSlopeLength / playHalfHeight;
const playGripX = playBox.left + playBox.width;

// Inset each corner's arc center, then meet the original sides at their tangents.
// At radius 1 this centerline lies halfway between the released SVG's two contours.
function playCenterline(radius: number) {
  const { left, top, width, height } = playBox;
  const right = left + width;
  const middle = top + playHalfHeight;
  const bottom = top + height;
  if (radius === 0)
    return `M${left} ${top}L${right} ${middle}L${left} ${bottom}Z`;
  const insetY = (radius * (playSlopeLength + playHalfHeight)) / width;
  const normalX = (radius * playHalfHeight) / playSlopeLength;
  const normalY = (radius * width) / playSlopeLength;
  const tangentX = left + radius + normalX;
  const tipX = right - radius * playTipInset + normalX;
  const arc = `A${radius} ${radius} 0 0 1`;
  return [
    `M${left} ${top + insetY}`,
    `${arc} ${tangentX} ${top + insetY - normalY}`,
    `L${tipX} ${middle - normalY}`,
    `${arc} ${tipX} ${middle + normalY}`,
    `L${tangentX} ${bottom - insetY + normalY}`,
    `${arc} ${left} ${bottom - insetY}Z`,
  ].join(' ');
}

const sharpPlayPath = playCenterline(0);

const warningStem = {
  x: 8,
  top: 4.75,
  base: 8.5,
  draftRadius: 0.5,
  radius: 0.625,
};
const warningDot = { x: 8, y: 11, draftRadius: 0.5, radius: 1 };

function stemOutline(radius: number) {
  const { x, top, base, draftRadius } = warningStem;
  return `M${x - radius} ${top}a${radius} ${radius} 0 0 1 ${radius * 2} 0L${x + draftRadius} ${base}a.503 .503 0 0 1 -.5 .484.503 .503 0 0 1 -.5 -.483Z`;
}

const warningStemTrace = stemOutline(warningStem.draftRadius);
const warningDotTrace = `M8 ${warningDot.y - warningDot.draftRadius}a.5 .5 0 1 1 0 1a.5 .5 0 1 1 0-1`;
const measurementFormat = new Intl.NumberFormat('en', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});
const formatPlayGap = (value: number) => `${Math.round(value * 2) / 2}px`;

const traceOffset = (trace: number, part = 0) =>
  1 - Math.max(0, Math.min(1, trace - part));

async function traceIcon(a: Act<Scene>, label: 'center' | 'warning') {
  const grid = a.rect(`${label}-grid`);
  const unit = grid.width / 16;
  const contours =
    label === 'center'
      ? [sharpPlayPath]
      : [warningContour, warningStemTrace, warningDotTrace];
  await a.set({ phase: 'trace' });

  for (const [part, contour] of contours.entries()) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', contour);
    const length = path.getTotalLength();
    const pointAt = (progress: number) => {
      const point = path.getPointAtLength(length * progress);
      return {
        x: grid.x + (point.x - (label === 'center' ? playShift : 0)) * unit,
        y: grid.y + point.y * unit,
      };
    };
    await a.move(pointAt(0));
    a.mark(`${label}-trace-${part}`);
    await a.drag(
      pointAt(1),
      (_point, _origin, progress) =>
        a.put({ trace: part + easeInOutCubic(progress) }),
      {
        duration: part === 0 ? 1600 : 450,
        cursor: 'preserve',
        path: (progress) => pointAt(progress),
      },
    );
    await a.set({ trace: part + 1 });
  }
}

export async function resizeWarningPart(
  a: Act<Scene>,
  part: 'stem' | 'dot',
  from: number,
  to: number,
) {
  const stem = part === 'stem';
  const target = stem ? 'warning-resize' : 'warning-dot-resize';
  const key = stem ? 'adjustment' : 'dotAdjustment';
  await a.move(target);
  const grip = a.center(target);
  const { radius, draftRadius } = stem ? warningStem : warningDot;
  const travel = (a.rect('warning-grid').width / 16) * (radius - draftRadius);
  a.mark(`warning-${part}-${to === 1 ? 'expand' : 'restore'}`);
  await a.set({ phase: stem ? 'resize' : 'resize-dot' });
  await a.drag(
    { x: grip.x + travel * (to - from), y: grip.y },
    (point, origin) => a.put({ [key]: from + (point.x - origin.x) / travel }),
    {
      duration: 1900,
      cursor: 'preserve',
      path: (progress, start, end) => ({
        x: start.x + (end.x - start.x) * progress,
        y: start.y,
      }),
    },
  );
  await a.set({ [key]: to });
}

async function dragPlay(a: Act<Scene>) {
  await a.move('center-grip');
  const grip = a.center('center-grip');
  const unit = a.rect('center-grid').width / 16;
  const travel = unit * playShift;
  a.mark('center-drag');
  await a.drag(
    { x: grip.x + travel, y: grip.y },
    (point, origin) => {
      // Lift only once the hand has closed. Both axes follow the same grip.
      a.put({
        phase: 'drag',
        lifted: true,
        adjustment: (point.x - origin.x) / travel,
        liftY: (point.y - origin.y) / unit,
      });
    },
    {
      duration: 1600,
      path: (progress, from, to) => ({
        x: from.x + (to.x - from.x) * progress,
        y: from.y - Math.sin(Math.PI * progress) * unit * 1.25,
      }),
    },
  );
  await a.set({ adjustment: 1, lifted: false, liftY: 0 });
}

function study(delay: number, label: 'center' | 'warning') {
  return async (a: Act<Scene>) => {
    await a.wait(delay);
    a.mark(`${label}-trace`);
    await traceIcon(a, label);
    await a.set({ phase: 'draft' });
    await a.wait(650);
    if (label === 'center') {
      await a.move('center-grip');
      await a.click();
    }
    a.mark(`${label}-measure`);
    await a.set({ phase: 'measure' });
    if (label === 'center') {
      await a.wait(650);
      await dragPlay(a);
      await a.wait(240);
      a.mark('center-round');
      await a.set({ phase: 'round' });
      const grid = a.rect('center-grid');
      await a.move(
        { x: grid.x + grid.width, y: grid.y + grid.height },
        {
          duration: 950,
          onMove: (_at, _from, t) => a.put({ playRounding: easeInOutCubic(t) }),
        },
      );
      await a.set({ playRounding: 1 });
    } else {
      await resizeWarningPart(a, 'stem', 0, 1);
      await a.wait(350);
      await resizeWarningPart(a, 'dot', 0, 1);
    }
    a.mark(`${label}-adjusted`);
    await a.set({ phase: 'adjusted', adjustment: 1, dotAdjustment: 1 });
  };
}

export const centerStudy = study(360, 'center');
export const warningStudy = study(6200, 'warning');
export const soloWarningStudy = study(360, 'warning');

// Measure the tile's native drawing width so resizing the diagram leaves its
// surrounding text at 1:1, including when the grid stacks on narrow screens.
export function DrawingStage({
  className,
  script,
  initialScene = initial,
  play = 'once',
  cursorTarget,
  children,
}: {
  className: string;
  script?: (a: Act<Scene>) => Promise<void>;
  initialScene?: Scene;
  play?: 'once' | 'loop';
  cursorTarget?: string;
  children: (scene: Scene) => ReactNode;
}) {
  const slot = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(288);

  useLayoutEffect(() => {
    const element = slot.current!;
    const measure = () => setWidth(Math.max(1, element.clientWidth));
    const observer = new ResizeObserver(measure);
    measure();
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={slot}
      className={cn('optical-picture h-65 w-full', className)}
      aria-hidden="true"
    >
      <ThemedStage
        width={width}
        height={260}
        initial={initialScene}
        poster={poster}
        script={script}
        play={play}
        cursor={
          script
            ? { at: cursorTarget ?? { x: width - 30, y: 230 }, idle: 650 }
            : undefined
        }
        tokens={{
          '--ss-font': 'var(--font-sans)',
          '--ss-mono': 'var(--font-mono)',
        }}
      >
        {children}
      </ThemedStage>
    </div>
  );
}

function Drawing({
  scene,
  className,
  children,
}: {
  scene: Scene;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'optical-drawing grid h-full place-items-center',
        className,
      )}
      data-phase={scene.phase}
    >
      {children}
    </div>
  );
}

function MeasurementLabel({
  x,
  y,
  value,
  format = (n) => `${measurementFormat.format(n)} px`,
  changing = false,
  balance,
}: {
  x: number;
  y: number;
  value: number;
  format?: (value: number) => string;
  changing?: boolean;
  balance?: 'balanced' | 'unbalanced' | 'fixed';
}) {
  return (
    <g className="font-mono text-[1.32px] tabular-nums" textAnchor="middle">
      <rect
        fill="var(--optical-paper, none)"
        x={x - 3.05}
        y={y - 1.4}
        width="6.1"
        height="2"
        rx=".3"
      />
      <text
        x={x}
        y={y}
        className={cn(
          'fill-(--optical-accent) transition-[fill,font-weight] duration-140 ease-[ease]',
          changing && 'font-bold',
          changing && !balance && 'fill-blue-800 dark:fill-blue-200',
          balance === 'unbalanced' && 'fill-red-800 dark:fill-red-300',
          balance === 'balanced' && 'fill-green-800 dark:fill-green-300',
          balance === 'fixed' && 'fill-neutral-600 dark:fill-neutral-400',
        )}
      >
        {format(value)}
      </text>
    </g>
  );
}

export function PlayDrawing({ scene }: { scene: Scene }) {
  const grid = useId();
  const offset = (scene.adjustment - 1) * playShift;
  const leftGap = playBox.left + offset;
  const rightEdge = leftGap + playBox.width;
  const rightGap = 16 - rightEdge;
  const moving = scene.phase === 'drag';
  return (
    <Drawing scene={scene}>
      <svg
        className="optical-play-art h-full w-[min(100%,25rem)]"
        viewBox="6.5 0 21 22"
        fill="none"
      >
        <defs>
          <pattern id={grid} width="1" height="1" patternUnits="userSpaceOnUse">
            <path
              d="M0 1V0h1"
              className="stroke-current/25"
              strokeWidth=".09"
            />
          </pattern>
        </defs>
        <rect
          data-target="center-grid"
          x="9"
          y="2"
          width="16"
          height="16"
          fill={`url(#${grid})`}
          className="stroke-current/25"
          strokeWidth=".09"
        />
        <path
          d="M17 1v18M8 10h18"
          className="stroke-(--optical-accent)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="3 2"
        />
        <g transform="translate(9 2)">
          <path
            d={sharpPlayPath}
            transform={`translate(${-playShift} 0)`}
            className="optical-ghost"
          />
          <g
            className="optical-play-mark"
            data-target="center-icon"
            data-cursor={scene.phase === 'trace' ? 'pointer' : 'open'}
            data-lifted={scene.lifted || undefined}
            style={{
              transform: `translate(${offset}px, ${scene.liftY}px)`,
            }}
          >
            <g
              className="optical-play-lift"
              style={{ transformOrigin: `${playGripX}px 8px` }}
            >
              <path
                d={playCenterline(scene.playRounding)}
                className="stroke-(--optical-accent)"
                data-target="center-trace-outline"
                pathLength="1"
                strokeDasharray="1 1.1"
                style={{
                  strokeDashoffset: traceOffset(scene.trace),
                  strokeWidth: 0.17 + 0.83 * scene.playRounding,
                  opacity: 1 - scene.playRounding,
                }}
              />
              <IconPlay style={{ opacity: scene.playRounding }} />
              <circle data-target="center-grip" cx={playGripX} cy="8" r=".01" />
            </g>
          </g>
          <g className="optical-guide">
            <rect
              x={leftGap}
              y={playBox.top}
              width={playBox.width}
              height={playBox.height}
              className="stroke-(--optical-accent)/45"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M0 16v2M${leftGap} 16v2M${rightEdge} 16v2M16 16v2M0 17H${leftGap}M${rightEdge} 17H16`}
            />
            <MeasurementLabel
              x={leftGap / 2}
              y={19.1}
              value={leftGap}
              format={formatPlayGap}
              changing={moving}
            />
            <MeasurementLabel
              x={16 - rightGap / 2}
              y={19.1}
              value={rightGap}
              format={formatPlayGap}
              changing={moving}
            />
            <path
              className="optical-after"
              d={`M${playDraftCenter} 17h${playShift}m-.25-.25.25.25-.25.25`}
            />
          </g>
        </g>
      </svg>
    </Drawing>
  );
}

export function WarningDrawing({
  scene,
  showBalance = false,
}: {
  scene: Scene;
  showBalance?: boolean;
}) {
  const grid = useId();
  const inkMask = useId();
  const stemRadius =
    warningStem.draftRadius +
    scene.adjustment * (warningStem.radius - warningStem.draftRadius);
  const dotRadius =
    warningDot.draftRadius +
    scene.dotAdjustment * (warningDot.radius - warningDot.draftRadius);
  const dotLeft = warningDot.x - dotRadius;
  const dotRight = warningDot.x + dotRadius;
  const resizingStem = stemRadius < warningStem.radius;
  const resizingDot = dotRadius < warningDot.radius;
  const stemMoving = scene.phase === 'resize' && scene.adjustment < 1;
  const dotMoving = scene.phase === 'resize-dot';
  return (
    <Drawing
      scene={scene}
      className="px-(--optical-pad) [--optical-ink-opacity:0.45]"
    >
      {/* Center the 16px grid at x=11, with room on the right for its measurements. */}
      <svg
        className="h-full w-[min(100%,19.5rem)]"
        viewBox="-5 0 32 21"
        fill="none"
      >
        <defs>
          <pattern id={grid} width="1" height="1" patternUnits="userSpaceOnUse">
            <path
              d="M0 1V0h1"
              className="stroke-current/25"
              strokeWidth=".09"
            />
          </pattern>
          {/* Reveal the actual catalog ink as each detail grows from its 1 px draft. */}
          <mask
            id={inkMask}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="white" />
            {resizingStem && (
              <>
                <rect x="7" y="4" width="2" height="5" fill="black" />
                <path d={stemOutline(stemRadius)} fill="white" />
              </>
            )}
            {resizingDot && (
              <>
                <rect x="7" y="10" width="2" height="2" fill="black" />
                <circle
                  cx={warningDot.x}
                  cy={warningDot.y}
                  r={dotRadius}
                  fill="white"
                />
              </>
            )}
          </mask>
        </defs>
        <g transform="translate(3 1)">
          <rect
            data-target="warning-grid"
            width="16"
            height="16"
            fill={`url(#${grid})`}
            className="stroke-current/25"
            strokeWidth=".09"
          />
          <path
            d={warningContour}
            className="optical-trace"
            data-target="warning-trace-outline"
            pathLength="1"
            style={{ strokeDashoffset: traceOffset(scene.trace) }}
          />
          <path
            d={warningStemTrace}
            className="optical-trace"
            data-target="warning-trace-stem"
            pathLength="1"
            style={{ strokeDashoffset: traceOffset(scene.trace, 1) }}
          />
          <path
            d={warningDotTrace}
            className="optical-trace"
            data-target="warning-trace-dot"
            pathLength="1"
            style={{ strokeDashoffset: traceOffset(scene.trace, 2) }}
          />
          <g
            className="optical-ink"
            mask={resizingStem || resizingDot ? `url(#${inkMask})` : undefined}
            data-target="warning-icon"
            data-cursor={scene.phase === 'trace' ? 'pointer' : 'hand'}
          >
            <IconWarning />
          </g>
          <g className="optical-guide" strokeDasharray="4 2.5">
            <path
              d={`M${dotLeft} ${warningDot.y}V18M${dotRight} ${warningDot.y}V18M${warningStem.x + stemRadius} ${warningStem.top}H17.5M8.5 8.5h9`}
            />
          </g>
          <circle
            className="optical-warning-ring"
            cx={warningStem.x}
            cy={warningStem.top}
            r={stemRadius}
          />
          <circle className="optical-warning-ring" cx="8" cy="8.5" r=".5" />
          <rect
            className="optical-resize-handle"
            data-target="warning-resize"
            data-cursor="resize-ew"
            x={warningStem.x + stemRadius - 0.3}
            y={warningStem.top - 0.3}
            width=".6"
            height=".6"
          />
          <circle
            className="optical-warning-ring"
            cx={warningDot.x}
            cy={warningDot.y}
            r={dotRadius}
          />
          <rect
            className="optical-resize-handle"
            data-target="warning-dot-resize"
            data-cursor="resize-ew"
            x={dotRight - 0.3}
            y={warningDot.y - 0.3}
            width=".6"
            height=".6"
          />
          <g className="optical-guide">
            <path
              d={`M${dotLeft} 17v1M${dotRight} 17v1M${dotLeft} 17.5H${dotRight}`}
            />
            <MeasurementLabel
              x={8}
              y={19.1}
              value={2 * dotRadius}
              changing={dotMoving}
              balance={
                showBalance
                  ? scene.dotAdjustment === 1
                    ? 'balanced'
                    : 'unbalanced'
                  : undefined
              }
            />
            <MeasurementLabel
              x={20.2}
              y={warningStem.top + 0.4}
              value={stemRadius * 2}
              changing={stemMoving}
              balance={
                showBalance
                  ? scene.adjustment === 1
                    ? 'balanced'
                    : 'unbalanced'
                  : undefined
              }
            />
            <MeasurementLabel
              x={20.2}
              y={8.9}
              value={1}
              balance={showBalance ? 'fixed' : undefined}
            />
          </g>
          <rect
            data-target="warning-rest"
            x="22"
            y="17"
            width="1"
            height="1"
            fill="none"
          />
        </g>
      </svg>
    </Drawing>
  );
}
