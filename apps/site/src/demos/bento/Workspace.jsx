import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Toolbar } from '@base-ui/react/toolbar';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileTree } from '@/components/FileTree';
import { SidebarItem } from '@/components/Sidebar';

import { cn } from '@/lib/utils';
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconArrowRight,
  IconCloud,
  IconPrinter,
  IconSuitcase,
  IconOffice,
  IconRepeat,
  IconArchive,
  IconCircleQuestion,
  IconHome,
  IconHomeFill,
  IconInbox,
  IconInboxFill,
  IconCalendar,
  IconCalendarFill,
  IconFolder,
  IconFolderFill,
  IconUsers,
  IconUsersFill,
  IconStar,
  IconStarFill,
  IconSettings,
  IconSettingsFill,
  IconSidebarLeft,
  IconSidebarLeftFill,
  IconUndo,
  IconRedo,
  IconTextBold,
  IconItalic,
  IconTextUnderline,
  IconTextStrikethrough,
  IconHeading1,
  IconCodeBlock,
  IconQuoteBlock,
  IconListBullet,
  IconListOrdered,
  IconLink,
  IconImage,
  IconAtSign,
  IconSortDown,
  IconFilter,
  IconSearch,
  IconCircleCheckFill,
  IconProgressPie60,
  IconCircleDashed,
  IconProgressPie20,
  IconUserFill,
  IconUserPersonFill,
  IconEasel,
  IconArchiveOpen,
  IconCircleQuestionFill,
  IconPanelLeftClosed,
  IconPanelLeft,
} from 'fyicons';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('Inbox');
  const pages = [
    ['Home', IconHome, IconHomeFill],
    ['Search', IconSearch, IconSearch],
    ['Inbox', IconInbox, IconInboxFill, '4'],
    ['Calendar', IconCalendar, IconCalendarFill],
    ['Projects', IconFolder, IconFolderFill, '8'],
    ['Saved', IconStar, IconStarFill],
    ['People', IconUsers, IconUsersFill],
    ['Archive', IconArchive, IconArchiveOpen],
    ['Settings', IconSettings, IconSettingsFill],
    ['Help', IconCircleQuestion, IconCircleQuestionFill],
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="size-6 rounded-md bg-hover p-1">
            <IconEasel />
          </div>
          <span>Studio</span>
        </div>
        <IconButton
          size="icon-sm"
          label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
          icon={collapsed ? <IconPanelLeftClosed /> : <IconPanelLeft />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div
        className={cn(
          'grid motion-safe:transition-[grid-template-columns] motion-safe:duration-200 motion-safe:ease-out',
          collapsed
            ? 'grid-cols-[2rem_minmax(0,1fr)]'
            : 'grid-cols-[100%_minmax(0,1fr)]',
        )}
      >
        <nav aria-label="Studio workspace" className="min-w-0">
          {pages.map(([name, Outline, Fill, count]) => {
            const Glyph = name === active ? Fill : Outline;
            return (
              <SidebarItem
                key={name}
                icon={<Glyph className="size-4 shrink-0" />}
                active={active === name}
                aria-label={name}
                onClick={() => setActive(name)}
              >
                <span
                  aria-hidden={collapsed}
                  className={cn(
                    'flex min-w-0 flex-1 items-center justify-between overflow-hidden whitespace-nowrap motion-safe:transition-opacity motion-safe:duration-150',
                    collapsed && 'opacity-0',
                  )}
                >
                  {name}
                  {count && <span className="text-xs text-muted">{count}</span>}
                </span>
              </SidebarItem>
            );
          })}
        </nav>
        <div aria-hidden={!collapsed} className="overflow-hidden">
          <div
            className={cn(
              'ml-2 h-full rounded-xl bg-hover p-3 text-sm font-medium motion-safe:transition-opacity motion-safe:duration-150',
              !collapsed && 'opacity-0',
            )}
          >
            {active}
          </div>
        </div>
      </div>
    </div>
  );
}

