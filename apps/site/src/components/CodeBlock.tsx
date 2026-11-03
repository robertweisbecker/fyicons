'use client';

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { ScrollArea } from '@base-ui/react/scroll-area';
import IconCopySm from 'fyicons/icons/IconCopySm';
import IconCheck from 'fyicons/icons/IconCheck';
import { IconButton } from '@/components/IconButton';
import { notify } from '@/components/ui/toast';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export function CodeBlock({
  children,
  className,
  copyToast,
  ...props
}: ComponentPropsWithoutRef<'pre'> & {
  copyToast?: { title: ReactNode; icon?: ReactNode };
}) {
  const toastId = useId();
  const pre = useRef<HTMLPreElement>(null);
  const reset = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => clearTimeout(reset.current), []);

  async function copyCode() {
    if (!pre.current) return;
    const success = await copy(pre.current.textContent ?? '');
    if (!pre.current) return;
    clearTimeout(reset.current);
    setCopied(success);
    notify(
      success
        ? (copyToast?.title ?? 'Code copied.')
        : 'Clipboard unavailable. Select the code to copy it.',
      {
        id: `code-copy:${toastId}`,
        icon: success ? copyToast?.icon : undefined,
      },
    );
    if (success) reset.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <ScrollArea.Root
      data-slot="code-block"
      className="group/code-scroll relative flex max-w-full min-w-0 items-start rounded-xl bg-inset text-ink dark:outline dark:outline-line"
    >
      <ScrollArea.Viewport
        aria-label="Code example"
        role="region"
        className="mr-10 min-w-0 flex-1 scroll-fade-x overscroll-x-contain rounded-[inherit] scroll-fade-e-0 scroll-fade-s-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-muted data-overflow-x-end:scroll-fade-e-6 data-overflow-x-start:scroll-fade-s-6"
      >
        <ScrollArea.Content
          render={<pre {...props} ref={pre} />}
          className={cn('m-0 p-3 text-[.875em]/[2] tab-2', className)}
        >
          {children}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="mx-3 flex h-1.5 items-center px-3 opacity-0 group-has-[:focus-visible]/code-scroll:opacity-100 data-hovering:opacity-100 data-scrolling:opacity-100"
      >
        <ScrollArea.Thumb className="h-1 rounded-full bg-muted/50" />
      </ScrollArea.Scrollbar>
      <IconButton
        label={copied ? 'Copied' : 'Copy code'}
        icon={copied ? <IconCheck /> : <IconCopySm />}
        onClick={copyCode}
        size="icon-sm"
        data-copied={copied || undefined}
        className="absolute top-1 right-1"
      />
    </ScrollArea.Root>
  );
}
