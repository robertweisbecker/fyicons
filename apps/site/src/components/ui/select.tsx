'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { cva, type VariantProps } from 'class-variance-authority';
import { createContext, useContext, type ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type SelectSize = 'default' | 'sm';
const SelectSizeContext = createContext<SelectSize>('default');
const selectTypography = {
  default: 'text-sm [&_svg]:size-4',
  sm: 'text-xs [&_svg]:size-4',
} satisfies Record<SelectSize, string>;

export function Select<Value, Multiple extends boolean | undefined = false>({
  size = 'default',
  ...props
}: SelectPrimitive.Root.Props<Value, Multiple> & { size?: SelectSize }) {
  return (
    <SelectSizeContext value={size}>
      <SelectPrimitive.Root {...props} />
    </SelectSizeContext>
  );
}
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;

const selectTriggerVariants = cva(
  'flex min-w-0 items-center justify-between gap-2 rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-disabled:pointer-events-none data-disabled:opacity-40 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'border border-line bg-surface hover:bg-hover',
        text: 'bg-transparent text-muted hover:text-ink data-popup-open:text-ink',
      },
      size: {
        default: 'min-h-10 gap-4 px-3',
        sm: 'min-h-8 px-0.5',
        unstyled: '',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

type SelectTriggerProps = Omit<SelectPrimitive.Trigger.Props, 'className'> &
  VariantProps<typeof selectTriggerVariants> & { className?: string };
export function SelectTrigger({
  className,
  children,
  variant,
  size,
  ...props
}: SelectTriggerProps) {
  const selectSize = useContext(SelectSizeContext);
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={selectSize}
      {...props}
      className={cn(
        selectTriggerVariants({ variant, size: size ?? selectSize }),
        selectTypography[selectSize],
        className,
      )}
    >
      {children}
      <SelectPrimitive.Icon className="flex shrink-0">
        <Icon name="carets-y" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

type SelectContentProps = Omit<SelectPrimitive.Popup.Props, 'className'> &
  Pick<
    SelectPrimitive.Positioner.Props,
    | 'side'
    | 'align'
    | 'sideOffset'
    | 'alignOffset'
    | 'alignItemWithTrigger'
    | 'anchor'
    | 'positionMethod'
  > & { className?: string };
export function SelectContent({
  className,
  children,
  side,
  align = 'start',
  sideOffset = 6,
  alignOffset,
  alignItemWithTrigger = true,
  anchor,
  positionMethod,
  ...props
}: SelectContentProps) {
  const size = useContext(SelectSizeContext);
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        className="z-70"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        anchor={anchor}
        positionMethod={positionMethod}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-size={size}
          {...props}
          className={cn(
            'relative flex max-h-(--available-height) max-w-(--available-width) min-w-(--anchor-width) flex-col overflow-hidden rounded-xl bg-surface p-1 text-ink shadow-lg outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 data-[side=none]:max-h-none',
            selectTypography[size],
            className,
          )}
        >
          <SelectPrimitive.ScrollUpArrow
            data-slot="select-scroll-up"
            className="top-1 right-1 left-1 z-10 flex h-6 cursor-default items-center justify-center rounded-t-lg bg-surface"
          >
            <Icon name="caret-up" />
          </SelectPrimitive.ScrollUpArrow>
          <ScrollArea.Root className="flex min-h-0 flex-1 flex-col">
            <ScrollArea.Viewport
              render={<SelectPrimitive.List aria-label={props['aria-label']} />}
              scrollFade={false}
              // Both primitives supply inline overflow defaults. Keep scrolling
              // in CSS so shorthand cleanup cannot clear the other one's axes.
              style={{
                overflow: undefined,
                overflowX: undefined,
                overflowY: undefined,
              }}
              className="relative min-h-0 flex-1 scroll-py-6 overflow-x-hidden overflow-y-auto overscroll-contain"
            >
              <ScrollArea.Content className="min-w-0!">
                {children}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
          <SelectPrimitive.ScrollDownArrow
            data-slot="select-scroll-down"
            className="right-1 bottom-1 left-1 z-10 flex h-6 cursor-default items-center justify-center rounded-b-lg bg-surface"
          >
            <Icon name="caret-down" />
          </SelectPrimitive.ScrollDownArrow>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

type SelectItemProps = Omit<SelectPrimitive.Item.Props, 'className'> & {
  className?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
};
export function SelectItem({
  className,
  children,
  leading,
  trailing,
  ...props
}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      {...props}
      className={cn(
        'relative flex min-h-9 cursor-default items-center gap-2 rounded-md py-2 pr-8 pl-2 outline-none data-highlighted:bg-hover data-disabled:pointer-events-none data-disabled:opacity-40',
        className,
      )}
    >
      {leading}
      <SelectPrimitive.ItemText className="min-w-0 flex-1 truncate">
        {children}
      </SelectPrimitive.ItemText>
      {trailing}
      <SelectPrimitive.ItemIndicator className="absolute right-2">
        <Icon name="check" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
