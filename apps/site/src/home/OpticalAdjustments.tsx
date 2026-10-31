import { useId, useState, type ReactNode } from 'react';
import { Field } from '@base-ui/react/field';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Icon } from '@/components/Icon';
import { Switch } from '@/components/ui/switch';
import { useMobile } from '@/lib/preferences';
import { cn } from '@/lib/utils';

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

function OvershootGuides() {
  return (
    <>
      {[
        {
          className: 'text-green-600 dark:text-green-400',
          eyeWidth: 1.75,
          dotWidth: 2,
          height: 2,
          showLines: false,
        },
        {
          className: 'text-blue-600 dark:text-blue-400',
          eyeWidth: 1,
          dotWidth: 1,
          height: 1,
          showLines: true,
        },
      ].map(({ className, eyeWidth, dotWidth, height, showLines }) => {
        // Center both measurements on the eyes and dot in the 24px diagram.
        const verticalBands = [
          { x: 6.875 - eyeWidth / 2, width: eyeWidth },
          { x: 11.125 - eyeWidth / 2, width: eyeWidth },
          { x: 15 - dotWidth / 2, width: dotWidth },
        ];
        const horizontalBands = [8 - height / 2, 19 - height / 2];

        return (
          <g key={className} className={className}>
            <g fill="currentColor" fillOpacity="0.08" stroke="none">
              {verticalBands.map(({ x, width }) => (
                <rect key={x} x={x} y="0" width={width} height="24" />
              ))}
              {horizontalBands.map((y) => (
                <rect key={y} x="0" y={y} width="24" height={height} />
              ))}
            </g>
            {showLines &&
              verticalBands.map(({ x, width }) => (
                <path key={x} d={`M${x} 0V24M${x + width} 0V24`} />
              ))}
            {showLines &&
              horizontalBands.map((y) => (
                <path key={y} d={`M0 ${y}H24M0 ${y + height}H24`} />
              ))}
          </g>
        );
      })}
    </>
  );
}

function OpticalGrid({
  children,
  expanded = false,
}: {
  children: ReactNode;
  expanded?: boolean;
}) {
  return (
    <div
      className={cn(
        'optical-icon-grid relative shrink-0 outline outline-1 -outline-offset-[0.5px] outline-border',
        expanded ? 'size-42' : 'size-32',
      )}
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
        // The expanded diagram uses a 24px grid at 7×; other examples use 16px at 8×.
        backgroundSize: expanded ? '7px 7px' : '8px 8px',
        backgroundPosition: '-0.5px -0.5px',
      }}
    >
      {children}
    </div>
  );
}

function OvershootExample({
  showGuides,
  descriptionId,
}: {
  showGuides: boolean;
  descriptionId: string;
}) {
  const overlapMaskId = useId();
  return (
    <OpticalGrid expanded>
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        aria-label="Example 2: smiley eyes and warning dot overshoots"
        aria-describedby={descriptionId}
      >
        <defs>
          <mask
            id={overlapMaskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="white" />
            {/* The warning's outer contour hides only the smiley beneath it. */}
            <path
              transform="translate(7 8)"
              d="M6.253 2.119c.762-1.372 2.734-1.372 3.496 0l4.95 8.91c.74 1.333-.223 2.972-1.747 2.972H3.049c-1.524 0-2.488-1.638-1.748-2.971z"
              fill="black"
            />
          </mask>
        </defs>
        <g mask={`url(#${overlapMaskId})`}>
          <Icon name="emoji-smile" size={16} x={1} y={1} />
        </g>
        <Icon name="warning" size={16} x={7} y={8} />
        {showGuides && (
          <g
            className="optical-guides pointer-events-none"
            stroke="currentColor"
            strokeWidth={1 / 7}
          >
            <OvershootGuides />
          </g>
        )}
      </svg>
    </OpticalGrid>
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
    title: 'Ovals & overshoots',
    description: 'Dots extend beyond 1px to remain legible at small sizes.',
    Guides: OvershootGuides,
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
  const mobile = useMobile();
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
        <ol
          role="list"
          className="hidden max-w-sm list-none space-y-5 text-sm md:block"
        >
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
        <ScrollArea.Root>
          <ScrollArea.Viewport
            role="region"
            aria-label="Optical examples"
            tabIndex={mobile ? 0 : -1}
            className="relative snap-x snap-mandatory overscroll-x-contain scroll-fade-6 focus-visible:-outline-offset-2 max-md:scroll-fade-x md:snap-none"
          >
            <ScrollArea.Content
              render={<ul />}
              id={gridId}
              aria-label="Optically adjusted icons"
              role="list"
              className="grid min-w-0! auto-cols-[min(82%,20rem)] grid-flow-col gap-4 pb-6 md:auto-cols-auto md:grid-flow-row md:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] md:pb-0"
            >
              {opticalExamples.map(
                ({ name, title, description, Guides }, index) => (
                  <li key={name} className="min-w-0 snap-start scroll-ms-6">
                    <figure className="m-0">
                      <div className="relative grid aspect-square place-items-center rounded-2xl bg-surface">
                        <span
                          aria-hidden="true"
                          className={`absolute top-4 left-4 ${numberIndicatorClassName}`}
                        >
                          {index + 1}
                        </span>
                        {name === 'emoji-smile' ? (
                          <OvershootExample
                            showGuides={showGuides}
                            descriptionId={`${gridId}-${name}${mobile ? '-mobile' : ''}`}
                          />
                        ) : (
                          <OpticalGrid>
                            <Icon
                              name={name}
                              size={128}
                              aria-label={`Example ${index + 1}: ${name.replaceAll('-', ' ')}`}
                              aria-describedby={`${gridId}-${name}${mobile ? '-mobile' : ''}`}
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
                          </OpticalGrid>
                        )}
                      </div>
                      <figcaption
                        id={`${gridId}-${name}-mobile`}
                        className="mt-3 text-sm md:hidden"
                      >
                        <h3 className="font-medium">{title}</h3>
                        <p className="mt-1 leading-6 text-neutral-600 dark:text-muted">
                          {description}
                        </p>
                      </figcaption>
                    </figure>
                  </li>
                ),
              )}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            keepMounted
            className="flex h-4 items-center px-1 select-none md:hidden"
          >
            <ScrollArea.Thumb className="h-1.5 rounded-full bg-neutral-400/70 hover:bg-neutral-400 active:bg-neutral-400" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </section>
  );
}
