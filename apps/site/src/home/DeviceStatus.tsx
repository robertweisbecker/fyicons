import { useDemoActivity } from '@/components/DeferredContent';
import { useEffect, useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { cn } from '@/lib/utils';

import Glyph0 from 'fyicons/icons/IconBattery';
import Glyph1 from 'fyicons/icons/IconBatteryCharging';
import Glyph2 from 'fyicons/icons/IconBatteryEmpty';
import Glyph3 from 'fyicons/icons/IconBatteryFullCharging';
import Glyph4 from 'fyicons/icons/IconBatteryLow';
import Glyph5 from 'fyicons/icons/IconBatteryMedium';
const Icon = createIconLookup({
  battery: { Component: Glyph0, id: '101:4287' },
  'battery-charging': { Component: Glyph1, id: '101:4288' },
  'battery-empty': { Component: Glyph2, id: '101:4289' },
  'battery-full-charging': { Component: Glyph3, id: '895:31023' },
  'battery-low': { Component: Glyph4, id: '101:4286' },
  'battery-medium': { Component: Glyph5, id: '101:4285' },
});

const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export function DeviceClock({ className }: { className?: string }) {
  const active = useDemoActivity();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    if (!active) return;
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
  }, [active]);

  return (
    <time
      dateTime={now?.toISOString()}
      className={cn('whitespace-nowrap tabular-nums', className)}
    >
      {now ? dateTimeFormat.format(now) : '…'}
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
  const active = useDemoActivity();
  const [battery, setBattery] = useState<{
    level: number;
    charging: boolean;
  } | null>(null);

  useEffect(() => {
    if (!active) return;
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
  }, [active]);

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
