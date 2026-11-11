import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { buttonVariants } from '@/components/ui/button';
import { TooltipGroup } from '@/components/ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { iconGroups } from './iconGroups';

export function IconGroupCarousel({ heading }: { heading: ReactNode }) {
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
    <>
      <div className="mb-6">{heading}</div>
      <ScrollArea.Root className="icon-group-carousel">
        <ScrollArea.Viewport
          ref={track}
          className="relative snap-x snap-mandatory scroll-px-(--carousel-inset)"
          role="region"
          aria-roledescription="carousel"
          aria-label="Icon groups"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <ScrollArea.Content
            ref={content}
            className="relative flex gap-4 px-(--carousel-inset) pb-6 sm:gap-6"
          >
            {iconGroups.map((group, index) => (
              <figure
                key={group.id}
                className="m-0 flex w-72 max-w-[calc(100cqw-2rem)] shrink-0 snap-start flex-col gap-4 sm:w-80"
                data-figma-id={group.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${group.name}, ${index + 1} of ${iconGroups.length}`}
              >
                <div
                  className={cn(
                    'flex aspect-4/5 w-full flex-col items-center justify-center rounded-3xl',
                    group.colorClassName,
                  )}
                >
                  {group.rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex max-w-full justify-center"
                    >
                      {row.map((name, iconIndex) => (
                        <span
                          key={`${name}-${iconIndex}`}
                          className="grid size-11 min-w-8 shrink place-items-center sm:size-12"
                        >
                          <Icon name={name} size={24} title={name} />
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <figcaption className="px-3 text-lg leading-snug font-medium text-muted">
                  <span className="font-semibold text-ink">{group.name}</span>{' '}
                  {group.caption}
                </figcaption>
              </figure>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          keepMounted
          className="mx-(--carousel-inset) max-md:opacity-100"
        />
      </ScrollArea.Root>
      <div className="mt-4 flex justify-end gap-2">
        <TooltipGroup>
          <IconButton
            icon="chevron-left"
            label="Previous icon group"
            variant="neutral"
            className="size-9 rounded-full pointer-coarse:size-11"
            disabled={edges.start}
            onClick={(event) =>
              scrollToGroup('previous', event.detail ? 'smooth' : 'instant')
            }
          />
          <IconButton
            icon="chevron-right"
            label="Next icon group"
            variant="neutral"
            className="size-9 rounded-full pointer-coarse:size-11"
            disabled={edges.end}
            onClick={(event) =>
              scrollToGroup('next', event.detail ? 'smooth' : 'instant')
            }
          />
        </TooltipGroup>
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          className={buttonVariants({ variant: 'default', size: 'lg' })}
          href="/icons/"
        >
          View all icons
          <Icon name="arrow-right" size={20} />
        </Link>
      </div>
    </>
  );
}
