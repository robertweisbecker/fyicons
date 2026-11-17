import { IconExampleCard } from './IconExampleCard';
import { guides, guideStrokeWidth } from './construction-guides';

export function VariantPlaceholder() {
  return (
    <div
      aria-busy="true"
      className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-6 sm:gap-x-4"
    >
      {['Outline', 'Filled', 'Mixed'].map((label) => (
        <IconExampleCard key={label} label={label} className="sm:col-span-2">
          <div className="aspect-square min-h-26 flex-1 rounded-xl bg-surface sm:rounded-2xl" />
        </IconExampleCard>
      ))}
      <IconExampleCard label="Progress" className="sm:col-span-3">
        <div className="min-h-61 flex-1 rounded-xl bg-surface sm:rounded-2xl" />
      </IconExampleCard>
      <IconExampleCard label="Toggles" className="col-span-2 sm:col-span-3">
        <div className="h-114 flex-1 rounded-xl bg-surface sm:rounded-2xl lg:h-92" />
      </IconExampleCard>
    </div>
  );
}
export function ConstructionPlaceholder() {
  return (
    <div
      aria-busy="true"
      className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4"
    >
      {Object.values(guides).map(({ label, width, height }) => (
        <figure key={label} className="min-w-0 space-y-3">
          <div className="aspect-square rounded-2xl bg-surface" />
          <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
            <span>{label}</span>
            <span className="font-mono text-xs text-muted">
              {width + guideStrokeWidth} × {height + guideStrokeWidth}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
export function OpticalPlaceholder() {
  return (
    <div aria-busy="true" className="@container/study text-ink">
      <div className="mb-5">
        <p
          id="optical-adjustments-heading"
          className="text-lg font-medium text-balance text-muted"
        >
          With a range of optical adjustments.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3.5 @min-[600px]/study:grid-cols-2 @min-[900px]/study:grid-cols-3">
        {[
          [
            'Optical centering',
            "Alignment baked into icons, so you don't have to think about it.",
            'h-65 @min-[600px]/study:h-95 @min-[900px]/study:col-span-2',
          ],
          [
            'Ovals & overshoots',
            'Dots and terminals with added weight for legibility at small sizes.',
            'h-95',
          ],
          [
            'Balanced shapes',
            'Round and pointed shapes extend past square bounds.',
            'h-83',
          ],
          [
            'Curves and ink traps',
            'Weight varies in typographic bowls, with thinning at intersections.',
            'h-95 @min-[900px]/study:col-span-2 @min-[900px]/study:h-83',
          ],
        ].map(([title, description, size]) => (
          <figure
            key={title}
            className={`flex items-end rounded-2xl bg-surface p-6 ${size}`}
          >
            <figcaption>
              <strong className="text-lg leading-tight font-semibold">
                {title}
              </strong>
              <p className="mt-2 text-pretty">{description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
export function GroupPlaceholder() {
  return (
    <>
      <div
        aria-busy="true"
        className="h-[449.5px] rounded-3xl bg-surface/50 sm:h-[489.5px]"
      />
      <div aria-hidden="true" className="mt-4 h-9 pointer-coarse:h-11" />
    </>
  );
}
