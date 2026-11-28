import { useLayoutEffect, useRef } from 'react';
import { usePhysicalKeys } from './usePhysicalKeys';
import { Keyboard, Display, type Model } from './Parts';

export function Ribbon(props: Model) {
  const { pressed, inputEvents } = usePhysicalKeys();
  const feed = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const lines = props.text.split('\n').length;
  const previousLines = useRef(lines);

  useLayoutEffect(() => {
    // In a reversed scrollport, zero brings the writing line back to the roller.
    feed.current!.scrollTop = 0;
  }, [props.text]);

  useLayoutEffect(() => {
    const paper = sheet.current!;
    const added = lines - previousLines.current;
    previousLines.current = lines;
    if (
      added <= 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const pitch = parseFloat(getComputedStyle(paper).lineHeight);
    const distance = Math.min(added, 3) * pitch;
    const roll = paper.animate(
      [
        { transform: `translateY(${distance}px)` },
        { transform: 'translateY(0)' },
      ],
      { duration: 170, easing: 'ease-out' },
    );
    return () => roll.cancel();
  }, [lines]);

  return (
    <div className="lp-ribbon">
      <div
        className="lp-paper-feed"
        ref={feed}
        role="region"
        aria-label="Typewriter paper feed"
        tabIndex={0}
      >
        <div className="lp-paper" ref={sheet}>
          <Display {...props} inputEvents={inputEvents} />
        </div>
      </div>
      <div className="lp-roller" />
      <div className="lp-machine">
        <Keyboard {...props} pressed={pressed} />
      </div>
    </div>
  );
}
