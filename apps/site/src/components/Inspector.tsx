import { Field } from '@base-ui/react/field';
import { motion, useReducedMotion } from 'motion/react';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
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
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IconButton } from '@/components/IconButton';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { IconUsage } from './IconUsage';
import { InspectorResizeHandle } from '@/components/InspectorResizeHandle';
import {
  getIconDisplayName,
  categories,
  icons,
  type IconRecord,
} from '@/lib/catalog';
import { useMobile, usePreference } from '@/lib/preferences';
import { useDrawerPresentation } from '@/lib/use-drawer-presentation';
import { IconCopyButton } from './IconCopyButton';
import { InspectorLink } from './InspectorLink';
import './MobileInspector.css';

type Props = {
  item: IconRecord | null;
  visible: IconRecord[];
  selectedIds: string[];
  select: (icon: IconRecord) => void;
  navigate: (step: number) => void;
  close: () => void;
  share: () => string;
  toggleSelection: (id: string) => void;
  finalFocus: () => HTMLElement | false;
  docked: boolean;
  onDockedChange: (docked: boolean) => void;
  onCategoryChange: (category: string) => void;
};
const compactHeight = 112;
const snapPoints = [compactHeight, 1];
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
  className,
}: {
  grid: boolean;
  setGrid: (value: boolean) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'surface pointer-events-none absolute top-3 right-2 opacity-0 transition-opacity duration-150 ease-out group-focus-within/preview-container:pointer-events-auto group-focus-within/preview-container:opacity-100 group-hover/preview-container:pointer-events-auto group-hover/preview-container:opacity-100 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100',
        className,
      )}
      data-base-ui-swipe-ignore
    >
      <Toggle
        size="sm"
        variant="elevated"
        aria-label="Pixel grid"
        title={grid ? 'Hide grid' : 'Show grid'}
        pressed={grid}
        onPressedChange={setGrid}
      >
        <ToggleIcon icon="eye-closed" activeIcon="eye" />
        Grid
      </Toggle>
    </div>
  );
}
function NativeSizePreview({
  item,
  className,
}: {
  item: IconRecord;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Icon name={item.id} />
      <span className="text-xs text-muted tabular-nums">16×16</span>
    </div>
  );
}
function Details({
  item,
  selected,
  select,
  onCategoryChange,
  toggleSelection,
}: {
  item: IconRecord;
  selected: boolean;
  select: Props['select'];
  onCategoryChange: Props['onCategoryChange'];
  toggleSelection?: () => void;
}) {
  const categoriesHeadingId = useId();
  const variants = item.duplicate
    ? icons.filter((icon) => icon.baseName === item.baseName)
    : [];
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex flex-col gap-5">
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
          {toggleSelection && (
            <Field.Root className="flex items-center gap-1 text-xs">
              <Checkbox
                size="sm"
                checked={selected}
                onCheckedChange={toggleSelection}
              />
              <Field.Label>Add to export</Field.Label>
            </Field.Root>
          )}
          {variants.length > 1 && (
            <section>
              <h3 className="mb-2 text-sm font-medium">Variants</h3>
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
      <TooltipGroup>
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
      </TooltipGroup>
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
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  const defaultWidth = viewportWidth < 1024 ? 352 : 384;
  const [preferredWidth, setPreferredWidth] = usePreference(
    'fyicons-inspector-width-v1',
    defaultWidth,
  );
  const [resizing, setResizing] = useState(false);
  const minWidth = 176;
  const maxWidth = Math.max(minWidth, Math.min(640, viewportWidth - 320));
  const width = Math.min(
    maxWidth,
    Math.max(
      minWidth,
      Number.isFinite(preferredWidth) ? preferredWidth : defaultWidth,
    ),
  );
  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
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
  const expanded = snapPoint !== snapPoints[0];
  useDrawerPresentation(mobilePopup, mobile && !!item, expanded, compactHeight);
  const details = item && (
    <Details
      item={item}
      selected={selectedIds.includes(item.id)}
      select={props.select}
      onCategoryChange={(category) => {
        props.onCategoryChange(category);
        if (mobile) {
          close();
          setSnapPoint(snapPoints[0]);
        }
      }}
      toggleSelection={mobile ? undefined : () => toggleSelection(item.id)}
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
        open={!!item}
        modal={expanded}
        disablePointerDismissal
        snapPoints={snapPoints}
        snapPoint={snapPoint}
        snapToSequentialPoints
        onSnapPointChange={(next, details) => {
          if (next === null && expanded) {
            details.cancel();
            setSnapPoint(snapPoints[0]);
          } else {
            setSnapPoint(next);
          }
        }}
        onOpenChange={(open) => {
          if (!open) {
            close();
            setSnapPoint(snapPoints[0]);
          }
        }}
      >
        <DrawerContent
          id="inspector"
          ref={mobilePopupRef}
          expanded={expanded}
          data-expanded={expanded || undefined}
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
            <div className="mobile-inspector-frame pointer-events-auto flex flex-col overflow-hidden rounded-2xl bg-dialog shadow-xl outline-1 outline-offset-(--surface-outline-offset) outline-ink/10">
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
                      icon="xmark"
                      label="Close icon details"
                      className="absolute top-1 left-2"
                      data-base-ui-swipe-ignore
                    />
                  }
                />
                <div
                  className="absolute top-1 right-2"
                  data-base-ui-swipe-ignore
                >
                  <IconCopyButton key={item.id} item={item} size="icon" />
                </div>
              </div>
              <header className="mobile-inspector-hero group/preview-container">
                <div className="mobile-inspector-art rounded-xl bg-canvas outline outline-line">
                  <Button
                    variant="unstyled"
                    size="unstyled"
                    aria-label={
                      expanded ? 'Collapse preview' : 'Expand preview'
                    }
                    aria-expanded={expanded}
                    onClick={() => setSnapPoint(expanded ? snapPoints[0] : 1)}
                    className="size-full overflow-hidden rounded-[inherit]"
                  >
                    <IconPreview item={item} grid={grid} />
                  </Button>
                </div>
                <div className="mobile-inspector-metadata flex items-center">
                  <DrawerTitle
                    className="w-full text-sm font-semibold"
                    aria-label={getIconDisplayName(item)}
                    title={getIconDisplayName(item)}
                  >
                    <Button
                      variant="unstyled"
                      size="unstyled"
                      className="group/link max-w-full min-w-0 justify-start rounded-sm font-semibold"
                      aria-label={`Open details for ${getIconDisplayName(item)}`}
                      aria-expanded={expanded}
                      onClick={() => {
                        props.share();
                        setSnapPoint(1);
                      }}
                      data-base-ui-swipe-ignore
                    >
                      <span className="truncate underline-offset-4 group-hover/link:underline">
                        {getIconDisplayName(item)}
                      </span>
                      <Icon name="link" className="shrink-0 text-muted" />
                    </Button>
                  </DrawerTitle>
                </div>
                <div className="absolute top-5 right-3">
                  <PaginationButtons {...props} />
                </div>
                {expanded && (
                  <PreviewGridControl
                    grid={grid}
                    setGrid={setGrid}
                    className="top-16"
                  />
                )}
              </header>
              <DrawerScroll
                inert={!expanded}
                className={cn(
                  'inspector-scroll min-h-0 flex-1',
                  expanded ? 'overflow-y-auto' : 'overflow-hidden',
                )}
              >
                {details}
              </DrawerScroll>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  return (
    <>
      <motion.div
        ref={portalContainer}
        initial={false}
        style={
          {
            width: inLayout ? width : 0,
            '--inspector-width': `${width}px`,
          } as CSSProperties
        }
        transition={{
          duration: reducedMotion ? 0 : 0.24,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="sticky top-(--site-header-height) shrink-0 self-start"
      />
      <Sheet
        open={!!item}
        swipeDirection="right"
        onOpenChange={(open) => {
          if (!open) close();
        }}
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
              />
              <header className="flex shrink-0 cursor-grab items-start gap-3 border-b border-line p-2 active:cursor-grabbing">
                <div className="min-w-0 flex-1">
                  <SheetTitle
                    className="truncate text-base font-semibold"
                    aria-label={getIconDisplayName(item)}
                    title={getIconDisplayName(item)}
                  >
                    <InspectorLink
                      key={item.id}
                      name={getIconDisplayName(item)}
                      share={props.share}
                    />
                  </SheetTitle>
                  <NativeSizePreview item={item} className="mt-1" />
                </div>
                <div className="flex shrink-0 gap-0.5">
                  <TooltipGroup side="bottom">
                    <Tooltip
                      label={docked ? 'Undock inspector' : 'Dock inspector'}
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
                        <IconButton icon="xmark" label="Close icon details" />
                      }
                    />
                  </TooltipGroup>
                </div>
              </header>
              <DrawerScroll className="inspector-scroll min-h-0 flex-1 overflow-y-auto">
                <div className="group/preview-container relative flex items-center justify-center bg-canvas p-4">
                  <div className="size-36">
                    <IconPreview item={item} grid={grid} />
                  </div>
                  <PreviewGridControl grid={grid} setGrid={setGrid} />
                </div>
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
