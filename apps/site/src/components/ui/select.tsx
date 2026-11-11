'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export const Select = SelectPrimitive.Root;
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
        default: 'min-h-10 gap-4 px-3 text-sm',
        sm: 'min-h-8 px-0.5 text-sm',
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
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      {...props}
      className={cn(selectTriggerVariants({ variant, size }), className)}
    >
      {children}
      <SelectPrimitive.Icon className="flex shrink-0">
        <Icon name="chevron-down-sm" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

type SelectContentProps = Omit<SelectPrimitive.Popup.Props, 'className'> &
  Pick<
    SelectPrimitive.Positioner.Props,
    'side' | 'align' | 'sideOffset' | 'alignOffset'
  > & { className?: string };
export function SelectContent({
  className,
  children,
  side,
  align = 'start',
  sideOffset = 6,
  alignOffset,
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        className={cn('z-70')}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        alignItemWithTrigger={false}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          {...props}
          className={cn(
            'flex max-h-[min(360px,var(--available-height))] max-w-(--available-width) min-w-(--anchor-width) flex-col overflow-hidden rounded-xl bg-surface p-1 text-ink shadow-lg outline-1 outline-offset-(--surface-outline-offset) outline-ink/10',
            className,
          )}
        >
          <SelectPrimitive.List
            aria-label={props['aria-label']}
            className="max-h-[inherit] min-h-0 scroll-py-1 overflow-y-auto overscroll-contain"
          >
            {children}
          </SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

type SelectItemProps = Omit<SelectPrimitive.Item.Props, 'className'> & {
  className?: string;
};
export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      {...props}
      className={cn(
        'relative flex min-h-9 cursor-default items-center rounded-md py-2 pr-4 pl-8 text-sm outline-none data-highlighted:bg-hover data-disabled:pointer-events-none data-disabled:opacity-40',
        className,
      )}
    >
      <SelectPrimitive.ItemIndicator className={cn('absolute left-2')}>
        <Icon name="check" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="flex min-w-0 flex-1 items-center gap-3">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
