import {
  Group,
  Panel,
  Separator,
  type GroupProps,
  type PanelProps,
  type SeparatorProps,
} from 'react-resizable-panels';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export function ResizablePanelGroup({
  className,
  resizeTargetMinimumSize = { coarse: 44, fine: 12 },
  ...props
}: GroupProps) {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn('flex h-full w-full', className)}
      resizeTargetMinimumSize={resizeTargetMinimumSize}
      {...props}
    />
  );
}

export function ResizablePanel(props: PanelProps) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

export function ResizableHandle({
  withHandle = false,
  className,
  children,
  ...props
}: SeparatorProps & { withHandle?: boolean }) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 hover:bg-control-accent focus-visible:bg-control-accent focus-visible:outline-focus aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:h-3 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>span]:rotate-90',
        className,
      )}
      {...props}
    >
      {children ??
        (withHandle && (
          <span
            aria-hidden
            className="relative flex h-6 w-4 items-center justify-center rounded-sm border border-border bg-surface text-muted"
          >
            <Icon name="grip-v" />
          </span>
        ))}
    </Separator>
  );
}
