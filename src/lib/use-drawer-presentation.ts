import { useLayoutEffect } from 'react';

/** Keep presentation in sync with Base UI's actual gesture, without React renders
 * per pointer move. CSS interpolates this one value when a gesture settles. */
export function useDrawerPresentation(
  element: HTMLDivElement | null,
  enabled: boolean,
  expanded: boolean,
) {
  useLayoutEffect(() => {
    if (!enabled || !element) return;
    let previous = -1;
    const update = () => {
      const swiping = element.hasAttribute('data-swiping');
      // Initial snap measurements may temporarily report a full-height drawer.
      // A newly opened compact preview must never animate from that geometry.
      let progress = 0;
      if (expanded || swiping) {
        const height = element.getBoundingClientRect().height;
        const offset =
          parseFloat(
            element.style.getPropertyValue('--drawer-snap-point-offset'),
          ) || 0;
        const movement =
          parseFloat(
            element.style.getPropertyValue('--drawer-swipe-movement-y'),
          ) || 0;
        progress = Math.max(
          0,
          Math.min(
            1,
            (height - offset - movement - 192) / Math.max(1, height - 192),
          ),
        );
      }
      if (progress !== previous) {
        previous = progress;
        element.style.setProperty('--inspector-progress', String(progress));
      }
    };
    const observer = new MutationObserver(update);
    observer.observe(element, {
      attributes: true,
      attributeFilter: ['style', 'data-swiping'],
    });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    update();
    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, [element, enabled, expanded]);
}
