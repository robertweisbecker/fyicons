import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const badgeVariants = cva(
  'inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
  {
    variants: {
      tone: {
        default: '',
        success: 'text-emerald-700',
        warning: 'text-amber-700',
        info: 'text-blue-700',
      },
      variant: {
        default: 'bg-current/10',
        outline: 'border border-current/20',
        solid: 'bg-ink text-canvas',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);
export function Badge({
  className,
  variant,
  tone,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant, tone }), className)}
    />
  );
}
