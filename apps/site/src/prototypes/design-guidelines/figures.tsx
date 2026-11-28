'use client';

import { useId, useState, type ComponentType, type ReactNode } from 'react';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import { PixelGrid } from '@/home/construction-guides';

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  'aria-hidden'?: boolean | 'true';
}>;

// A large drawing-sheet view of one icon on the landing page's pixel grid.
export function Specimen({
  icon: Icon,
  name,
  caption,
  children,
  className,
}: {
  icon: IconComponent;
  name: string;
  caption?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn('min-w-0 space-y-2', className)}>
      <div className="grid aspect-square place-items-center rounded-2xl bg-surface p-5 sm:p-6">
        <svg
          viewBox="0 0 16 16"
          className="w-full max-w-40 overflow-visible"
          role="img"
          aria-label={`${name} on a 16 × 16 pixel grid`}
        >
          <PixelGrid emphasized />
          <Icon size={16} aria-hidden="true" />
          {children && <g aria-hidden="true">{children}</g>}
        </svg>
      </div>
      <figcaption className="text-sm">
        <span className="font-mono text-xs">{name}</span>
        {caption && <span className="mt-0.5 block text-muted">{caption}</span>}
      </figcaption>
    </figure>
  );
}

export function SpecimenRow({
  children,
  columns = 3,
}: {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      data-not-typeset
      className={cn(
        'my-8 grid grid-cols-2 gap-x-4 gap-y-6',
        columns === 3 && 'sm:grid-cols-3',
        columns === 4 && 'sm:grid-cols-4',
      )}
    >
      {children}
    </div>
  );
}

// Guide overlays drawn in the specimen's 16 × 16 coordinate space.
export function Marker({
  d,
  color = 'var(--color-pink-500)',
  dashed = false,
}: {
  d: string;
  color?: string;
  dashed?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="0.125"
      strokeLinecap="round"
      strokeDasharray={dashed ? '0.3 0.2' : undefined}
    />
  );
}

