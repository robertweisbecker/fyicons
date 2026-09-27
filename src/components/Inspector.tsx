import { Field } from '@base-ui/react/field';
import { cn } from '../lib/utils';
import { useRef, useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { ToggleIcon } from '@/components/ToggleIcon';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Icon } from './Icon';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';
import { IconUsage } from './IconUsage';
import { icons, type IconRecord } from '../lib/catalog';
import { useMobile } from '../lib/preferences';

type Props = {
  item: IconRecord | null;
  visible: IconRecord[];
  selectedIds: string[];
  select: (icon: IconRecord) => void;
  navigate: (step: number) => void;
  close: () => void;
  toggleSelection: (id: string) => void;
  notify: (message: string) => void;
  finalFocus: () => HTMLElement | false;
  docked: boolean;
  onDockedChange: (docked: boolean) => void;
};
export function Inspector({
  item,
  visible,
  selectedIds,
  select,
  navigate,
  close,
  toggleSelection,
  notify,
  finalFocus,
  docked,
  onDockedChange,
}: Props) {
  const mobile = useMobile();
  const popup = useRef<HTMLDivElement>(null);
  const portalContainer = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState(true);
  const inLayout = docked && !mobile && !!item;
  const index = visible.findIndex((icon) => icon.id === item?.id);
  const variants = item?.duplicate
    ? icons.filter((icon) => icon.baseName === item.baseName)
    : [];
  return (
    <>
      <div
        ref={portalContainer}
        className={cn(
          inLayout
            ? 'sticky top-14 w-(--inspector-width) shrink-0 self-start'
            : 'contents',
        )}
      />
      <Sheet
        open={!!item}
        onOpenChange={(open) => {
          if (!open) close();
        }}
        modal={mobile}
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
          data-docked={docked && !mobile ? '' : undefined}
          backdrop={false}
          onKeyDown={(event) => {
            if (
              event.defaultPrevented ||
              event.metaKey ||
              event.ctrlKey ||
              event.altKey ||
              (event.target instanceof HTMLElement &&
                event.target.closest('[data-slot="toggle-group"]'))
            )
              return;
            if (
              ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                event.key,
              )
            ) {
              event.preventDefault();
              navigate(
                event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1,
              );
            }
          }}
        >
          {item && (
            <>
              <header className="flex shrink-0 items-start gap-3 border-b border-line p-5">
                <div className="min-w-0 flex-1">
                  <SheetTitle className="text-lg font-semibold break-words">
                    {item.name}
                  </SheetTitle>
                  <SheetDescription className="mt-1 text-sm text-muted">
                    {item.category}
                  </SheetDescription>
                </div>
                {!mobile && (
                  <Toggle
                    size="icon-sm"
                    aria-label="Dock inspector"
                    title={docked ? 'Undock inspector' : 'Dock inspector'}
                    pressed={docked}
                    onPressedChange={onDockedChange}
                  >
                    <ToggleIcon
                      icon="panel-right"
                      activeIcon="panel-right-open"
                    />
                  </Toggle>
                )}
                <SheetClose
                  render={<Button variant="ghost" size="icon-sm" />}
                  aria-label="Close icon details"
                >
                  <Icon name="xmark" />
                </SheetClose>
              </header>
              <div className="min-h-0 flex-1 overflow-y-auto">
                <div
                  className={cn(
                    'inspector-preview group/preview flex h-64 items-center justify-center overflow-hidden bg-canvas',
                    !grid && 'no-grid',
                  )}
                >
                  <span className="preview-canvas relative block size-32 shrink-0 before:pointer-events-none before:absolute before:-inset-128 before:bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] before:bg-size-[8px_8px] before:content-[''] group-[.no-grid]/preview:before:hidden after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-control-accent after:content-[''] group-[.no-grid]/preview:after:hidden [&>svg]:relative [&>svg]:size-full">
                    <Icon name={item.id} />
                  </span>
                </div>
                <div className="flex items-center gap-2 border-y border-line px-5 py-3">
                  <Icon name={item.id} />
                  <span className="text-xs text-muted">16 × 16</span>
                  <Toggle
                    size="sm"
                    className="ml-auto"
                    aria-label="Grid and bounds"
                    title={
                      grid ? 'Hide grid and bounds' : 'Show grid and bounds'
                    }
                    pressed={grid}
                    onPressedChange={setGrid}
                  >
                    <ToggleIcon icon="eye-closed" activeIcon="eye-open" />
                    Grid
                  </Toggle>
                </div>
                <div className="flex flex-col gap-5 p-5">
                  <IconUsage item={item} notify={notify} />
                  <Field.Root className="flex items-center gap-2 text-sm">
                    <Checkbox
                      size="sm"
                      checked={selectedIds.includes(item.id)}
                      onCheckedChange={() => toggleSelection(item.id)}
                    />
                    <Field.Label>Include in selection</Field.Label>
                  </Field.Root>
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
              <footer
                aria-label="Icon pagination"
                className="flex shrink-0 items-center justify-between gap-3 border-t border-line px-5 py-3"
              >
                <span
                  aria-live="polite"
                  className="text-xs text-muted tabular-nums"
                >
                  {index + 1} of {visible.length}
                </span>
                <div className="flex gap-1">
                  <IconButton
                    icon="chevron-left-sm"
                    label="Previous icon"
                    disabled={index <= 0}
                    onClick={() => navigate(-1)}
                  />
                  <IconButton
                    icon="chevron-right-sm"
                    label="Next icon"
                    disabled={index < 0 || index >= visible.length - 1}
                    onClick={() => navigate(1)}
                  />
                </div>
              </footer>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
