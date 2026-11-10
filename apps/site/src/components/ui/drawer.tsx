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
      {/* Base UI's iOS backdrop pattern covers the document behind Safari's controls. */}
      <Primitive.Backdrop
        className={cn(
          'fixed inset-0 z-50 min-h-dvh bg-black/30 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
          !expanded && 'pointer-events-none opacity-0',
        )}
      />
      {/* Safari extends visible fixed containers into its toolbar. Keep this
          positioning wrapper invisible and restore visibility on the dialog. */}
      <Primitive.Viewport className="pointer-events-none invisible fixed inset-0 z-50 flex items-end px-3 pb-[max(.5rem,env(safe-area-inset-bottom))]">
        <Primitive.Popup
          {...props}
          className={cn(
            'mobile-inspector pointer-events-none visible relative w-full text-ink',
            className,
          )}
        >
          {children}
        </Primitive.Popup>
      </Primitive.Viewport>
    </Primitive.Portal>
  );
}
