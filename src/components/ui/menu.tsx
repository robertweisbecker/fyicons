import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export function Menu<Payload = unknown>({
  modal = false,
  ...props
}: MenuPrimitive.Root.Props<Payload>) {
  return <MenuPrimitive.Root modal={modal} {...props} />;
}
export const MenuTrigger = MenuPrimitive.Trigger;
export const MenuGroup = MenuPrimitive.Group;
export const MenuRadioGroup = MenuPrimitive.RadioGroup;

export type MenuContentProps = Omit<MenuPrimitive.Popup.Props, 'className'> &
  Pick<
    MenuPrimitive.Positioner.Props,
    'side' | 'align' | 'sideOffset' | 'alignOffset'
  > & {
    className?: string;
    container?: MenuPrimitive.Portal.Props['container'];
  };

export function MenuContent({
  className,
  children,
  side,
  align = 'start',
  sideOffset = 8,
  alignOffset,
  container,
  ...props
}: MenuContentProps) {
  return (
    <MenuPrimitive.Portal container={container}>
      <MenuPrimitive.Positioner
        className="z-70"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <MenuPrimitive.Popup
          data-slot="menu-content"
          {...props}
          className={cn(
            'max-h-(--available-height) max-w-(--available-width) min-w-40 origin-(--transform-origin) overflow-y-auto rounded-xl bg-surface p-1 text-ink shadow-lg outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 transition-[opacity,scale] duration-150 ease-out focus-visible:transition-none data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none [&:has(:focus-visible)]:transition-none',
            className,
          )}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

const menuItemVariants = cva(
  'relative flex cursor-default items-center outline-none data-disabled:pointer-events-none data-disabled:opacity-40 data-highlighted:bg-hover',
  {
    variants: {
      size: {
        sm: 'min-h-8 gap-2 rounded-md px-2 text-xs',
        default: 'min-h-8 gap-2 rounded-md px-2 text-sm',
        lg: 'min-h-9 gap-3 rounded-lg px-3 text-sm',
      },
    },
    defaultVariants: { size: 'default' },
  },
);

export type MenuItemProps = Omit<MenuPrimitive.Item.Props, 'className'> &
  VariantProps<typeof menuItemVariants> & { className?: string };

export function MenuItem({ className, size, ...props }: MenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      {...props}
      className={cn(menuItemVariants({ size }), className)}
    />
  );
}

export type MenuRadioItemProps = Omit<
  MenuPrimitive.RadioItem.Props,
  'className'
> &
  VariantProps<typeof menuItemVariants> & { className?: string };

export function MenuRadioItem({
  className,
  size,
  children,
  closeOnClick = true,
  ...props
}: MenuRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-item"
      {...props}
      closeOnClick={closeOnClick}
      className={cn(
        menuItemVariants({ size }),
        'pr-8 data-checked:bg-ink/10',
        className,
      )}
    >
      {children}
      <MenuPrimitive.RadioItemIndicator className="absolute right-2 flex size-4 items-center justify-center">
        <Icon name="check" />
      </MenuPrimitive.RadioItemIndicator>
    </MenuPrimitive.RadioItem>
  );
}

export function MenuGroupLabel({
  className,
  ...props
}: Omit<MenuPrimitive.GroupLabel.Props, 'className'> & { className?: string }) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-group-label"
      {...props}
      className={cn(
        'flex min-h-7 items-center px-2 text-xs text-muted',
        className,
      )}
    />
  );
}
