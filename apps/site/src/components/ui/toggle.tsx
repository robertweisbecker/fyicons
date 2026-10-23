import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const toggleVariants = cva(
  'group/toggle focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-40 inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'hover:bg-current/4 data-pressed:bg-current/12 data-pressed:hover:bg-current/8 data-pressed:text-ink',
        outline:
          'border border-current/20 hover:bg-current/5 data-pressed:bg-current/15 data-pressed:hover:bg-current/10',
        text: 'hover:bg-current/5 text-muted data-pressed:text-ink',
        elevated:
          'text-current/72 data-pressed:text-ink hover:text-current data-pressed:bg-dialog data-pressed:shadow-sm data-pressed:outline data-pressed:outline-current/10 data-pressed:outline-offset-(--surface-outline-offset) hover:bg-current/4 data-pressed:hover:bg-dialog',
        unstyled: '',
      },
      size: {
        default: 'min-h-8 px-2.5 text-sm gap-1.5 rounded-lg',
        sm: 'h-7 px-2 text-xs gap-1.5 rounded-md',
        lg: 'h-9 px-4',
        icon: 'size-8 p-0 rounded-lg',
        'icon-sm': 'size-7 p-0 rounded-md',
        'icon-xs': 'size-6 p-0 rounded-md',
        unstyled: '',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export type ToggleProps = Omit<TogglePrimitive.Props, 'className'> &
  VariantProps<typeof toggleVariants> & { className?: string };

export function Toggle({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      {...props}
      className={cn(toggleVariants({ variant, size }), className)}
    />
  );
}
