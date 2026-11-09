import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';
import { GitHubIcon, NpmIcon } from '@/components/BrandIcons';
import { CodeBlock } from '@/components/CodeBlock';
import {
  TableOfContents,
  type DocHeading,
} from '@/components/docs/TableOfContents';
import { cn } from '@/lib/utils';

// The wrapper also styles literal HTML in MDX, such as tables and headings.
function DocsArticle({
  children,
  headings,
}: {
  children: ReactNode;
  headings: DocHeading[];
}) {
  return (
    <div className="contents">
      <TableOfContents headings={headings} />
      <article
        data-docs-content=""
        className="docs-article mx-auto w-full max-w-3xl min-w-0 pt-8 lg:col-start-2 lg:row-start-1 lg:pt-7"
      >
        {children}
      </article>
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
  wrapper: ({ children }) => children,
  DocsArticle,
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
