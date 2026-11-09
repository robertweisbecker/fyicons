import { Children, type ComponentProps, type ReactNode } from 'react';
import IconArrowUpRight from 'fyicons/icons/IconArrowUpRight';
import ReleaseNotes from '../../../../../../packages/fyicons/CHANGELOG.md';
import { githubHref } from '@/lib/navigation';

export const metadata = {
  title: 'Changelog',
  description:
    'FYIcons release notes, new icons, fixes, and migration guidance.',
};

function linkCommitHash(children: ReactNode) {
  const parts = Children.toArray(children);
  const first = parts[0];
  if (typeof first !== 'string') return children;
  const hash = first.match(/^[a-f0-9]{7,40}(?=:\s)/i)?.[0];
  if (!hash) return children;

  return (
    <>
      <a
        href={`${githubHref}/commit/${hash}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Commit ${hash} — GitHub`}
      >
        {hash}
      </a>
      {first.slice(hash.length)}
      {parts.slice(1)}
    </>
  );
}

export default function ChangelogPage() {
  return (
    <ReleaseNotes
      components={{
        h1: () => (
          <h1 id="changelog">
            <a
              href="#changelog"
              aria-label="Changelog"
              className="mdx-heading-link"
            >
              Changelog
            </a>
          </h1>
        ),
        h2: ({
          children,
          'data-heading-title': version,
          ...props
        }: ComponentProps<'h2'> & { 'data-heading-title'?: string }) => (
          <h2 {...props} className="flex items-center gap-2">
            {children}
            <a
              href={`${githubHref}/releases/tag/${encodeURIComponent(`fyicons@${version}`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Version ${version} — GitHub release`}
            >
              <IconArrowUpRight className="size-4 text-muted" />
            </a>
          </h2>
        ),
        p: ({ children, ...props }) => (
          <p {...props}>{linkCommitHash(children)}</p>
        ),
        li: ({ children, ...props }) => (
          <li {...props}>{linkCommitHash(children)}</li>
        ),
      }}
    />
  );
}
