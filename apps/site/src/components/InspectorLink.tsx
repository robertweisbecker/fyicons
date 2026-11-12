import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { Button } from './ui/button';
import { notify } from './ui/toast';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';
import type { IconShareLink } from '@/lib/icon-inspection';

export function InspectorLink({
  name,
  share,
}: {
  name: string;
  share: () => IconShareLink;
}) {
  const [copied, setCopied] = useState(false);
  const [pending, setPending] = useState(false);
  const reset = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(reset.current);
    };
  }, []);

  async function copyLink() {
    setPending(true);
    const link = share();
    const success = await copy(link.url);
    if (success) link.publish();
    notify(
      success
        ? 'Link copied to clipboard!'
        : 'Clipboard unavailable. Please try again.',
      { icon: success ? <Icon name="link" /> : undefined },
    );
    if (!mounted.current) return;
    clearTimeout(reset.current);
    setPending(false);
    setCopied(success);
    if (success) reset.current = setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Button
      variant="unstyled"
      size="unstyled"
      className="group/link max-w-full min-w-0 justify-start rounded-sm font-semibold"
      aria-label={`Copy link to ${name}`}
      title="Copy link"
      disabled={pending}
      focusableWhenDisabled
      onClick={copyLink}
      data-copied={copied || undefined}
      data-base-ui-swipe-ignore
    >
      <span className="truncate underline-offset-4 group-hover/link:underline">
        {name}
      </span>
      <span
        className="grid size-4 shrink-0 -translate-x-1 text-muted opacity-0 transition-[opacity,translate] duration-150 ease-out group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100 group-data-copied/link:translate-x-0 group-data-copied/link:opacity-100 motion-reduce:transition-none pointer-coarse:translate-x-0 pointer-coarse:opacity-100"
        aria-hidden="true"
      >
        <Icon
          name="link"
          size={16}
          className={cn(
            'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
            copied && 'scale-90 opacity-0',
          )}
        />
        <Icon
          name="circle-check"
          className={cn(
            'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
            !copied && 'scale-90 opacity-0',
          )}
        />
      </span>
    </Button>
  );
}
