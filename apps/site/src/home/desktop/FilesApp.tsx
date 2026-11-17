import { useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';
import { Badge } from '@/components/ui/badge';

import Glyph0 from 'fyicons/icons/IconAlert';
import Glyph1 from 'fyicons/icons/IconAlertFill';
import Glyph2 from 'fyicons/icons/IconApps';
import Glyph3 from 'fyicons/icons/IconArrowClockwise';
import Glyph4 from 'fyicons/icons/IconArrowLeft';
import Glyph5 from 'fyicons/icons/IconArrowRight';
import Glyph6 from 'fyicons/icons/IconCalendarSolid';
import Glyph7 from 'fyicons/icons/IconCarFront';
import Glyph8 from 'fyicons/icons/IconCaretDown';
import Glyph9 from 'fyicons/icons/IconCaretsMaximize';
import Glyph10 from 'fyicons/icons/IconChevronRightSm';
import Glyph11 from 'fyicons/icons/IconCircleCheckFill';
import Glyph12 from 'fyicons/icons/IconCircleQuestion';
import Glyph13 from 'fyicons/icons/IconCircleQuestionFill';
import Glyph14 from 'fyicons/icons/IconCircleUserFill';
import Glyph15 from 'fyicons/icons/IconCircleXFill';
import Glyph16 from 'fyicons/icons/IconClock';
import Glyph17 from 'fyicons/icons/IconClockFill';
import Glyph18 from 'fyicons/icons/IconCloud';
import Glyph19 from 'fyicons/icons/IconCollection';
import Glyph20 from 'fyicons/icons/IconDevices';
import Glyph21 from 'fyicons/icons/IconEllipsis';
import Glyph22 from 'fyicons/icons/IconEllipsisV';
import Glyph23 from 'fyicons/icons/IconEllipsisVSm';
import Glyph24 from 'fyicons/icons/IconFileCode';
import Glyph25 from 'fyicons/icons/IconFileSvg';
import Glyph26 from 'fyicons/icons/IconFileText';
import Glyph27 from 'fyicons/icons/IconFileZip';
import Glyph28 from 'fyicons/icons/IconFilterLines';
import Glyph29 from 'fyicons/icons/IconFolderOpen';
import Glyph30 from 'fyicons/icons/IconFolderOpenFill';
import Glyph31 from 'fyicons/icons/IconGas';
import Glyph32 from 'fyicons/icons/IconGasFill';
import Glyph33 from 'fyicons/icons/IconGaugeSimple';
import Glyph34 from 'fyicons/icons/IconGrid';
import Glyph35 from 'fyicons/icons/IconGridFill';
import Glyph36 from 'fyicons/icons/IconHardDrive';
import Glyph37 from 'fyicons/icons/IconHomeSimple';
import Glyph38 from 'fyicons/icons/IconHomeSimpleFill';
import Glyph39 from 'fyicons/icons/IconImage';
import Glyph40 from 'fyicons/icons/IconImageFill';
import Glyph41 from 'fyicons/icons/IconInfo';
import Glyph42 from 'fyicons/icons/IconInfoFill';
import Glyph43 from 'fyicons/icons/IconLightbulbSimpleFill';
import Glyph44 from 'fyicons/icons/IconListThumbnails';
import Glyph45 from 'fyicons/icons/IconListThumbnailsFill';
import Glyph46 from 'fyicons/icons/IconMinus';
import Glyph47 from 'fyicons/icons/IconPlus';
import Glyph48 from 'fyicons/icons/IconPuzzlePiece';
import Glyph49 from 'fyicons/icons/IconSearchSimple';
import Glyph50 from 'fyicons/icons/IconSettings';
import Glyph51 from 'fyicons/icons/IconSettingsFill';
import Glyph52 from 'fyicons/icons/IconSliders';
import Glyph53 from 'fyicons/icons/IconSlidersFill';
import Glyph54 from 'fyicons/icons/IconSparkleFill';
import Glyph55 from 'fyicons/icons/IconSparkles';
import Glyph56 from 'fyicons/icons/IconSparklesFill';
import Glyph57 from 'fyicons/icons/IconStar';
import Glyph58 from 'fyicons/icons/IconStarFill';
import Glyph59 from 'fyicons/icons/IconTrash';
import Glyph60 from 'fyicons/icons/IconUserFill';
import Glyph61 from 'fyicons/icons/IconUsersThreeFill';
import Glyph62 from 'fyicons/icons/IconUsersTwo';
import Glyph63 from 'fyicons/icons/IconUsersTwoFill';
import Glyph64 from 'fyicons/icons/IconVideo';
import Glyph65 from 'fyicons/icons/IconVideoFill';
import Glyph66 from 'fyicons/icons/IconX';
import Glyph67 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  alert: { Component: Glyph0, id: '667:563' },
  'alert-fill': { Component: Glyph1, id: '667:570' },
  apps: { Component: Glyph2, id: '507:4365' },
  'arrow-clockwise': { Component: Glyph3, id: '334:6678' },
  'arrow-left': { Component: Glyph4, id: '518:4811' },
  'arrow-right': { Component: Glyph5, id: '518:4810' },
  'calendar-solid': { Component: Glyph6, id: '96:1603' },
  'car-front': { Component: Glyph7, id: '919:32915' },
  'caret-down': { Component: Glyph8, id: '140:5990' },
  'carets-maximize': { Component: Glyph9, id: '142:6370' },
  'chevron-right-sm': { Component: Glyph10, id: '142:6353' },
  'circle-check-fill': { Component: Glyph11, id: '506:2715' },
  'circle-question': { Component: Glyph12, id: '124:2591' },
  'circle-question-fill': { Component: Glyph13, id: '578:2391' },
  'circle-user-fill': { Component: Glyph14, id: '390:10591' },
  'circle-x-fill': { Component: Glyph15, id: '297:3620' },
  clock: { Component: Glyph16, id: '245:15235' },
  'clock-fill': { Component: Glyph17, id: '716:3694' },
  cloud: { Component: Glyph18, id: '129:5293' },
  collection: { Component: Glyph19, id: '737:7261' },
  devices: { Component: Glyph20, id: '378:8613' },
  ellipsis: { Component: Glyph21, id: '101:4340' },
  'ellipsis-v': { Component: Glyph22, id: '487:403' },
  'ellipsis-v-sm': { Component: Glyph23, id: '101:4341' },
  'file-code': { Component: Glyph24, id: '548:8661' },
  'file-svg': { Component: Glyph25, id: '820:11248' },
  'file-text': { Component: Glyph26, id: '102:5434' },
  'file-zip': { Component: Glyph27, id: '892:30534' },
  'filter-lines': { Component: Glyph28, id: '388:10332' },
  'folder-open': { Component: Glyph29, id: '102:4393' },
  'folder-open-fill': { Component: Glyph30, id: '741:7694' },
  gas: { Component: Glyph31, id: '1020:10458' },
  'gas-fill': { Component: Glyph32, id: '1167:1488' },
  'gauge-simple': { Component: Glyph33, id: '375:6428' },
  grid: { Component: Glyph34, id: '102:4381' },
  'grid-fill': { Component: Glyph35, id: '811:8579' },
  'hard-drive': { Component: Glyph36, id: '505:527' },
  'home-simple': { Component: Glyph37, id: '282:16541' },
  'home-simple-fill': { Component: Glyph38, id: '487:1759' },
  image: { Component: Glyph39, id: '132:4345' },
  'image-fill': { Component: Glyph40, id: '1347:1840' },
  info: { Component: Glyph41, id: '132:4339' },
  'info-fill': { Component: Glyph42, id: '487:1519' },
  'lightbulb-simple-fill': { Component: Glyph43, id: '849:17265' },
  'list-thumbnails': { Component: Glyph44, id: '282:16080' },
  'list-thumbnails-fill': { Component: Glyph45, id: '944:33003' },
  minus: { Component: Glyph46, id: '667:899' },
  plus: { Component: Glyph47, id: '120:2544' },
  'puzzle-piece': { Component: Glyph48, id: '123:2474' },
  'search-simple': { Component: Glyph49, id: '811:9121' },
  settings: { Component: Glyph50, id: '60:2302' },
  'settings-fill': { Component: Glyph51, id: '578:2559' },
  sliders: { Component: Glyph52, id: '328:6275' },
  'sliders-fill': { Component: Glyph53, id: '1084:11018' },
  'sparkle-fill': { Component: Glyph54, id: '856:18075' },
  sparkles: { Component: Glyph55, id: '11:883' },
  'sparkles-fill': { Component: Glyph56, id: '856:18071' },
  star: { Component: Glyph57, id: '127:4125' },
  'star-fill': { Component: Glyph58, id: '652:850' },
  trash: { Component: Glyph59, id: '100:2287' },
  'user-fill': { Component: Glyph60, id: '328:6260' },
  'users-three-fill': { Component: Glyph61, id: '606:5304' },
  'users-two': { Component: Glyph62, id: '505:647' },
  'users-two-fill': { Component: Glyph63, id: '578:2616' },
  video: { Component: Glyph64, id: '734:6316' },
  'video-fill': { Component: Glyph65, id: '1013:19487' },
  x: { Component: Glyph66, id: '506:3897' },
  'zoom-in': { Component: Glyph67, id: '716:3726' },
});

