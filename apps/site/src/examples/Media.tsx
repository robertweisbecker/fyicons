import { useEffect, useState } from 'react';
import { IconButton } from '@/components/IconButton';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { Slider, SliderControl } from '@/components/ui/slider';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import { Input } from '@base-ui/react/input';
import { Meter } from '@base-ui/react/meter';
import { tracks, trackTime } from '@/home/desktop/music-data';
import {
  IconMusicNote,
  IconPlayFill,
  IconPauseFill,
  IconSkipBackwardFill,
  IconSkipForwardFill,
  IconRepeat,
  IconShuffle,
  IconVolumeSlash,
  IconVolumeHigh,
  IconQueue,
  IconHeart,
  IconHeartFill,
  IconHundredPoints,
  IconSendFill,
  IconThumbsUpFill,
  IconEmojiGrin,
  IconPartyPopper,
  IconSkullFill,
  IconPaperclipTilt,
  IconEmojiSmile,
  IconWifi,
  IconWifiError,
  IconBluetooth,
  IconAirplane,
  IconMoon,
  IconMoonFill,
  IconFlashlight,
  IconFlashlightOn,
  IconBellSlash,
  IconBell,
  IconLock,
  IconLockOpen,
  IconVideoCamera,
  IconVideoCameraSlash,
  IconSun,
  IconVolumeLow,
  IconFireAltFill,
} from 'fyicons';

const coverColors: Record<string, string> = {
  'Soft Signal': 'bg-pink-200 text-fuchsia-900',
  'Window Seat': 'bg-sky-200 text-blue-900',
  'After Hours': 'bg-amber-200 text-orange-900',
};

export function Player() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(84);
  const [liked, setLiked] = useState<number[]>([]);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [muted, setMuted] = useState(false);
  const track = tracks[index];
  function select(next: number) {
    setIndex((next + tracks.length) % tracks.length);
    setPosition(0);
  }
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () => setPosition((value) => Math.min(value + 1, track.length)),
      1000,
    );
    return () => clearInterval(timer);
  }, [playing, track]);
  function nextTrack() {
    return (
      index +
      (shuffle ? 1 + Math.floor(Math.random() * (tracks.length - 1)) : 1)
    );
  }
  useEffect(() => {
    if (!playing || position !== track.length) return;
    setIndex((i) =>
      repeat
        ? i
        : (i +
            (shuffle
              ? 1 + Math.floor(Math.random() * (tracks.length - 1))
              : 1)) %
          tracks.length,
    );
    setPosition(0);
  }, [playing, position, track, repeat, shuffle]);
  return (
    <div className="grid min-w-0 gap-2">
      <div className="flex items-center gap-3 sm:gap-4">
        <div
          aria-hidden="true"
          className={`grid size-16 shrink-0 place-items-center rounded-xl motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-out sm:size-20 ${coverColors[track.title] ?? 'bg-violet-200 text-violet-900'}`}
        >
          <IconMusicNote className="size-8 sm:size-10" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-semibold tracking-tight">
            {track.title}
          </h3>
          <p className="text-sm text-white/75">{track.artist}</p>
        </div>
        <IconButton
          icon={
            liked.includes(index) ? (
              <IconHeartFill className="text-pink-300" />
            ) : (
              <IconHeart />
            )
          }
          label="Like track"
          aria-pressed={liked.includes(index)}
          onClick={() =>
            setLiked(
              liked.includes(index)
                ? liked.filter((i) => i !== index)
                : [...liked, index],
            )
          }
        />
      </div>
      <Meter.Root
        aria-label="Playback position"
        className="mt-4"
        value={position}
        max={track.length}
        getAriaValueText={(_, seconds) =>
          `${trackTime(seconds)} of ${trackTime(track.length)}`
        }
      >
        <Meter.Track className="h-1.5 overflow-hidden rounded-full bg-white/25">
          <Meter.Indicator className="rounded-full bg-pink-200" />
        </Meter.Track>
      </Meter.Root>
      <div className="flex justify-between font-mono text-[10px] text-white/75">
        <span>{trackTime(position)}</span>
        <span>{trackTime(track.length)}</span>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <IconButton
          label="Shuffle"
          icon={<IconShuffle size={18} />}
          aria-pressed={shuffle}
          onClick={() => setShuffle(!shuffle)}
        />
        <IconButton
          label="Previous track"
          icon={<IconSkipBackwardFill size={23} />}
          onClick={() => select(index - 1)}
        />
        <IconButton
          label={playing ? 'Pause' : 'Play'}
          className="size-[46px] rounded-full bg-pink-200 text-pink-950 hover:bg-pink-100"
          icon={
            playing ? <IconPauseFill size={24} /> : <IconPlayFill size={24} />
          }
          onClick={() => setPlaying(!playing)}
        />
        <IconButton
          label="Next track"
          icon={<IconSkipForwardFill size={23} />}
          onClick={() => select(nextTrack())}
        />
        <IconButton
          label="Repeat track"
          icon={<IconRepeat size={18} />}
          aria-pressed={repeat}
          onClick={() => setRepeat(!repeat)}
        />
      </div>
      <div className="flex items-center justify-between">
        <IconButton
          label="Mute"
          icon={muted ? <IconVolumeSlash /> : <IconVolumeHigh />}
          aria-pressed={muted}
          onClick={() => setMuted(!muted)}
        />
        <IconButton label="Queue" icon={<IconQueue />} disabled />
      </div>
    </div>
  );
}

