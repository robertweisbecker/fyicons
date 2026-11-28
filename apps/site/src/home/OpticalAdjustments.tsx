import { IconRendererContext } from '@/components/UIIcon';
import type { ComponentProps } from 'react';
import { useId, useState, type ReactNode } from 'react';
import { Field } from '@base-ui/react/field';
import { createIconLookup } from '@/components/createIconLookup';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { OpticalStudy, StudyTile } from './optical/OpticalStudy';
import { formatPixels } from './optical/OpticalDrawings';
import {
  IconApps,
  IconFont,
  IconGhost,
  IconGrid,
  IconGridFill,
  IconMath,
  IconPointerSwarm,
  IconShapes,
} from 'fyicons';

const Icon = createIconLookup({
  apps: IconApps,
  font: IconFont,
  ghost: IconGhost,
  grid: IconGrid,
  'grid-fill': IconGridFill,
  math: IconMath,
  'pointer-swarm': IconPointerSwarm,
  shapes: IconShapes,
});

function OpticalGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative size-32 shrink-0 bg-size-[6.25%_6.25%] bg-position-[-0.5px_-0.5px] outline outline-1 -outline-offset-[0.5px] outline-border"
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
      }}
    >
      {children}
    </div>
  );
}

function BowlMeasurement({
  left,
  right,
  labelClassName,
}: {
  left: number;
  right: number;
  labelClassName: string;
}) {
  return (
    <g>
      <path
        d={`M${left} 13.5V14.4M${right} 13.5V14.4`}
        strokeDasharray=".16 .14"
      />
      <path d={`M${left} 14.2v.4M${right} 14.2v.4M${left} 14.4H${right}`} />
      <text
        x={(left + right) / 2}
        y="15.55"
        textAnchor="middle"
        stroke="none"
        className={`font-mono text-[.75px] tabular-nums ${labelClassName}`}
      >
        {formatPixels(right - left)}
      </text>
    </g>
  );
}

function FontGuides() {
  // Project the outer oval behind the stem from the visible bowl's bounds.
  const outerOval = { cx: 11.999, cy: 10, rx: 2.5, ry: 3 };
  const guideStroke = 0.085;
  const outerLeft = outerOval.cx - outerOval.rx;
  const outerRight = outerOval.cx + outerOval.rx;
  // The lowercase counter in font-16.svg has a flatter right side.
  const innerLeft = 10.499;
  const innerRight = 13.834;

  return (
    <g stroke="currentColor" strokeWidth={guideStroke}>
      <ellipse
        cx={outerOval.cx}
        cy={outerOval.cy}
        rx={outerOval.rx - guideStroke / 2}
        ry={outerOval.ry - guideStroke / 2}
        className="text-pink-400 dark:text-pink-300"
        fill="none"
        strokeDasharray="0.2 0.15"
      />
      <path
        d="M12.167 8.091
           C11.247 8.091 10.5 8.946 10.499 10
           S11.246 11.909 12.166 11.909
           C13.336 11.909 13.834 11.054 13.834 9.999
           C13.834 8.946 13.337 8.091 12.166 8.091Z"
        className="text-green-400"
        fill="currentColor"
        fillOpacity="0.2"
        strokeLinecap="round"
        strokeDasharray="0 .2"
      />
      <g className="text-control-accent">
        <rect
          x={outerLeft}
          y="6.5"
          width={innerLeft - outerLeft}
          height="7"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="none"
        />
        <path d={`M${outerLeft} 6.5V13.5M${innerLeft} 6.5V13.5`} />
        <BowlMeasurement
          left={outerLeft}
          right={innerLeft}
          labelClassName="fill-blue-800 dark:fill-blue-200"
        />
      </g>
      <g className="text-green-400">
        <rect
          x={innerRight}
          y="6.5"
          width={outerRight - innerRight}
          height="7"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="none"
        />
        <path d={`M${outerRight} 6.5V13.5`} />
        <BowlMeasurement
          left={innerRight}
          right={outerRight}
          labelClassName="fill-green-800 dark:fill-green-300"
        />
      </g>
    </g>
  );
}

