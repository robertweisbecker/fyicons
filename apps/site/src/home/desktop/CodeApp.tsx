import { useId, useRef, useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { FileTree, fileFolders } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';
import { CodeChanges } from './CodeChanges';
import { reviewFiles } from './codeReviewData';

import Glyph0 from 'fyicons/icons/IconAgent';
import Glyph1 from 'fyicons/icons/IconArrowClockwise';
import Glyph2 from 'fyicons/icons/IconArrowLeft';
import Glyph3 from 'fyicons/icons/IconArrowRight';
import Glyph4 from 'fyicons/icons/IconArrowsRotate';
import Glyph5 from 'fyicons/icons/IconAtomReact';
import Glyph6 from 'fyicons/icons/IconBookBookmark';
import Glyph7 from 'fyicons/icons/IconBug';
import Glyph8 from 'fyicons/icons/IconCaretsMaximize';
import Glyph9 from 'fyicons/icons/IconChevronDownSm';
import Glyph10 from 'fyicons/icons/IconChevronRightSm';
import Glyph11 from 'fyicons/icons/IconCircleUserFill';
import Glyph12 from 'fyicons/icons/IconCircleXFill';
import Glyph13 from 'fyicons/icons/IconEllipsis';
import Glyph14 from 'fyicons/icons/IconEllipsisV';
import Glyph15 from 'fyicons/icons/IconEye';
import Glyph16 from 'fyicons/icons/IconEyeCheck';
import Glyph17 from 'fyicons/icons/IconEyeFill';
import Glyph18 from 'fyicons/icons/IconFileSearch';
import Glyph19 from 'fyicons/icons/IconFileText';
import Glyph20 from 'fyicons/icons/IconFolderTree';
import Glyph21 from 'fyicons/icons/IconFolderTreeFill';
import Glyph22 from 'fyicons/icons/IconFolders';
import Glyph23 from 'fyicons/icons/IconFoldersFill';
import Glyph24 from 'fyicons/icons/IconGas';
import Glyph25 from 'fyicons/icons/IconGasFill';
import Glyph26 from 'fyicons/icons/IconGhost';
import Glyph27 from 'fyicons/icons/IconGitBranch';
import Glyph28 from 'fyicons/icons/IconGitCommit';
import Glyph29 from 'fyicons/icons/IconGitPullRequest';
import Glyph30 from 'fyicons/icons/IconInfo';
import Glyph31 from 'fyicons/icons/IconInfoFill';
import Glyph32 from 'fyicons/icons/IconLayoutRows';
import Glyph33 from 'fyicons/icons/IconLineOverflow';
import Glyph34 from 'fyicons/icons/IconLineWrap';
import Glyph35 from 'fyicons/icons/IconListCollapse';
import Glyph36 from 'fyicons/icons/IconListExpand';
import Glyph37 from 'fyicons/icons/IconMarkdownFill';
import Glyph38 from 'fyicons/icons/IconMinus';
import Glyph39 from 'fyicons/icons/IconPlus';
import Glyph40 from 'fyicons/icons/IconPuzzlePiece';
import Glyph41 from 'fyicons/icons/IconSearchSimple';
import Glyph42 from 'fyicons/icons/IconSlash';
import Glyph43 from 'fyicons/icons/IconStarFill';
import Glyph44 from 'fyicons/icons/IconVideoFill';
import Glyph45 from 'fyicons/icons/IconX';
import Glyph46 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  agent: { Component: Glyph0, id: '154:11361' },
  'arrow-clockwise': { Component: Glyph1, id: '334:6678' },
  'arrow-left': { Component: Glyph2, id: '518:4811' },
  'arrow-right': { Component: Glyph3, id: '518:4810' },
  'arrows-rotate': { Component: Glyph4, id: '841:13053' },
  'atom-react': { Component: Glyph5, id: '360:11316' },
  'book-bookmark': { Component: Glyph6, id: '329:6351' },
  bug: { Component: Glyph7, id: '129:6747' },
  'carets-maximize': { Component: Glyph8, id: '142:6370' },
  'chevron-down-sm': { Component: Glyph9, id: '142:6351' },
  'chevron-right-sm': { Component: Glyph10, id: '142:6353' },
  'circle-user-fill': { Component: Glyph11, id: '390:10591' },
  'circle-x-fill': { Component: Glyph12, id: '297:3620' },
  ellipsis: { Component: Glyph13, id: '101:4340' },
  'ellipsis-v': { Component: Glyph14, id: '487:403' },
  eye: { Component: Glyph15, id: '120:2551' },
  'eye-check': { Component: Glyph16, id: '849:16233' },
  'eye-fill': { Component: Glyph17, id: '1010:19329' },
  'file-search': { Component: Glyph18, id: '841:12902' },
  'file-text': { Component: Glyph19, id: '102:5434' },
  'folder-tree': { Component: Glyph20, id: '738:7465' },
  'folder-tree-fill': { Component: Glyph21, id: '749:4998' },
  folders: { Component: Glyph22, id: '820:11253' },
  'folders-fill': { Component: Glyph23, id: '841:13682' },
  gas: { Component: Glyph24, id: '1020:10458' },
  'gas-fill': { Component: Glyph25, id: '1167:1488' },
  ghost: { Component: Glyph26, id: '727:314' },
  'git-branch': { Component: Glyph27, id: '245:15918' },
  'git-commit': { Component: Glyph28, id: '578:2492' },
  'git-pull-request': { Component: Glyph29, id: '375:6478' },
  info: { Component: Glyph30, id: '132:4339' },
  'info-fill': { Component: Glyph31, id: '487:1519' },
  'layout-rows': { Component: Glyph32, id: '140:5918' },
  'line-overflow': { Component: Glyph33, id: '957:33092' },
  'line-wrap': { Component: Glyph34, id: '717:4230' },
  'list-collapse': { Component: Glyph35, id: '693:381' },
  'list-expand': { Component: Glyph36, id: '693:382' },
  'markdown-fill': { Component: Glyph37, id: '666:353' },
  minus: { Component: Glyph38, id: '667:899' },
  plus: { Component: Glyph39, id: '120:2544' },
  'puzzle-piece': { Component: Glyph40, id: '123:2474' },
  'search-simple': { Component: Glyph41, id: '811:9121' },
  slash: { Component: Glyph42, id: '487:1663' },
  'star-fill': { Component: Glyph43, id: '652:850' },
  'video-fill': { Component: Glyph44, id: '1013:19487' },
  x: { Component: Glyph45, id: '506:3897' },
  'zoom-in': { Component: Glyph46, id: '716:3726' },
});

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

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
