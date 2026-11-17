import { useEffect, useId, useRef, useState } from 'react';
import { useDemoActivity } from '@/components/DeferredContent';
import { createIconLookup } from '@/components/createIconLookup';

import { Button } from '@/components/ui/button';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';
import { MusicPlayer } from './MusicPlayer';
import { AlbumArtwork, tracks, trackTime } from './musicData';

import Glyph0 from 'fyicons/icons/IconArrowClockwise';
import Glyph1 from 'fyicons/icons/IconArrowLeft';
import Glyph2 from 'fyicons/icons/IconArrowRight';
import Glyph3 from 'fyicons/icons/IconArrowsCollapse';
import Glyph4 from 'fyicons/icons/IconArrowsExpand';
import Glyph5 from 'fyicons/icons/IconBlock';
import Glyph6 from 'fyicons/icons/IconCaretsMaximize';
import Glyph7 from 'fyicons/icons/IconCircleCheckFill';
import Glyph8 from 'fyicons/icons/IconCirclePlus';
import Glyph9 from 'fyicons/icons/IconCirclePlusFill';
import Glyph10 from 'fyicons/icons/IconCircleUserFill';
import Glyph11 from 'fyicons/icons/IconCircleXFill';
import Glyph12 from 'fyicons/icons/IconClock';
import Glyph13 from 'fyicons/icons/IconClockFill';
import Glyph14 from 'fyicons/icons/IconComputer';
import Glyph15 from 'fyicons/icons/IconEllipsis';
import Glyph16 from 'fyicons/icons/IconEllipsisV';
import Glyph17 from 'fyicons/icons/IconGas';
import Glyph18 from 'fyicons/icons/IconGasFill';
import Glyph19 from 'fyicons/icons/IconGhost';
import Glyph20 from 'fyicons/icons/IconHeadphones';
import Glyph21 from 'fyicons/icons/IconInfo';
import Glyph22 from 'fyicons/icons/IconInfoFill';
import Glyph23 from 'fyicons/icons/IconLibraryLines';
import Glyph24 from 'fyicons/icons/IconListBullet';
import Glyph25 from 'fyicons/icons/IconMicrophoneMusic';
import Glyph26 from 'fyicons/icons/IconMicrophoneMusicFill';
import Glyph27 from 'fyicons/icons/IconMinus';
import Glyph28 from 'fyicons/icons/IconPauseFill';
import Glyph29 from 'fyicons/icons/IconPictureInPicture';
import Glyph30 from 'fyicons/icons/IconPictureInPictureExit';
import Glyph31 from 'fyicons/icons/IconPlayFill';
import Glyph32 from 'fyicons/icons/IconPlus';
import Glyph33 from 'fyicons/icons/IconPuzzlePiece';
import Glyph34 from 'fyicons/icons/IconQueue';
import Glyph35 from 'fyicons/icons/IconRepeat';
import Glyph36 from 'fyicons/icons/IconRepeatOne';
import Glyph37 from 'fyicons/icons/IconShuffle';
import Glyph38 from 'fyicons/icons/IconSkipBackwardFill';
import Glyph39 from 'fyicons/icons/IconSkipForwardFill';
import Glyph40 from 'fyicons/icons/IconSpeakers';
import Glyph41 from 'fyicons/icons/IconStarFill';
import Glyph42 from 'fyicons/icons/IconVideo';
import Glyph43 from 'fyicons/icons/IconVideoFill';
import Glyph44 from 'fyicons/icons/IconVolumeHigh';
import Glyph45 from 'fyicons/icons/IconVolumeHighFill';
import Glyph46 from 'fyicons/icons/IconVolumeLow';
import Glyph47 from 'fyicons/icons/IconVolumeLowFill';
import Glyph48 from 'fyicons/icons/IconVolumeNone';
import Glyph49 from 'fyicons/icons/IconVolumeNoneFill';
import Glyph50 from 'fyicons/icons/IconVolumeSlash';
import Glyph51 from 'fyicons/icons/IconVolumeSlashFill';
import Glyph52 from 'fyicons/icons/IconWaveform';
import Glyph53 from 'fyicons/icons/IconX';
import Glyph54 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  'arrow-clockwise': { Component: Glyph0, id: '334:6678' },
  'arrow-left': { Component: Glyph1, id: '518:4811' },
  'arrow-right': { Component: Glyph2, id: '518:4810' },
  'arrows-collapse': { Component: Glyph3, id: '129:6740' },
  'arrows-expand': { Component: Glyph4, id: '129:6741' },
  block: { Component: Glyph5, id: '317:6020' },
  'carets-maximize': { Component: Glyph6, id: '142:6370' },
  'circle-check-fill': { Component: Glyph7, id: '506:2715' },
  'circle-plus': { Component: Glyph8, id: '721:395' },
  'circle-plus-fill': { Component: Glyph9, id: '721:399' },
  'circle-user-fill': { Component: Glyph10, id: '390:10591' },
  'circle-x-fill': { Component: Glyph11, id: '297:3620' },
  clock: { Component: Glyph12, id: '245:15235' },
  'clock-fill': { Component: Glyph13, id: '716:3694' },
  computer: { Component: Glyph14, id: '193:12982' },
  ellipsis: { Component: Glyph15, id: '101:4340' },
  'ellipsis-v': { Component: Glyph16, id: '487:403' },
  gas: { Component: Glyph17, id: '1020:10458' },
  'gas-fill': { Component: Glyph18, id: '1167:1488' },
  ghost: { Component: Glyph19, id: '727:314' },
  headphones: { Component: Glyph20, id: '123:2252' },
  info: { Component: Glyph21, id: '132:4339' },
  'info-fill': { Component: Glyph22, id: '487:1519' },
  'library-lines': { Component: Glyph23, id: '608:10290' },
  'list-bullet': { Component: Glyph24, id: '148:6841' },
  'microphone-music': { Component: Glyph25, id: '1000:34302' },
  'microphone-music-fill': { Component: Glyph26, id: '1253:11481' },
  minus: { Component: Glyph27, id: '667:899' },
  'pause-fill': { Component: Glyph28, id: '101:4347' },
  'picture-in-picture': { Component: Glyph29, id: '996:34275' },
  'picture-in-picture-exit': { Component: Glyph30, id: '1112:1687' },
  'play-fill': { Component: Glyph31, id: '311:10178' },
  plus: { Component: Glyph32, id: '120:2544' },
  'puzzle-piece': { Component: Glyph33, id: '123:2474' },
  queue: { Component: Glyph34, id: '828:11718' },
  repeat: { Component: Glyph35, id: '98:1928' },
  'repeat-one': { Component: Glyph36, id: '59:9707' },
  shuffle: { Component: Glyph37, id: '101:4350' },
  'skip-backward-fill': { Component: Glyph38, id: '619:12605' },
  'skip-forward-fill': { Component: Glyph39, id: '619:12595' },
  speakers: { Component: Glyph40, id: '741:8196' },
  'star-fill': { Component: Glyph41, id: '652:850' },
  video: { Component: Glyph42, id: '734:6316' },
  'video-fill': { Component: Glyph43, id: '1013:19487' },
  'volume-high': { Component: Glyph44, id: '46:898' },
  'volume-high-fill': { Component: Glyph45, id: '46:897' },
  'volume-low': { Component: Glyph46, id: '472:595' },
  'volume-low-fill': { Component: Glyph47, id: '498:688' },
  'volume-none': { Component: Glyph48, id: '472:608' },
  'volume-none-fill': { Component: Glyph49, id: '546:8639' },
  'volume-slash': { Component: Glyph50, id: '472:629' },
  'volume-slash-fill': { Component: Glyph51, id: '498:748' },
  waveform: { Component: Glyph52, id: '372:5489' },
  x: { Component: Glyph53, id: '506:3897' },
  'zoom-in': { Component: Glyph54, id: '716:3726' },
});

