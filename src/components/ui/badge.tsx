import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
const badgeVariants = cva(
  'inline-flex w-fit h-fit items-center rounded-full px-1 font-normal tabular-nums',
  {
    variants: {
      tone: {
        default: '',
        success:
          'text-emerald-700 [&>svg]:text-emerald-500 dark:text-emerald-400 dark:[&>svg]:text-emerald-500',
        warning:
          'text-amber-800 [&>svg]:text-amber-600 dark:text-amber-400 dark:[&>svg]:text-amber-500',
        info: 'text-blue-700 [&>svg]:text-blue-500 dark:text-blue-400 dark:[&>svg]:text-blue-500',
      },
      variant: {
        default: 'bg-current/5',
        elevated:
          'bg-surface outline outline-current/5 shadow-xs/10 dark:shadow-xs/50 dark:outline-current/10 dark:-outline-offset-1 text-ink',
        outline: 'outline-1 outline-current/20 bg-current/2 text-current/72',
        solid: 'bg-ink text-canvas',
        unstyled: '',
      },
      size: {
        sm: 'px-1 py-0 text-[11px]',
        md: 'px-1 py-0.5 text-xs',
        lg: 'px-2 py-1.5 text-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
);
export function Badge({
  className,
  variant,
  size,
  tone,
  children,
  icon,
  iconClass,
  ...props
}: ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { icon?: string; iconClass?: string }) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant, tone, size }), className)}
    >
      {icon && <Icon name={icon} className={cn('-my-1', iconClass)} />}
      <span className="flex items-center gap-1 px-1 py-0.5">{children}</span>
    </span>
  );
}
