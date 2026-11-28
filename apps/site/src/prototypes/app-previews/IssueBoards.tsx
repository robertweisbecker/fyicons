'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import {
  IconActivity,
  IconArrowClockwise,
  IconChatRound,
  IconChevronDownSm,
  IconCircleUser,
  IconFilterLines,
  IconFlag,
  IconFolder,
  IconGitMerge,
  IconGitPullRequest,
  IconGripV,
  IconInbox,
  IconLayoutColumnsThree,
  IconLink,
  IconPlus,
  IconProgressTask50,
  IconProgressTask75,
  IconProgressTaskDone,
  IconProgressTaskTodo,
  IconSearch,
  IconSignalThree2,
  IconSliders,
  IconStack,
  IconTag,
} from 'fyicons';
import { Button } from '@/components/ui/button';
import type { Act } from '@/vendor/stageshow/act';
import { Stage } from '@/vendor/stageshow/stage';
import { Card } from '@/vendor/stageshow/parts/Card';
import { Row } from '@/vendor/stageshow/parts/Row';
import { Bar, Window } from '@/vendor/stageshow/window';
import './issue-boards.css';

type Variant = 'drag' | 'merge';
type BoardState = {
  dragging: boolean;
  reserveDone: boolean;
  done: boolean;
  merged: boolean;
  dx: number;
  dy: number;
};

const initial: BoardState = {
  dragging: false,
  reserveDone: false,
  done: false,
  merged: false,
  dx: 0,
  dy: 0,
};
const completed = { ...initial, reserveDone: true, done: true };

async function dragIssue(a: Act<BoardState>) {
  await a.wait(800);
  await a.move('grip');
  await a.wait(230);
  const from = a.rect('source');
  const to = a.rect('destination');
  const grip = a.center('grip');
  const distance = to.x - from.x;
  a.mark('pickup');
  await a.drag(
    { x: grip.x + distance, y: grip.y },
    (point, start) => {
      const dx = point.x - start.x;
      a.put({
        dragging: true,
        dx,
        dy: point.y - start.y,
        reserveDone: dx > distance * 0.55,
      });
    },
    { duration: 1100 },
  );
  a.mark('drop');
  await a.set(completed);
  await a.wait(450);
  await a.move('rest', { duration: 380 });
}

async function mergeIssue(a: Act<BoardState>) {
  await a.wait(1150);
  a.mark('merge');
  await a.set({ merged: true });
  await a.wait(700);
  a.mark('transfer');
  await a.set({ reserveDone: true });
  await a.wait(520);
  a.mark('done');
  await a.set({ done: true });
}

const studies = {
  drag: {
    caption: 'Issue tracker · Board drag',
    title: 'Team issues',
    issue: 'Focus ring',
    id: 'UI-142',
    description:
      'A cursor drags UI-142, Focus ring, from In progress to Done. The status changes to a checkmark as the other cards make room.',
  },
  merge: {
    caption: 'Issue tracker · Merge automation',
    title: 'Release board',
    issue: 'Copy SVG',
    id: 'UI-86',
    description:
      'Pull request 83 merges. Its linked issue, UI-86, Copy SVG, moves from In review to Done and gains a completed status icon.',
  },
};

function Sidebar({ variant, rail }: { variant: Variant; rail: boolean }) {
  const groups = [
    [IconInbox, IconCircleUser, IconSearch],
    [IconLayoutColumnsThree, IconFolder, IconActivity, IconTag],
  ];
  return (
    <aside className="board-sidebar">
      {groups.map((icons, group) => (
        <div className="board-nav-group" key={group}>
          {icons.map((Glyph, index) => {
            const selected = group === 1 && index === 0;
            return (
              <Row
                key={index}
                pad={6}
                selected={selected}
                lead={<Glyph />}
                title={
                  rail ? null : selected ? (
                    variant === 'drag' ? (
                      'Board'
                    ) : (
                      'Release'
                    )
                  ) : (
                    <Bar w={[44, 58, 35, 47][index]} h={5} />
                  )
                }
              />
            );
          })}
        </div>
      ))}
    </aside>
  );
}

const lanes = [
  {
    key: 'todo',
    name: 'Todo',
    icon: IconProgressTaskTodo,
    cards: [64, 81, 50, 72],
  },
  {
    key: 'source',
    name: 'In progress',
    icon: IconProgressTask50,
    cards: [80, 54, 69],
  },
  {
    key: 'destination',
    name: 'Done',
    icon: IconProgressTaskDone,
    cards: [59, 74, 47],
  },
] as const;

