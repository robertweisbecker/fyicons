import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { IconButton } from '@/components/IconButton';
import { cn } from '@/lib/utils';
import {
  IconEmojiAngry,
  IconEmojiAngryFill,
  IconEmojiFrown,
  IconEmojiFrownFill,
  IconEmojiNeutral,
  IconEmojiNeutralFill,
  IconEmojiSmile,
  IconEmojiSmileFill,
  IconEmojiGrin,
  IconEmojiGrinFill,
  IconThumbsUp,
  IconThumbsUpFill,
  IconThumbsDown,
  IconThumbsDownFill,
  IconFileImage,
  IconFileVideo,
  IconFileZip,
  IconCircleCheckFill,
  IconProgressPie20,
  IconProgressPie40,
  IconProgressPie60,
  IconProgressPie80,
  IconPauseFill,
  IconPlayFill,
  IconArrowCounterClockwise,
  IconBellDot,
  IconBell,
  IconUserAdd,
  IconGitPullRequest,
  IconChatRound,
  IconCalendar,
  IconCheck,
  IconXSm,
  IconProgressTaskTodo,
  IconProgressTask25,
  IconProgressTask50,
  IconProgressTask75,
  IconProgressTaskDone,
  IconFlag,
  IconCircleUser,
} from 'fyicons';

