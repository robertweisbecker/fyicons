import { Children, type ReactNode } from 'react';
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
        h1: () => <h1>Changelog</h1>,
        h2: ({ children, ...props }) => (
          <h2 {...props}>
            <a
              href={`${githubHref}/releases/tag/${encodeURIComponent(`fyicons@${children}`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Version ${children} — GitHub release`}
            >
              {children}
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
