import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Button, type ButtonProps } from './ui/button';
import { notify } from './ui/toast';
import { getIconDisplayName, type IconRecord } from '@/lib/catalog';
import { copy } from '@/lib/downloads';
import { useIconSource } from '@/lib/use-icon-source';
import { cn } from '@/lib/utils';

export function IconCopyButton({
  item,
  text,
  label = 'Copy SVG',
  size = 'icon-sm',
  showLabel = false,
  className,
  children,
}: {
  item: IconRecord;
  text?: string;
  label?: string;
  size?: ButtonProps['size'];
  showLabel?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
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
  const source = useIconSource(item, text === undefined);
  const value = text ?? source.text;
  const sourceError = text === undefined ? source.error : undefined;
  const loading = value === undefined && !sourceError;
  const actionLabel = sourceError
    ? 'Retry loading SVG'
    : loading
      ? 'Loading SVG…'
      : label;
  const copied = value !== undefined && copiedText === value;

  async function handleCopy() {
    if (sourceError) {
      source.retry();
      return;
    }
    if (value === undefined) return;
    setPending(true);
    const success = await copy(value);
    if (success) {
      notify(
        <>
          &quot;
          <span className="font-semibold">{getIconDisplayName(item)}</span>
          &quot; copied
        </>,
        { id: `copy:${item.id}`, icon: <Icon name={item.id} /> },
      );
    } else {
      notify('Clipboard unavailable. Please try again.');
    }
    if (!mounted.current) return;
    clearTimeout(reset.current);
    setPending(false);
    setCopiedText(success ? value : null);
    if (success) reset.current = setTimeout(() => setCopiedText(null), 2200);
  }

  const icon = (
    <span className="grid size-4 shrink-0" aria-hidden="true">
      <Icon
        name="copy"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
          copied && 'scale-90 opacity-0',
        )}
      />
      <Icon
        name="copied-fill"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
          !copied && 'scale-90 opacity-0',
        )}
      />
    </span>
  );

  if (showLabel)
    return (
      <Button
        variant="neutral"
        size={size}
        className={cn('min-w-0 rounded-full', className)}
        aria-label={actionLabel}
        disabled={pending || loading}
        onClick={handleCopy}
        data-copied={copied || undefined}
      >
        {icon}
        {children ?? actionLabel}
      </Button>
    );

  return (
    <IconButton
      label={actionLabel}
      size={size}
      className={className}
      disabled={pending || loading}
      onClick={handleCopy}
      data-copied={copied || undefined}
      icon={icon}
    />
  );
}
