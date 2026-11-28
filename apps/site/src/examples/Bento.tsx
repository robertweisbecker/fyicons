'use client';

import {
  lazy,
  Suspense,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Player, Chat, ControlCenter } from './Media';
import { Sidebar, Editor, Files, Table } from './Workspace';
import { AssetMenu } from './AssetMenu';
import { Feedback, Uploads, Notifications, Tasks } from './Activity';
import { OrderTracking } from './OrderTracking';
import { Weather } from './Weather';
import { Keypad } from './keycaps/Keypad';

const IconSpecs = lazy(() => import('./IconSpecs'));

type Example = {
  title: string;
  /** Full-bleed tiles place the heading themselves. */
  Content: ComponentType<{ heading?: ReactNode }>;
  dot: string;
  field?: string;
  wide?: boolean;
  tall?: boolean;
  inset?: boolean;
  fullBleed?: boolean;
  alignStart?: boolean;
};

const examples: Example[] = [
  {
    title: 'Player',
    Content: Player,
    wide: true,
    field:
      "bg-[#34294f] text-white [--spec-veil:#34294f] [font-variation-settings:'ROND'_0]",
    dot: 'bg-pink-300',
  },
  { title: 'Sidebar', Content: Sidebar, tall: true, dot: 'bg-sky-500' },
  {
    title: 'Context menu',
    Content: AssetMenu,
    tall: true,
    field: 'bg-[#f6cfac] text-[#412a22]',
    dot: 'bg-orange-600',
  },
  {
    title: 'Editor',
    Content: Editor,
    wide: true,
    field: 'bg-[#f3de9f] text-[#483818]',
    inset: true,
    dot: 'bg-amber-600',
  },
  {
    title: 'Chat',
    Content: Chat,
    tall: true,
    field: 'bg-[#d8cdee] text-[#3d2b56]',
    inset: true,
    dot: 'bg-violet-600',
  },
  {
    title: 'Files',
    Content: Files,
    tall: true,
    alignStart: true,
    dot: 'bg-amber-500',
  },
  {
    title: 'Control center',
    Content: ControlCenter,
    wide: true,
    field: 'bg-[#b8d9c4] text-[#163f2c]',
    inset: true,
    dot: 'bg-emerald-700',
  },
  {
    title: 'Commands',
    Content: Keypad,
    wide: true,
    fullBleed: true,
    dot: 'bg-[#f28b51]',
  },
  { title: 'Uploads', Content: Uploads, dot: 'bg-sky-500' },
  {
    title: 'Feedback',
    Content: Feedback,
    field: 'bg-surface text-ink',
    dot: 'bg-rose-600',
  },
  { title: 'Tasks', Content: Tasks, wide: true, dot: 'bg-violet-500' },
  {
    title: 'Notifications',
    Content: Notifications,
    wide: true,
    field: 'bg-[#bcdce5] text-[#244752]',
    inset: true,
    dot: 'bg-cyan-700',
  },
  {
    title: 'Monthly bills',
    Content: Table,
    wide: true,
    dot: 'bg-green-500',
  },
  {
    title: 'Order tracking',
    Content: OrderTracking,
    field: 'bg-[#d6e7c3] text-[#2f4623]',
    dot: 'bg-lime-700',
    inset: true,
  },
  {
    title: 'Weather',
    Content: Weather,
    fullBleed: true,
    dot: 'bg-sky-500',
  },
];

function ExampleTile({
  title,
  Content,
  wide,
  tall,
  field,
  dot,
  inset,
  fullBleed,
  alignStart,
  showSpecs,
  active,
  onInspect,
}: Example & {
  showSpecs: boolean;
  active: SVGSVGElement | null;
  onInspect: (icon: SVGSVGElement | null) => void;
}) {
  const content = useRef<HTMLDivElement>(null);
  const heading = (
    <h2 className="flex shrink-0 items-center gap-2 text-sm font-semibold">
      <span className={cn('size-2 rounded-xs', dot)} aria-hidden />
      {title}
    </h2>
  );
  return (
    <article
      aria-label={title}
      className={cn(
        'relative row-span-2 flex min-h-0 min-w-0 flex-col rounded-2xl shadow-xs ring-1 ring-ink/8',
        field || 'bg-surface text-ink',
        wide && 'sm:col-span-2',
        tall && 'row-span-3',
      )}
    >
      <div
        ref={content}
        inert={showSpecs}
        className={cn(
          'flex min-h-0 flex-1 flex-col',
          !fullBleed && 'gap-4 p-4 sm:p-5',
        )}
      >
        {!fullBleed && heading}
        <div
          data-example-viewport=""
          className={cn(
            fullBleed
              ? 'flex min-h-0 flex-1'
              : 'my-auto min-h-0 min-w-0 overflow-y-auto',
            inset && 'rounded-xl bg-surface p-3.5 text-ink shadow-sm sm:p-4',
            alignStart && 'my-0',
          )}
        >
          <Content heading={fullBleed ? heading : undefined} />
        </div>
      </div>
      {showSpecs && (
        <Suspense fallback={null}>
          <IconSpecs content={content} active={active} onInspect={onInspect} />
        </Suspense>
      )}
    </article>
  );
}

export default function FyiconsBento() {
  const [showSpecs, setShowSpecs] = useState(false);
  const [active, setActive] = useState<SVGSVGElement | null>(null);
  return (
    <section
      aria-label="Examples"
      className="mx-auto max-w-320 px-4 py-5 sm:px-6 sm:py-8 lg:px-8"
    >
      <header className="mb-3 flex justify-end">
        <label className="inline-flex items-center gap-2 text-sm font-medium">
          <Switch
            checked={showSpecs}
            aria-label="Inspect"
            onCheckedChange={(checked) => {
              setActive(null);
              setShowSpecs(checked);
            }}
          />
          Inspect
        </label>
      </header>
      <div className="grid grid-flow-row-dense auto-rows-44 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => (
          <ExampleTile
            key={example.title}
            {...example}
            showSpecs={showSpecs}
            active={active}
            onInspect={setActive}
          />
        ))}
      </div>
    </section>
  );
}
