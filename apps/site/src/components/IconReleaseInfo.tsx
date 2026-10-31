import { getIconReleases } from '@/lib/icon-releases';
import { githubHref } from '@/lib/navigation';

export function IconReleaseInfo({ id }: { id: string }) {
  const releases = getIconReleases(id);
  if (!releases) return null;
  return (
    <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
      {(
        [
          ['Added', releases.added],
          ['Updated', releases.updated],
        ] as const
      ).map(([label, version]) => (
        <div key={label} className="flex items-baseline gap-1.5">
          <dt>{label}</dt>
          <dd>
            <a
              href={`${githubHref}/releases/tag/${encodeURIComponent(`fyicons@${version}`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} in v${version} — GitHub release`}
              className="rounded-sm text-ink underline decoration-line underline-offset-4 hover:decoration-current"
            >
              v{version}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
