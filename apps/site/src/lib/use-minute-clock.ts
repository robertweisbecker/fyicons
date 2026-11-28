import { useEffect, useState } from 'react';

export function useMinuteClock(active = true) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    if (!active) return;
    let timer: number;
    function update() {
      window.clearTimeout(timer);
      const instant = new Date();
      setNow(instant);
      timer = window.setTimeout(update, 60_000 - (instant.getTime() % 60_000));
    }
    function onVisibilityChange() {
      if (document.visibilityState === 'visible') update();
    }

    update();
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', update);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', update);
    };
  }, [active]);

  return now;
}
