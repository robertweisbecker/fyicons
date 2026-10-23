import { useEffect, useState } from 'react';

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
  const [value, setValue] = useState<T>(() =>
    readPreference(key, fallback, validate),
  );
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* Storage is optional. */
    }
  }, [key, value]);
  return [value, setValue] as const;
}
export function useMobile() {
  const [mobile, setMobile] = useState(
    () => matchMedia('(width < 768px)').matches,
  );
  useEffect(() => {
    const query = matchMedia('(width < 768px)');
    const change = () => setMobile(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  return mobile;
}
