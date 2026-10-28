import { useId, useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { Switch } from '@/components/ui/switch';

function PlayGuides() {
  return (
    <>
      {/* Use whole-pixel references for the unequal gaps in the 16px grid. */}
      <g className="text-blue-600 dark:text-blue-400">
        <rect
          x="0"
          y="2"
          width="4"
          height="12"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="none"
        />
        <path d="M0 2V14M4 2V14" />
      </g>
      <g className="text-green-600 dark:text-green-400">
        <rect
          x="14"
          y="2"
          width="2"
          height="12"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="none"
        />
        <path d="M14 2V14M16 2V14" />
      </g>
    </>
  );
}

function EyeGuides() {
  return (
    <g className="text-pink-500 dark:text-pink-400">
      {/* A 1px reference band shows how the 1.75 × 2px eyes extend past it. */}
      <path d="M1 6.5H15M1 7.5H15" strokeDasharray="0.5 0.5" />
      <ellipse cx="5.875" cy="7" rx="0.875" ry="1" />
      <ellipse cx="10.125" cy="7" rx="0.875" ry="1" />
    </g>
  );
}

function FontGuides() {
  return (
    <>
      {/* Follow the bowl and counter edges in the source artwork. */}
      <g className="text-blue-600 dark:text-blue-400">
        <rect
          x="9.49927"
          y="3"
          width="1"
          height="10"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="none"
        />
        <path d="M9.49927 3V13M10.49927 3V13" />
      </g>
      <g className="text-green-600 dark:text-green-400">
        <path d="M13.8333 3V13M13.9993 3V13" />
        <circle cx="13.92" cy="7.96" r="0.4" />
        <circle cx="13.92" cy="12.04" r="0.4" />
      </g>
    </>
  );
}

function ShapeGuides() {
  return (
    <g className="text-pink-500 dark:text-pink-400" strokeDasharray="0.5 0.5">
      {/* Repeat the square's 5 × 5px painted bounds as comparison guides. */}
      <path d="M2 1V15M7 1V15M9 1V15M14 1V15M1 2H15M1 7H15M1 9H15M1 14H15" />
    </g>
  );
}

const opticalExamples = [
  {
    name: 'play-fill',
    title: 'Optical centering',
    description: 'More space on the left balances the triangle.',
    Guides: PlayGuides,
  },
  {
    name: 'emoji-smile',
    title: 'Oval eyes',
    description: '1.75 × 2px eyes stay clear at small sizes.',
    Guides: EyeGuides,
  },
  {
    name: 'font-family',
    title: 'Curves and ink traps',
    description: 'Stroke weight varies around the bowl and joins.',
    Guides: FontGuides,
  },
  {
    name: 'shapes',
    title: 'Balanced shapes',
    description: 'Round and pointed shapes extend past square bounds.',
    Guides: ShapeGuides,
  },
] as const;

const numberIndicatorClassName =
  'grid size-6 shrink-0 place-items-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600 tabular-nums dark:bg-neutral-800 dark:text-muted';

export function OpticalAdjustments() {
  const gridId = useId();
  const [showGuides, setShowGuides] = useState(true);

  return (
    <section
      aria-labelledby="optical-adjustments-heading"
      className="grid items-start gap-6 md:grid-cols-2 md:gap-10"
    >
      <div className="space-y-6">
        <h2
          id="optical-adjustments-heading"
          className="text-2xl font-medium tracking-tight"
        >
          Optical adjustments
        </h2>
        <ol role="list" className="max-w-sm list-none space-y-5 text-sm">
          {opticalExamples.map(({ name, title, description }, index) => (
            <li
              key={name}
              id={`${gridId}-${name}`}
              className="flex items-start gap-3"
            >
              <span aria-hidden="true" className={numberIndicatorClassName}>
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <span className="font-medium">{title}</span>
                <p className="mt-1 leading-6 text-neutral-600 dark:text-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="min-w-0 space-y-4">
        <div className="flex justify-end">
          <Field.Root className="flex items-center gap-2.5">
            <Field.Label className="cursor-pointer text-sm text-muted">
              Show guides
            </Field.Label>
            <Switch
              checked={showGuides}
              onCheckedChange={setShowGuides}
              aria-controls={gridId}
            />
          </Field.Root>
        </div>
        <ul
          id={gridId}
          aria-label="Optically adjusted icons"
          role="list"
          className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-3 sm:gap-4"
        >
          {opticalExamples.map(({ name, Guides }, index) => (
            <li
              key={name}
              className="relative grid aspect-square place-items-center rounded-2xl bg-surface"
            >
              <span
                aria-hidden="true"
                className={`absolute top-4 left-4 ${numberIndicatorClassName}`}
              >
                {index + 1}
              </span>
              <div
                className="optical-icon-grid relative size-32 shrink-0 outline outline-1 -outline-offset-[0.5px] outline-border"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                  backgroundPosition: '-0.5px -0.5px',
                }}
              >
                <Icon
                  name={name}
                  size={128}
                  aria-label={`Example ${index + 1}: ${name.replaceAll('-', ' ')}`}
                  aria-describedby={`${gridId}-${name}`}
                />
                {showGuides && (
                  <svg
                    className="optical-guides pointer-events-none absolute inset-0 size-full overflow-visible"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.125"
                    aria-hidden="true"
                  >
                    <Guides />
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
