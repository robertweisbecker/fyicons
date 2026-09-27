import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/Icon';
import { copy, download } from '@/lib/downloads';
import type { IconRecord } from '@/lib/catalog';

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
      <h3 id={headingId} className="text-sm font-medium">
        Use icon
      </h3>
      <div className="overflow-hidden rounded-xl border border-line">
        <div className="flex items-center justify-between gap-2 px-3 py-2">
          <span className="text-xs font-medium">React</span>
          <Button
            size="sm"
            onClick={async () =>
              notify(
                (await copy(jsx))
                  ? 'JSX copied'
                  : 'Clipboard unavailable. Select and copy the code.',
              )
            }
          >
            <Icon name="copy" />
            Copy JSX
          </Button>
        </div>
        <pre
          aria-label="React usage"
          role="region"
          tabIndex={0}
          className="overflow-x-auto bg-canvas px-3 py-4 text-xs leading-6 break-all whitespace-pre-wrap outline-offset-[-2px] focus-visible:outline-2 focus-visible:outline-muted"
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
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2">
          <span className="text-xs font-medium">SVG</span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={async () =>
                notify(
                  (await copy(item.svg))
                    ? 'SVG copied'
                    : 'Clipboard unavailable. Use Download SVG.',
                )
              }
            >
              <Icon name="copy" />
              Copy SVG
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => download(item.svg, item.filename, 'image/svg+xml')}
            >
              <Icon name="download-square" />
              Download SVG
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
