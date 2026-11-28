export type Theme = 'light' | 'dark';

export const themeStorageKey = 'fyicons-theme-v1';

export const isTheme = (value: unknown): value is Theme =>
  value === 'light' || value === 'dark';
