import { useLayoutEffect } from 'react';

/** Follow Base UI's offsets for the content morph; never steer its snap physics. */
export function useDrawerPresentation(
  element: HTMLDivElement | null,
  enabled: boolean,
  expanded: boolean,
  compactHeight: number,
  previewHeight: number,
) {
  useLayoutEffect(() => {
    if (!enabled || !element) return;
    let previous = -1;
    let height = element.getBoundingClientRect().height;
    const update = () => {
      const swiping = element.hasAttribute('data-swiping');
      let progress = 0;
      // Initial snap measurements can briefly report the full height. Keep a
      // newly opened compact preview in its compact presentation during that pass.
      if (expanded || swiping) {
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
            (height - offset - movement - compactHeight) /
              Math.max(1, previewHeight - compactHeight),
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
    const resize = new ResizeObserver(() => {
      height = element.getBoundingClientRect().height;
      update();
    });
    resize.observe(element, { box: 'border-box' });
    update();
    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, [element, enabled, expanded, compactHeight, previewHeight]);
}