export function MusicApp() {
  const active = useDemoActivity();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(84);
  const [wide, setWide] = useState(false);
  const [queuePreference, setQueuePreference] = useState<boolean | null>(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [albumSaved, setAlbumSaved] = useState(false);
  const player = useRef<HTMLDivElement>(null);
  const activeTrack = useRef<HTMLButtonElement>(null);
  const queueOpen = queuePreference ?? wide;
  const queueId = useId();
  const libraryId = useId();
  const queueToggle = useRef<HTMLButtonElement>(null);
  const queuePanel = useRef<HTMLElement>(null);
  const track = tracks[index];

  useEffect(() => {
    if (!active) return;
    const observer = new ResizeObserver(([entry]) => {
      // Inactive app tabs are hidden; keep the last visible layout preference.
      if (entry.contentRect.width) setWide(entry.contentRect.width >= 768);
    });
    if (player.current) observer.observe(player.current);
    return () => observer.disconnect();
  }, [active]);

  function showNowPlaying() {
    if (!wide) setQueuePreference(false);
    requestAnimationFrame(() => {
      activeTrack.current?.scrollIntoView({ block: 'nearest' });
      activeTrack.current?.focus({ preventScroll: true });
    });
  }

  function selectTrack(next: number) {
    setIndex(next);
    setPosition(0);
    setPlaying(true);
    if (!wide && queueOpen) {
      queueToggle.current?.focus({ preventScroll: true });
      setQueuePreference(false);
    }
  }

  return (
    <div
      ref={player}
      className="dark flex h-full max-h-full min-h-0 w-full min-w-0"
      data-theme="dark"
    >
      <Window title="Music">
        <div className="flex min-h-0 flex-1 gap-2 bg-neutral-950 px-2 pt-2">
          <aside
            aria-label="Music library"
            className={cn(
              'hidden shrink-0 flex-col gap-2 rounded-lg bg-surface p-2 @md/window:flex',
              libraryOpen ? 'w-40' : 'w-12',
            )}
          >
            <Button
              variant="ghost"
              size="unstyled"
              aria-label={libraryOpen ? 'Collapse library' : 'Expand library'}
              aria-expanded={libraryOpen}
              aria-controls={libraryId}
              onClick={() => setLibraryOpen(!libraryOpen)}
              className="h-8 justify-start gap-2 rounded-md px-1.5 text-muted"
            >
              <Icon name="library-lines" size={20} />
              <span
                id={libraryId}
                hidden={!libraryOpen}
                className="text-xs whitespace-nowrap"
              >
                Your library
              </span>
            </Button>
            <DemoIconButton
              label="Add to library"
              icon="plus"
              size="icon"
              className="text-muted"
            />
            <Button
              variant="ghost"
              size="unstyled"
              aria-label="Open Soft Signal album"
              onClick={showNowPlaying}
              className="mt-1 justify-start gap-2 rounded-md"
            >
              <AlbumArtwork className="size-8" decorative />
              <span
                hidden={!libraryOpen}
                className="min-w-0 truncate text-xs text-green-400"
              >
                Soft Signal
              </span>
            </Button>
          </aside>
          <section
            aria-label="Album"
            className={cn(
              'min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain rounded-lg bg-surface',
              queueOpen ? 'hidden @2xl/window:block' : 'block',
            )}
          >
            <div className="flex items-end gap-4 bg-linear-to-b from-sky-900/50 to-sky-900/10 p-4 pb-4">
              <AlbumArtwork className="size-20 @lg/window:size-28" />
              <div className="min-w-0">
                <p className="text-xs text-muted">Album</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight @3xl/window:text-4xl">
                  Soft Signal
                </h2>
                <p className="mt-2 text-xs">The Quiet Hours</p>
                <p className="mt-1 text-xs text-muted">
                  {tracks.length} songs ·{' '}
                  {trackTime(
                    tracks.reduce((total, item) => total + item.length, 0),
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4">
              <Button
                variant="unstyled"
                size="icon"
                aria-label={playing ? 'Pause album' : 'Play album'}
                className="rounded-full bg-green-400 text-green-950 hover:bg-green-300"
                onClick={() => setPlaying(!playing)}
              >
                <Icon name={playing ? 'pause-fill' : 'play-fill'} />
              </Button>
              <DemoToggle
                label="Save album"
                icon="circle-plus"
                activeIcon="circle-check-fill"
                size="icon-sm"
                pressed={albumSaved}
                onPressedChange={setAlbumSaved}
                className="data-pressed:text-green-400"
              />
              <Icon name="ellipsis" className="text-muted" />
              <span className="ml-auto flex items-center gap-2 text-xs text-muted">
                List <Icon name="list-bullet" />
              </span>
            </div>
            <div className="px-2 pb-3">
              <div
                className="flex items-center gap-3 border-b border-line px-2 pb-2 text-xs text-muted"
                aria-hidden
              >
                <span className="w-4 text-center">#</span>
                <span className="flex-1">Title</span>
                <Icon name="clock" />
              </div>
              <ol aria-label="Album tracks" className="mt-1">
                {tracks.map((item, i) => (
                  <li key={item.title}>
                    <Button
                      ref={index === i ? activeTrack : undefined}
                      variant="ghost"
                      size="unstyled"
                      aria-label={`Play ${item.title}`}
                      aria-pressed={index === i}
                      onClick={() => selectTrack(i)}
                      className="h-11 w-full min-w-0 justify-start gap-3 rounded-md px-2 text-xs font-normal aria-pressed:bg-inset"
                    >
                      <span className="w-4 shrink-0 text-center text-muted tabular-nums">
                        {index === i && playing ? (
                          <Icon name="waveform" className="text-green-400" />
                        ) : (
                          i + 1
                        )}
                      </span>
                      <AlbumArtwork className="size-8" decorative />
                      <span
                        className={cn(
                          'min-w-0 flex-1 truncate text-left',
                          index === i && 'text-green-400',
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="text-muted tabular-nums">
                        {trackTime(item.length)}
                      </span>
                    </Button>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <aside
            ref={queuePanel}
            tabIndex={-1}
            id={queueId}
            aria-label="Queue"
            onKeyDown={(event) => {
              if (event.key === 'Escape' && queueOpen) {
                event.stopPropagation();
                setQueuePreference(false);
                queueToggle.current?.focus();
              }
            }}
            className={cn(
              'min-h-0 min-w-0 flex-col rounded-lg bg-surface p-3 text-xs @2xl/window:w-48 @2xl/window:flex-none',
              queueOpen ? 'flex flex-1' : 'hidden',
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium">Queue</h3>
              <DemoIconButton
                label="Close queue"
                icon="x"
                size="icon-xs"
                onClick={() => {
                  setQueuePreference(false);
                  queueToggle.current?.focus({ preventScroll: true });
                }}
                className="text-muted"
              />
            </div>
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-y-contain">
              <div>
                <p className="mb-2 text-muted">Now playing</p>
                <div className="flex items-center gap-2">
                  <AlbumArtwork className="size-9" decorative />
                  <div className="min-w-0">
                    <p className="truncate text-green-400">{track.title}</p>
                    <p className="mt-1 truncate text-muted">{track.artist}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-1 text-muted">Next up</p>
                {tracks
                  .map((_, step) => (index + step + 1) % tracks.length)
                  .slice(0, -1)
                  .map((i) => (
                    <Button
                      key={tracks[i].title}
                      variant="ghost"
                      size="unstyled"
                      aria-label={`Play ${tracks[i].title}`}
                      onClick={() => selectTrack(i)}
                      className="h-12 w-full min-w-0 justify-start gap-2 rounded-md text-left text-xs font-normal"
                    >
                      <AlbumArtwork className="size-8" decorative />
                      <span className="min-w-0 flex-1 truncate">
                        {tracks[i].title}
                      </span>
                      <span className="text-muted tabular-nums">
                        {trackTime(tracks[i].length)}
                      </span>
                    </Button>
                  ))}
              </div>
            </div>
          </aside>
        </div>
        <MusicPlayer
          track={track}
          playing={playing}
          onPlayingChange={setPlaying}
          position={position}
          onPositionChange={setPosition}
          onSkip={(step, shuffle) => {
            setIndex(
              (current) =>
                (current +
                  (shuffle
                    ? 1 + Math.floor(Math.random() * (tracks.length - 1))
                    : step) +
                  tracks.length) %
                tracks.length,
            );
            setPosition(0);
          }}
          queueOpen={queueOpen}
          onQueueChange={(open) => {
            setQueuePreference(open);
            if (open) {
              requestAnimationFrame(() => {
                queuePanel.current?.focus({ preventScroll: true });
              });
            }
          }}
          queueId={queueId}
          queueToggle={queueToggle}
          onNowPlaying={showNowPlaying}
        />
      </Window>
    </div>
  );
}

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
