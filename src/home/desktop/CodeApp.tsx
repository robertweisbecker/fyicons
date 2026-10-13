import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { CodeStudy } from '../CodeStudy';
import { Window } from './Window';

const changes = [
  { path: 'src/components/ui/', name: 'badge.tsx', added: 3, removed: 3 },
  {
    path: 'src/components/',
    name: 'CategorySidebar.tsx',
    added: 2,
    removed: 2,
  },
  { path: 'src/components/', name: 'Inspector.tsx', added: 3, removed: 1 },
];

export function CodeApp() {
  return (
    <Window title="fyicons">
      <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto overscroll-y-contain @2xl/window:grid-cols-3">
        <aside
          className="min-w-0 border-b border-line p-2 @2xl/window:border-r @2xl/window:border-b-0"
          aria-label="Source files"
        >
          <CodeStudy />
        </aside>
        <div className="flex min-w-0 flex-col @2xl/window:col-span-2">
          <div className="flex flex-wrap items-center gap-2 border-b border-line bg-bg px-3 py-3 text-xs">
            <span className="flex items-center gap-1">
              <Icon name="git-commit" />
              Commit
              <Icon name="chevron-down-sm" />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">+8</span>
            <span className="text-red-500">-6</span>
            <span className="ml-auto flex items-center gap-2">
              <span>main</span>
              <Icon name="arrow-right" className="text-muted" />
              <Icon name="git-branch" />
              <span>origin/main</span>
            </span>
          </div>
          <div
            className="flex items-center justify-end gap-3 border-b border-line px-3 py-2 text-muted"
            aria-hidden
          >
            {[
              'ellipsis',
              'file-search',
              'arrows-rotate',
              'align-wrap',
              'list-expand',
              'file-diff',
              'folders',
            ].map((icon) => (
              <Icon key={icon} name={icon} />
            ))}
          </div>
          <div aria-label="Changed files">
            {changes.map((file) => (
              <div
                key={file.name}
                className="flex min-w-0 items-center gap-2 border-b border-line px-3 py-3 text-xs"
              >
                <Icon name="chevron-right" className="text-muted" />
                <Icon name="atom-tilt" className="text-sky-500" />
                <span className="min-w-0 flex-1 wrap-anywhere">
                  <span className="text-muted">{file.path}</span>
                  {file.name}
                </span>
                <span className="flex shrink-0 gap-1 whitespace-nowrap">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    +{file.added}
                  </span>
                  <span className="text-red-500">-{file.removed}</span>
                </span>
                <span className="hidden items-center gap-2 @4xl/window:flex">
                  <Icon name="eye" />
                  <Icon name="external-link" />
                  <Icon name="code" />
                  <Icon name="ellipsis" />
                </span>
              </div>
            ))}
          </div>
          <div className="flex-1 p-3">
            <div className="mb-2 flex min-h-8 items-center gap-2 rounded-lg border border-line px-2 text-xs text-muted shadow-xs">
              <Icon name="search-simple" />
              Filter files...
            </div>
            <div className="flex min-h-8 min-w-0 items-center gap-2 px-2 text-xs">
              <Icon name="caret-down" />
              <Icon name="folder-open" className="text-control-accent" />
              src/components
            </div>
            <div className="flex min-h-8 min-w-0 items-center gap-2 px-2 pl-6 text-xs">
              <Icon name="caret-down" />
              <Icon name="folder-open" className="text-control-accent" />
              ui
            </div>
            {changes.map((file, i) => (
              <div
                key={file.name}
                className={cn(
                  'flex min-h-8 min-w-0 items-center gap-2 pr-2 text-xs',
                  i === 0 ? 'pl-14' : 'pl-10',
                )}
              >
                <Icon name="atom-tilt" className="text-sky-500" />
                <span className="min-w-0 wrap-anywhere">{file.name}</span>
                <Icon name="git-modified" className="ml-auto text-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}
