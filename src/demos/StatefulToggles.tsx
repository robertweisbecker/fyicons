import { ToggleIcon } from '@/components/ToggleIcon';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

const groups = [
  {
    title: 'Favorites',
    className: 'text-rose-700 dark:text-rose-300',
    items: [
      ['Like', 'heart-alt', 'heart-fill'],
      ['Star', 'star', 'star-fill'],
      ['Save', 'bookmark', 'bookmark-fill'],
    ],
  },
  {
    title: 'Tools',
    className: 'text-violet-700 dark:text-violet-300',
    items: [
      ['Select', 'pointer', 'pointer-fill'],
      ['Edit', 'pencil-edit', 'pencil-edit-fill'],
      ['Settings', 'settings', 'settings-fill'],
    ],
  },
  {
    title: 'Media',
    className: 'text-sky-700 dark:text-sky-300',
    items: [
      ['Play', 'play', 'play-fill'],
      ['Sound', 'volume-high', 'volume-high-fill'],
      ['Captions', 'closed-captions', 'closed-captions-fill'],
    ],
  },
  {
    title: 'View',
    className: 'text-teal-700 dark:text-teal-300',
    items: [
      ['Visible', 'eye-closed', 'eye-open'],
      ['Brightness', 'sun', 'sun-fill'],
      ['People', 'users-two', 'users-two-fill'],
    ],
  },
];

export function StatefulToggles() {
  return (
    <section aria-labelledby="stateful-icons" className="mb-10">
      <h2 id="stateful-icons" className="mb-4 text-xl font-semibold">
        Stateful icons
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {groups.map(({ title, className, items }) => (
          <div
            key={title}
            className="rounded-xl border border-line bg-surface p-4"
          >
            <h3 className="mb-3 text-sm font-medium text-muted">{title}</h3>
            <ToggleGroup
              multiple
              defaultValue={[items[0][0]]}
              aria-label={title}
              className={cn('flex-wrap', className)}
            >
              {items.map(([label, icon, activeIcon]) => (
                <Toggle
                  key={label}
                  value={label}
                  size="icon"
                  aria-label={label}
                  title={label}
                >
                  <ToggleIcon icon={icon} activeIcon={activeIcon} />
                </Toggle>
              ))}
            </ToggleGroup>
          </div>
        ))}
      </div>
    </section>
  );
}
