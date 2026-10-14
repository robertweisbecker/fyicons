import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function Bubble({
  variant = 'muted',
  className,
  ...props
}: ComponentProps<'div'> & { variant?: 'muted' | 'ghost' }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      className={cn(
        'group/bubble w-fit max-w-5/6 min-w-0 data-[variant=ghost]:max-w-full',
        className,
      )}
      {...props}
    />
  );
}

export function BubbleContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="bubble-content"
      className={cn(
        'rounded-xl bg-canvas px-3 py-2 text-sm leading-relaxed wrap-break-word group-data-[variant=ghost]/bubble:rounded-none group-data-[variant=ghost]/bubble:bg-transparent group-data-[variant=ghost]/bubble:p-0',
        className,
      )}
      {...props}
    />
  );
}
