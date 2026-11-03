import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Button, type ButtonProps } from './ui/button';
import { notify } from './ui/toast';
import { getIconDisplayName, type IconRecord } from '@/lib/catalog';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export function IconCopyButton({
  item,
  text = item.svg,
  label = 'Copy SVG',
  size = 'icon-sm',
  showLabel = false,
  className,
}: {
  item: IconRecord;
  text?: string;
  label?: string;
  size?: ButtonProps['size'];
  showLabel?: boolean;
  className?: string;
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
  const copied = copiedText === text;

  async function handleCopy() {
    setPending(true);
    const success = await copy(text);
    if (success) {
      notify(
        <>
          <span className="font-semibold">{getIconDisplayName(item)}</span>{' '}
          copied to clipboard!
        </>,
        { id: `copy:${item.id}`, icon: <Icon name={item.id} /> },
      );
    } else {
      notify('Clipboard unavailable. Please try again.');
    }
    if (!mounted.current) return;
    clearTimeout(reset.current);
    setPending(false);
    setCopiedText(success ? text : null);
    if (success) reset.current = setTimeout(() => setCopiedText(null), 2200);
  }

  const icon = (
    <span className="grid size-4 shrink-0" aria-hidden="true">
      <Icon
        name="copy"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out',
          copied && 'scale-90 opacity-0',
        )}
      />
      <Icon
        name="copied-fill"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out',
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
        disabled={pending}
        onClick={handleCopy}
        data-copied={copied || undefined}
      >
        {icon}
        {copied ? 'Copied' : label}
      </Button>
    );

  return (
    <IconButton
      label={label}
      size={size}
      className={className}
      disabled={pending}
      onClick={handleCopy}
      data-copied={copied || undefined}
      icon={icon}
    />
  );
}
