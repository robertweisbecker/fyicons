import { useEffect, useRef, useState, type ReactElement } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Icon } from '@/components/Icon';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Toggle, type ToggleProps } from '@/components/ui/toggle';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export function DemoHint({
  label,
  children,
}: {
  label: string;
  children: ReactElement;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={children} />
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={8}>
          <Tooltip.Popup className="origin-(--transform-origin) rounded-lg bg-ink px-2.5 py-1.5 text-xs text-canvas shadow-lg transition-[transform,opacity] duration-150 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            {label}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
const touchControl =
  'touch-manipulation pointer-coarse:min-h-11 pointer-coarse:min-w-11';
export function DemoIconButton({
  label,
  icon,
  className,
  ...props
}: { label: string; icon: string } & ButtonProps) {
  return (
    <DemoHint label={label}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={label}
        {...props}
        className={cn(touchControl, className)}
      >
        <Icon name={icon} />
      </Button>
    </DemoHint>
  );
}
export function DemoToggle({
  label,
  icon,
  activeIcon,
  className,
  ...props
}: { label: string; icon: string; activeIcon?: string } & ToggleProps) {
  return (
    <DemoHint label={label}>
      <Toggle
        size="icon"
        aria-label={label}
        {...props}
        className={cn(touchControl, className)}
      >
        {activeIcon ? (
          <ToggleIcon icon={icon} activeIcon={activeIcon} />
        ) : (
          <Icon name={icon} />
        )}
      </Toggle>
    </DemoHint>
  );
}
export function CopyButton({
  getText,
  label = 'Copy',
  showLabel = false,
  className,
}: {
  getText: () => string;
  label?: string;
  showLabel?: boolean;
  className?: string;
}) {
  const [state, setState] = useState<'idle' | 'pending' | 'copied' | 'error'>(
    'idle',
  );
  const reset = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(reset.current);
    };
  }, []);
  async function handleCopy() {
    clearTimeout(reset.current);
    setState('pending');
    const success = await copy(getText());
    if (!mounted.current) return;
    setState(success ? 'copied' : 'error');
    reset.current = setTimeout(() => setState('idle'), 2200);
  }
  const status =
    state === 'copied'
      ? 'Copied'
      : state === 'error'
        ? 'Clipboard unavailable'
        : label;
  return (
    <DemoHint label={status}>
      <Button
        variant="ghost"
        size={showLabel ? 'sm' : 'icon'}
        className={cn(touchControl, showLabel && 'min-w-24', className)}
        disabled={state === 'pending'}
        aria-label={status}
        onClick={handleCopy}
      >
        <Icon
          name={
            state === 'copied'
              ? 'check'
              : state === 'error'
                ? 'circle-warning'
                : 'copy-sm'
          }
        />
        {showLabel && (state === 'error' ? 'Try again' : status)}
        <span className="sr-only" role="status">
          {state === 'copied'
            ? 'Copied to clipboard'
            : state === 'error'
              ? 'Clipboard unavailable'
              : ''}
        </span>
      </Button>
    </DemoHint>
  );
}
export function ControlDivider() {
  return <span aria-hidden className="mx-1 h-4 w-px shrink-0 bg-line" />;
}
