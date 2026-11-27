'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createAgent, registerTools } from '@ui-sdk/react/agent';
import { Button } from '@ui-sdk/react/button';
import {
  createDrawerController,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
  type SnapPoint,
} from '@ui-sdk/react/drawer';
import { Toggle } from '@ui-sdk/react/toggle';
import { IconCheck, IconGrid, IconX } from 'fyicons';
import { IconCopyButton } from '@/components/IconCopyButton';
import { IconDownloadButton } from '@/components/InspectorActions';
import { buttonVariants } from '@/components/ui/button';
import { byId } from '@/lib/catalog';
import { getIconReleases } from '@/lib/icon-releases';
import { cn } from '@/lib/utils';
import { bindInspectorWheel } from './inspector-wheel';
import { samples, type Sample } from './samples';
import styles from './inspector.module.css';

const peek = '6rem';
const medium = 0.5;
const stops: SnapPoint[] = [peek, medium, 1];
const detentHeights = {
  '--peek-height': peek,
  '--medium-height': `${medium * 100}dvh`,
} as CSSProperties;
const iconButton = cn(
  buttonVariants({ size: 'icon', variant: 'neutral' }),
  'rounded-full',
);

function DrawingDetails({ item }: { item: Sample }) {
  const Glyph = item.glyph;
  const releases = getIconReleases(item.id);
  const exportName =
    'Icon' +
    item.name
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
      .replaceAll(' ', '');

  return (
    <div className="grid gap-6 pt-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <section>
        <h3 className="mb-2 font-semibold">Preview sizes</h3>
        <div className="grid grid-cols-4 divide-x divide-line rounded-2xl bg-ink/[0.035] py-3">
          {[16, 24, 32, 48].map((size) => (
            <figure
              key={size}
              className="grid grid-rows-[3.5rem_auto] place-items-center gap-1"
            >
              <Glyph size={size} aria-hidden />
              <figcaption className="text-xs text-(--text-secondary)">
                {size} px
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-2 font-semibold">Drawing details</h3>
        <dl className="divide-y divide-line rounded-2xl bg-ink/[0.035] px-4 text-sm [&_dt]:text-(--text-secondary) [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:py-3">
          <div>
            <dt>Last updated</dt>
            <dd>{releases?.updated ?? '—'}</dd>
          </div>
          <div>
            <dt>Added</dt>
            <dd>{releases?.added ?? '—'}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{item.category}</dd>
          </div>
        </dl>
      </section>
      <section>
        <h3 className="mb-2 font-semibold">React</h3>
        <pre className="overflow-x-auto rounded-2xl bg-ink/[0.035] p-4 text-[0.8125rem] leading-relaxed">
          <code>{`import { ${exportName} } from 'fyicons';\n\n<${exportName} size={16} />`}</code>
        </pre>
      </section>
    </div>
  );
}

function Sheet({
  item,
  frame,
  snapPoint,
  expanded,
}: {
  item: Sample;
  frame: React.RefObject<HTMLDivElement | null>;
  snapPoint: SnapPoint | null;
  expanded: boolean;
}) {
  const scroll = useRef<HTMLDivElement>(null);
  const compact = snapPoint === peek;
  const Glyph = item.glyph;
  const record = byId.get(item.id);

  useEffect(() => {
    if (!expanded && scroll.current) scroll.current.scrollTop = 0;
  }, [expanded]);

  return (
    <div className={styles.frame} ref={frame} data-color={item.color}>
      <DrawerHandle
        className="mx-auto grid h-[1.375rem] w-36 shrink-0 cursor-grab touch-none place-items-center rounded-full active:cursor-grabbing"
        aria-label="Resize inspector"
      >
        <span aria-hidden className="h-1.25 w-9 rounded-full bg-ink/30" />
      </DrawerHandle>
      <div className={styles.bar}>
        <div className={styles.title}>
          <DrawerTitle className="truncate text-xl leading-tight font-semibold tracking-[-0.035em]">
            {item.name}
          </DrawerTitle>
          <DrawerDescription className="truncate text-xs leading-5 text-(--text-secondary)">
            {item.category} · 16 × 16 px
          </DrawerDescription>
        </div>
        <DrawerClose
          className={`${iconButton} pointer-events-auto absolute end-0 top-2`}
          aria-label="Close inspector"
        >
          <IconX />
        </DrawerClose>
      </div>
      <div
        data-inspector-scroll=""
        ref={scroll}
        className={`${styles.scroll} min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain`}
      >
        <div className={styles.preview}>
          <span aria-hidden className={styles.grid} />
          <Glyph size={144} aria-hidden className={styles.art} />
          <Toggle
            defaultPressed
            disabled={compact}
            aria-hidden={compact || undefined}
            aria-label="Pixel grid"
            className={`${iconButton} ${styles.gridButton}`}
          >
            <IconGrid />
          </Toggle>
        </div>
        <div inert={compact}>
          <DrawingDetails item={item} />
        </div>
      </div>
      {record && (
        <div className={styles.actions}>
          <div className={styles.actionRow}>
            <IconCopyButton
              item={record}
              size="default"
              showLabel
              className={cn(buttonVariants(), 'w-full rounded-full px-2')}
            />
            <div inert={compact} className={styles.download}>
              <IconDownloadButton
                item={record}
                className="h-9 w-full gap-1.5 px-2 text-sm [&>svg]:size-4"
              >
                Download
              </IconDownloadButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function InspectorStudy() {
  const [controller] = useState(() => createDrawerController<Sample>());
  const frame = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(
    () =>
      open
        ? bindInspectorWheel(
            () => frame.current,
            controller,
            stops,
            () => backdrop.current,
          )
        : undefined,
    [controller, open],
  );
  const activeTrigger = useRef<HTMLButtonElement>(null);
  useEffect(
    () => registerTools(createAgent(), { allow: (step) => !step.confirm }),
    [],
  );

  return (
    <Drawer
      controller={controller}
      snapPoints={stops}
      modalAbove={peek}
      expandOnScroll
      onOpenChange={setOpen}
    >
      <section className={styles.study}>
        <header>
          <p className="text-[0.8125rem] text-(--text-secondary)">
            Icon collection
          </p>
          <h1 className="mt-1 mb-2 text-[clamp(2.75rem,6vw,5rem)] leading-[1.1] font-[580] tracking-[-0.055em]">
            Field guide
          </h1>
          <p className="text-[0.95rem] text-(--text-secondary)">
            Choose a drawing to inspect it.
          </p>
        </header>
        <div className="mt-8 grid grid-cols-3 gap-x-2.5 gap-y-5 min-[42rem]:grid-cols-4 min-[42rem]:gap-x-4 min-[42rem]:gap-y-7">
          {samples.map((item) => (
            <DrawerTrigger
              key={item.name}
              payload={item}
              onClick={(event) => {
                activeTrigger.current = event.currentTarget;
              }}
              render={<Button />}
              aria-label={`Inspect ${item.name}`}
              data-color={item.color}
              className="group grid touch-manipulation gap-2 rounded-xl text-start text-[0.9375rem] font-[550]"
            >
              <span className="relative grid aspect-[1.12] w-full place-items-center rounded-[0.875rem] bg-(--paper) text-(--print) group-data-open:inset-ring-2 group-data-open:inset-ring-current min-[42rem]:aspect-[1.65]">
                <item.glyph
                  size={40}
                  className="max-[42rem]:size-8"
                  aria-hidden
                />
                <span className="absolute end-2.5 top-2.5 hidden rounded-full bg-(--print) p-0.5 text-(--paper) group-data-open:block">
                  <IconCheck size={12} aria-hidden />
                </span>
              </span>
              <span>{item.name}</span>
            </DrawerTrigger>
          ))}
        </div>
      </section>
      <DrawerBackdrop
        ref={backdrop}
        className="fixed inset-0 bg-black/40 data-wheel-dim:opacity-(--wheel-dim)!"
      />
      <DrawerContent<Sample>
        className={styles.sheet}
        style={detentHeights}
        initialFocus="content"
        finalFocus={() => activeTrigger.current}
        onKeyDown={(event) => {
          if (
            event.currentTarget.getAttribute('aria-modal') === 'true' &&
            (event.key === '/' ||
              ((event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === 'k'))
          ) {
            event.stopPropagation();
          }
        }}
      >
        {({ payload, snapPoint, expanded }) =>
          payload && (
            <Sheet
              key={payload.name}
              item={payload}
              frame={frame}
              snapPoint={snapPoint}
              expanded={expanded}
            />
          )
        }
      </DrawerContent>
    </Drawer>
  );
}
