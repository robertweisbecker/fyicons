import { getIconReleases } from '@/lib/icon-releases';
import { githubHref } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function IconReleaseInfo({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const releases = getIconReleases(id);
  if (!releases) return null;
  const rows = [['Added', releases.added]];
  if (releases.updated) rows.unshift(['Updated', releases.updated]);
  return (
    <dl
      className={cn(
        'flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted',
        className,
      )}
    >
      {rows.map(([label, version]) => (
        <div key={label} className="flex items-baseline gap-1.5">
          <dt>{label}</dt>
          <dd>
            <a
              href={`${githubHref}/releases/tag/${encodeURIComponent(`fyicons@${version}`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} in ${version} — GitHub release`}
              className="rounded-sm text-ink underline decoration-line underline-offset-4 hover:decoration-current"
            >
              {version}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
