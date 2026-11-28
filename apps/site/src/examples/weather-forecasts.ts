import {
  IconCloudDrizzle,
  IconCloudRain,
  IconCloudSun,
  IconClouds,
  IconSnowflake,
  IconSunLg,
} from 'fyicons';

export const conditions = {
  'Partly cloudy': {
    Icon: IconCloudSun,
    ink: 'text-[#b58226]',
    nightInk: 'text-slate-200',
  },
  Sunny: { Icon: IconSunLg, ink: 'text-[#ce7b00]', nightInk: 'text-amber-100' },
  Overcast: {
    Icon: IconClouds,
    ink: 'text-slate-500',
    nightInk: 'text-slate-300',
  },
  Showers: {
    Icon: IconCloudRain,
    ink: 'text-[#4262c7]',
    nightInk: 'text-indigo-300',
  },
  Drizzle: {
    Icon: IconCloudDrizzle,
    ink: 'text-[#168386]',
    nightInk: 'text-teal-300',
  },
  Snow: {
    Icon: IconSnowflake,
    ink: 'text-[#008fc9]',
    nightInk: 'text-sky-300',
  },
};

type Day = { high: number; low: number; condition: keyof typeof conditions };
type Forecast = {
  city: string;
  latitude: number;
  longitude: number;
  sky: string;
  temperature: number;
  week: [Day, Day, Day, Day, Day, Day, Day];
};

export const forecasts: Forecast[] = [
  {
    city: 'San Francisco',
    latitude: 37.77,
    longitude: -122.42,
    sky: 'bg-[radial-gradient(ellipse_85%_18%_at_102%_49%,#eff5efb3,transparent),radial-gradient(ellipse_68%_14%_at_94%_38%,#f5f5ef8c,transparent),linear-gradient(154deg,#93c4e3,#bbd9e7_58%,#f4e5cf)]',
    temperature: 61,
    week: [
      { high: 65, low: 54, condition: 'Partly cloudy' },
      { high: 62, low: 53, condition: 'Overcast' },
      { high: 60, low: 51, condition: 'Drizzle' },
      { high: 61, low: 50, condition: 'Showers' },
      { high: 64, low: 52, condition: 'Partly cloudy' },
      { high: 67, low: 53, condition: 'Sunny' },
      { high: 66, low: 54, condition: 'Sunny' },
    ],
  },
  {
    city: 'Seattle',
    latitude: 47.61,
    longitude: -122.33,
    sky: 'bg-[radial-gradient(ellipse_95%_32%_at_95%_29%,#e2e7e78c,transparent),linear-gradient(152deg,#91a9be,#b5c7d1_58%,#dce2db)]',
    temperature: 48,
    week: [
      { high: 52, low: 44, condition: 'Showers' },
      { high: 50, low: 43, condition: 'Drizzle' },
      { high: 49, low: 41, condition: 'Showers' },
      { high: 51, low: 42, condition: 'Overcast' },
      { high: 54, low: 43, condition: 'Partly cloudy' },
      { high: 53, low: 41, condition: 'Overcast' },
      { high: 50, low: 42, condition: 'Drizzle' },
    ],
  },
  {
    city: 'Palm Springs',
    latitude: 33.83,
    longitude: -116.55,
    sky: 'bg-[radial-gradient(ellipse_66%_50%_at_91%_31%,#fff1bd,transparent),linear-gradient(152deg,#ecc68c,#f2d7a8_58%,#f4e7ca)]',
    temperature: 76,
    week: [
      { high: 84, low: 59, condition: 'Sunny' },
      { high: 82, low: 58, condition: 'Sunny' },
      { high: 79, low: 55, condition: 'Partly cloudy' },
      { high: 77, low: 53, condition: 'Overcast' },
      { high: 80, low: 55, condition: 'Sunny' },
      { high: 83, low: 57, condition: 'Sunny' },
      { high: 85, low: 58, condition: 'Sunny' },
    ],
  },
  {
    city: 'Truckee',
    latitude: 39.33,
    longitude: -120.18,
    sky: 'bg-linear-150 from-[#abc3d4] via-[#d2e2eb] to-[#eff2f0]',
    temperature: 28,
    week: [
      { high: 32, low: 20, condition: 'Snow' },
      { high: 30, low: 18, condition: 'Snow' },
      { high: 33, low: 16, condition: 'Overcast' },
      { high: 36, low: 19, condition: 'Partly cloudy' },
      { high: 38, low: 21, condition: 'Sunny' },
      { high: 34, low: 20, condition: 'Overcast' },
      { high: 31, low: 17, condition: 'Snow' },
    ],
  },
];
