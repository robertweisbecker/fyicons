import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Button } from './ui/button';
import { notify } from './ui/toast';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export function InstallCommand({
  command,
  label,
  className,
  appearance = 'code',
}: {
  command: string;
  label: string;
  className?: string;
  appearance?: 'code' | 'button';
}) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const reset = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mounted = useRef(false);
  const copied = copiedCommand === command;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(reset.current);
    };
  }, []);

  async function copyCommand() {
    const success = await copy(command);
    notify(
      success ? `${label} copied.` : 'Clipboard unavailable. Please try again.',
      {
        id: `install:${command}`,
        icon: success ? 'terminal-square' : undefined,
      },
    );
    if (!mounted.current) return;
    clearTimeout(reset.current);
    setCopiedCommand(success ? command : null);
    if (success) reset.current = setTimeout(() => setCopiedCommand(null), 2200);
  }

  const copyIcon = (
    <span className="grid size-4" aria-hidden="true">
      <Icon
        name="copy-sm"
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

  if (appearance === 'button') {
    return (
      <Button
        onClick={copyCommand}
        aria-label={`Copy ${label} install command`}
        data-copied={copied || undefined}
        className={className}
        variant="outline"
        size="lg"
      >
        <Icon name="terminal" />
        <code className="text-sm font-light">{command}</code>
        {copyIcon}
      </Button>
    );
  }

  return (
    <div
      className={cn(
        'flex min-w-0 items-start gap-2 rounded-md bg-current/5 p-1 text-xs',
        className,
      )}
    >
      <code className="min-w-0 flex-1 self-center px-1 leading-5 wrap-anywhere">
        {command}
      </code>
      <IconButton
        label={`Copy ${label} install command`}
        size="icon-xs"
        onClick={copyCommand}
        data-copied={copied || undefined}
        icon={copyIcon}
      />
    </div>
  );
}
