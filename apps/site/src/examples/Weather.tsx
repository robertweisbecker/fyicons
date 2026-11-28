import { useState, type ReactNode } from 'react';
import {
  IconChartLine,
  IconChevronLeftSm,
  IconChevronRightSm,
  IconCloud,
  IconMoon,
  IconSunrise,
  IconSunset,
  IconThermometer,
} from 'fyicons';
import { Button } from '@/components/ui/button';
import { useMinuteClock } from '@/lib/use-minute-clock';
import { cn } from '@/lib/utils';
import { conditions, forecasts } from '@/examples/weather-forecasts';
import { getSunTimes, weatherTimeZone } from '@/examples/weather-sun';

const time = new Intl.DateTimeFormat('en-US', {
  timeZone: weatherTimeZone,
  hour: 'numeric',
  minute: '2-digit',
});
const weekday = new Intl.DateTimeFormat('en-US', {
  timeZone: weatherTimeZone,
  weekday: 'long',
});
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const nightConditions = {
  Sunny: { label: 'Clear', Icon: IconMoon },
  'Partly cloudy': { label: 'Partly cloudy', Icon: IconCloud },
};

function Temperature({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  // Interpolate from frozen at 25°F to fully rounded at 80°F.
  const warmth = Math.min(1, Math.max(0, (value - 25) / 55));
  // The axes affect glyph widths even with tabular figures. Leave room for two digits and °.
  return (
    <span
      className={cn(
        'inline-block min-w-[1.9em] tabular-nums motion-safe:transition-[font-weight,font-variation-settings] motion-safe:duration-200 motion-safe:ease-out',
        className,
      )}
      style={{
        fontWeight: Math.round(275 + warmth * 600),
        fontVariationSettings: `'ROND' ${Math.round(warmth * 100)}`,
      }}
    >
      {value}°
    </span>
  );
}

export function Weather({ heading }: { heading?: ReactNode }) {
  const [index, setIndex] = useState(0);
  const now = useMinuteClock();
  const { city, latitude, longitude, sky, temperature, week } =
    forecasts[index];
  const today = week[0];
  const dayName = now ? weekday.format(now) : '';
  const firstDay = days.indexOf(dayName);
  const sun = now && getSunTimes(now, latitude, longitude);
  const night = now && sun && (now < sun.sunrise || now >= sun.sunset);
  const labelClass = cn(
    'opacity-60',
    night ? 'mix-blend-screen' : 'mix-blend-multiply',
  );
  const nightReading =
    night &&
    (today.condition === 'Partly cloudy' || today.condition === 'Sunny')
      ? nightConditions[today.condition]
      : null;
  const condition = conditions[today.condition];
  const CurrentIcon = nightReading?.Icon ?? condition.Icon;

  function changeLocation(step: number) {
    setIndex((i) => (i + step + forecasts.length) % forecasts.length);
  }

  return (
    <div
      id="weather"
      className={cn(
        'isolate flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl',
        night
          ? 'bg-linear-145 from-[#273c58] via-[#354b64] to-[#586a7a] text-[#f5f8fa]'
          : cn('bg-[#b8d7e7] text-[#18354b]', sky),
      )}
    >
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">{heading}</div>
      <div className="flex flex-1 flex-col justify-evenly px-4 sm:px-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[22px] leading-tight font-semibold tracking-tight">
              {city}
            </p>
            <time
              dateTime={now?.toISOString()}
              className={cn('block text-xs tabular-nums', labelClass)}
            >
              {now ? dayName + ', ' + time.format(now) : '…'}
            </time>
          </div>
          <div role="group" aria-label="Saved locations" className="flex gap-1">
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Previous location"
              className="rounded-full bg-current/10 focus-visible:outline-current"
              onClick={() => changeLocation(-1)}
            >
              <IconChevronLeftSm />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Next location"
              className="rounded-full bg-current/10 focus-visible:outline-current"
              onClick={() => changeLocation(1)}
            >
              <IconChevronRightSm />
            </Button>
          </div>
        </div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="flex items-end justify-between gap-3"
        >
          <span className="sr-only">{city}, </span>
          <div className="flex flex-col items-start gap-1">
            <Temperature
              value={temperature}
              className="min-w-[1.75em] text-[56px] leading-none"
            />
            <span className="sr-only">Fahrenheit</span>
            <span className="inline-flex items-center gap-1 text-xs">
              <IconChartLine />
              <span>
                <span className={labelClass}>High</span>{' '}
                <Temperature value={today.high} />
              </span>
              <span aria-hidden>·</span>
              <span>
                <span className={labelClass}>Low</span>{' '}
                <Temperature value={today.low} />
              </span>
            </span>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <CurrentIcon
              size={40}
              className={
                night ? condition.nightInk : cn(condition.ink, 'brightness-80')
              }
            />
            <span className="text-base leading-5 font-semibold">
              {nightReading?.label ?? today.condition}
            </span>
          </div>
        </div>
        <dl className="flex justify-between gap-2 border-t border-current/15 pt-2 text-xs tabular-nums">
          <div className="relative pl-7">
            <dt className="text-[11px]">
              <IconSunrise
                size={20}
                className="absolute inset-y-0 left-0 my-auto"
              />
              <span className={labelClass}>Sunrise</span>
            </dt>
            <dd>{sun ? time.format(sun.sunrise) : '…'}</dd>
          </div>
          <div className="relative pl-7">
            <dt className="text-[11px]">
              <IconSunset
                size={20}
                className="absolute inset-y-0 left-0 my-auto"
              />
              <span className={labelClass}>Sunset</span>
            </dt>
            <dd>{sun ? time.format(sun.sunset) : '…'}</dd>
          </div>
        </dl>
      </div>
      <div className="mx-3 rounded-t-2xl bg-[#f6fafb] px-3 pt-3 pb-3.5 text-[#18354b] shadow-[0_-1px_4px_#18354b0c] sm:mx-4">
        <div className="mb-2 flex items-center justify-between border-b border-[#18354b]/12 pb-2">
          <p className="text-xs font-semibold">Weekly forecast</p>
          <span className="inline-flex items-center gap-1 text-xs text-[#496073]">
            <IconThermometer />
            °F
          </span>
        </div>
        <ol aria-label={city + ' weekly forecast'} className="grid grid-cols-7">
          {week.map(({ high, low, condition }, offset) => {
            const { Icon, ink } = conditions[condition];
            const day = now ? days[(firstDay + offset) % 7].slice(0, 3) : '…';
            return (
              <li key={offset} className="flex flex-col items-center text-xs">
                <span className="text-[11px] text-[#496073]">
                  {offset === 0 ? 'Today' : day}
                </span>
                <Icon
                  size={18}
                  aria-label={condition}
                  className={cn('my-1', ink)}
                />
                <span>
                  <span className="sr-only">High </span>
                  <Temperature value={high} />
                </span>
                <span className="text-[#496073]">
                  <span className="sr-only">Low </span>
                  <Temperature value={low} />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
