import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

export function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
}

export function readPreference<T>(
  key: string,
  fallback: T,
  validate?: (value: unknown) => value is T,
): T {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(key) ??
        localStorage.getItem(key.replace('fyicons-', 'astra-')) ??
        'null',
    );
    if (value == null || (validate && !validate(value))) return fallback;
    return value as T;
  } catch {
    return fallback;
  }
}
export function usePreference<T>(
  key: string,
  fallback: T,
  validate?: (value: unknown) => value is T,
) {
  const defaults = useRef({ fallback, validate });
  const [value, setValue] = useState<T>(fallback);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setValue(
      readPreference(key, defaults.current.fallback, defaults.current.validate),
    );
    setLoaded(true);
  }, [key]);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* Storage is optional. */
    }
  }, [key, value, loaded]);
  return [value, setValue] as const;
}
function useMediaQuery(query: string) {
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
export const useReducedMotionPreference = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)');