const locations = [
  ['home-simple', 'Home'],
  ['collection', 'Projects'],
  ['hard-drive', 'My Drive'],
  ['devices', 'Computers'],
  ['users-two', 'Shared with me'],
  ['clock', 'Recent'],
  ['star', 'Starred'],
  ['alert', 'Spam'],
  ['trash', 'Trash'],
] as const;

const files = [
  ['file.png', 'image', 'text-rose-500'],
  ['file.mp4', 'video', 'text-violet-500'],
  ['file.svg', 'file-svg', 'text-amber-500'],
  ['file.txt', 'file-text', 'text-sky-600'],
  ['file.js', 'file-code', 'text-blue-500'],
  ['file.zip', 'file-zip', 'text-emerald-600'],
] as const;

function DriveLocations() {
  return (
    <div className="flex min-h-full flex-col gap-1 text-xs @2xl/window:ps-2">
      <div className="px-1 pt-px">
        <div
          title="New"
          className="flex min-h-8 w-fit items-center gap-2 rounded-lg bg-surface px-2 text-xs font-medium shadow-xs ring ring-border"
        >
          <Icon name="plus" />
          <span className="sr-only flex px-2 @2xl/window:not-sr-only">New</span>
        </div>
      </div>
      <ul className="space-y-px">
        {locations.map(([icon, label]) => (
          <li
            key={label}
            className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3 text-muted hover:bg-hover hover:text-ink @2xl/window:justify-start"
          >
            <Icon name={icon} />
            <span className="sr-only @2xl/window:not-sr-only">{label}</span>
          </li>
        ))}
      </ul>
      <div className="h-px bg-line" />
      <span className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3 text-muted hover:bg-hover hover:text-ink @2xl/window:justify-start">
        <Icon name="cloud" />
        <span className="sr-only @2xl/window:not-sr-only">Storage</span>
        <Badge
          variant="elevated"
          size="sm"
          icon={<Icon name="gauge-simple" className="-my-1 size-3" />}
          className="ms-auto -me-2 @max-2xl:hidden"
        >
          50%
        </Badge>
      </span>
    </div>
  );
}

