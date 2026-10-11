import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/Icon';
import { copy, download } from '@/lib/downloads';
import type { IconRecord } from '@/lib/catalog';
import { IconButton } from './IconButton';
import { ToggleIcon } from './ToggleIcon';
import { Badge } from './ui/badge';

export function IconUsage({
  item,
  notify,
}: {
  item: IconRecord;
  notify: (message: string) => void;
}) {
  const headingId = useId();
  const jsx = `import {\n  ${item.componentName},\n} from '@/icons';\n\n<${item.componentName} size={16} />`;

  return (
    <section
      aria-labelledby={headingId}
      className="flex min-w-0 flex-col gap-2"
    >
      <h3 id={headingId} className="text-xs font-medium">
        Usage
      </h3>
      <div className="divide-y divide-line overflow-hidden rounded-xl ring ring-line">
        <div className="flex flex-wrap items-center justify-between gap-2 p-1">
          <Badge
            icon="vector-path"
            iconClass="text-purple-400"
            variant="unstyled"
          >
            SVG
          </Badge>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Copy SVG"
              onClick={async () =>
                notify(
                  (await copy(item.svg))
                    ? 'SVG copied'
                    : 'Clipboard unavailable. Use Download SVG.',
                )
              }
            >
              <Icon name="copy-sm" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => download(item.svg, item.filename, 'image/svg+xml')}
            >
              <Icon name="download-square" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-1 p-1">
          <div className="flex items-center justify-between gap-2">
            <Badge icon="atom" iconClass="text-sky-400" variant="unstyled">
              JSX
            </Badge>
            <IconButton
              icon={'copy-sm'}
              label="Copy JSX"
              size="icon-xs"
              variant="ghost"
              onClick={async () =>
                notify(
                  (await copy(jsx))
                    ? 'JSX copied'
                    : 'Clipboard unavailable. Select and copy the code.',
                )
              }
            ></IconButton>
          </div>

          <pre
            aria-label="React usage"
            role="region"
            tabIndex={0}
            className="overflow-x-auto rounded-md bg-inset px-2 py-1 text-[11px] leading-5 break-all whitespace-pre-wrap -outline-offset-2 focus-visible:outline-2 focus-visible:outline-muted"
            onKeyDown={(event) => {
              if (
                ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                  event.key,
                )
              )
                event.stopPropagation();
            }}
          >
            <code>{jsx}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
