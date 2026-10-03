import { Drawer as Primitive } from '@base-ui/react/drawer';
import { cn } from '@/lib/utils';

export const Drawer = Primitive.Root;
export const DrawerTitle = Primitive.Title;
export const DrawerDescription = Primitive.Description;
export const DrawerClose = Primitive.Close;
export const DrawerScroll = Primitive.Content;

export function DrawerContent({
  children,
  className,
  expanded,
  ...props
}: Omit<Primitive.Popup.Props, 'className'> & {
  className?: string;
  expanded: boolean;
}) {
  return (
    <Primitive.Portal>
      <Primitive.Backdrop
        className={cn(
          'fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0',
          !expanded && 'pointer-events-none opacity-0',
        )}
      />
      <Primitive.Viewport className="pointer-events-none fixed inset-0 z-50 flex items-end">
        <Primitive.Popup
          {...props}
          className={cn(
            'mobile-inspector pointer-events-auto relative w-full overflow-hidden rounded-t-2xl border border-line bg-surface text-ink shadow-xl outline-none',
            className,
          )}
        >
          {children}
        </Primitive.Popup>
      </Primitive.Viewport>
    </Primitive.Portal>
  );
}
