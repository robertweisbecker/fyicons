import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { iconGroups } from './iconGroups';

export function IconGroupCarousel() {
  const track = useRef<HTMLDivElement>(null);
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

  function scrollToGroup(direction: 'previous' | 'next' | 'first' | 'last') {
    const element = track.current!;
    const cards = [...element.children] as HTMLElement[];
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
      <div className="mb-6 flex items-center justify-between gap-6">
        <h2 id="icon-groups-heading" className="text-base font-medium">
          What’s included
        </h2>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full"
            aria-label="Previous icon group"
            disabled={edges.start}
            onClick={() => scrollToGroup('previous')}
          >
            <Icon name="arrow-left" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full"
            aria-label="Next icon group"
            disabled={edges.end}
            onClick={() => scrollToGroup('next')}
          >
            <Icon name="arrow-right" />
          </Button>
        </div>
      </div>
      <div
        ref={track}
        className="relative flex scroll-fade-x snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pt-1 pb-5 scroll-fade-6 focus-visible:-outline-offset-2 motion-reduce:scroll-auto sm:gap-6"
        role="region"
        aria-roledescription="carousel"
        aria-label="Icon groups"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {iconGroups.map((group, index) => (
          <figure
            key={group.id}
            className="m-0 flex h-108 w-72 max-w-full shrink-0 snap-start scroll-ms-0 flex-col gap-6 rounded-2xl bg-inset p-4 sm:w-80 sm:p-5"
            data-figma-id={group.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${group.name}, ${index + 1} of ${iconGroups.length}`}
          >
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-xl bg-surface px-3 py-4 text-muted shadow-md ring ring-border">
              {group.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex max-w-full justify-center data-state-divider:mt-2"
                  data-state-divider={
                    (group.name === 'States & status' && rowIndex === 3) ||
                    undefined
                  }
                >
                  {row.map((name, iconIndex) => (
                    <span
                      key={`${name}-${iconIndex}`}
                      className="grid h-10 w-10 min-w-8 shrink place-items-center"
                    >
                      <Icon name={name} size={32} title={name} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <figcaption className="min-h-10 text-sm leading-5">
              <span className="font-medium">{group.name}</span>{' '}
              <span className="text-muted">{group.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
