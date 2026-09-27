import { useEffect, useState } from 'react';

export function readPreference<T>(key: string, fallback: T): T {
  try {
    return (
      JSON.parse(
        localStorage.getItem(key) ??
          localStorage.getItem(key.replace('fyicons-', 'astra-')) ??
          'null',
      ) ?? fallback
    );
  } catch {
    return fallback;
  }
}
export function usePreference<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => readPreference(key, fallback));
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
