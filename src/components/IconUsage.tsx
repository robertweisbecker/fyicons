import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/Icon';
import { download } from '@/lib/downloads';
import type { IconRecord } from '@/lib/catalog';
import { IconCopyButton } from './IconCopyButton';
import { Badge } from './ui/badge';

export function IconUsage({ item }: { item: IconRecord }) {
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
            <IconCopyButton key={item.id} item={item} />
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Download SVG"
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
            <IconCopyButton
              key={item.id}
              item={item}
              text={jsx}
              label="Copy JSX"
              size="icon-xs"
            />
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