const controls = [
  ['Wi-Fi', IconWifi, IconWifiError],
  ['Bluetooth', IconBluetooth, IconBluetooth],
  ['Airplane', IconAirplane, IconAirplane],
  ['Focus', IconMoonFill, IconMoon],
  ['Flashlight', IconFlashlightOn, IconFlashlight],
  ['Silent', IconBellSlash, IconBell],
  ['Rotation lock', IconLock, IconLockOpen],
  ['Camera', IconVideoCamera, IconVideoCameraSlash],
] as const;
export function ControlCenter() {
  const [enabled, setEnabled] = useState<string[]>([
    'Wi-Fi',
    'Bluetooth',
    'Camera',
  ]);
  const [brightness, setBrightness] = useState(70);
  const [volume, setVolume] = useState(45);
  function change(name: string, on: boolean) {
    setEnabled((current) => {
      const next = new Set(current);
      if (on) next.add(name);
      else next.delete(name);
      if (on && ['Wi-Fi', 'Bluetooth'].includes(name)) next.delete('Airplane');
      return [...next];
    });
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-1">
        {controls.map(([name, Active, Inactive]) => {
          const checked =
            enabled.includes(name) &&
            !(
              enabled.includes('Airplane') &&
              ['Wi-Fi', 'Bluetooth'].includes(name)
            );
          const Glyph = checked ? Active : Inactive;
          return (
            <Toggle
              key={name}
              size="unstyled"
              aria-label={name}
              pressed={checked}
              onPressedChange={(on) => change(name, on)}
              className="flex flex-col gap-1.5 rounded-xl p-2 text-[11px] data-pressed:bg-teal-700/10 dark:data-pressed:bg-teal-300/15"
            >
              <Glyph size={20} />
              {name}
            </Toggle>
          );
        })}
      </div>
      {(
        [
          ['Brightness', brightness, setBrightness, IconSun],
          [
            'Volume',
            volume,
            setVolume,
            volume ? IconVolumeLow : IconVolumeSlash,
          ],
        ] as const
      ).map(([name, value, setValue, Glyph]) => (
        <Slider.Root
          key={name}
          value={value}
          onValueChange={setValue}
          className="flex items-center gap-3"
        >
          <Glyph />
          <Slider.Label className="sr-only">{name}</Slider.Label>
          <SliderControl />
          <Slider.Value className="w-9 text-right font-mono text-xs">
            {() => value + '%'}
          </Slider.Value>
        </Slider.Root>
      ))}
    </div>
  );
}

const reactionsList = [
  ['Like', IconThumbsUpFill, 'text-sky-600 dark:text-sky-400'],
  ['Heart', IconHeartFill, 'text-pink-500'],
  ['Hundred points', IconHundredPoints, 'text-red-500'],
  ['Fire', IconFireAltFill, 'text-orange-500'],
  ['Grin', IconEmojiGrin, 'text-amber-500'],
  ['Celebrate', IconPartyPopper, 'text-violet-500'],
  ['Skull', IconSkullFill, 'text-muted'],
] as const;