const formats = [
  ['Heading', IconHeading1],
  ['Bold', IconTextBold],
  ['Italic', IconItalic],
  ['Underline', IconTextUnderline],
  ['Strikethrough', IconTextStrikethrough],
  ['Bullets', IconListBullet],
  ['Numbering', IconListOrdered],
  ['Quote', IconQuoteBlock],
  ['Code', IconCodeBlock],
  ['Link', IconLink],
  ['Image', IconImage],
  ['Mention', IconAtSign],
];
export function Editor() {
  const [history, setHistory] = useState([[]]);
  const [at, setAt] = useState(0);
  const marks = history[at];
  function toggle(name, on) {
    const blocks = ['Bullets', 'Numbering', 'Quote', 'Code'];
    const next = on
      ? [
          ...marks.filter((m) => !blocks.includes(name) || !blocks.includes(m)),
          name,
        ]
      : marks.filter((m) => m !== name);
    setHistory([...history.slice(0, at + 1), next]);
    setAt(at + 1);
  }
  return (
    <div className="space-y-5">
      <Toolbar.Root
        aria-label="Formatting"
        className="flex flex-wrap items-center gap-0.5 border-b border-line pb-2"
      >
        <Toolbar.Button
          render={<Button variant="ghost" size="icon-sm" />}
          aria-label="Undo"
          disabled={!at}
          onClick={() => setAt(at - 1)}
        >
          <IconUndo />
        </Toolbar.Button>
        <Toolbar.Button
          render={<Button variant="ghost" size="icon-sm" />}
          aria-label="Redo"
          disabled={at === history.length - 1}
          onClick={() => setAt(at + 1)}
        >
          <IconRedo />
        </Toolbar.Button>
        <Toolbar.Separator className="mx-1 h-4 w-px bg-line" />
        {formats.map(([name, Glyph]) => (
          <Toolbar.Button
            key={name}
            render={<Button variant="ghost" size="icon-sm" />}
            aria-label={name}
            title={name}
            aria-pressed={marks.includes(name)}
            onClick={() => toggle(name, !marks.includes(name))}
          >
            <Glyph />
          </Toolbar.Button>
        ))}
      </Toolbar.Root>
      <div className="min-h-24">
        <p
          className={cn(
            'text-lg leading-snug',
            marks.includes('Heading') && 'text-2xl font-semibold',
            marks.includes('Bold') && 'font-bold',
            marks.includes('Italic') && 'italic',
            marks.includes('Link') && 'text-blue-600',
            marks.includes('Code') &&
              'rounded-md bg-hover p-2 font-mono text-sm',
            marks.includes('Quote') && 'border-l-2 border-amber-500 pl-3',
          )}
          style={{
            textDecoration: [
              (marks.includes('Link') || marks.includes('Underline')) &&
                'underline',
              marks.includes('Strikethrough') && 'line-through',
            ]
              .filter(Boolean)
              .join(' '),
          }}
        >
          {marks.includes('Bullets')
            ? '• '
            : marks.includes('Numbering')
              ? '1. '
              : ''}
          Nice little icons for your nice little apps.{' '}
          {marks.includes('Mention') && (
            <span className="rounded bg-violet-100 px-1 text-violet-900">
              @sam
            </span>
          )}
        </p>
        {marks.includes('Image') && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-hover p-2 text-xs">
            <IconImage />
            screenshot.png
          </div>
        )}
      </div>
    </div>
  );
}

const projectFiles = [
  { path: 'src/components/Button.tsx', icon: 'atom-react' },
  { path: 'src/components/Inspector.tsx', icon: 'atom-react' },
  { path: 'src/icons.ts', icon: 'file-text' },
  { path: 'public/logo.svg', icon: 'page' },
  { path: 'README.md', icon: 'markdown-fill' },
];
export function Files() {
  const [open, setOpen] = useState(['src', 'src/components']);
  const [selected, setSelected] = useState(projectFiles[0].path);
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 border-b border-line pb-3 text-sm font-semibold">
        <IconFolder />
        fyicons
      </div>
      <FileTree
        compact
        files={projectFiles}
        selected={selected}
        onSelect={setSelected}
        openFolders={open}
        onOpenFoldersChange={setOpen}
      />
    </div>
  );
}

const states = {
  Draft: [IconCircleDashed, 'text-zinc-500'],
  'In review': [IconProgressPie20, 'text-orange-500'],
  Approved: [IconProgressPie60, 'text-sky-500'],
  Paid: [IconCircleCheckFill, 'text-emerald-500'],
};
const owners = {
  Ada: [IconUserPersonFill, 'bg-violet-200 text-violet-900'],
  Bob: [IconUserFill, 'bg-sky-200 text-sky-900'],
  Sam: [IconUserPersonFill, 'bg-amber-200 text-amber-900'],
  Jo: [IconUserFill, 'bg-rose-200 text-rose-900'],
};
const statusOrder = Object.keys(states);
const billTags = {
  Hosting: [IconCloud, 'text-blue-700 dark:text-blue-300'],
  Print: [IconPrinter, 'text-violet-700 dark:text-violet-300'],
  Travel: [IconSuitcase, 'text-orange-700 dark:text-orange-300'],
  Rent: [IconOffice, 'text-teal-700 dark:text-teal-300'],
  Recurring: [IconRepeat, 'text-zinc-700 dark:text-zinc-300'],
};
const bills = [
  {
    vendor: 'Aster Cloud',
    status: 'In review',
    owner: 'Ada',
    tags: ['Hosting', 'Recurring'],
    amount: 560,
    lastMonth: 500,
  },
  {
    vendor: 'Birch Print',
    status: 'Approved',
    owner: 'Bob',
    tags: ['Print'],
    amount: 384,
    lastMonth: 480,
  },
  {
    vendor: 'Northline Rail',
    status: 'Draft',
    owner: 'Sam',
    tags: ['Travel'],
    amount: 216,
    lastMonth: 200,
  },
  {
    vendor: 'Studio Row',
    status: 'Paid',
    owner: 'Jo',
    tags: ['Rent', 'Recurring'],
    amount: 2400,
    lastMonth: 2400,
  },
];
const totalBilled = bills.reduce((total, bill) => total + bill.amount, 0);
const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const changeFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  signDisplay: 'exceptZero',
});

