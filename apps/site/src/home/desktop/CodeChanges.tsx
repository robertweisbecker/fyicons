import { Collapsible } from '@base-ui/react/collapsible';
import { createIconLookup } from '@/components/createIconLookup';

import { fileIconColors, type ProjectFile } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { reviewChanges } from './codeReviewData';

import Glyph0 from 'fyicons/icons/IconArrowRight';
import Glyph1 from 'fyicons/icons/IconAtomReact';
import Glyph2 from 'fyicons/icons/IconChevronDownSm';
import Glyph3 from 'fyicons/icons/IconChevronRightSm';
import Glyph4 from 'fyicons/icons/IconEye';
import Glyph5 from 'fyicons/icons/IconEyeCheck';
import Glyph6 from 'fyicons/icons/IconEyeFill';
import Glyph7 from 'fyicons/icons/IconFileText';
import Glyph8 from 'fyicons/icons/IconGitBranch';
import Glyph9 from 'fyicons/icons/IconGitCommit';
import Glyph10 from 'fyicons/icons/IconMarkdownFill';
const Icon = createIconLookup({
  'arrow-right': { Component: Glyph0, id: '518:4810' },
  'atom-react': { Component: Glyph1, id: '360:11316' },
  'chevron-down-sm': { Component: Glyph2, id: '142:6351' },
  'chevron-right-sm': { Component: Glyph3, id: '142:6353' },
  eye: { Component: Glyph4, id: '120:2551' },
  'eye-check': { Component: Glyph5, id: '849:16233' },
  'eye-fill': { Component: Glyph6, id: '1010:19329' },
  'file-text': { Component: Glyph7, id: '102:5434' },
  'git-branch': { Component: Glyph8, id: '245:15918' },
  'git-commit': { Component: Glyph9, id: '578:2492' },
  'markdown-fill': { Component: Glyph10, id: '666:353' },
});

export function CodeChanges({
  files,
  openFiles,
  onOpenChange,
}: {
  files: readonly ProjectFile[];
  openFiles: readonly string[];
  onOpenChange: (path: string, open: boolean) => void;
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
        {files.map((file) => {
          const name = file.path.split('/').at(-1)!;
          const change = reviewChanges.find((item) => item.path === file.path);
          const open = openFiles.includes(file.path);
          return (
            <Collapsible.Root
              key={file.path}
              open={open}
              onOpenChange={(open) => onOpenChange(file.path, open)}
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

const { DemoToggle } = createDemoControls(Icon);