export function Ring({
  cx,
  cy,
  r,
  color = 'var(--color-pink-500)',
}: {
  cx: number;
  cy: number;
  r: number;
  color?: string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={color}
      fillOpacity="0.12"
      stroke={color}
      strokeWidth="0.125"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Dot coverage: how much of a pixel a dot paints beside a 1px line.  */
/* ------------------------------------------------------------------ */

const dotOptions = {
  'square-1': { label: '1px square', shape: 'square', size: 1 },
  'circle-1': { label: '1px circle', shape: 'circle', size: 1 },
  'circle-1.5': { label: '1.5px circle', shape: 'circle', size: 1.5 },
  'circle-2': { label: '2px circle', shape: 'circle', size: 2 },
} as const;
type DotOption = keyof typeof dotOptions;

const columns = 6;
const rows = 5;
const dotCenter = { x: 4.5, y: 2.5 };
const line = { x0: 1, x1: 2, y0: 0.5, y1: 4.5 };
const samples = 24;

function inLine(x: number, y: number) {
  // A 1px vertical stroke with round caps.
  const cx = (line.x0 + line.x1) / 2;
  const r = (line.x1 - line.x0) / 2;
  if (x >= line.x0 && x <= line.x1 && y >= line.y0 + r && y <= line.y1 - r)
    return true;
  const capY = y < 2.5 ? line.y0 + r : line.y1 - r;
  return (x - cx) ** 2 + (y - capY) ** 2 <= r * r;
}

function inDot(option: DotOption, x: number, y: number) {
  const { shape, size } = dotOptions[option];
  const r = size / 2;
  if (shape === 'square')
    return Math.abs(x - dotCenter.x) <= r && Math.abs(y - dotCenter.y) <= r;
  return (x - dotCenter.x) ** 2 + (y - dotCenter.y) ** 2 <= r * r;
}

// Supersample each pixel to approximate antialiased coverage.
function coverage(test: (x: number, y: number) => boolean) {
  const result: number[][] = [];
  for (let row = 0; row < rows; row++) {
    const values: number[] = [];
    for (let column = 0; column < columns; column++) {
      let hits = 0;
      for (let sy = 0; sy < samples; sy++)
        for (let sx = 0; sx < samples; sx++)
          if (test(column + (sx + 0.5) / samples, row + (sy + 0.5) / samples))
            hits++;
      values.push(hits / samples ** 2);
    }
    result.push(values);
  }
  return result;
}

const percent = (value: number) => `${Math.round(value * 100)}%`;

export function DotCoverage() {
  const [option, setOption] = useState<DotOption>('circle-1');
  const id = useId();
  const pixels = coverage((x, y) => inLine(x, y) || inDot(option, x, y));
  const dotPixels = coverage((x, y) => inDot(option, x, y));
  const centerCoverage =
    dotPixels[Math.floor(dotCenter.y)][Math.floor(dotCenter.x)];
  const totalInk = dotPixels.flat().reduce((sum, value) => sum + value, 0);
  const { shape, size } = dotOptions[option];
  const r = size / 2;

  return (
    <figure
      data-not-typeset
      className="my-8 overflow-clip rounded-2xl bg-surface text-ink"
    >
      <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-6">
        <div className="space-y-2">
          <p className="text-xs text-muted">Vector</p>
          <svg
            viewBox={`-0.25 -0.25 ${columns + 0.5} ${rows + 0.5}`}
            className="w-full"
            aria-hidden="true"
          >
            <PixelCells />
            <g fill="currentColor" fillOpacity="0.85">
              <path
                d={`M${line.x0} ${line.y0 + 0.5}a.5 .5 0 0 1 1 0V${line.y1 - 0.5}a.5 .5 0 0 1 -1 0Z`}
              />
              {shape === 'square' ? (
                <rect
                  x={dotCenter.x - r}
                  y={dotCenter.y - r}
                  width={size}
                  height={size}
                />
              ) : (
                <circle cx={dotCenter.x} cy={dotCenter.y} r={r} />
              )}
            </g>
            <rect
              x={Math.floor(dotCenter.x)}
              y={Math.floor(dotCenter.y)}
              width="1"
              height="1"
              fill="none"
              stroke="var(--color-pink-500)"
              strokeWidth="0.04"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted">Rendered pixels</p>
          <svg
            viewBox={`-0.25 -0.25 ${columns + 0.5} ${rows + 0.5}`}
            className="w-full"
            role="img"
            aria-labelledby={`${id}-stats`}
          >
            {pixels.map((values, row) =>
              values.map((value, column) =>
                value > 0 ? (
                  <rect
                    key={`${row}-${column}`}
                    x={column}
                    y={row}
                    width="1"
                    height="1"
                    fill="currentColor"
                    fillOpacity={value * 0.85}
                  />
                ) : null,
              ),
            )}
            <PixelCells />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3 sm:px-6">
        <ToggleGroup
          aria-label="Dot shape"
          value={[option]}
          onValueChange={([value]) => {
            if (value && value in dotOptions) setOption(value as DotOption);
          }}
          className="flex-wrap rounded-xl bg-inset p-1"
        >
          {(Object.keys(dotOptions) as DotOption[]).map((value) => (
            <Toggle key={value} value={value} variant="elevated" size="sm">
              {dotOptions[value].label}
            </Toggle>
          ))}
        </ToggleGroup>
        <p
          id={`${id}-stats`}
          className="font-mono text-xs text-muted tabular-nums"
          aria-live="polite"
        >
          Center pixel {percent(centerCoverage)} · ink {totalInk.toFixed(2)} px²
        </p>
      </div>
    </figure>
  );
}

function PixelCells() {
  const lines: string[] = [];
  for (let x = 0; x <= columns; x++) lines.push(`M${x} 0V${rows}`);
  for (let y = 0; y <= rows; y++) lines.push(`M0 ${y}H${columns}`);
  return (
    <path
      d={lines.join('')}
      fill="none"
      stroke="var(--color-blue-400)"
      strokeWidth="0.02"
      opacity="0.7"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Keyline specs, centered on the stroke like the landing page guides. */
/* ------------------------------------------------------------------ */

export const keylineSpecs = [
  {
    shape: 'Circle',
    size: '13 × 13',
    outer: '14 × 14',
    radius: '—',
    use: 'Clock, Smile',
  },
  {
    shape: 'Square',
    size: '11 × 11',
    outer: '12 × 12',
    radius: '2–2.5px',
    use: 'Stop, Checkbox',
  },
  {
    shape: 'Horizontal rectangle',
    size: '13 × 9',
    outer: '14 × 10',
    radius: '1.5px',
    use: 'Browser, Card',
  },
  {
    shape: 'Vertical rectangle',
    size: '9 × 13',
    outer: '10 × 14',
    radius: '1.5px',
    use: 'File, Phone',
  },
];

/* ------------------------------------------------------------------ */
/* Smile eyes: a typical 1px dot eye vs. FYIcons' drawn eyes.         */
/* ------------------------------------------------------------------ */

// A typical 24px smile, scaled to 16px: a 1.5px stroke becomes 1px, and
// its zero-length round-cap eyes become 1px circles.
function TypicalSmile({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 12C3 16.97056 7.02944 21 12 21C16.97056 21 21 16.97056 21 12C21 7.02944 16.97056 3 12 3C7.02944 3 3 7.02944 3 12ZM9 9H9.01M15 9H15.01M8 14C10.20914 16.20914 13.79086 16.20914 16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Box = { left: number; top: number; right: number; bottom: number };

const ruleColor = 'var(--color-pink-500)';
const labelClassName =
  'fill-pink-700 font-mono text-[0.6px] dark:fill-pink-300';

function EyeRules({ eye, stroke }: { eye: Box; stroke: Box }) {
  const width = eye.right - eye.left;
  const height = eye.bottom - eye.top;
  const above = eye.top - 0.55;
  const beside = eye.left - 0.55;
  const tick = 0.2;
  const strokeY = 8;
  return (
    <g stroke={ruleColor} strokeWidth="0.06" fill="none">
      {/* Eye bounds */}
      <rect
        x={eye.left}
        y={eye.top}
        width={width}
        height={height}
        strokeDasharray="0.15 0.12"
      />
      {/* Width, above the eye */}
      <path
        d={`M${eye.left} ${above}H${eye.right}M${eye.left} ${above - tick}v${tick * 2}M${eye.right} ${above - tick}v${tick * 2}`}
      />
      <text
        x={(eye.left + eye.right) / 2}
        y={above - 0.35}
        textAnchor="middle"
        stroke="none"
        className={labelClassName}
      >
        {width.toFixed(2)}
      </text>
      {/* Height, beside the eye */}
      <path
        d={`M${beside} ${eye.top}V${eye.bottom}M${beside - tick} ${eye.top}h${tick * 2}M${beside - tick} ${eye.bottom}h${tick * 2}`}
      />
      <text
        x={beside - 0.35}
        y={(eye.top + eye.bottom) / 2 + 0.2}
        textAnchor="end"
        stroke="none"
        className={labelClassName}
      >
        {height.toFixed(2)}
      </text>
      {/* Stroke width, measured across the face at its vertical center */}
      <path
        d={`M${stroke.left} ${strokeY}H${stroke.right}M${stroke.left} ${strokeY - tick}v${tick * 2}M${stroke.right} ${strokeY - tick}v${tick * 2}`}
      />
      <text
        x={stroke.right + 0.3}
        y={strokeY + 0.2}
        stroke="none"
        className={labelClassName}
      >
        {(stroke.right - stroke.left).toFixed(2)}
      </text>
    </g>
  );
}

const eyePanels = [
  {
    name: 'Typical smile',
    // 24px artwork at 16px: 1.5px round-cap dots become 1px circles.
    art: <TypicalSmile />,
    eye: { left: 5.5, top: 5.5, right: 6.5, bottom: 6.5 },
    stroke: { left: 1.5, top: 0, right: 2.5, bottom: 0 },
    caption: 'Eye 1 × 1 · stroke 1 · eye = 1× stroke',
  },
  {
    name: 'FYIcons EmojiSmile',
    art: null,
    eye: { left: 5, top: 6, right: 6.75, bottom: 8 },
    stroke: { left: 1, top: 0, right: 2, bottom: 0 },
    caption: 'Eye 1.75 × 2 · stroke 1 · eye = 1.75× stroke',
  },
] as const;

export function EyeComparison({ icon: Icon }: { icon: IconComponent }) {
  return (
    <figure
      data-not-typeset
      className="relative my-8 rounded-2xl bg-surface p-5 pt-12 text-ink sm:p-6 sm:pt-12"
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {eyePanels.map((panel) => (
          <div key={panel.name} className="min-w-0 space-y-2">
            <svg
              viewBox="-0.5 -0.5 17 17"
              className="w-full overflow-visible"
              role="img"
              aria-label={`${panel.name} at 16px with its left eye measured: ${panel.caption}`}
            >
              <PixelGrid emphasized />
              {panel.art ?? <Icon size={16} aria-hidden="true" />}
              <EyeRules eye={panel.eye} stroke={panel.stroke} />
            </svg>
            <p className="text-sm">
              <span className="font-mono text-xs">{panel.name}</span>
              <span className="mt-0.5 block text-xs text-muted tabular-nums">
                {panel.caption}
              </span>
            </p>
          </div>
        ))}
      </div>
      {/* Actual size, for an honest read of the difference. */}
      <div
        className="absolute end-3 top-3 flex items-center gap-2.5 rounded-lg bg-inset px-2.5 py-1.5"
        aria-label="Both icons at actual 16px size"
        role="img"
      >
        <TypicalSmile size={16} />
        <Icon size={16} aria-hidden="true" />
        <span className="font-mono text-[10px] text-muted">16px</span>
      </div>
    </figure>
  );
}
