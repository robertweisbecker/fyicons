import { Icon } from '@/components/Icon';

// Matching outline and filled artwork, shown in the same order in both grids.
const variantIcons = [
  'error',
  'bolt',
  'bookmark',
  'grid-masonry',
  'video-camera',
  'chart-donut',
  'timer',
  'cookie-bite',
  'crown',
  'cursor',
  'eye',
  'folder',
  'heart',
  'home',
  'inbox',
  'lock',
  'microphone',
  'moon',
  'settings',
  'sparkle',
  'star',
  'sun',
  'user',
  'diamond',
  'play',
  'pause',
  'stop',
  'circle-check',
  'clock',
] as const;

const mixedIcons = [
  'appearance',
  'circle-halftone',
  'gradient',
  'shadow',
  'shadow-inner',
  'app-notification',
  'edit-solid',
  'file-add',
  'folder-check',
  'image-solid',
  'picture-frame',
  'compass',
  'credit-card',
  'browser-solid',
  'calendar-solid',
  // 'cog-wheel',
  'life-ring',
  'calculator',
  'eyedropper',
  'fire-alt',
  'watch',
  'wand',
  // 'alarm-clock',
  'border-width',
  // 'box-shipping',
  // 'cash',
  'microchip',
  'shield-user-solid',
  'hourglass',
  'circle-play',
  'circle-pause',
  'circle-stop',
  'clock-solid',
  'progress-task-done',
  'marker-tip',
  'pencil-tip',
  'pen-tip',
  'brush-tip',
  'highlighter-tip',
] as const;

const variants = [
  { label: 'Outline', icons: variantIcons },
  {
    label: 'Filled',
    icons: variantIcons.map((name) => `${name}-fill`),
  },
  { label: 'Mixed', icons: mixedIcons },
] as const;

export function IconVariants() {
  return (
    <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-4">
      {variants.map(({ label, icons }) => (
        <figure key={label} className="min-w-0 space-y-3">
          <ul
            aria-label={`${label} icons`}
            role="list"
            className="grid aspect-square min-h-26 w-full auto-rows-fr grid-cols-5 place-items-center rounded-xl bg-surface p-1 sm:rounded-2xl sm:p-3"
          >
            {icons.map((name) => (
              <li
                key={name}
                className="flex min-w-0 items-center justify-center"
              >
                <Icon
                  name={name}
                  className="size-4 sm:size-6"
                  aria-label={name.replaceAll('-', ' ')}
                />
              </li>
            ))}
          </ul>
          <figcaption className="text-sm text-muted">{label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