export function Chat() {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [reactions, setReactions] = useState<string[]>(['Heart']);
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <span className="grid size-8 place-items-center rounded-full bg-violet-200 font-medium text-violet-950">
          S
        </span>
        <div>
          <strong className="text-sm">Sam</strong>
          <p className="text-xs text-muted">Design team</p>
        </div>
      </div>
      <Bubble>
        <BubbleContent>Did you see the new emoji icons?</BubbleContent>
      </Bubble>
      <Bubble variant="primary" className="ml-auto">
        <BubbleContent>The weird guys? Love the skull.</BubbleContent>
      </Bubble>
      <div className="relative pt-12">
        <Bubble>
          <BubbleContent>Ship it this week?</BubbleContent>
        </Bubble>
        <div className="absolute top-0 left-2 z-1 w-52 max-w-[calc(100%-1rem)] rounded-full bg-dialog p-1 shadow-md ring-1 ring-line after:absolute after:-bottom-1 after:left-6 after:size-2.5 after:rounded-full after:bg-dialog after:ring-1 after:ring-line after:[clip-path:inset(40%_-2px_-2px)]">
          <ScrollArea.Root className="rounded-full">
            <ScrollArea.Viewport className="overflow-x-auto [--fade-size:1rem]">
              <ScrollArea.Content>
                <ToggleGroup
                  aria-label="React to Sam’s message"
                  value={reactions}
                  onValueChange={setReactions}
                  className="flex w-max items-center gap-1 p-1"
                >
                  {reactionsList.map(([name, Glyph, color]) => (
                    <Toggle
                      key={name}
                      value={name}
                      aria-label={name + ' reaction'}
                      size="icon"
                      variant="unstyled"
                      className="rounded-full hover:bg-hover focus-visible:-outline-offset-2 data-pressed:bg-blue-600"
                    >
                      <Glyph
                        size={20}
                        className={
                          reactions.includes(name) ? 'text-white' : color
                        }
                      />
                    </Toggle>
                  ))}
                </ToggleGroup>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </div>
        <ScrollArea.Root className="mt-1 h-6">
          <ScrollArea.Viewport className="h-full overflow-x-auto [--fade-size:.5rem]">
            <ScrollArea.Content>
              <ul
                aria-label="Reactions to Sam’s message"
                aria-hidden={reactions.length === 0}
                className="flex w-max items-center gap-1"
              >
                {reactionsList
                  .filter(([name]) => reactions.includes(name))
                  .map(([name, Glyph, color]) => (
                    <li
                      key={name}
                      className="inline-flex origin-top-left items-center gap-1 rounded-full border border-line bg-surface px-1.5 py-0.5 text-[11px] motion-safe:transition-[opacity,scale] motion-safe:duration-150 motion-safe:ease-out motion-safe:starting:scale-95 motion-safe:starting:opacity-0"
                    >
                      <Glyph size={12} className={color} />
                      <span className="sr-only">{name}: </span>1
                    </li>
                  ))}
              </ul>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </div>
      {messages.map((text, i) => (
        <Bubble key={i} variant="primary" className="ml-auto">
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (draft.trim()) {
            setMessages([...messages, draft.trim()].slice(-4));
            setDraft('');
          }
        }}
        className="flex items-center gap-1 rounded-xl border border-line p-1"
      >
        <IconButton
          label="Attach sample image"
          size="icon-sm"
          icon={<IconPaperclipTilt />}
          onClick={() =>
            setDraft((text) =>
              text.includes('review.png')
                ? text
                : [text.trim(), 'review.png'].filter(Boolean).join(' '),
            )
          }
        />
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          aria-label="Message Sam"
          placeholder="Message Sam"
          className="w-0 min-w-0 flex-1 rounded px-1 text-sm"
        />
        <IconButton
          icon={<IconEmojiSmile />}
          size="icon-sm"
          label="Add emoji"
          onClick={() => setDraft(draft + '🙂')}
        />
        <Button
          type="submit"
          size="icon-sm"
          aria-label="Send"
          disabled={!draft.trim()}
        >
          <IconSendFill />
        </Button>
      </form>
    </div>
  );
}
