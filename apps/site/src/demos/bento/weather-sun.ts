export const weatherTimeZone = 'America/Los_Angeles';

const calendar = new Intl.DateTimeFormat('en-US', {
  timeZone: weatherTimeZone,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});
const radians = Math.PI / 180;
const dayMs = 86_400_000;
const epoch = Date.UTC(2000, 0, 1, 12);

// Estimate the sun's position at local noon for the forecast's Pacific date.
// Solar coordinates: https://aa.usno.navy.mil/faq/sun_approx
export function getSunTimes(date: Date, latitude: number, longitude: number) {
  const parts = calendar.formatToParts(date);
  const getPart = (name: 'year' | 'month' | 'day') =>
    Number(parts.find(({ type }) => type === name)?.value);
  const midnightUtc = Date.UTC(
    getPart('year'),
    getPart('month') - 1,
    getPart('day'),
  );
  const daysSinceEpoch = (midnightUtc - epoch) / dayMs + 0.5 - longitude / 360;
  const meanAnomaly = (357.529 + 0.98560028 * daysSinceEpoch) * radians;
  const meanLongitude = (280.459 + 0.98564736 * daysSinceEpoch) * radians;
  const solarLongitude =
    meanLongitude +
    (1.915 * Math.sin(meanAnomaly) + 0.02 * Math.sin(2 * meanAnomaly)) *
      radians;
  const obliquity = (23.439 - 0.00000036 * daysSinceEpoch) * radians;
  const declination = Math.asin(Math.sin(obliquity) * Math.sin(solarLongitude));
  const ascension = Math.atan2(
    Math.cos(obliquity) * Math.sin(solarLongitude),
    Math.cos(solarLongitude),
  );
  const angle = meanLongitude - ascension;
  const equationOfTime =
    (4 / radians) * Math.atan2(Math.sin(angle), Math.cos(angle));
  const noonMinutes = 720 - 4 * longitude - equationOfTime;

  // The sun's center is 0.833° below the horizon when its upper edge is visible.
  const lat = latitude * radians;
  const hourAngle = Math.acos(
    (Math.sin(-0.833 * radians) - Math.sin(lat) * Math.sin(declination)) /
      (Math.cos(lat) * Math.cos(declination)),
  );
  const halfDayMinutes = (4 / radians) * hourAngle;
  return {
    sunrise: new Date(
      midnightUtc + Math.round(noonMinutes - halfDayMinutes) * 60_000,
    ),
    sunset: new Date(
      midnightUtc + Math.round(noonMinutes + halfDayMinutes) * 60_000,
    ),
  };
}
