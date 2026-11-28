import { clipboardUnavailable, useCopied } from '@/components/copy-feedback';
import { createIconLookup } from '@/components/createIconLookup';
import { IconButton } from './IconButton';
import { Button, type ButtonProps } from './ui/button';
import { notify } from './ui/toast';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';
import {
  IconCode,
  IconCopiedFill,
  IconCopy,
  IconGhost,
  IconTerminalBash,
  IconTerminalSquare,
} from 'fyicons';

const Icon = createIconLookup({
  code: IconCode,
  'copied-fill': IconCopiedFill,
  copy: IconCopy,
  ghost: IconGhost,
  'terminal-bash': IconTerminalBash,
  'terminal-square': IconTerminalSquare,
});

export function InstallCommand({
  command,
  label,
  className,
  appearance = 'code',
  variant = 'outline',
}: {
  command: string;
  label: string;
  className?: string;
  appearance?: 'code' | 'button';
  variant?: ButtonProps['variant'];
}) {
  const [copiedCommand, markCopied] = useCopied<string>();
  const copied = copiedCommand === command;

  async function copyCommand() {
    const success = await copy(command);
    notify(success ? 'Copied command' : clipboardUnavailable, {
      id: `install:${command}`,
      icon: success ? <Icon name="terminal-square" /> : undefined,
    });
    markCopied(success ? command : null);
  }

  const copyIcon = (
    <span className="grid" aria-hidden="true">
      <Icon
        name="copy"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
          copied && 'scale-75 opacity-0 blur-[2px]',
        )}
      />
      <Icon
        name="copied-fill"
        className={cn(
          'col-start-1 row-start-1 transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none',
          !copied && 'scale-75 opacity-0 blur-[2px]',
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
        variant={variant}
        size="lg"
      >
        <Icon name="terminal-bash" opacity={0.5} />
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
