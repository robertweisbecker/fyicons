import { useState } from 'react';
import { CatalogIcon } from '@/components/CatalogIcon';
import { Button } from '@/components/ui/button';
import { clipboardUnavailable, useCopied } from '@/components/copy-feedback';
import { notify } from '@/components/ui/toast';
import { copy } from '@/lib/clipboard';
import { cn } from '@/lib/utils';
import type { IconShareLink } from '@/lib/icon-inspection';

export function InspectorLink({
  name,
  share,
}: {
  name: string;
  share: () => IconShareLink;
}) {
  const [copied, markCopied] = useCopied(1600);
  const [pending, setPending] = useState(false);

  async function copyLink() {
    setPending(true);
    const link = share();
    const success = await copy(link.url);
    if (success) link.publish();
    notify(success ? 'Copied link' : clipboardUnavailable, {
      icon: success ? <CatalogIcon name="link" /> : undefined,
    });
    setPending(false);
    markCopied(success || null);
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
        <CatalogIcon
          name="link"
          size={16}
          className={cn(
            'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
            copied && 'scale-90 opacity-0',
          )}
        />
        <CatalogIcon
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
