import { useState, type ReactNode } from 'react';
import { CatalogIcon } from './CatalogIcon';
import { IconButton } from './IconButton';
import { Button, type ButtonProps } from './ui/button';
import { CopiedTitle, clipboardUnavailable, useCopied } from './copy-feedback';
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
  const [copiedText, markCopied] = useCopied<string>();
  const [pending, setPending] = useState(false);
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
      notify(<CopiedTitle name={getIconDisplayName(item)} />, {
        id: `copy:${item.id}`,
        icon: <CatalogIcon name={item.id} />,
      });
    } else {
      notify(clipboardUnavailable);
    }
    setPending(false);
    markCopied(success ? value : null);
  }

  const icon = (
    <span className="grid size-4 shrink-0" aria-hidden="true">
      <CatalogIcon
        name="copy"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
          copied && 'scale-90 opacity-0',
        )}
      />
      <CatalogIcon
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
