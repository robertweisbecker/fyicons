import { useCallback, useSyncExternalStore } from 'react';

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (listener: () => void) => {
      const media = matchMedia(query);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    },
    [query],
  );
  // The first hydration render must match the static HTML. React then reads
  // the browser preference and subscribes to changes.
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}
export const useMobile = () => useMediaQuery('(width < 768px)');
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
export const useReducedMotionPreference = () =>
  useMediaQuery(reducedMotionQuery);
/** A single read for event handlers and effects. Use the hook to render. */
export const prefersReducedMotion = () =>
  matchMedia(reducedMotionQuery).matches;
