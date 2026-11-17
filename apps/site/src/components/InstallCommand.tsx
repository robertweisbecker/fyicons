import { useEffect, useRef, useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';









import { IconButton } from './IconButton';
import { Button, type ButtonProps } from './ui/button';
import { notify } from './ui/toast';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';



























import Glyph0 from 'fyicons/icons/IconCode';
import Glyph1 from 'fyicons/icons/IconCopiedFill';
import Glyph2 from 'fyicons/icons/IconCopySm';
import Glyph3 from 'fyicons/icons/IconGhost';
import Glyph4 from 'fyicons/icons/IconTerminalBash';
import Glyph5 from 'fyicons/icons/IconTerminalSquare';
import Glyph6 from 'fyicons/icons/IconTerminalSquareFill';
import Glyph7 from 'fyicons/icons/IconTextTitle';
import Glyph8 from 'fyicons/icons/IconTextTitleFill';
const Icon = createIconLookup({
"code": { Component: Glyph0, id: "58:9531" },
"copied-fill": { Component: Glyph1, id: "892:30476" },
"copy-sm": { Component: Glyph2, id: "610:12055" },
"ghost": { Component: Glyph3, id: "727:314" },
"terminal-bash": { Component: Glyph4, id: "749:5069" },
"terminal-square": { Component: Glyph5, id: "604:5134" },
"terminal-square-fill": { Component: Glyph6, id: "667:1166" },
"text": { Component: Glyph7, id: "58:9540" },
"text-fill": { Component: Glyph8, id: "1084:12366" }
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
      success ? 'Copied command' : 'Clipboard unavailable. Please try again.',
      {
        id: `install:${command}`,
        icon: success ? <Icon name="terminal-square" /> : undefined,
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
