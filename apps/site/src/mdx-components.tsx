import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';
import { GitHubIcon, NpmIcon } from '@/components/BrandIcons';
import { CodeBlock } from '@/components/CodeBlock';
import { cn } from '@/lib/utils';

// The wrapper also styles literal HTML in MDX, such as tables and headings.
function MDXWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'text-[0.9375rem]/[1.75]',
        '[&_h1]:mb-5 [&_h1]:text-[clamp(1.75rem,4vw,2.25rem)] [&_h1]:leading-[1.2] [&_h1]:font-medium [&_h1]:tracking-[-0.04em]',
        '[&_h2]:mt-16 [&_h2]:mb-3 [&_h2]:text-xl/[1.75] [&_h2]:font-medium [&_h2]:tracking-[-0.025em]',
        '[&_h3]:mt-10 [&_h3]:mb-2 [&_h3]:font-medium',
        '[&_h4]:mt-8 [&_h4]:mb-2 [&_h4]:font-medium',
        '[&_:is(p,ul,ol,table)]:text-muted',
        '[&_strong]:font-[550] [&_strong]:text-ink',
        '[&_:is(p,ul,ol,table)]:my-4 [&>h1+p]:text-lg [&>h1+p]:text-balance [&>h1+p]:text-ink',
        '[&_:is(ul,ol)]:pl-6 [&_li+li]:mt-2 [&_ol]:list-decimal [&_ul]:list-disc',
        '[&_a]:text-ink [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[0.3em] [&_a:hover]:text-focus',
        '[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-hover [&_:not(pre)>code]:px-[0.35em] [&_:not(pre)>code]:py-[0.15em] [&_:not(pre)>code]:text-[0.875em] [&_:not(pre)>code]:text-ink',
        '[&_table]:block [&_table]:max-w-full [&_table]:border-collapse [&_table]:overflow-x-auto [&_table]:text-left',
        '[&_:is(th,td)]:border-b [&_:is(th,td)]:border-line [&_:is(th,td)]:pr-4 [&_:is(th,td)]:pl-0 [&_td]:py-2 [&_td]:text-sm [&_th]:pb-4 [&_th]:text-xs [&_th]:font-medium [&_th]:text-muted',
      )}
    >
      {children}
    </div>
  );
}

function Callout({ className, ...props }: ComponentProps<'aside'>) {
  return (
    <aside
      {...props}
      className={cn(
        'my-8 border-s-2 border-line px-5 py-1 [&>:first-child]:mt-0 [&>:last-child]:mb-0',
        className,
      )}
    />
  );
}

const components: MDXComponents = {
  wrapper: MDXWrapper,
  pre: CodeBlock,
  CodeBlock,
  Callout,
  GitHubIcon,
  NpmIcon,
  a: ({ href, children, ...props }) =>
    href?.startsWith('/') ? (
      <Link {...props} href={href}>
        {children}
      </Link>
    ) : (
      <a {...props} href={href}>
        {children}
      </a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