export function FilesApp() {
  const [view, setView] = useState(['grid']);
  const list = view[0] === 'list';
  return (
    <Window title="Files" className="bg-canvas">
      <div className="flex min-w-0 shrink-0 items-center gap-2 p-3">
        <div className="flex shrink-0 items-center gap-2 @2xl/window:w-40">
          <Icon name="car-front" />
          <span className="hidden @sm/window:inline">Drive</span>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-hover px-3 py-2 text-xs text-muted">
          <Icon name="search-simple" />
          <span>Search</span>
          <Icon name="filter-lines" className="ml-auto" />
          <Icon name="sliders" />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {[
            'circle-question',
            'settings',
            'sparkles',
            'apps',
            'circle-user-fill',
          ].map((icon) => (
            <Icon key={icon} name={icon} />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 gap-2 pb-3">
        <aside
          className="w-12 shrink-0 overflow-y-auto overscroll-y-contain @2xl/window:w-44"
          aria-label="Drive locations"
        >
          <DriveLocations />
        </aside>
        <div className="min-w-0 flex-1 overflow-y-auto overscroll-y-contain rounded-xl bg-surface p-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="flex items-center gap-2">
              <Icon name="clock" />
              Recent
            </span>
            <Icon name="chevron-right-sm" className="text-muted" />
            <span className="hidden items-center gap-2 @3xl/window:flex">
              <Icon name="ellipsis" />
              <Icon name="chevron-right-sm" />
            </span>
            <span className="flex items-center gap-1">
              <Icon name="folder-open" />
              Album
              <Icon name="caret-down" />
            </span>
            <Icon
              name="users-three-fill"
              className="hidden text-muted @3xl/window:block"
            />
            <ToggleGroup
              value={view}
              onValueChange={(v) => v.length && setView(v)}
              aria-label="File view"
              className="ml-auto gap-0 rounded-lg bg-canvas p-px"
            >
              <DemoToggle
                value="list"
                icon="list-thumbnails"
                label="List view"
                size="icon-sm"
                variant="elevated"
              />
              <DemoToggle
                value="grid"
                icon="grid"
                label="Grid view"
                size="icon-sm"
                variant="elevated"
              />
            </ToggleGroup>
          </div>
          <div className="my-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="flex min-h-7 items-center gap-1 rounded-full bg-selection px-2 text-control-accent">
              <Icon name="sparkle-fill" />
              Ask
            </span>
            <span className="h-4 w-px bg-line" />
            {['Type', 'People', 'Modified'].map((label) => (
              <span
                key={label}
                className="inline-flex min-h-7 items-center gap-1 rounded-lg border border-border px-2"
              >
                {label}
                <Icon name="caret-down" />
              </span>
            ))}
          </div>
          <div
            className={cn(
              'grid gap-2',
              !list && '@sm/window:grid-cols-2 @2xl/window:grid-cols-3',
            )}
            data-view={view[0]}
            aria-label="Album files"
          >
            {files.map(([name, icon, color]) => (
              <div
                key={name}
                className={cn(
                  'min-w-0 rounded-lg bg-canvas p-1',
                  list && 'flex items-center gap-2',
                )}
              >
                <div className="flex min-w-0 flex-1 items-center gap-1 p-1 text-xs">
                  {!list && <Icon name={icon} className={color} />}
                  <span className="truncate">{name}</span>
                  <Icon name="ellipsis-v-sm" className="ml-auto" />
                </div>
                <div
                  className={cn(
                    'flex items-center justify-center rounded-md bg-current/10',
                    color,
                    list ? 'order-first size-10 shrink-0' : 'h-24',
                  )}
                >
                  <Icon name={icon} size={list ? 20 : 32} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex w-8 shrink-0 flex-col items-center gap-5 pt-3"
          aria-hidden
        >
          <Icon name="calendar-solid" className="text-blue-500" />
          <Icon name="lightbulb-simple-fill" className="text-amber-500" />
          <Icon name="circle-check-fill" className="text-sky-600" />
          <Icon name="user-fill" className="text-violet-500" />
          <span className="h-px w-4 bg-line" />
          <Icon name="plus" />
        </div>
      </div>
    </Window>
  );
}

const { DemoToggle } = createDemoControls(Icon);
