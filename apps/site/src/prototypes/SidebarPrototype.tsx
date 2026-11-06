'use client';

import { useState } from 'react';
import IconHome from 'fyicons/icons/IconHomeWide';
import IconHomeFill from 'fyicons/icons/IconHomeWideFill';
import IconInbox from 'fyicons/icons/IconInbox';
import IconInboxFill from 'fyicons/icons/IconInboxFill';
import IconFolder from 'fyicons/icons/IconFolder';
import IconFolderFill from 'fyicons/icons/IconFolderFill';
import IconCalendar from 'fyicons/icons/IconCalendar';
import IconCalendarSolid from 'fyicons/icons/IconCalendarSolid';
import IconBookmark from 'fyicons/icons/IconBookmark';
import IconBookmarkFill from 'fyicons/icons/IconBookmarkFill';
import IconCircleDashed from 'fyicons/icons/IconCircleDashed';
import { Button } from '@/components/ui/button';
import { ThemedStage } from '@/components/ThemedStage';
import type { Act } from '@/vendor/stageshow/act';
import { useReducedMotion } from '@/vendor/stageshow/reduced-motion';
import { Bar } from '@/vendor/stageshow/window';
import { Row } from '@/vendor/stageshow/parts/Row';
import './sidebar-prototype.css';

const items = [
  {
    label: 'Home',
    Icon: IconHome,
    Filled: IconHomeFill,
    heading: 'Welcome back',
    copy: 'Your workspace at a glance.',
    card: 'Recent activity',
  },
  {
    label: 'Inbox',
    Icon: IconInbox,
    Filled: IconInboxFill,
    heading: 'Your inbox',
    copy: 'Messages and updates in one place.',
    card: 'Latest messages',
  },
  {
    label: 'Projects',
    Icon: IconFolder,
    Filled: IconFolderFill,
    heading: 'Your projects',
    copy: 'See what you are working on.',
    card: 'Active projects',
  },
  {
    label: 'Calendar',
    Icon: IconCalendar,
    Filled: IconCalendarSolid,
    heading: 'Your calendar',
    copy: 'See what is coming up next.',
    card: 'Upcoming events',
  },
  {
    label: 'Saved',
    Icon: IconBookmark,
    Filled: IconBookmarkFill,
    heading: 'Saved items',
    copy: 'Pick up where you left off.',
    card: 'Recently saved',
  },
];

const views = [
  {
    label: 'Overview',
    heading: 'Your workspace',
    copy: 'A place for everything you are working on.',
    card: 'Recent activity',
  },
  ...items,
];

type Scene = {
  created: number;
  placeholders: number;
  resolved: number;
  selected: number;
};

const initial: Scene = {
  created: 0,
  placeholders: 0,
  resolved: 0,
  selected: -1,
};
const poster: Scene = {
  created: items.length,
  placeholders: items.length,
  resolved: items.length,
  selected: items.length - 1,
};
const cursorRest = {
  wide: { x: 735, y: 435 },
  compact: { x: 345, y: 395 },
};

async function script(a: Act<Scene>) {
  await a.wait(350);
  a.mark('labels');
  for (let i = 0; i < items.length; i++) {
    a.put({ created: i + 1 });
    await a.wait(150);
  }

  await a.wait(350);
  a.mark('placeholders');
  for (let i = 0; i < items.length; i++) {
    a.put({ placeholders: i + 1 });
    await a.wait(140);
  }

  await a.wait(500);
  a.mark('outline');
  for (let i = 0; i < items.length; i++) {
    a.put({ resolved: i + 1 });
    await a.wait(180);
  }

  await a.wait(600);
  a.mark('filled');
  for (let i = 0; i < items.length; i++) {
    await a.move({ at: `item-${i}`, x: 0.82, y: 0.5 });
    await a.click();
    a.put({ selected: i });
    await a.wait(350);
  }

  await a.wait(1800);
  a.mark('reset');
  await a.move(cursorRest[a.layout]);
  for (let i = items.length - 1; i >= 0; i--) {
    a.put({ created: i });
    await a.wait(60);
  }
  await a.wait(300);
  await a.snap(initial);
  await a.wait(200);
}

