import { Collapsible } from '@base-ui/react/collapsible';
import { Icon } from '@/components/Icon';
import { fileIconColors } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { reviewChanges, reviewFiles } from './codeReviewData';

export function CodeChanges({
  selected,
  expanded,
  onSelect,
}: {
  selected: string;
  expanded: boolean;
  onSelect: (path: string) => void;
}) {
  return (
    <>
      <div className="flex h-11 min-w-0 shrink-0 items-center gap-2 border-b border-line bg-bg px-3 text-xs">
        <span className="flex shrink-0 items-center gap-1">
          <Icon name="git-commit" />
          Commit
          <Icon name="chevron-down-sm" />
        </span>
        <span className="text-emerald-600 dark:text-emerald-400">
          +{reviewChanges.reduce((total, file) => total + file.after.length, 0)}
        </span>
        <span className="text-red-500">
          -
          {reviewChanges.reduce((total, file) => total + file.before.length, 0)}
        </span>
        <span className="ml-auto flex min-w-0 items-center gap-2">
          main
          <Icon name="arrow-right" className="text-muted" />
          <Icon name="git-branch" />
          <span className="truncate">origin/main</span>
        </span>
      </div>
      <div
        className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
        aria-label="Changed files"
      >
        {reviewFiles
          .filter((file) => file.change || file.path === selected)
          .map((file) => {
            const name = file.path.split('/').at(-1)!;
            const change = reviewChanges.find(
              (item) => item.path === file.path,
            );
            const open = expanded && selected === file.path;
            return (
              <Collapsible.Root
                key={file.path}
                open={open}
                onOpenChange={() => onSelect(file.path)}
                className="border-b border-line"
              >
                <div
                  className={cn(
                    'flex items-center gap-2 pr-3 text-xs hover:bg-hover',
                    open && 'bg-active',
                  )}
                >
                  <Collapsible.Trigger
                    render={<Button variant="unstyled" size="unstyled" />}
                    aria-label={`Review ${file.path}`}
                    title={file.path}
                    className="min-h-10 min-w-0 flex-1 justify-start gap-2 rounded-none py-2 pl-3 text-left font-normal focus-visible:-outline-offset-2"
                  >
                    <Icon
                      name={open ? 'chevron-down-sm' : 'chevron-right-sm'}
                      className="text-muted"
                    />
                    <Icon
                      name={file.icon}
                      className={fileIconColors[file.icon]}
                    />
                    <span className="min-w-0 flex-1 wrap-anywhere">
                      <span className="hidden text-muted @3xl/window:inline">
                        {file.path.slice(0, -name.length)}
                      </span>
                      {name}
                    </span>
                  </Collapsible.Trigger>
                  {change && (
                    <div className="flex shrink-0 items-center gap-1.5">
                      <DemoToggle
                        label="Mark as viewed"
                        aria-label={`Mark ${name} as viewed`}
                        icon="eye"
                        activeIcon="eye-check"
                        size="icon-xs"
                        className="text-muted data-pressed:text-ink"
                      />
                      <span
                        className="w-5 text-right text-emerald-600 tabular-nums dark:text-emerald-400"
                        aria-label={`${change.after.length} additions`}
                      >
                        +{change.after.length}
                      </span>
                      <span
                        className="w-5 text-right text-red-500 tabular-nums"
                        aria-label={`${change.before.length} deletions`}
                      >
                        -{change.before.length}
                      </span>
                    </div>
                  )}
                </div>
                <Collapsible.Panel keepMounted>
                  {change ? (
                    <pre
                      className="m-0 overflow-x-auto py-2 text-xs leading-5"
                      aria-label={`Changes in ${file.path}`}
                    >
                      <code>
                        {[
                          {
                            lines: change.before,
                            sign: '−',
                            className:
                              'bg-red-500/8 text-red-700 dark:text-red-300',
                          },
                          {
                            lines: change.after,
                            sign: '+',
                            className:
                              'bg-emerald-500/8 text-emerald-700 dark:text-emerald-300',
                          },
                        ].flatMap(({ lines, sign, className }) =>
                          lines.map((line, index) => (
                            <span
                              key={`${sign}-${index}`}
                              className={cn(
                                'flex min-w-max gap-3 px-3',
                                className,
                              )}
                            >
                              <span
                                className="w-4 shrink-0 text-right tabular-nums opacity-50"
                                aria-hidden
                              >
                                {index + 1}
                              </span>
                              <span
                                aria-label={sign === '+' ? 'Added' : 'Removed'}
                              >
                                {sign}
                              </span>
                              <span>{line || ' '}</span>
                            </span>
                          )),
                        )}
                      </code>
                    </pre>
                  ) : (
                    <p className="p-3 text-xs text-muted">
                      No changes in this commit.
                    </p>
                  )}
                </Collapsible.Panel>
              </Collapsible.Root>
            );
          })}
      </div>
    </>
  );
}