function CurvesCard() {
  const descriptionId = useId();
  const previewId = useId();
  const gridId = useId();
  const [showGuides, setShowGuides] = useState(true);
  return (
    <StudyTile
      className="@container/curves flex flex-col pb-6 @min-[900px]/study:col-span-2"
      captionClassName="mx-(--optical-pad) mt-auto pt-2 @xl/curves:absolute @xl/curves:start-(--optical-pad) @xl/curves:bottom-6 @xl/curves:m-0 @xl/curves:w-2/5"
      title="Curves and ink traps"
      description="Weight varies in typographic bowls, with thinning at intersections."
      descriptionId={descriptionId}
    >
      <div className="me-(--optical-pad) grid w-4/5 max-w-72 justify-items-center gap-1 self-end">
        <svg
          id={previewId}
          className="pointer-events-none h-auto w-full overflow-visible text-mauve-500 dark:text-mauve-300"
          viewBox="0 3.75 16 12.25"
          fill="none"
          role="img"
          aria-label="Magnified font icon showing the lowercase A's bowl and ink traps"
          aria-describedby={descriptionId}
        >
          <defs>
            <pattern
              id={gridId}
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 1V0H1"
                className="stroke-current/25"
                strokeWidth=".08"
              />
            </pattern>
          </defs>
          <rect
            width="16"
            height="16"
            fill={`url(#${gridId})`}
            className="stroke-current/25"
            strokeWidth=".04"
          />
          <Icon name="font" size={16} />
          {showGuides && <FontGuides />}
        </svg>
        <Field.Root className="flex min-h-11 items-center gap-2.5">
          <Field.Label className="text-sm text-muted">Show guides</Field.Label>
          <Switch
            checked={showGuides}
            onCheckedChange={setShowGuides}
            aria-controls={previewId}
          />
        </Field.Root>
      </div>
    </StudyTile>
  );
}

function ShapeGuides() {
  return (
    <g className="text-pink-700 dark:text-pink-300">
      {/* Repeat the square's 5 × 5px painted bounds as comparison guides. */}
      <g fill="currentColor" fillOpacity="0.25" stroke="none">
        {[2, 9].flatMap((x) =>
          [2, 9].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" />
          )),
        )}
      </g>
      <path
        d="M2 0V16M7 0V16M9 0V16M14 0V16M0 2H16M0 7H16M0 9H16M0 14H16"
        strokeDasharray="0.5 0.5"
        strokeDashoffset="0.25"
      />
    </g>
  );
}

function ShapesCard() {
  const descriptionId = useId();
  const previewId = useId();
  const [icon, setIcon] = useState<
    'grid' | 'shapes' | 'pointer-swarm' | 'apps' | 'math'
  >('shapes');

  return (
    <StudyTile
      className="flex flex-col gap-5 px-(--optical-pad) py-6"
      title="Balanced shapes"
      description="Round and pointed shapes extend past square bounds."
      descriptionId={descriptionId}
    >
      <div className="grid flex-1 place-items-center">
        <div className="flex flex-col items-center gap-4">
          <OpticalGrid>
            <Icon
              id={previewId}
              name={icon}
              className="text-muted"
              size={128}
              aria-label={`${icon === 'grid' ? 'Grid' : 'Shapes'} icon with comparison guides`}
              aria-describedby={descriptionId}
            />
            <svg
              className="pointer-events-none absolute inset-0 size-full overflow-visible"
              viewBox="0 0 16 16"
              // fill="none"
              // stroke="currentColor"
              // strokeWidth=".125"
              aria-hidden="true"
            >
              <ShapeGuides />
            </svg>
          </OpticalGrid>
          <ToggleGroup
            aria-label="Balanced shape example"
            value={[icon]}
            onValueChange={([value]) => {
              if (
                value === 'grid' ||
                value === 'shapes' ||
                value === 'apps' ||
                value === 'pointer-swarm' ||
                value === 'math'
              )
                setIcon(value);
            }}
            className="rounded-xl bg-inset p-1"
          >
            {[
              { value: 'grid', label: 'Grid' },
              { value: 'shapes', label: 'Shapes' },
              { value: 'pointer-swarm', label: 'PointerSwarm' },
              { value: 'apps', label: 'Apps' },
              { value: 'math', label: 'Math' },
            ].map(({ value, label }) => (
              <DemoToggle
                key={value}
                value={value}
                icon={value}
                label={label}
                aria-controls={previewId}
                variant="elevated"
                className="pointer-coarse:size-11"
              />
            ))}
          </ToggleGroup>
        </div>
      </div>
    </StudyTile>
  );
}

function OpticalAdjustmentsContent({ heading }: { heading: ReactNode }) {
  return (
    <OpticalStudy heading={heading}>
      <ShapesCard />
      <CurvesCard />
    </OpticalStudy>
  );
}

export function OpticalAdjustments(
  props: ComponentProps<typeof OpticalAdjustmentsContent>,
) {
  return (
    <IconRendererContext value={Icon}>
      <OpticalAdjustmentsContent {...props} />
    </IconRendererContext>
  );
}

const { DemoToggle } = createDemoControls(Icon);
