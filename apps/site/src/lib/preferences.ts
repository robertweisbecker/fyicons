import { useEffect, useRef, useState } from 'react';

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';

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
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? 'null');
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