export function SidebarPrototype() {
  const [playing, setPlaying] = useState(true);
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="sidebar-prototype-title" className="max-w-3xl">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-xs text-muted">
            01 / INTERFACE STUDY
          </p>
          <h2
            id="sidebar-prototype-title"
            className="text-xl font-medium tracking-tight"
          >
            A sidebar, from scratch
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
            Watch a sidebar come together, from labels to icons with filled
            states.
          </p>
        </div>
        {!reducedMotion && (
          <Button
            variant="outline"
            size="sm"
            className="min-h-11 px-3"
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? 'Show still' : 'Play animation'}
          </Button>
        )}
      </div>

      <div
        role="img"
        aria-label="Sidebar labels appear and dashed-circle placeholders slide in. Outline FYIcons pop in, then a cursor clicks each item to show its filled icon and matching page content."
        className="overflow-hidden rounded-2xl border border-line"
      >
        <ThemedStage<Scene>
          width={760}
          height={460}
          compact={{ below: 600, width: 358, height: 420 }}
          initial={initial}
          poster={poster}
          script={playing ? script : undefined}
          cursor={
            playing
              ? { at: cursorRest, style: 'arrow', ripple: true }
              : undefined
          }
          tokens={{ '--ss-font': 'var(--font-sans)' }}
          className="sidebar-prototype"
        >
          {(scene) => (
            <div className="sidebar-prototype-page">
              <div className="sidebar-prototype-sidebar">
                <div className="sidebar-prototype-workspace">
                  <div className="sidebar-prototype-workspace-name">
                    Workspace
                  </div>
                  <div className="sidebar-prototype-workspace-detail">
                    Personal space
                  </div>
                </div>
                <div className="sidebar-prototype-nav-label">Menu</div>
                <div className="sidebar-prototype-list">
                  {items.map(({ label, Icon, Filled }, i) => (
                    <Row
                      key={label}
                      pad={12}
                      className="sidebar-prototype-row"
                      data-shown={i < scene.created || undefined}
                      data-placeholder={i < scene.placeholders || undefined}
                      data-target={`item-${i}`}
                      data-cursor="hand"
                      selected={scene.selected === i}
                      title={label}
                      lead={
                        <span
                          className="sidebar-prototype-icon"
                          data-resolved={i < scene.resolved || undefined}
                          data-filled={scene.selected === i || undefined}
                        >
                          <IconCircleDashed className="sidebar-prototype-placeholder" />
                          <span className="sidebar-prototype-outline-pop">
                            <Icon className="sidebar-prototype-outline" />
                          </span>
                          <Filled className="sidebar-prototype-fill" />
                        </span>
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="sidebar-prototype-content" data-crop>
                {views.map((view, i) => (
                  <div
                    key={view.label}
                    className="sidebar-prototype-content-view"
                    data-visible={scene.selected + 1 === i || undefined}
                  >
                    <div className="sidebar-prototype-content-bar">
                      {view.label}
                    </div>
                    <div className="sidebar-prototype-content-body">
                      <div className="sidebar-prototype-content-heading">
                        {view.heading}
                      </div>
                      <div className="sidebar-prototype-content-copy">
                        {view.copy}
                      </div>
                      <div className="sidebar-prototype-content-card">
                        <div className="sidebar-prototype-card-title">
                          {view.card}
                        </div>
                        <Bar w={150} h={7} tone={2} />
                        <Bar w={192} h={7} tone={2} />
                        <Bar w={124} h={7} tone={2} />
                      </div>
                      <div className="sidebar-prototype-content-card">
                        <Bar w={106} h={7} tone={3} />
                        <Bar w={168} h={7} tone={2} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ThemedStage>
      </div>
    </section>
  );
}
