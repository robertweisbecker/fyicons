import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const toggleVariants = cva(
  'group/toggle focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-40',
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
        default: 'min-h-9 px-3',
        sm: 'min-h-8 px-2',
        lg: 'min-h-10 px-4',
        icon: 'size-9 p-0 pointer-coarse:size-11',
        'icon-sm': 'size-8 p-0 pointer-coarse:size-11',
        unstyled: '',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'outline', 'text'],
        className:
          'inline-flex shrink-0 items-center justify-center gap-2 text-xs font-medium whitespace-nowrap',
      },
    ],
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
