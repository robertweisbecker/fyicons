import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted disabled:pointer-events-none disabled:opacity-40 gap-1.5 rounded-lg',
  {
    variants: {
      variant: {
        default:
          'border border-transparent bg-ink text-canvas hover:opacity-90',
        outline: 'border border-line bg-surface hover:bg-hover',
        ghost: 'hover:bg-current/5 aria-pressed:bg-current/15',
        text: 'text-muted hover:text-ink',
        unstyled: '',
      },
      size: {
        default: 'h-8 px-3 gap-1.5 text-sm',
        sm: 'h-7 px-2 gap-1 text-xs',
        lg: 'h-9 px-4 gap-2 text-base',
        icon: 'size-8 p-0',
        'icon-sm': 'size-7 p-0',
        unstyled: '',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'outline', 'ghost', 'text'],
        className:
          'inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap',
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
