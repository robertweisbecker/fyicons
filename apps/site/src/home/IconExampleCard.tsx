import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function VariantExampleGrid({
  children,
  busy,
}: {
  children: ReactNode;
  busy?: boolean;
}) {
  return (
    <div
      aria-busy={busy}
      className="grid auto-cols-[min(82vw,20rem)] grid-flow-col items-start gap-3 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-6 sm:items-stretch sm:gap-x-4 sm:gap-y-5"
    >
      {children}
    </div>
  );
}

export function IconExampleCard({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <figure className={cn('flex min-w-0 flex-col gap-2', className)}>
      {children}
      <figcaption className="text-base font-medium">{label}</figcaption>
    </figure>
  );
}
