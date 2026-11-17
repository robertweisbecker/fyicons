import { useEffect, useRef, useState } from 'react';
import { Tooltip as DemoHint } from '@/components/ui/tooltip';
import { Icon, IconRendererContext } from '@/components/UIIcon';
import type { ComponentType, ComponentProps } from 'react';
import type { IconProps } from '@/components/createIconLookup';
import CopyGlyph from 'fyicons/icons/IconCopy';
import CopiedGlyph from 'fyicons/icons/IconCopied';
import AlertGlyph from 'fyicons/icons/IconAlert';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Toggle, type ToggleProps } from '@/components/ui/toggle';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export { DemoHint };
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
        className={className}
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
  variant = 'default',
  ...props
}: {
  label: string;
  icon: string;
  activeIcon?: string;
} & ToggleProps) {
  return (
    <DemoHint label={label}>
      <Toggle
        size="icon"
        aria-label={label}
        {...props}
        className={className}
        variant={variant}
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
  const StatusIcon =
    state === 'copied'
      ? CopiedGlyph
      : state === 'error'
        ? AlertGlyph
        : CopyGlyph;
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
        className={cn('touch-manipulation', showLabel && 'min-w-24', className)}
        disabled={state === 'pending'}
        aria-label={status}
        onClick={handleCopy}
      >
        <StatusIcon />
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

/** Bind demo controls to the feature's explicit set of icon imports. */
export function createDemoControls(Renderer: ComponentType<IconProps>) {
  return {
    DemoIconButton: (props: ComponentProps<typeof DemoIconButton>) => (
      <IconRendererContext value={Renderer}>
        <DemoIconButton {...props} />
      </IconRendererContext>
    ),
    DemoToggle: (props: ComponentProps<typeof DemoToggle>) => (
      <IconRendererContext value={Renderer}>
        <DemoToggle {...props} />
      </IconRendererContext>
    ),
  };
}
