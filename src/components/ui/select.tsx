import { Select as SelectPrimitive } from '@base-ui/react/select';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;

type SelectTriggerProps = Omit<SelectPrimitive.Trigger.Props, 'className'> & {
  className?: string;
};
export function SelectTrigger({
  className,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      {...props}
      className={cn(
        'flex min-h-10 items-center justify-between gap-4 rounded-lg border border-line bg-surface px-3 text-sm hover:bg-hover data-disabled:pointer-events-none data-disabled:opacity-40',
        className,
      )}
    >
      {children}
      <SelectPrimitive.Icon>
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
  align,
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
            'max-h-[min(360px,var(--available-height))] min-w-(--anchor-width) overflow-y-auto rounded-lg border border-line bg-surface p-1 text-ink shadow-lg',
            className,
          )}
        >
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
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
        'relative flex min-h-9 cursor-default items-center rounded-md py-2 pr-4 pl-8 text-sm outline-none data-disabled:pointer-events-none data-disabled:opacity-40 data-highlighted:bg-hover',
        className,
      )}
    >
      <SelectPrimitive.ItemIndicator className={cn('absolute left-2')}>
        <Icon name="check-md" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
