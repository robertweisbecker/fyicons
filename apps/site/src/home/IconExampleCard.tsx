import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
