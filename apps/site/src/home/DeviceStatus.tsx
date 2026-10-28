import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export function DeviceClock({ className }: { className?: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timer: number;
    function update() {
      window.clearTimeout(timer);
      setNow(new Date());
      timer = window.setTimeout(update, 60_000 - (Date.now() % 60_000));
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
  }, []);

  return (
    <time
      dateTime={now.toISOString()}
      className={cn('whitespace-nowrap tabular-nums', className)}
    >
      {dateTimeFormat.format(now)}
    </time>
  );
}

interface DeviceBatteryManager extends EventTarget {
  readonly level: number;
  readonly charging: boolean;
}

export function DeviceBattery({
  percentageClassName,
}: {
  percentageClassName?: string;
}) {
  const [battery, setBattery] = useState<{
    level: number;
    charging: boolean;
  } | null>(null);

  useEffect(() => {
    const batteryNavigator = navigator as Navigator & {
      getBattery?: () => Promise<DeviceBatteryManager>;
    };
    if (!batteryNavigator.getBattery) return;

    let disposed = false;
    let unsubscribe = () => {};
    async function connect() {
      try {
        const manager = await batteryNavigator.getBattery!();
        if (disposed) return;
        const update = () =>
          setBattery({
            level: Math.round(manager.level * 100),
            charging: manager.charging,
          });
        manager.addEventListener('levelchange', update);
        manager.addEventListener('chargingchange', update);
        unsubscribe = () => {
          manager.removeEventListener('levelchange', update);
          manager.removeEventListener('chargingchange', update);
        };
        update();
      } catch {
        // Battery access may be unavailable or blocked by the browser.
      }
    }
    void connect();
    return () => {
      disposed = true;
      unsubscribe();
    };
  }, []);

  const { level, charging } = battery ?? { level: 1000, charging: false };
  const icon = charging
    ? level === 100
      ? 'battery-full-charging'
      : 'battery-charging'
    : level === 0
      ? 'battery-empty'
      : level <= 20
        ? 'battery-low'
        : level <= 70
          ? 'battery-medium'
          : 'battery';
  const percentage = `${level.toLocaleString()}%`;
  const label = `Battery: ${percentage}${charging ? ', charging' : ''}${battery ? '' : ' (demo)'}`;

  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="flex items-center gap-1 tabular-nums"
    >
      <span className={percentageClassName}>{percentage}</span>
      <Icon name={icon} />
    </span>
  );
}
