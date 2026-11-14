import { motion, useReducedMotion } from 'motion/react';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { ToggleIcon } from '@/components/ToggleIcon';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerScroll,
} from '@/components/ui/drawer';
import { Icon } from './Icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IconButton } from '@/components/IconButton';
import { Tooltip } from '@/components/ui/tooltip';
import { IconUsage } from './IconUsage';
import { IconReleaseInfo } from './IconReleaseInfo';
import { InspectorResizeHandle } from '@/components/InspectorResizeHandle';
import {
  getIconDisplayName,
  categories,
  icons,
  type IconRecord,
} from '@/lib/catalog';
import { readPreference, useMobile, usePreference } from '@/lib/preferences';
import { useDrawerPresentation } from '@/lib/use-drawer-presentation';
import type { IconShareLink } from '@/lib/icon-inspection';
import { IconCopyButton } from './IconCopyButton';
import { IconDownloadButton, InspectorActions } from './InspectorActions';
import { InspectorLink } from './InspectorLink';
import './MobileInspector.css';

type Props = {
  item: IconRecord | null;
  visible: IconRecord[];
  selectedIds: string[];
  select: (icon: IconRecord) => void;
  navigate: (step: number) => void;
  close: () => void;
  share: (id: string) => IconShareLink;
  toggleSelection: (id: string) => void;
  finalFocus: () => HTMLElement | false;
  docked: boolean;
  onDockedChange: (docked: boolean) => void;
  onCategoryChange: (category: string) => void;
};
const compactHeight = 112;
const previewHeight = 356;
const snapPoints = [compactHeight, previewHeight, 1];
const inspectorWidthKey = 'fyicons-inspector-width-v2';
const isInspectorWidth = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);
function IconPreview({ item, grid }: { item: IconRecord; grid: boolean }) {
  return (
    <span
      className={cn(
        'group/preview preview-canvas relative block size-full',
        !grid && 'no-grid',
      )}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute -inset-128 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-size-[8px_8px] group-[.no-grid]/preview:hidden" />
      </span>
      <span className="absolute inset-2 after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-control-accent group-[.no-grid]/preview:after:hidden [&>svg]:relative [&>svg]:size-full">
        <Icon name={item.id} />
      </span>
    </span>
  );
}
function PreviewGridControl({
  grid,
  setGrid,
}: {
  grid: boolean;
  setGrid: (value: boolean) => void;
}) {
  return (
    <Toggle
      size="sm"
      variant="elevated"
      aria-label="Pixel grid"
      title={grid ? 'Hide grid' : 'Show grid'}
      pressed={grid}
      onPressedChange={setGrid}
      className="surface pointer-events-none shrink-0 opacity-0 transition-opacity duration-150 ease-out group-focus-within/preview-container:pointer-events-auto group-focus-within/preview-container:opacity-100 group-hover/preview-container:pointer-events-auto group-hover/preview-container:opacity-100 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"
      data-base-ui-swipe-ignore
    >
      <ToggleIcon icon="eye-closed" activeIcon="eye" />
      Grid
    </Toggle>
  );
}
function NativeSizePreview({ item }: { item: IconRecord }) {
  return (
    <div className="flex items-center gap-2">
      <Icon name={item.id} />
      <span className="font-mono text-xs text-muted tabular-nums">16×16</span>
    </div>
  );
}
function Preview({
  item,
  grid,
  setGrid,
  children,
  className,
  controlsHidden = false,
}: {
  item: IconRecord;
  grid: boolean;
  setGrid: (value: boolean) => void;
  children: ReactNode;
  className?: string;
  controlsHidden?: boolean;
}) {
  return (
    <div
      data-slot="inspector-preview"
      className={cn(
        'group/preview-container relative min-w-0 bg-canvas p-4',
        className,
      )}
    >
      <div
        data-slot="inspector-preview-controls"
        className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-2"
        inert={controlsHidden}
        aria-hidden={controlsHidden || undefined}
      >
        <NativeSizePreview item={item} />
        <PreviewGridControl grid={grid} setGrid={setGrid} />
      </div>
      <div data-slot="inspector-preview-art" className="flex justify-center">
        {children}
      </div>
    </div>
  );
}
function Details({
  item,
  actions,
  select,
  onCategoryChange,
}: {
  item: IconRecord;
  actions?: ReactNode;
  select: Props['select'];
  onCategoryChange: Props['onCategoryChange'];
}) {
  const categoriesHeadingId = useId();
  const variants = item.duplicate
    ? icons.filter((icon) => icon.baseName === item.baseName)
    : [];
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex flex-col gap-5">
          {actions}
          <IconUsage item={item} />
          <section
            aria-labelledby={categoriesHeadingId}
            className="flex min-w-0 flex-col gap-2"
          >
            <h3 id={categoriesHeadingId} className="text-xs font-medium">
              Categories
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {item.categories.map((id) => {
                const name =
                  categories.find((category) => category.id === id)?.name ?? id;
                return (
                  <Badge
                    key={id}
                    render={<Button variant="unstyled" size="unstyled" />}
                    className="max-w-full hover:bg-current/10 active:bg-current/15"
                    aria-label={`View ${name} category`}
                    onClick={() => onCategoryChange(id)}
                  >
                    {name}
                  </Badge>
                );
              })}
            </div>
          </section>
          {variants.length > 1 && (
            <section>
              <h3 className="mb-2 text-xs font-medium">Variants</h3>
              <ToggleGroup
                aria-label="Icon variants"
                className="flex-wrap"
                value={[item.id]}
                onValueChange={(values) => {
                  const variant = variants.find(
                    (icon) => icon.id === values[0],
                  );
                  if (variant) select(variant);
                }}
              >
                {variants.map((icon, index) => (
                  <Toggle
                    key={icon.id}
                    value={icon.id}
                    variant="outline"
                    aria-label={'Compare variant ' + icon.id}
                  >
                    <Icon name={icon.id} />
                    {index + 1}
                  </Toggle>
                ))}
              </ToggleGroup>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
function PaginationButtons({
  item,
  visible,
  navigate,
}: Pick<Props, 'item' | 'visible' | 'navigate'>) {
  const index = visible.findIndex((icon) => icon.id === item?.id);
  return (
    <div
      role="group"
      aria-label="Icon pagination"
      className="flex gap-1"
      data-base-ui-swipe-ignore
    >
      <IconButton
        icon="chevron-left"
        label="Previous icon"
        disabled={index <= 0}
        onClick={() => navigate(-1)}
      />
      <IconButton
        icon="chevron-right"
        label="Next icon"
        disabled={index < 0 || index >= visible.length - 1}
        onClick={() => navigate(1)}
      />
    </div>
  );
}
function Pagination(props: Pick<Props, 'item' | 'visible' | 'navigate'>) {
  const index = props.visible.findIndex((icon) => icon.id === props.item?.id);
  return (
    <footer className="flex shrink-0 items-center justify-between gap-3 py-2 ps-2 pe-5">
      <PaginationButtons {...props} />
      <span aria-live="polite" className="text-xs text-muted tabular-nums">
        {index < 0
          ? 'Outside current filters'
          : `${index + 1} of ${props.visible.length}`}
      </span>
    </footer>
  );
}
export function Inspector(props: Props) {
  // Selection can clear immediately; keep the visible icon until exit ends.
  const [presentation, setPresentation] = useState({
    selectedItem: props.item,
    renderedItem: props.item,
  });
  if (props.item !== presentation.selectedItem) {
    setPresentation({
      selectedItem: props.item,
      renderedItem: props.item ?? presentation.renderedItem,
    });
  }
  return (
    <InspectorView
      {...props}
      item={presentation.renderedItem}
      open={!!props.item}
      onCloseComplete={() => {
        setPresentation((current) =>
          current.selectedItem ? current : { ...current, renderedItem: null },
        );
      }}
    />
  );
}

function InspectorView(
  props: Props & { open: boolean; onCloseComplete: () => void },
) {
  const {
    item,
    docked,
    onDockedChange,
    close,
    finalFocus,
    selectedIds,
    toggleSelection,
    navigate,
  } = props;
  const mobile = useMobile();
  const [viewportWidth, setViewportWidth] = useState(1440);
  // Balance the shared 16rem sidebar column plus its 1.5rem gap on desktop.
  const defaultWidth = 280;
  const [preferredWidth, setPreferredWidth] = usePreference<number | null>(
    inspectorWidthKey,
    null,
    isInspectorWidth,
  );
  useEffect(() => {
    if (
      readPreference<number | null>(
        inspectorWidthKey,
        null,
        isInspectorWidth,
      ) !== null
    )
      return;
    const legacyWidth = readPreference<number | null>(
      'fyicons-inspector-width-v1',
      null,
      isInspectorWidth,
    );
    // Old defaults were saved automatically; retain only custom legacy widths.
    if (legacyWidth !== null && legacyWidth !== 352 && legacyWidth !== 384)
      setPreferredWidth(legacyWidth);
  }, [setPreferredWidth]);
  const [resizing, setResizing] = useState(false);
  const minWidth = 176;
  const maxWidth = Math.max(minWidth, Math.min(640, viewportWidth - 320));
  const width = Math.min(
    maxWidth,
    Math.max(minWidth, preferredWidth ?? defaultWidth),
  );
  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const popup = useRef<HTMLDivElement>(null);
  const portalContainer = useRef<HTMLDivElement>(null);
  const [mobilePopup, setMobilePopup] = useState<HTMLDivElement | null>(null);
  const mobilePopupRef = useCallback((element: HTMLDivElement | null) => {
    popup.current = element;
    setMobilePopup(element);
  }, []);
  const [grid, setGrid] = useState(true);
  const [snapPoint, setSnapPoint] = useState<string | number | null>(
    snapPoints[0],
  );
  const reducedMotion = useReducedMotion();
  const inLayout = docked && !mobile && !!item;
  const expanded = snapPoint !== null && snapPoint !== snapPoints[0];
  useDrawerPresentation(
    mobilePopup,
    mobile && props.open,
    expanded,
    compactHeight,
    previewHeight,
  );
  function completeOpenChange(open: boolean) {
    if (!open) {
      setSnapPoint(snapPoints[0]);
      props.onCloseComplete();
    }
  }
  const details = item && (
    <Details
      item={item}
      actions={
        !mobile && (
          <InspectorActions
            item={item}
            selected={selectedIds.includes(item.id)}
            toggleSelection={() => toggleSelection(item.id)}
          />
        )
      }
      select={props.select}
      onCategoryChange={(category) => {
        props.onCategoryChange(category);
        if (mobile) {
          close();
        }
      }}
    />
  );
  function keyboard(event: React.KeyboardEvent) {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      (event.target instanceof HTMLElement &&
        event.target.closest(
          'input,textarea,[role=slider],[role=separator],[data-slot="toggle-group"]',
        ))
    )
      return;
    if (
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    ) {
      event.preventDefault();
      navigate(event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1);
    }
  }
  if (mobile)
    return (
      <Drawer
        open={props.open}
        modal={expanded}
        disablePointerDismissal
        snapPoints={snapPoints}
        snapPoint={snapPoint}
        snapToSequentialPoints
        onSnapPointChange={setSnapPoint}
        onOpenChange={(open) => {
          if (!open) {
            close();
          }
        }}
        onOpenChangeComplete={completeOpenChange}
      >
        <DrawerContent
          id="inspector"
          ref={mobilePopupRef}
          expanded={expanded}
          style={
            {
              '--inspector-compact-height': `${compactHeight}px`,
            } as CSSProperties
          }
          initialFocus={false}
          finalFocus={finalFocus}
          onKeyDown={keyboard}
        >
          {item && (
            <div className="mobile-inspector-frame pointer-events-auto flex flex-col overflow-hidden rounded-2xl bg-dialog shadow-[0_-8px_32px_-16px_rgb(0_0_0/0.12)] outline-1 outline-offset-(--surface-outline-offset) outline-ink/10">
              <div className="relative z-10 h-9 shrink-0">
                <div
                  aria-hidden="true"
                  className="flex h-full touch-none items-center justify-center"
                >
                  <span className="h-1 w-14 rounded-full bg-border" />
                </div>
                <DrawerClose
                  render={
                    <IconButton
                      icon="x"
                      label="Close icon details"
                      className="absolute top-1 left-2"
                      data-base-ui-swipe-ignore
                    />
                  }
                />
                <div className="absolute top-1 right-2">
                  <PaginationButtons {...props} />
                </div>
              </div>
              <header className="mobile-inspector-heading relative z-10 shrink-0 bg-dialog">
                <div className="mobile-inspector-metadata flex min-w-0 flex-col items-start justify-center gap-1">
                  <DrawerTitle
                    className="w-full text-sm font-semibold"
                    aria-label={getIconDisplayName(item)}
                    title={getIconDisplayName(item)}
                  >
                    <InspectorLink
                      key={item.id}
                      name={getIconDisplayName(item)}
                      share={() => props.share(item.id)}
                    />
                  </DrawerTitle>
                  <div className="mobile-inspector-releases" inert={!expanded}>
                    <IconReleaseInfo id={item.id} />
                  </div>
                </div>
              </header>
              <DrawerScroll
                className={cn(
                  'inspector-scroll min-h-0 flex-1',
                  expanded ? 'overflow-y-auto' : 'overflow-clip',
                )}
              >
                <div className="mobile-inspector-hero">
                  <Preview
                    item={item}
                    grid={grid}
                    setGrid={setGrid}
                    className="mobile-inspector-preview bg-transparent"
                    controlsHidden={!expanded}
                  >
                    <div className="mobile-inspector-art rounded-xl bg-canvas outline outline-line">
                      <Button
                        variant="unstyled"
                        size="unstyled"
                        aria-label={
                          expanded ? 'Collapse preview' : 'Expand preview'
                        }
                        aria-expanded={expanded}
                        onClick={() =>
                          setSnapPoint(expanded ? snapPoints[0] : previewHeight)
                        }
                        className="size-full overflow-hidden rounded-[inherit]"
                      >
                        <IconPreview item={item} grid={grid} />
                      </Button>
                    </div>
                  </Preview>
                  <div
                    className="mobile-inspector-actions pointer-events-none relative flex items-center justify-end"
                    data-base-ui-swipe-ignore
                  >
                    <IconCopyButton
                      key={item.id}
                      item={item}
                      size="lg"
                      showLabel
                      className="mobile-inspector-copy @container/action pointer-events-auto px-0"
                    >
                      <span className="hidden whitespace-nowrap @min-[4rem]/action:inline">
                        SVG
                      </span>
                    </IconCopyButton>
                    <div
                      className="mobile-inspector-download pointer-events-auto"
                      inert={!expanded}
                    >
                      <IconDownloadButton
                        item={item}
                        className="mobile-inspector-download-button w-full overflow-hidden"
                      >
                        <span className="mobile-inspector-download-label whitespace-nowrap">
                          Download
                        </span>
                      </IconDownloadButton>
                    </div>
                  </div>
                </div>
                <div inert={!expanded}>{details}</div>
              </DrawerScroll>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  return (
    <>
      {/* Balance the category rail; only a wider docked panel needs extra space. */}
      <div
        aria-hidden
        data-slot="inspector-gap"
        className="hidden [--inspector-resting-gap:0px] md:block lg:[--inspector-resting-gap:calc(var(--sidebar-width)+1.5rem)]"
        style={
          {
            '--inspector-width': `${width}px`,
            width:
              docked && props.open
                ? 'max(var(--inspector-resting-gap), calc(var(--inspector-width) - max(0px, (100vw - var(--icon-browser-max-width)) / 2)))'
                : 'var(--inspector-resting-gap)',
          } as CSSProperties
        }
      />
      <div
        ref={portalContainer}
        style={
          {
            '--inspector-width': `${width}px`,
          } as CSSProperties
        }
        className="fixed top-(--site-header-height) right-0 z-30 w-(--inspector-width)"
      />
      <Sheet
        open={props.open}
        swipeDirection="right"
        onOpenChange={(open) => {
          if (!open) close();
        }}
        onOpenChangeComplete={completeOpenChange}
        modal={false}
        disablePointerDismissal
      >
        <SheetContent
          id="inspector"
          ref={popup}
          initialFocus={popup}
          finalFocus={finalFocus}
          variant="inspector"
          presentation={inLayout ? 'docked' : 'overlay'}
          container={portalContainer}
          backdrop={false}
          onKeyDown={keyboard}
          render={
            <motion.div
              layout={!resizing}
              layoutDependency={inLayout}
              layoutRoot
              transition={{
                layout: {
                  duration: reducedMotion ? 0 : 0.24,
                  ease: [0.32, 0.72, 0, 1],
                },
              }}
            />
          }
        >
          {item && (
            <>
              <InspectorResizeHandle
                value={width}
                min={minWidth}
                max={maxWidth}
                defaultValue={defaultWidth}
                controls="inspector"
                label="Resize inspector"
                onValueChange={setPreferredWidth}
                onResizingChange={setResizing}
                resizing={resizing}
              />
              <header className="grid shrink-0 cursor-grab grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1 border-b border-line p-2 active:cursor-grabbing">
                <div className="min-w-0">
                  <SheetTitle
                    className="truncate text-base font-semibold"
                    aria-label={getIconDisplayName(item)}
                    title={getIconDisplayName(item)}
                  >
                    <InspectorLink
                      key={item.id}
                      name={getIconDisplayName(item)}
                      share={() => props.share(item.id)}
                    />
                  </SheetTitle>
                </div>
                <div className="flex shrink-0 gap-0.5">
                  <Tooltip
                    label={docked ? 'Undock inspector' : 'Dock inspector'}
                    side="bottom"
                  >
                    <Toggle
                      size="icon"
                      aria-label="Dock inspector"
                      pressed={docked}
                      onPressedChange={onDockedChange}
                    >
                      <ToggleIcon
                        icon="layout-pin"
                        activeIcon="layout-pinned"
                      />
                    </Toggle>
                  </Tooltip>
                  <SheetClose
                    render={
                      <IconButton
                        icon="x"
                        label="Close icon details"
                        tooltipSide="bottom"
                      />
                    }
                  />
                </div>
                <IconReleaseInfo id={item.id} className="col-span-2" />
              </header>
              <DrawerScroll className="inspector-scroll min-h-0 flex-1 overflow-y-auto">
                <Preview
                  item={item}
                  grid={grid}
                  setGrid={setGrid}
                  className="pt-12"
                >
                  <div className="size-36">
                    <IconPreview item={item} grid={grid} />
                  </div>
                </Preview>
                {details}
              </DrawerScroll>
              <Pagination {...props} />
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