const faces = [
  ['Not great', IconEmojiAngry, IconEmojiAngryFill, 'text-rose-600'],
  ['Meh', IconEmojiFrown, IconEmojiFrownFill, 'text-orange-600'],
  ['Fine', IconEmojiNeutral, IconEmojiNeutralFill, 'text-slate-500'],
  ['Good', IconEmojiSmile, IconEmojiSmileFill, 'text-emerald-600'],
  ['Love them', IconEmojiGrin, IconEmojiGrinFill, 'text-amber-500'],
];
export function Feedback() {
  const [vote, setVote] = useState([]);
  const [feel, setFeel] = useState(['Good']);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-1 border-b border-black/10 pb-3">
        <span className="text-sm">Was this helpful?</span>
        <ToggleGroup
          value={vote}
          onValueChange={setVote}
          aria-label="Was this helpful?"
        >
          {[
            ['Yes', IconThumbsUp, IconThumbsUpFill],
            ['No', IconThumbsDown, IconThumbsDownFill],
          ].map(([name, Outline, Fill]) => {
            const Glyph = vote.includes(name) ? Fill : Outline;
            return (
              <Toggle value={name} size="icon" aria-label={name} key={name}>
                <Glyph />
              </Toggle>
            );
          })}
        </ToggleGroup>
      </div>
      <p className="text-lg font-medium">How do the icons feel?</p>
      <ToggleGroup
        value={feel}
        onValueChange={(v) => v.length && setFeel(v)}
        aria-label="How do the icons feel?"
        className="flex-wrap justify-between"
      >
        {faces.map(([name, Outline, Fill, color]) => {
          const selected = feel.includes(name);
          const Glyph = selected ? Fill : Outline;
          return (
            <Toggle
              key={name}
              size="icon"
              aria-label={name}
              value={name}
              className="rounded-full data-pressed:bg-transparent"
            >
              <span
                className={cn(
                  'motion-safe:transition-[color,scale] motion-safe:duration-150 motion-safe:ease-out',
                  selected ? color : 'text-zinc-500',
                  selected && 'motion-safe:scale-110',
                )}
              >
                <Glyph size={24} />
              </span>
            </Toggle>
          );
        })}
      </ToggleGroup>
      <p className="text-xs">{feel[0]} · Thanks for the feedback.</p>
    </div>
  );
}
const transfers = [
  ['hero-shot.png', IconFileImage, 'text-pink-500'],
  ['walkthrough.mp4', IconFileVideo, 'text-violet-500'],
  ['icons.zip', IconFileZip, 'text-amber-500'],
];
const progressIcons = [
  IconProgressPie20,
  IconProgressPie40,
  IconProgressPie60,
  IconProgressPie80,
  IconCircleCheckFill,
];
export function Uploads() {
  const [steps, setSteps] = useState([1, 2, 0]);
  const [running, setRunning] = useState(false);
  const done = steps.every((s) => s === 4);
  useEffect(() => {
    if (!running || done) return;
    const timer = setInterval(
      () =>
        setSteps((values) => {
          const first = values.findIndex((v) => v < 4);
          return values.map((v, i) => (i === first ? v + 1 : v));
        }),
      1100,
    );
    return () => clearInterval(timer);
  }, [running, done]);
  return (
    <div>
      <div className="flex items-center justify-between gap-1 border-b border-line pb-2">
        <strong className="text-sm">
          {done
            ? 'Uploads complete'
            : running
              ? 'Uploading files'
              : 'Transfer queue'}
        </strong>
        <div className="flex">
          <IconButton
            size="icon-sm"
            disabled={done}
            icon={running && !done ? <IconPauseFill /> : <IconPlayFill />}
            label={running && !done ? 'Pause uploads' : 'Resume uploads'}
            onClick={() => setRunning(!running)}
          />
          <IconButton
            size="icon-sm"
            icon={<IconArrowCounterClockwise />}
            label="Restart uploads"
            onClick={() => {
              setSteps([0, 0, 0]);
              setRunning(true);
            }}
          />
        </div>
      </div>
      <ul>
        {transfers.map(([name, Glyph, color], i) => {
          const Progress = progressIcons[steps[i]];
          return (
            <li className="flex items-center gap-2 py-3 text-xs" key={name}>
              <Glyph size={20} className={color} />
              <span className="min-w-0 flex-1 truncate">{name}</span>
              <span>{steps[i] === 4 ? 'Done' : (steps[i] + 1) * 20 + '%'}</span>
              <Progress
                className={
                  steps[i] === 4 ? 'text-emerald-600' : 'text-blue-500'
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const initialNotes = [
  ['Ada joined your workspace', 'now', IconUserAdd, 'bg-lime-200'],
  ['Pull request #212 was merged', '2m', IconGitPullRequest, 'bg-violet-200'],
  ['Sam replied to your comment', '1h', IconChatRound, 'bg-pink-200'],
  ['Icon review starts in 10 minutes', '1h', IconCalendar, 'bg-sky-200'],
];
export function Notifications() {
  const [read, setRead] = useState([]);
  const [hidden, setHidden] = useState([]);
  const notes = initialNotes.filter(([name]) => !hidden.includes(name));
  const unread = notes.filter(([name]) => !read.includes(name)).length;
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 border-b border-line pb-2">
        {unread ? <IconBellDot size={20} /> : <IconBell size={20} />}
        <strong className="text-sm">
          {unread ? unread + ' new' : 'All caught up'}
        </strong>
        <Button
          size="xs"
          variant="ghost"
          className="ml-auto"
          disabled={!unread}
          onClick={() => setRead(notes.map(([name]) => name))}
        >
          <IconCheck />
          Mark all read
        </Button>
      </div>
      {notes.map(([name, when, Glyph, color]) => (
        <div key={name} className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="unstyled"
            aria-label={name + (read.includes(name) ? ', read' : ', unread')}
            onClick={() => setRead([...new Set([...read, name])])}
            className="min-w-0 flex-1 justify-start gap-2 rounded-lg p-1.5 text-left text-xs"
          >
            <span
              className={cn(
                'grid size-7 shrink-0 place-items-center rounded-full text-slate-900',
                color,
              )}
            >
              <Glyph />
            </span>
            <span
              className={cn(
                'flex-1',
                read.includes(name)
                  ? 'font-normal text-muted'
                  : 'font-semibold',
              )}
            >
              {name}
            </span>
            <span className="text-muted">{when}</span>
          </Button>
          <IconButton
            label={'Dismiss ' + name}
            size="icon-xs"
            icon={<IconXSm />}
            onClick={() => setHidden([...hidden, name])}
          />
        </div>
      ))}
      {!notes.length && (
        <p className="py-3 text-sm text-muted">
          Nothing left. Enjoy the quiet.
        </p>
      )}
    </div>
  );
}
const progress = [
  IconProgressTaskTodo,
  IconProgressTask25,
  IconProgressTask50,
  IconProgressTask75,
  IconProgressTaskDone,
];
export function Tasks() {
  const [steps, setSteps] = useState([1, 3, 4]);
  const [flags, setFlags] = useState([true, false, false]);
  return (
    <div>
      {[
        'Draw more weird guys',
        'Export the SVG zip',
        'Publish the release',
      ].map((name, i) => {
        const Glyph = progress[steps[i]];
        return (
          <div
            key={name}
            className="flex items-center gap-1 border-b border-line py-1"
          >
            <Button
              size="unstyled"
              variant="ghost"
              className="min-w-0 flex-1 justify-start gap-2 rounded-lg py-2 text-left text-sm"
              aria-label={
                name + ', ' + steps[i] * 25 + '% complete. Advance task'
              }
              onClick={() =>
                setSteps(steps.map((v, j) => (j === i ? (v + 1) % 5 : v)))
              }
            >
              <Glyph size={20} className="shrink-0 text-violet-500" />
              <span className={steps[i] === 4 ? 'text-muted line-through' : ''}>
                {name}
              </span>
            </Button>
            <IconButton
              label={'Flag ' + name}
              size="icon-xs"
              aria-pressed={flags[i]}
              className={flags[i] ? 'text-orange-600' : 'text-muted'}
              icon={<IconFlag />}
              onClick={() => setFlags(flags.map((v, j) => (j === i ? !v : v)))}
            />
          </div>
        );
      })}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
        <IconCalendar />
        Due Friday
        <span className="ml-auto inline-flex gap-1">
          <IconCircleUser />
          You
        </span>
      </div>
    </div>
  );
}
