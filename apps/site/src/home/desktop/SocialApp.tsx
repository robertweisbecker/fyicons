import { useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { createDemoControls } from '@/demos/components/DemoControls';
import { createGlyph } from '../Study';
import { Window } from './Window';

import Glyph0 from 'fyicons/icons/IconArrowClockwise';
import Glyph1 from 'fyicons/icons/IconArrowLeft';
import Glyph2 from 'fyicons/icons/IconArrowRight';
import Glyph3 from 'fyicons/icons/IconArrowsRepost';
import Glyph4 from 'fyicons/icons/IconAtSign';
import Glyph5 from 'fyicons/icons/IconBell';
import Glyph6 from 'fyicons/icons/IconBellFill';
import Glyph7 from 'fyicons/icons/IconBellSlash';
import Glyph8 from 'fyicons/icons/IconBird';
import Glyph9 from 'fyicons/icons/IconBookmark';
import Glyph10 from 'fyicons/icons/IconBookmarkFill';
import Glyph11 from 'fyicons/icons/IconBriefcase';
import Glyph12 from 'fyicons/icons/IconCalendarSimpleDays';
import Glyph13 from 'fyicons/icons/IconCaretsMaximize';
import Glyph14 from 'fyicons/icons/IconChartHistogram';
import Glyph15 from 'fyicons/icons/IconChatRound';
import Glyph16 from 'fyicons/icons/IconCheck';
import Glyph17 from 'fyicons/icons/IconChevronRight';
import Glyph18 from 'fyicons/icons/IconCircleUserFill';
import Glyph19 from 'fyicons/icons/IconCircleXFill';
import Glyph20 from 'fyicons/icons/IconEllipsis';
import Glyph21 from 'fyicons/icons/IconEllipsisV';
import Glyph22 from 'fyicons/icons/IconEmojiMelt';
import Glyph23 from 'fyicons/icons/IconEmojiMeltFill';
import Glyph24 from 'fyicons/icons/IconGas';
import Glyph25 from 'fyicons/icons/IconGasFill';
import Glyph26 from 'fyicons/icons/IconHeartAlt';
import Glyph27 from 'fyicons/icons/IconHeartAltFill';
import Glyph28 from 'fyicons/icons/IconHomeBirdhouse';
import Glyph29 from 'fyicons/icons/IconHomeBirdhouseFill';
import Glyph30 from 'fyicons/icons/IconImages';
import Glyph31 from 'fyicons/icons/IconInfo';
import Glyph32 from 'fyicons/icons/IconInfoFill';
import Glyph33 from 'fyicons/icons/IconLink';
import Glyph34 from 'fyicons/icons/IconMapMarkerRound';
import Glyph35 from 'fyicons/icons/IconMinus';
import Glyph36 from 'fyicons/icons/IconPlus';
import Glyph37 from 'fyicons/icons/IconPosts';
import Glyph38 from 'fyicons/icons/IconPuzzlePiece';
import Glyph39 from 'fyicons/icons/IconQuill';
import Glyph40 from 'fyicons/icons/IconSearch';
import Glyph41 from 'fyicons/icons/IconShare';
import Glyph42 from 'fyicons/icons/IconSparkles';
import Glyph43 from 'fyicons/icons/IconSparklesFill';
import Glyph44 from 'fyicons/icons/IconStarFill';
import Glyph45 from 'fyicons/icons/IconUsersThreeFill';
import Glyph46 from 'fyicons/icons/IconUsersTwoFill';
import Glyph47 from 'fyicons/icons/IconVerifiedFill';
import Glyph48 from 'fyicons/icons/IconVideoFill';
import Glyph49 from 'fyicons/icons/IconVideos';
import Glyph50 from 'fyicons/icons/IconX';
import Glyph51 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  'arrow-clockwise': { Component: Glyph0, id: '334:6678' },
  'arrow-left': { Component: Glyph1, id: '518:4811' },
  'arrow-right': { Component: Glyph2, id: '518:4810' },
  'arrows-repost': { Component: Glyph3, id: '593:3691' },
  'at-sign': { Component: Glyph4, id: '117:2152' },
  bell: { Component: Glyph5, id: '101:4284' },
  'bell-fill': { Component: Glyph6, id: '1205:10916' },
  'bell-slash': { Component: Glyph7, id: '705:2000' },
  bird: { Component: Glyph8, id: '1001:822' },
  bookmark: { Component: Glyph9, id: '124:2571' },
  'bookmark-fill': { Component: Glyph10, id: '506:2914' },
  briefcase: { Component: Glyph11, id: '727:332' },
  'calendar-simple-days': { Component: Glyph12, id: '736:7112' },
  'carets-maximize': { Component: Glyph13, id: '142:6370' },
  'chart-histogram': { Component: Glyph14, id: '736:7198' },
  'chat-round': { Component: Glyph15, id: '245:15024' },
  check: { Component: Glyph16, id: '96:1604' },
  'chevron-right': { Component: Glyph17, id: '506:3912' },
  'circle-user-fill': { Component: Glyph18, id: '390:10591' },
  'circle-x-fill': { Component: Glyph19, id: '297:3620' },
  ellipsis: { Component: Glyph20, id: '101:4340' },
  'ellipsis-v': { Component: Glyph21, id: '487:403' },
  'emoji-melt': { Component: Glyph22, id: '360:11297' },
  'emoji-melt-fill': { Component: Glyph23, id: '1323:11766' },
  gas: { Component: Glyph24, id: '1020:10458' },
  'gas-fill': { Component: Glyph25, id: '1167:1488' },
  'heart-alt': { Component: Glyph26, id: '378:8264' },
  'heart-alt-fill': { Component: Glyph27, id: '378:8265' },
  'home-birdhouse': { Component: Glyph28, id: '313:17365' },
  'home-birdhouse-fill': { Component: Glyph29, id: '667:678' },
  images: { Component: Glyph30, id: '132:4366' },
  info: { Component: Glyph31, id: '132:4339' },
  'info-fill': { Component: Glyph32, id: '487:1519' },
  link: { Component: Glyph33, id: '58:9555' },
  'map-marker-round': { Component: Glyph34, id: '376:6544' },
  minus: { Component: Glyph35, id: '667:899' },
  plus: { Component: Glyph36, id: '120:2544' },
  posts: { Component: Glyph37, id: '521:7821' },
  'puzzle-piece': { Component: Glyph38, id: '123:2474' },
  quill: { Component: Glyph39, id: '1470:13121' },
  search: { Component: Glyph40, id: '101:4349' },
  share: { Component: Glyph41, id: '343:9459' },
  sparkles: { Component: Glyph42, id: '11:883' },
  'sparkles-fill': { Component: Glyph43, id: '856:18071' },
  'star-fill': { Component: Glyph44, id: '652:850' },
  'users-three-fill': { Component: Glyph45, id: '606:5304' },
  'users-two-fill': { Component: Glyph46, id: '578:2616' },
  'verified-fill': { Component: Glyph47, id: '282:17261' },
  'video-fill': { Component: Glyph48, id: '1013:19487' },
  videos: { Component: Glyph49, id: '752:5509' },
  x: { Component: Glyph50, id: '506:3897' },
  'zoom-in': { Component: Glyph51, id: '716:3726' },
});

