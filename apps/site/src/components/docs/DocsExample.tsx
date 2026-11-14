import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function DocsExample({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'> & { 'aria-label': string }) {
  return (
    <div
      data-not-typeset=""
      role="group"
      {...props}
      className={cn(
        'my-6 flex min-h-32 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface p-5 sm:p-8',
        className,
      )}
    />
  );
}
