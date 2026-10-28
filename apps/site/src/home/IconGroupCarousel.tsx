import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEventHandler,
} from 'react';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { buttonVariants } from '@/components/ui/button';
import { TooltipGroup } from '@/components/ui/tooltip';
import { pageHref } from '@/lib/navigation';
import { iconGroups } from './iconGroups';

export function IconGroupCarousel({
  onLibraryClick,
}: {
  onLibraryClick: MouseEventHandler<HTMLAnchorElement>;
}) {
  const track = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = track.current!;
    const update = () =>
      setEdges({
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener('scroll', update);
    };
  }, []);

  function scrollToGroup(
    direction: 'previous' | 'next' | 'first' | 'last',
    behavior: ScrollBehavior = 'instant',
  ) {
    const element = track.current!;
    const cards = [...content.current!.children] as HTMLElement[];
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const current = Math.round(element.scrollLeft / step);
    const index =
      direction === 'first'
        ? 0
        : direction === 'last'
          ? cards.length - 1
          : current + (direction === 'next' ? 1 : -1);
    element.scrollTo({
      left: Math.max(0, Math.min(cards.length - 1, index)) * step,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : behavior,
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const direction = {
      ArrowLeft: 'previous',
      ArrowRight: 'next',
      Home: 'first',
      End: 'last',
    }[event.key] as Parameters<typeof scrollToGroup>[0] | undefined;
    if (direction) {
      event.preventDefault();
      scrollToGroup(direction);
    }
  }

  return (
    <section aria-labelledby="icon-groups-heading" className="mt-16 sm:mt-24">
      <div className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <h2
          id="icon-groups-heading"
          className="col-span-3 text-center text-2xl font-medium tracking-tight sm:col-span-1 sm:col-start-2"
        >
          …plus a whole bunch more!
        </h2>
        <div className="col-start-3 flex justify-end gap-1">
          <TooltipGroup>
            <IconButton
              icon="arrow-left"
              label="Previous icon group"
              className="rounded-full"
              disabled={edges.start}
              onClick={(event) =>
                scrollToGroup('previous', event.detail ? 'smooth' : 'instant')
              }
            />
            <IconButton
              icon="arrow-right"
              label="Next icon group"
              className="rounded-full"
              disabled={edges.end}
              onClick={(event) =>
                scrollToGroup('next', event.detail ? 'smooth' : 'instant')
              }
            />
          </TooltipGroup>
        </div>
      </div>
      <ScrollArea.Root className="group/carousel-scroll">
        <ScrollArea.Viewport
          ref={track}
          className="relative scroll-fade-x snap-x snap-mandatory overscroll-x-contain scroll-fade-12 focus-visible:-outline-offset-2"
          role="region"
          aria-roledescription="carousel"
          aria-label="Icon groups"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <ScrollArea.Content
            ref={content}
            className="relative flex gap-4 pb-6 sm:gap-6"
          >
            {iconGroups.map((group, index) => (
              <figure
                key={group.id}
                className="m-0 flex h-108 w-72 max-w-full shrink-0 snap-start scroll-ms-8 flex-col gap-2 rounded-2xl bg-inset p-4 sm:w-80"
                data-figma-id={group.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${group.name}, ${index + 1} of ${iconGroups.length}`}
              >
                <figcaption className="flex gap-2 text-sm leading-5">
                  <span className="font-medium">{group.name}</span>{' '}
                  <span className="text-muted">{group.caption}</span>
                </figcaption>
                <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-xl bg-surface px-3 py-4 text-muted shadow-md ring ring-border">
                  {group.rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex max-w-full justify-center"
                    >
                      {row.map((name, iconIndex) => (
                        <span
                          key={`${name}-${iconIndex}`}
                          className="grid h-10 w-10 min-w-8 shrink place-items-center"
                        >
                          <Icon name={name} size={24} title={name} />
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </figure>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          keepMounted
          className="pointer-events-none flex h-4 items-center px-1 opacity-0 transition-opacity duration-150 ease-out select-none group-has-[:focus-visible]/carousel-scroll:pointer-events-auto group-has-[:focus-visible]/carousel-scroll:opacity-100 data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 motion-reduce:transition-none"
        >
          <ScrollArea.Thumb className="h-1.5 rounded-full bg-neutral-400/70 hover:bg-neutral-400 active:bg-neutral-400" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="mt-8 flex justify-center">
        <a
          className={buttonVariants({ variant: 'default', size: 'lg' })}
          href={pageHref('library')}
          onClick={onLibraryClick}
        >
          View all icons
          <Icon name="arrow-right" size={20} />
        </a>
      </div>
    </section>
  );
}
