import { IconGradient } from 'fyicons';
import { cn } from '@/lib/utils';

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <IconGradient
      size={24}
      aria-hidden="true"
      className={cn('shrink-0', className)}
    />
  );
}
