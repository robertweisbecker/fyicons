import { useId, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { FileTree, fileFolders } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';
import { CodeChanges } from './CodeChanges';
import { reviewFiles } from './codeReviewData';

export function CodeApp() {
  const [selected, setSelected] = useState(reviewFiles[0].path);
  const [openFiles, setOpenFiles] = useState([reviewFiles[0].path]);
  const [openFolders, setOpenFolders] = useState([
    'src',
    'src/components',
    'src/components/ui',
  ]);
  const [mobileFilesOpen, setMobileFilesOpen] = useState(false);
  const [desktopFilesOpen, setDesktopFilesOpen] = useState(true);
  const sidebarId = useId();
  const sidebarToggle = useRef<HTMLButtonElement>(null);
  const allOpen = openFolders.length > 0;
  const visibleFiles = reviewFiles.filter(
    (file) => file.change || file.path === selected,
  );
  const allDiffsOpen = visibleFiles.every((file) =>
    openFiles.includes(file.path),
  );

  function selectFile(path: string) {
    setSelected(path);
    setOpenFiles((current) =>
      current.includes(path) ? current : [...current, path],
    );
    setOpenFolders((current) => [
      ...new Set([
        ...current,
        ...fileFolders(reviewFiles.filter((file) => file.path === path)),
      ]),
    ]);
    if (mobileFilesOpen) sidebarToggle.current?.focus();
    setMobileFilesOpen(false);
  }

  return (
    <Window title="fyicons">
      <div className="flex min-h-10 shrink-0 flex-wrap items-center gap-x-2 gap-y-1 border-b border-line px-3 py-1 text-xs">
        <Icon name="book-bookmark" />
        <span className="hidden @sm/window:inline">fyicons</span>
        <Icon
          name="slash"
          className="mx-1 hidden text-border @sm/window:block"
        />
        <span className="flex items-center gap-1 rounded-md bg-inset px-2 py-1">
          <Icon name="git-branch" />
          main
          <Icon name="chevron-down-sm" />
        </span>
        <div className="ml-auto flex items-center gap-1 text-muted">
          <DemoIconButton
            label="More diff actions"
            icon="ellipsis"
            size="icon-sm"
          />
          <DemoIconButton
            label="Search changes"
            icon="file-search"
            size="icon-sm"
          />
          <DemoIconButton
            label="Refresh changes"
            icon="arrows-rotate"
            size="icon-sm"
          />
          <DemoToggle
            label="Wrap lines"
            icon="line-wrap"
            activeIcon="line-overflow"
            size="icon-sm"
          />
          <DemoIconButton
            label={allDiffsOpen ? 'Collapse all diffs' : 'Expand all diffs'}
            icon={allDiffsOpen ? 'list-collapse' : 'list-expand'}
            size="icon-sm"
            onClick={() =>
              setOpenFiles(
                allDiffsOpen ? [] : visibleFiles.map((file) => file.path),
              )
            }
          />
          <DemoIconButton icon="layout-rows" label="Diff view" size="icon-sm" />
          {[false, true].map((wide) => (
            <DemoToggle
              key={String(wide)}
              ref={wide ? undefined : sidebarToggle}
              icon="folders"
              activeIcon="folders-fill"
              label="Folder view"
              size="icon-sm"
              pressed={wide ? desktopFilesOpen : mobileFilesOpen}
              onPressedChange={wide ? setDesktopFilesOpen : setMobileFilesOpen}
              aria-controls={sidebarId}
              className={cn(
                'data-pressed:text-control-accent',
                wide ? 'hidden @lg/window:inline-flex' : '@lg/window:hidden',
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        <aside
          id={sidebarId}
          aria-label="Source files"
          onKeyDown={(event) => {
            if (event.key === 'Escape' && mobileFilesOpen) {
              setMobileFilesOpen(false);
              sidebarToggle.current?.focus();
            }
          }}
          className={cn(
            'min-h-0 min-w-0 flex-col border-r border-line bg-bg @lg/window:w-60 @lg/window:flex-none',
            mobileFilesOpen ? 'flex flex-1' : 'hidden',
            desktopFilesOpen ? '@lg/window:flex' : '@lg/window:hidden',
          )}
        >
          <div className="flex h-11 shrink-0 items-center gap-1 border-b border-line px-2">
            <div className="flex h-7 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-surface px-2 text-xs text-muted">
              <Icon name="search-simple" />
              <span className="truncate">Filter files...</span>
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={allOpen ? 'Collapse folders' : 'Expand folders'}
              onClick={() =>
                setOpenFolders(allOpen ? [] : fileFolders(reviewFiles))
              }
            >
              <Icon name={allOpen ? 'folder-tree-fill' : 'folder-tree'} />
            </Button>
          </div>
          <nav
            aria-label="Review files"
            className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain p-2"
          >
            <FileTree
              files={reviewFiles}
              selected={selected}
              onSelect={selectFile}
              openFolders={openFolders}
              onOpenFoldersChange={setOpenFolders}
              compact
            />
          </nav>
          <div className="flex shrink-0 flex-wrap gap-1 border-t border-line p-2 text-xs">
            {[
              ['agent', 'Ask'],
              ['bug', 'Review'],
              ['git-pull-request', 'Create PR'],
            ].map(([icon, label]) => (
              <span
                key={label}
                className="inline-flex h-7 items-center gap-1 rounded-md bg-inset px-1.5"
              >
                <Icon name={icon} />
                {label}
              </span>
            ))}
          </div>
        </aside>
        <section
          aria-label="Code review"
          className={cn(
            'min-h-0 min-w-0 flex-1 flex-col @lg/window:flex',
            mobileFilesOpen ? 'hidden' : 'flex',
          )}
        >
          <CodeChanges
            files={visibleFiles}
            openFiles={openFiles}
            onOpenChange={(path, open) => {
              if (open) selectFile(path);
              else
                setOpenFiles((current) =>
                  current.filter((file) => file !== path),
                );
            }}
          />
        </section>
      </div>
    </Window>
  );
}
