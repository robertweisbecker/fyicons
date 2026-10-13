import { type ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export function Window({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        '@container/window flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface text-sm text-ink shadow-xl',
        className,
      )}
    >
      <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-line bg-bg px-3 text-xs text-muted">
        <span className="flex w-20 items-center gap-2" aria-hidden>
          <Icon name="xmark-sm" />
          <Icon name="minus" />
          <Icon name="carets-maximize" />
        </span>
        <span>{title}</span>
        <span className="flex w-20 items-center gap-2" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function BrowserWindow({ children }: { children: ReactNode }) {
  return (
    <Window title="bob.fyi" className="max-w-2xl">
      <div className="flex shrink-0 items-center gap-2 border-b border-line bg-canvas px-3 py-2 text-xs">
        <Icon name="arrow-left" />
        <Icon name="arrow-right" className="opacity-30" />
        <Icon name="arrow-reload" />
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-inset px-2 py-1">
          <Icon name="sliders" />
          <span className="min-w-0 flex-1 truncate">
            <span className="hidden text-muted @lg/window:inline">
              https://
            </span>
            bob.fyi
          </span>
          <Icon name="star" className="ml-auto" />
        </div>
        <span className="hidden @lg/window:inline-flex">
          <Icon name="puzzle" />
        </span>
        <Icon name="circle-user-fill" />
        <Icon name="ellipsis-v" />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain bg-inset p-3 sm:p-5">
        <div className="mx-auto w-full max-w-100">{children}</div>
      </div>
    </Window>
  );
}
