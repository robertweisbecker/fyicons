import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { DemoToggle } from '@/demos/components/DemoControls';
import { Glyph } from '../Study';
import { Window } from './Window';

function SocialPost() {
  return (
    <div className="w-full">
      <p className="mb-3 text-base leading-5 text-ink">
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
          />
          6.8K
        </span>
        <span className="flex items-center gap-1">
          <Glyph name="chart-histogram" />
          242K
        </span>
        <Glyph name="share" />
      </div>
      <span className="flex items-center gap-1 text-xs text-muted">
        Relevant
        <Icon name="chevron-down-sm" />
      </span>
    </div>
  );
}

export function SocialApp() {
  const [following, setFollowing] = useState(true);
  return (
    <Window title="Bird App" className="max-w-2xl">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain p-4 text-muted">
        <div className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
          <Glyph name="arrow-left" />
          Post
          <div className="ml-auto flex gap-2">
            <Glyph name="sparkles" />
            <Glyph name="search-lg" />
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
              label="Mute profile notifications"
              icon="bell"
              activeIcon="bell-slash"
              size="icon"
              className="rounded-full border border-line"
            />
            <Button
              aria-label={following ? 'Following wint' : 'Follow wint'}
              aria-pressed={following}
              onClick={() => setFollowing(!following)}
              className="rounded-full ps-2"
              variant={following ? 'default' : 'outline'}
            >
              <Icon name={following ? 'check' : 'plus'} />
              {following ? 'Following' : 'Follow'}
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
            <Icon name="user-group-fill" />
            <span>
              <b className="text-ink">408</b> following
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Icon name="user-team-fill" />
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
        <div className="mt-3">
          <SocialPost />
        </div>
      </div>
    </Window>
  );
}
