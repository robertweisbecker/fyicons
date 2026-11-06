import { useId, type ReactNode } from 'react';
import { CodeBlock } from '@/components/CodeBlock';
import { Icon } from '@/components/Icon';
import type { IconRecord } from '@/lib/catalog';
import { Badge } from './ui/badge';

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

export function IconUsage({ item }: { item: IconRecord }) {
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
  );
}