function Board({
  variant,
  state,
  compact,
  rail,
}: {
  variant: Variant;
  state: BoardState;
  compact: boolean;
  rail: boolean;
}) {
  const story = studies[variant];
  const merge = variant === 'merge';
  const Pending = merge ? IconProgressTask75 : IconProgressTask50;
  return (
    <Window
      title={story.title}
      lights="grey"
      className="issue-window"
      toolbar={
        <div className="board-actions">
          <IconFilterLines />
          <IconSliders />
        </div>
      }
    >
      <div className="board-workspace">
        <Sidebar variant={variant} rail={rail} />
        <div className="board-main">
          <div className="board-view">
            {merge ? (
              <>
                <span className="board-context">
                  <IconLink />
                  Linked PR
                </span>
                <span
                  className="board-pr"
                  data-merged={state.merged || undefined}
                >
                  {state.merged ? <IconGitMerge /> : <IconGitPullRequest />} #83{' '}
                  {state.merged ? 'Merged' : 'Open'}
                </span>
              </>
            ) : (
              <>
                <span className="board-context">
                  <IconStack />
                  Current cycle <IconChevronDownSm size={12} />
                </span>
                <span className="board-view-end">
                  <IconLayoutColumnsThree />
                </span>
              </>
            )}
          </div>
          <div className="board-lanes">
            {(compact ? lanes.slice(1) : lanes).map((lane) => {
              const source = lane.key === 'source';
              const destination = lane.key === 'destination';
              const Status = source ? Pending : lane.icon;
              const offset =
                (source && !state.reserveDone) ||
                (destination && state.reserveDone);
              const count =
                lane.cards.length +
                Number((source && !state.done) || (destination && state.done));
              return (
                <div className="board-lane" key={lane.key}>
                  <div className="lane-heading">
                    <Status />
                    <strong>{source && merge ? 'In review' : lane.name}</strong>
                    <small>{count}</small>
                    {!rail && <IconPlus size={14} />}
                  </div>
                  <div className="lane-stack">
                    {lane.key !== 'todo' && (
                      <div
                        className="board-slot"
                        data-target={lane.key}
                        data-open={
                          (destination &&
                            state.dragging &&
                            state.reserveDone) ||
                          undefined
                        }
                      />
                    )}
                    <div
                      className="board-neighbors"
                      data-offset={offset || undefined}
                    >
                      {lane.cards.map((length, i) => (
                        <Card
                          key={length}
                          pad="small"
                          gap={7}
                          className="issue-card quiet-card"
                        >
                          <div className="ticket-meta">
                            <Status size={14} />
                            <Bar w={25 + i * 6} h={4} />
                          </div>
                          <Bar w={length + '%'} h={6} />
                          <div className="ticket-footer">
                            {i % 2 ? (
                              <IconTag size={14} />
                            ) : (
                              <IconFlag size={14} />
                            )}
                            <Bar w={17 + i * 4} h={4} />
                            <IconCircleUser size={14} />
                          </div>
                        </Card>
                      ))}
                    </div>
                    {source && (
                      <div
                        className="board-ticket"
                        data-dragging={state.dragging || undefined}
                        data-across={
                          (!state.dragging && state.reserveDone) || undefined
                        }
                        style={
                          state.dragging
                            ? {
                                transform: `translate(${state.dx}px, ${state.dy}px)`,
                              }
                            : undefined
                        }
                      >
                        <Card
                          className="issue-card focal-card"
                          pad="small"
                          gap={4}
                          data-done={state.done || undefined}
                        >
                          <div className="ticket-meta">
                            <span className="ticket-status">
                              <Pending />
                              <IconProgressTaskDone />
                            </span>
                            <code>{story.id}</code>
                            <span data-target="grip" data-cursor="grab">
                              {merge ? (
                                <IconLink size={14} />
                              ) : (
                                <IconGripV size={14} />
                              )}
                            </span>
                          </div>
                          <strong>{story.issue}</strong>
                          <div className="ticket-footer">
                            <IconSignalThree2 size={14} />
                            {merge ? (
                              <>
                                <span>
                                  {state.merged ? (
                                    <IconGitMerge size={14} />
                                  ) : (
                                    <IconGitPullRequest size={14} />
                                  )}
                                </span>
                                <code>#83</code>
                              </>
                            ) : (
                              <IconChatRound size={14} />
                            )}
                            <IconCircleUser size={14} />
                          </div>
                        </Card>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <span className="board-rest" data-target="rest" />
        </div>
      </div>
    </Window>
  );
}

export function IssueBoard({ variant }: { variant: Variant }) {
  const [replay, setReplay] = useState(0);
  const [width, setWidth] = useState(0);
  const host = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = host.current!;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const story = studies[variant];
  const merge = variant === 'merge';
  return (
    <figure
      id={merge ? 'issue-merge' : 'issue-drag'}
      className="issue-study"
      data-variant={variant}
    >
      <figcaption>
        {story.caption}
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Replay ${story.caption}`}
          title="Replay"
          onClick={() => setReplay((n) => n + 1)}
        >
          <IconArrowClockwise />
        </Button>
      </figcaption>
      <div
        className="board-host"
        ref={host}
        role="img"
        aria-label={story.description}
      >
        {width > 0 && (
          <Stage
            key={width + '-' + replay}
            width={width}
            height={width < 550 ? 308 : 338}
            initial={initial}
            poster={{ ...completed, merged: merge }}
            script={merge ? mergeIssue : dragIssue}
            play="once"
            theme="blueprint"
            fidelity="standard"
            className="issue-stage"
            cursor={merge ? undefined : { at: 'rest', idle: 600 }}
          >
            {(state) => (
              <Board
                variant={variant}
                state={state}
                compact={width < 660}
                rail={width < 550}
              />
            )}
          </Stage>
        )}
      </div>
    </figure>
  );
}
