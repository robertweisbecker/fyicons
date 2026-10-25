import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Window } from './Window';
import { MusicPlayer } from './MusicPlayer';
import { AlbumArtwork, tracks, trackTime } from './musicData';

export function MusicApp() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(84);
  const [wide, setWide] = useState(false);
  const [queuePreference, setQueuePreference] = useState<boolean | null>(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [albumSaved, setAlbumSaved] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const player = useRef<HTMLDivElement>(null);
  const activeTrack = useRef<HTMLButtonElement>(null);
  const queueOpen = queuePreference ?? wide;
  const queueId = useId();
  const libraryId = useId();
  const queueToggle = useRef<HTMLButtonElement>(null);
  const queuePanel = useRef<HTMLElement>(null);
  const track = tracks[index];

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      // Inactive app tabs are hidden; keep the last visible layout preference.
      if (entry.contentRect.width) setWide(entry.contentRect.width >= 768);
    });
    if (player.current) observer.observe(player.current);
    return () => observer.disconnect();
  }, []);

  function showNowPlaying() {
    setMiniPlayer(false);
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
      className={cn(
        'dark flex h-full w-full items-end justify-end',
        expanded && 'absolute inset-x-2 top-11 bottom-10 z-10 h-auto w-auto',
      )}
      data-theme="dark"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && !event.defaultPrevented) {
          setExpanded(false);
          setMiniPlayer(false);
        }
      }}
    >
      <Window title="Music" className={cn(miniPlayer && 'h-auto max-w-80')}>
        <div
          hidden={miniPlayer}
          className="flex min-h-0 flex-1 gap-2 bg-neutral-950 px-2 pt-2"
        >
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
              <Icon name="library-simple" size={20} />
              <span
                id={libraryId}
                hidden={!libraryOpen}
                className="text-xs whitespace-nowrap"
              >
                Your library
              </span>
            </Button>
            <DemoToggle
              label="Save album to your library"
              icon="plus"
              activeIcon="check"
              size="icon"
              pressed={albumSaved}
              onPressedChange={setAlbumSaved}
              className="text-muted data-pressed:text-green-400"
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
            <div className="mt-3 flex items-center gap-2 border-t border-line pt-3 text-muted">
              <Icon name="headphones" /> This device
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
          queueOpen={queueOpen && !miniPlayer}
          onQueueChange={(open) => {
            setMiniPlayer(false);
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
          miniPlayer={miniPlayer}
          onMiniPlayerChange={(mini) => {
            setMiniPlayer(mini);
            if (mini) setExpanded(false);
          }}
          expanded={expanded}
          onExpandedChange={(next) => {
            setExpanded(next);
            if (next) setMiniPlayer(false);
          }}
        />
      </Window>
    </div>
  );
}
