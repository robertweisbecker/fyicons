import { useId, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/CodeBlock';
import { Icon } from '@/components/Icon';
import { download } from '@/lib/downloads';
import type { IconRecord } from '@/lib/catalog';
import { IconCopyButton } from './IconCopyButton';
import { Badge } from './ui/badge';
import { Toggle } from './ui/toggle';
import { ToggleIcon } from './ToggleIcon';
import { Tooltip } from './ui/tooltip';

function UsageSection({
  label,
  icon,
  iconClass,
  children,
}: {
  label: string;
  icon: string;
  iconClass?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="flex min-w-0 flex-col gap-1 p-1"
      onKeyDown={(event) => {
        if (
          ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
            event.key,
          )
        )
          event.stopPropagation();
      }}
    >
      <Badge
        icon={icon}
        iconClass={iconClass}
        variant="unstyled"
        className="self-start"
      >
        {label}
      </Badge>
      {children}
    </div>
  );
}

export function IconUsage({
  item,
  selected,
  toggleSelection,
}: {
  item: IconRecord;
  selected: boolean;
  toggleSelection: () => void;
}) {
  const headingId = useId();
  const jsxImport = `import { ${item.componentName} } from 'fyicons';`;
  const jsxUsage = `<${item.componentName} size={16} />`;
  const shadcnCommand = `npx shadcn@latest add robertweisbecker/fyicons/${item.name}`;

  function copyToast(label: string) {
    return {
      title: (
        <>
          <code className="rounded bg-hover px-[0.35em] py-[0.15em] font-mono text-[0.875em] wrap-anywhere text-ink">
            {`<${item.componentName}>`}
          </code>{' '}
          {label} copied
        </>
      ),
      icon: <Icon name={item.id} />,
    };
  }

  return (
    <>
      <div className="@container flex min-w-0 flex-wrap items-center gap-2">
        <IconCopyButton
          key={item.id}
          item={item}
          size="lg"
          showLabel
          className="w-full px-3.5 @3xs:w-auto @3xs:flex-1"
        >
          <span className="hidden @3xs:inline @xs:hidden">Copy</span>
          <span className="@3xs:hidden @xs:inline">Copy SVG</span>
        </IconCopyButton>
        <Button
          variant="neutral"
          aria-label="Download SVG"
          className="ml-auto size-11 min-w-0 rounded-full p-0 @3xs:ml-0 @xs:w-auto @xs:flex-1 @xs:px-3.5"
          size="lg"
          onClick={() => download(item.svg, item.filename, 'image/svg+xml')}
        >
          <Icon name="download-square" />
          <span className="hidden @xs:inline">Download</span>
        </Button>
        <Tooltip label={selected ? 'Remove from export' : 'Add to export'}>
          <Toggle
            size="icon"
            className="size-11 rounded-full data-pressed:text-control-accent"
            aria-label="Add to export"
            variant="outline"
            pressed={selected}
            onPressedChange={toggleSelection}
          >
            <ToggleIcon icon="bookmark" activeIcon="bookmark-fill" />
          </Toggle>
        </Tooltip>
      </div>
      <section
        aria-labelledby={headingId}
        className="flex min-w-0 flex-col gap-2"
      >
        <h3 id={headingId} className="text-xs font-medium">
          Usage
        </h3>
        <div
          key={item.id}
          className="divide-y divide-line overflow-hidden rounded-xl ring ring-line"
        >
          <UsageSection label="React" icon="atom" iconClass="text-sky-400">
            <CodeBlock
              aria-label="React import"
              copyToast={copyToast('Import')}
              className="p-2 text-[11px] leading-5"
            >
              <code>{jsxImport}</code>
            </CodeBlock>
            <CodeBlock
              aria-label="React usage"
              copyToast={copyToast('Usage')}
              className="p-2 text-[11px] leading-5"
            >
              <code>{jsxUsage}</code>
            </CodeBlock>
          </UsageSection>
          <UsageSection label="shadcn" icon="terminal">
            <CodeBlock
              aria-label="shadcn registry install"
              copyToast={copyToast('Registry command')}
              className="p-2 text-[11px] leading-5"
            >
              <code>{shadcnCommand}</code>
            </CodeBlock>
          </UsageSection>
        </div>
      </section>
    </>
  );
}
