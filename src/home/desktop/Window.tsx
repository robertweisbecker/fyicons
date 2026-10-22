import { type ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export function WindowControls() {
  return (
    <span
      className="group/traffic flex w-20 shrink-0 items-center justify-center gap-2"
      aria-hidden
    >
      {[
        ['xmark', 'bg-red-400'],
        ['minus', 'bg-yellow-400'],
        ['carets-maximize', 'bg-green-500'],
      ].map(([icon, color]) => (
        <span
          key={icon}
          className={cn(
            'flex size-3.5 items-center justify-center rounded-full text-black/60 inset-ring inset-ring-black/5',
            color,
          )}
        >
          <Icon
            name={icon}
            size={11}
            className="opacity-0 group-hover/traffic:opacity-100"
          />
        </span>
      ))}
    </span>
  );
}

export function Window({
  title,
  header,
  children,
  className,
}: {
  title: string;
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        '@container/window flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl bg-surface text-sm text-ink shadow-xl ring ring-line',
        className,
      )}
    >
      {header ?? (
        <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-line bg-bg text-xs text-muted">
          <WindowControls />
          <span>{title}</span>
          <span className="w-20" aria-hidden />
        </div>
      )}
      {children}
    </div>
  );
}

export function BrowserWindow({
  title,
  address,
  children,
}: {
  title: string;
  address: string;
  children: ReactNode;
}) {
  return (
    <Window
      title={title}
      className="max-w-3xl"
      header={
        <div
          aria-label="Browser tabs"
          className="flex h-11 shrink-0 items-center gap-1 border-b border-line bg-bg pr-2 text-xs text-muted"
        >
          <WindowControls />
          <div className="flex h-6 max-w-44 min-w-0 flex-[1.2] items-center gap-2 rounded-lg bg-dialog px-1.5 text-ink shadow-xs ring-1 ring-line">
            <Icon name="gas" className="text-focus" />
            <span className="min-w-0 flex-1 truncate">{title}</span>
            <Icon name="circle-x-fill" className="text-muted/72" />
          </div>
          <div
            className="flex h-8 max-w-44 min-w-0 flex-1 items-center gap-2 px-2"
            title="Witness MeTube"
          >
            <Icon name="video-fill" className="text-red-400" />
            <span className="truncate">Witness MeTube</span>
          </div>
          <span
            role="img"
            aria-label="New tab"
            className="ms-auto flex size-7 shrink-0 items-center justify-center"
          >
            <Icon name="plus" />
          </span>
        </div>
      }
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-line bg-canvas px-3 py-2 text-xs">
        <Icon name="arrow-left" />
        <Icon name="arrow-right" className="opacity-40" />
        <Icon name="arrow-redo" />
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-hover px-1.5 py-1.5">
          <Icon name="info" />
          <span className="min-w-0 flex-1 gap-1 truncate">
            <span className="hidden text-muted @lg/window:inline">
              https://
            </span>
            {address}
          </span>
          <Icon name="zoom-in" className="ml-auto" />
          <Icon name="star-fill" className="text-focus" />
        </div>
        <span className="hidden @lg/window:inline-flex">
          <Icon name="puzzle" />
        </span>
        <Icon name="circle-user-fill" className="text-violet-400" />
        <Icon name="ellipsis-v" />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </Window>
  );
}
