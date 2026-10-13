import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';

function SocialStudy() {
  return (
    <div className="w-full">
      <div className="flex items-start gap-2">
        <Icon name="circle-user-fill" size={40} className="text-muted" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1 text-sm font-semibold">
            wint
            <Icon name="verified-fill" className="text-sky-500" />
            <span className="rounded bg-slate-200 px-1 py-px text-xs font-normal text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              Following
            </span>
          </div>
          <p className="text-xs text-muted">@dril</p>
        </div>
        <Glyph name="planet" />
        <Glyph name="ellipsis" />
      </div>
      <p className="my-4 text-base leading-5">
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

export function ProfileStudy() {
  return (
    <div className={cn(panel, 'w-full max-w-100 p-3')}>
      <div className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
        <Glyph name="arrow-left" />
        Post
        <div className="ml-auto flex gap-2">
          <Glyph name="sparkles" />
          <Glyph name="search-lg" />
        </div>
      </div>
      <div className="mb-2 flex size-14 items-center justify-center rounded-full bg-sky-300 text-sky-950">
        <Icon name="emoji-melting" size={32} />
      </div>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-1 text-base font-semibold text-ink">
            wint
            <Icon name="verified-fill" className="text-sky-500" />
          </p>
          <p className="flex items-center gap-1 text-sm text-muted">
            <Icon name="at-sign" />
            dril
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Glyph
            name="ellipsis"
            className="size-8 rounded-full border border-line"
          />
          <Glyph
            name="chat-round"
            className="size-8 rounded-full border border-line"
          />
          <DemoToggle
            label="Mute profile notifications"
            icon="bell"
            activeIcon="bell-slash"
            size="icon"
            className="rounded-full border border-line"
          />
          <span className="flex h-8 items-center gap-0.5 rounded-full bg-ink pr-3 pl-2 text-xs text-canvas">
            <Icon name="check-sm" />
            Following
          </span>
        </div>
      </div>
      <div className="mb-4 space-y-1 text-sm text-muted">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1">
            <Icon name="briefcase" />
            Entertainment &amp; Recreation
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="location-pin-round" />
            LA
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="link" />
            <span className="text-sky-600 dark:text-sky-400">example.com</span>
          </span>
        </div>
        <p className="flex items-center gap-1">
          <Icon name="calendar-simple-days" />
          Joined September 2008
          <Icon name="chevron-right" />
        </p>
      </div>
      <div className="mb-3 flex flex-wrap gap-4 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Icon name="users-group-fill" />
          <span>
            <b className="text-ink">408</b> following
          </span>
        </span>
        <span className="flex items-center gap-1">
          <Icon name="users-team-fill" />
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
            className="flex h-14 min-w-0 flex-1 flex-col gap-1 border-b-2 border-transparent p-2 text-sm font-normal hover:bg-current/5 data-pressed:border-sky-600 data-pressed:text-ink"
          >
            <Icon name={icon} />
            {label}
          </Toggle>
        ))}
      </ToggleGroup>
      <div className="mt-4">
        <SocialStudy />
      </div>
    </div>
  );
}
