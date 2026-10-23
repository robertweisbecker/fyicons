import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted disabled:pointer-events-none disabled:opacity-40 gap-1.5 font-medium inline-flex shrink-0 items-center justify-center',
  {
    variants: {
      variant: {
        default:
          'border border-transparent bg-ink text-surface hover:bg-ink/92 active:bg-ink/84',
        neutral:
          'border border-transparent bg-current/5 text-ink hover:bg-current/10 active:bg-current/20',
        outline:
          'border border-line bg-surface hover:bg-hover active:bg-active text-ink',
        ghost:
          'hover:bg-current/8 aria-pressed:bg-current/12 active:bg-current/6 text-current',
        text: 'text-muted hover:text-ink [&>svg:not(:only-child)]:text-muted font-normal',
        unstyled: '',
      },
      size: {
        xs: 'h-6 px-1.5 gap-1 text-xs rounded-md',
        sm: 'h-7 px-2 gap-1 text-xs rounded-md',
        default: 'h-8 px-3 gap-1.5 text-sm rounded-lg',
        lg: 'h-9 px-4 gap-2 text-base rounded-lg',
        icon: 'size-8 p-0 rounded-lg',
        'icon-sm': 'size-7 p-0 rounded-md',
        'icon-xs': 'size-6 p-0 rounded-sm',
        unstyled: '',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'outline', 'ghost', 'text'],
        className: ' whitespace-nowrap',
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
