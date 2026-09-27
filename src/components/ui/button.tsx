import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted disabled:pointer-events-none disabled:opacity-40 gap-1.5',
  {
    variants: {
      variant: {
        default:
          'rounded-lg border border-transparent bg-ink text-canvas hover:opacity-90',
        outline: 'rounded-lg border border-line bg-surface hover:bg-hover',
        ghost: 'rounded-lg hover:bg-current/5 aria-pressed:bg-current/15',
        text: 'text-muted hover:text-ink',
        unstyled: '',
      },
      size: {
        default: 'min-h-9 px-3',
        sm: 'min-h-8 px-2',
        lg: 'min-h-10 px-4',
        icon: 'size-9 p-0',
        'icon-sm': 'size-8 p-0',
        unstyled: '',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'outline', 'ghost', 'text'],
        className:
          'inline-flex shrink-0 items-center justify-center text-xs font-medium whitespace-nowrap',
      },
    ],
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export type ButtonProps = Omit<ButtonPrimitive.Props, 'className'> &
  VariantProps<typeof buttonVariants> & { className?: string };

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
}
