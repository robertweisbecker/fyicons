import { Dialog } from '@base-ui/react/dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;

const sheetVariants = cva('flex max-w-full flex-col bg-surface text-ink', {
  variants: {
    side: { left: 'left-0', right: 'right-0' },
    presentation: {
      overlay:
        'fixed m-4 rounded-xl z-50 shadow-2xl outline-1 outline-ink/10 outline-offset-(--surface-outline-offset) transition-[translate,opacity] duration-240 ease-out data-starting-style:translate-x-6 data-starting-style:opacity-0 data-ending-style:translate-x-6 data-ending-style:opacity-0 inset-y-4',
      docked:
        'relative z-20 h-[calc(100dvh-3.5rem)] border-s-line outline-none',
    },
    variant: {
      default: 'w-80',
      inspector: 'w-full md:w-(--inspector-width)',
    },
  },
  compoundVariants: [
    { variant: 'inspector', presentation: 'overlay', className: 'md:top-14' },
    { side: 'left', presentation: 'docked', className: 'border-r' },
    { side: 'right', presentation: 'docked', className: 'border-l' },
  ],
  defaultVariants: {
    side: 'right',
    variant: 'default',
    presentation: 'overlay',
  },
});

export function SheetContent({
  className,
  side,
  variant,
  presentation,
  container,
  backdrop = true,
  ...props
}: Omit<Dialog.Popup.Props, 'className'> &
  VariantProps<typeof sheetVariants> & {
    className?: string;
    backdrop?: boolean;
    container?: Dialog.Portal.Props['container'];
  }) {
  return (
    <Dialog.Portal container={container} className="contents">
      {backdrop && (
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/30" />
      )}
      <Dialog.Popup
        data-slot="sheet-content"
        {...props}
        className={cn(
          sheetVariants({ side, variant, presentation }),
          className,
        )}
      />
    </Dialog.Portal>
  );
}
