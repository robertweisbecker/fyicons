import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
export function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col overflow-hidden rounded-xl border border-line bg-surface focus-within:ring-2 focus-within:ring-muted/30',
        className,
      )}
    />
  );
}
export function InputGroupTextarea({
  className,
  ...props
}: ComponentProps<'textarea'>) {
  return (
    <textarea
      {...props}
      className={cn(
        'min-h-24 w-full resize-none bg-transparent px-4 py-3 text-sm leading-relaxed outline-none placeholder:text-muted',
        className,
      )}
    />
  );
}
export function InputGroupAddon({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('flex flex-wrap items-center gap-2 px-3 py-2', className)}
    />
  );
}
