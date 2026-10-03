import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
export function Alert({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role="status"
      {...props}
      className={cn(
        'flex items-start gap-3 rounded-xl border border-current/15 bg-current/5 p-4 text-sm',
        className,
      )}
    />
  );
}
export function AlertTitle(props: ComponentProps<'h3'>) {
  return <h3 {...props} className={cn('font-medium', props.className)} />;
}
export function AlertDescription(props: ComponentProps<'p'>) {
  return (
    <p
      {...props}
      className={cn('mt-1 text-xs leading-relaxed opacity-75', props.className)}
    />
  );
}
