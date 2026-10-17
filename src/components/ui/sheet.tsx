import { Drawer } from '@base-ui/react/drawer';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const Sheet = Drawer.Root;
export const SheetTrigger = Drawer.Trigger;
export const SheetClose = Drawer.Close;
export const SheetTitle = Drawer.Title;
export const SheetDescription = Drawer.Description;

const sheetVariants = cva(
  'flex max-w-full flex-col bg-dialog text-ink translate-x-[var(--drawer-swipe-movement-x,0px)] transition-[translate,opacity] duration-[calc(240ms*var(--drawer-swipe-strength,1))] ease-out data-swiping:transition-none data-swiping:select-none data-ending-style:translate-x-[calc(100%+2rem)]',
  {
    variants: {
      side: { left: 'left-0', right: 'right-0' },
      presentation: {
        overlay:
          'fixed m-4 rounded-xl z-50 shadow-2xl outline-1 outline-ink/10 outline-offset-(--surface-outline-offset) data-starting-style:translate-x-6 data-starting-style:opacity-0 data-ending-style:opacity-0 inset-y-4',
        docked:
          'relative z-20 h-[calc(100dvh-var(--site-header-height))] border-s-line outline-none',
      },
      variant: {
        default: 'w-80',
        inspector: 'w-full md:w-(--inspector-width)',
      },
    },
    compoundVariants: [
      {
        variant: 'inspector',
        presentation: 'overlay',
        className: 'md:top-(--site-header-height)',
      },
      { side: 'left', presentation: 'docked', className: 'border-r' },
      { side: 'right', presentation: 'docked', className: 'border-l' },
    ],
    defaultVariants: {
      side: 'right',
      variant: 'default',
      presentation: 'overlay',
    },
  },
);

export function SheetContent({
  className,
  side,
  variant,
  presentation,
  container,
  backdrop = true,
  ...props
}: Omit<Drawer.Popup.Props, 'className'> &
  VariantProps<typeof sheetVariants> & {
    className?: string;
    backdrop?: boolean;
    container?: Drawer.Portal.Props['container'];
  }) {
  return (
    <Drawer.Portal container={container} className="contents">
      {backdrop && (
        <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/30" />
      )}
      <Drawer.Viewport className="contents">
        <Drawer.Popup
          data-slot="sheet-content"
          {...props}
          className={cn(
            sheetVariants({ side, variant, presentation }),
            className,
          )}
        />
      </Drawer.Viewport>
    </Drawer.Portal>
  );
}