function SocialPost() {
  return (
    <div className="w-full">
      <p className="mb-3 text-lg leading-7 text-balance text-ink">
        “i'm not owned! im not owned!!”, i continue to insist as i slowly shrink
        and transform into a corn cob
      </p>
      <p className="text-xs leading-5 text-muted">4:20 PM ∙ Nov 10, 2011</p>
      <div className="my-3 flex flex-wrap items-center justify-between gap-x-1 gap-y-2 border-y border-line py-3 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Glyph name="chat-round" />
          202
        </span>
        <span className="flex items-center gap-1">
          <DemoToggle
            label="Repost"
            icon="arrows-repost"
            size="icon-sm"
            className="data-pressed:text-emerald-700 dark:data-pressed:text-emerald-400"
          />
          32K
        </span>
        <span className="flex items-center gap-1">
          <DemoToggle
            label="Like post"
            icon="heart-alt"
            activeIcon="heart-alt-fill"
            size="icon-sm"
            defaultPressed
            className="data-pressed:bg-transparent data-pressed:text-rose-500"
          />
          57K
        </span>
        <span className="flex items-center gap-1">
          <DemoToggle
            label="Bookmark post"
            icon="bookmark"
            activeIcon="bookmark-fill"
            size="icon-sm"
            className="data-pressed:bg-transparent data-pressed:text-sky-500"
          />
          6.8K
        </span>
        <span className="flex items-center gap-1 max-sm:hidden">
          <Glyph name="chart-histogram" />
          242K
        </span>
        <Glyph name="share" />
      </div>
    </div>
  );
}

