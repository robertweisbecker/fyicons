import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const toggleVariants = cva(
  'group/toggle focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-40 inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'rounded-lg hover:bg-current/5 data-pressed:bg-current/15 data-pressed:hover:bg-current/20',
        outline:
          'rounded-lg border border-current/20 hover:bg-current/5 data-pressed:bg-current/15 data-pressed:hover:bg-current/20',
        text: 'rounded-lg hover:bg-current/5 data-pressed:bg-current/15',
        unstyled: '',
      },
      size: {
        default: 'min-h-8 px-3 text-sm gap-1.5',
        sm: 'min-h-6 px-2 text-xs gap-1',
        lg: 'min-h-9 px-4',
        icon: 'size-8 p-0 pointer-coarse:size-11',
        'icon-sm': 'size-6 p-0 pointer-coarse:size-11 rounded-md',
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
