import { Icon } from '@/components/Icon';

// Matching outline and filled artwork, shown in the same order in both grids.
const variantIcons = [
  'error',
  'bolt',
  'bookmark',
  'browser',
  'calendar',
  'chart-donut',
  'clock',
  'cookie',
  'crown',
  'cursor',
  'eye',
  'folder',
  'heart',
  'home',
  'inbox',
  'lock',
  'map-pin',
  'microphone',
  'moon',
  'settings',
  'sparkle',
  'star',
  'sun',
  'user',
  'video',
] as const;

const variants = [
  { label: 'Outline', suffix: '' },
  { label: 'Filled', suffix: '-fill' },
] as const;

export function IconVariants() {
  return (
    <section
      aria-labelledby="icon-variants-heading"
      className="grid items-start gap-6 md:grid-cols-2 md:gap-10"
    >
      <h2
        id="icon-variants-heading"
        className="text-2xl font-medium tracking-tight"
      >
        Outline and filled variants
      </h2>
      <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
        {variants.map(({ label, suffix }) => (
          <figure key={label} className="min-w-0 space-y-3">
            <ul
              aria-label={`${label} icons`}
              role="list"
              className="grid aspect-square grid-cols-5 grid-rows-5 place-items-center rounded-2xl bg-surface p-2 sm:p-3"
            >
              {variantIcons.map((name) => (
                <li
                  key={name}
                  className="flex min-w-0 items-center justify-center"
                >
                  <Icon
                    name={
                      name === 'browser' && suffix
                        ? 'browser-solid'
                        : `${name}${suffix}`
                    }
                    size={24}
                    aria-label={`${name.replaceAll('-', ' ')} ${label.toLowerCase()}`}
                  />
                </li>
              ))}
            </ul>
            <figcaption className="text-sm text-muted">{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
