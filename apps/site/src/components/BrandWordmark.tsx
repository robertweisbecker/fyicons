import { assetPath } from '@/lib/navigation';
import { cn } from '@/lib/utils';

function Wordmark({
  mobile = false,
  className,
}: {
  mobile?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={mobile ? 44 : 96}
      height={mobile ? 24 : 28}
      viewBox={mobile ? '0 0 44 24' : '0 0 96 28'}
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0 fill-none', className)}
    >
      <use
        href={assetPath(
          `/brand-wordmarks.svg#${mobile ? 'mobile' : 'desktop'}`,
        )}
      />
    </svg>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return <Wordmark className={className} />;
}

export function BrandWordmarkMobile({ className }: { className?: string }) {
  return <Wordmark mobile className={className} />;
}
