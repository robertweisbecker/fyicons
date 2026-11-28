import { useCallback, useEffect, useRef, useState } from 'react';

export const clipboardUnavailable = 'Clipboard unavailable. Please try again.';

/** Toast title for a copied icon: its name in quotes. */
export function CopiedTitle({ name }: { name: string }) {
  return (
    <>
      &quot;<span className="font-semibold">{name}</span>&quot; copied
    </>
  );
}

/**
 * What was copied last, cleared again after `duration` milliseconds. Call
 * `mark(null)` to clear it at once. `mark` does nothing after unmount, so
 * it is safe to call after an awaited clipboard write.
 */
export function useCopied<T = true>(duration = 2200) {
  const [copied, setCopied] = useState<T | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(timer.current);
    };
  }, []);
  const mark = useCallback(
    (value: T | null) => {
      if (!mounted.current) return;
      clearTimeout(timer.current);
      setCopied(value);
      if (value !== null)
        timer.current = setTimeout(() => setCopied(null), duration);
    },
    [duration],
  );
  return [copied, mark] as const;
}
