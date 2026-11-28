import {
  IconBag,
  IconBoxTaped,
  IconTruckMoving,
  IconMapPin,
  IconRouteSimple,
} from 'fyicons';

const updates = [
  ['Order confirmed', 'Nov 14', IconBag],
  ['Packed in Oakland', 'Nov 15', IconBoxTaped],
  ['In transit', 'Nov 16', IconRouteSimple],
] as const;

export function OrderTracking() {
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime-200 text-lime-950">
          <IconBag size={24} />
        </span>
        <div>
          <p className="text-xs text-muted">Order #1048</p>
          <p className="text-sm font-semibold">Studio tote</p>
        </div>
        <span className="ml-auto text-sm tabular-nums">$24.00</span>
      </div>
      <div className="my-4">
        <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
          <IconTruckMoving />
          Out for delivery
        </div>
        <p className="text-xl font-semibold tracking-tight">Arriving today</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
          <IconMapPin />
          San Francisco · 2–5 PM
        </p>
      </div>
      <h3 className="border-t border-line pt-3 text-xs font-semibold">
        Tracking history
      </h3>
      <ol aria-label="Tracking history" className="mt-2 space-y-2">
        {updates.map(([name, when, Glyph]) => (
          <li key={name} className="flex items-center gap-2 text-xs">
            <Glyph className="shrink-0 text-muted" />
            <span>{name}</span>
            <span className="ml-auto text-right text-muted">{when}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