export function SocialApp() {
  const [following, setFollowing] = useState(true);
  return (
    <Window
      title={
        <>
          <Icon name="bird" /> Bird App
        </>
      }
      className="max-w-2xl"
    >
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain p-4 text-muted">
        <div className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
          <Glyph name="arrow-left" />
          Post
          <div className="ml-auto flex gap-2">
            <Glyph name="sparkles" />
            <Glyph name="search" />
            <Glyph name="quill" />
            <Glyph name="home-birdhouse" />
          </div>
        </div>
        <div className="mb-3 flex items-center gap-2 @md/window:gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-300 text-sky-950 @min-[18rem]/window:size-10 @md/window:size-14">
            <Icon name="emoji-melt" className="size-6 @md/window:size-8" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1 text-sm font-semibold text-ink @md/window:text-base">
              wint
              <Icon name="verified-fill" className="text-sky-500" />
            </p>
            <p className="flex items-center gap-1 text-sm text-muted">
              <Icon name="at-sign" />
              dril
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 @md/window:gap-2">
            <Glyph
              name="ellipsis"
              className="hidden size-8 rounded-full border border-line @sm/window:inline-flex"
            />
            <Glyph
              name="chat-round"
              className="hidden size-8 rounded-full border border-line @sm/window:inline-flex"
            />
            <DemoToggle
              label="Tweet notifications"
              icon="bell"
              activeIcon="bell-slash"
              size="icon"
              className="rounded-full outline outline-line"
            />
            <Button
              aria-pressed={following}
              onClick={() => setFollowing(!following)}
              className="rounded-full"
              variant={following ? 'default' : 'outline'}
            >
              <Icon name={following ? 'check' : 'plus'} />
              Follow
            </Button>
          </div>
        </div>
        <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 text-xs leading-5 text-muted">
          <span className="inline-flex items-center gap-1">
            <Icon name="briefcase" />
            Entertainment &amp; Recreation
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="map-marker-round" />
            LA
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="link" />
            <span className="text-sky-600 dark:text-sky-400">example.com</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="calendar-simple-days" />
            Joined September 2008
            <Icon name="chevron-right" />
          </span>
          <span className="flex items-center gap-1">
            <Icon name="users-two-fill" />
            <span>
              <b className="text-ink">408</b> following
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Icon name="users-three-fill" />
            <span>
              <b className="text-ink">1.6M</b> followers
            </span>
          </span>
        </div>
        <ToggleGroup
          defaultValue={['posts']}
          aria-label="Profile view"
          className="gap-0 border-b border-line"
        >
          {[
            ['posts', 'Posts'],
            ['chat-round', 'Replies'],
            ['videos', 'Videos'],
            ['images', 'Photos'],
          ].map(([icon, label]) => (
            <Toggle
              key={icon}
              value={icon}
              variant="unstyled"
              size="unstyled"
              className="flex h-11 min-w-0 flex-1 flex-col gap-0.5 border-b-2 border-transparent px-2 py-1 text-xs leading-4 font-normal hover:bg-current/5 data-pressed:border-sky-600 data-pressed:text-ink"
            >
              <Icon name={icon} />
              {label}
            </Toggle>
          ))}
        </ToggleGroup>
        <div className="mt-6">
          <SocialPost />
        </div>
      </div>
    </Window>
  );
}

const Glyph = createGlyph(Icon);

const { DemoToggle } = createDemoControls(Icon);
