import { useEffect, useState, type KeyboardEvent } from 'react';

const alternateLegends: Record<string, string> = {
  '1': '!',
  '2': '@',
  '3': '#',
  '4': '$',
  '5': '%',
  '6': '^',
  '7': '&',
  '8': '*',
  '9': '(',
  '0': ')',
  _: '-',
  '+': '=',
  '{': '[',
  '}': ']',
  '|': '\\',
  ':': ';',
  "'": '"',
  '<': ',',
  '>': '.',
  '/': '?',
};

export function usePhysicalKeys() {
  const [held, setHeld] = useState<Record<string, string>>({});

  function clear() {
    setHeld({});
  }

  useEffect(() => {
    window.addEventListener('blur', clear);
    document.addEventListener('visibilitychange', clear);
    return () => {
      window.removeEventListener('blur', clear);
      document.removeEventListener('visibilitychange', clear);
    };
  }, []);

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      e.repeat ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.nativeEvent.isComposing
    )
      return;
    if (e.key.length !== 1 && e.key !== 'Enter' && e.key !== 'Backspace')
      return;
    const code = e.code || e.key;
    const legend =
      alternateLegends[e.key] ??
      (e.key.length === 1 ? e.key.toUpperCase() : e.key);
    setHeld((current) => ({ ...current, [code]: legend }));
  }

  function onKeyUp(e: KeyboardEvent<HTMLTextAreaElement>) {
    const code = e.code || e.key;
    setHeld((current) => {
      if (!(code in current)) return current;
      const next = { ...current };
      delete next[code];
      return next;
    });
  }

  return {
    pressed: Object.values(held),
    inputEvents: { onKeyDown, onKeyUp, onBlur: clear },
  };
}