function UpdateStatus({ name, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const [Glyph, color] = states[status];

  return (
    <Button
      size="xs"
      variant="ghost"
      className="flex w-fit leading-4"
      aria-label={name + ', ' + status + '. Advance status'}
      onClick={() =>
        setStatus(
          (current) =>
            statusOrder[
              (statusOrder.indexOf(current) + 1) % statusOrder.length
            ],
        )
      }
    >
      <Glyph className={color} />
      {status}
    </Button>
  );
}

export function Table() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="mb-3 flex h-8 items-center gap-2 text-sm text-muted"
      >
        <IconSearch />
        <span className="flex-1">Search vendors</span>
        <IconFilter className="mx-2" />
      </div>
      <ScrollArea.Root className="@container">
        <ScrollArea.Viewport
          aria-label="Monthly vendor bills"
          className="overflow-x-auto [--fade-size:.5rem]"
        >
          <ScrollArea.Content>
            <table
              aria-label="Monthly vendor bills"
              className="w-full min-w-[30rem] table-fixed border-separate border-spacing-0 text-left text-xs/4"
            >
              {/* Round column widths before the browser positions the glyphs. */}
              <colgroup>
                <col className="w-[max(5rem,round(down,17cqw,1px))]" />
                <col className="w-[max(3.5rem,round(down,10cqw,1px))]" />
                <col className="w-[max(5.5rem,round(down,17cqw,1px))]" />
                <col className="w-[max(5.5rem,round(down,16cqw,1px))]" />
                <col className="w-[max(3.5rem,round(down,11cqw,1px))]" />
                <col />
              </colgroup>
              <thead className="text-muted">
                <tr>
                  <th aria-sort="ascending">
                    <span className="flex h-6 w-16 items-center justify-between">
                      Vendor <IconSortDown />
                    </span>
                  </th>
                  <th className="pr-2 text-right">Amount</th>
                  <th className="pr-2 text-right whitespace-nowrap">
                    vs. last month
                  </th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {bills.map(
                  ({ vendor, status, owner, tags, amount, lastMonth }) => {
                    const change = (amount - lastMonth) / lastMonth;
                    const Trend =
                      change > 0
                        ? IconArrowUpRight
                        : change < 0
                          ? IconArrowDownRight
                          : IconArrowRight;
                    const trendColor =
                      change > 0
                        ? 'text-amber-700 dark:text-amber-400'
                        : change < 0
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-muted';
                    const [UserGlyph, avatarColor] = owners[owner];
                    return (
                      <tr
                        key={vendor}
                        className="shadow-[inset_0_1px_var(--color-line)]"
                      >
                        <th scope="row" className="py-2 pr-2 font-medium">
                          {vendor}
                        </th>
                        <td className="pr-2 text-right tabular-nums">
                          {currency.format(amount)}
                        </td>
                        <td className="pr-2 text-right">
                          <span
                            className={cn(
                              'ml-auto flex w-16 items-center justify-between whitespace-nowrap tabular-nums',
                              trendColor,
                            )}
                          >
                            <Trend size={12} />
                            {changeFormat.format(change)}
                          </span>
                        </td>
                        <td>
                          <UpdateStatus name={vendor} initialStatus={status} />
                        </td>
                        <td>
                          <span className="flex items-center gap-1.5">
                            <Avatar
                              aria-hidden="true"
                              className={cn('size-6', avatarColor)}
                            >
                              <AvatarFallback>
                                <UserGlyph size={16} />
                              </AvatarFallback>
                            </Avatar>
                            {owner}
                          </span>
                        </td>
                        <td className="py-1 pl-1">
                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => {
                              const [TagIcon, color] = billTags[tag];
                              return (
                                <Badge
                                  key={tag}
                                  size="sm"
                                  className={cn(
                                    'leading-4 not-last:min-w-18',
                                    color,
                                  )}
                                  icon={
                                    <TagIcon aria-hidden="true" size={12} />
                                  }
                                >
                                  {tag}
                                </Badge>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal" />
      </ScrollArea.Root>
      <footer className="mt-2 flex flex-wrap items-center justify-between gap-2 pt-2 text-xs/4 text-muted tabular-nums shadow-[inset_0_1px_var(--color-line)]">
        <span>{bills.length} bills</span>
        <span>
          Total billed{' '}
          <strong className="font-medium text-ink">
            {currency.format(totalBilled)}
          </strong>
        </span>
      </footer>
    </div>
  );
}
