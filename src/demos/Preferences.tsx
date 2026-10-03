import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { cn } from '../lib/utils';
import { useState, type CSSProperties } from 'react';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Field } from '@base-ui/react/field';
import { Toggle } from '@/components/ui/toggle';
import { Icon } from '../components/Icon';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const sections = [
  'General',
  'Appearance',
  'Notifications',
  'Keyboard',
  'Privacy',
  'Connected apps',
];
const sectionIcons = [
  'settings',
  'palette',
  'bell-1',
  'keyboard',
  'shield-check',
  'plug',
];
const colors = [
  ['Blue', 'var(--color-blue-500)'],
  ['Purple', 'var(--color-violet-500)'],
  ['Pink', 'var(--color-pink-500)'],
  ['Orange', 'var(--color-orange-500)'],
  ['Green', 'var(--color-green-500)'],
];
const secondary: Record<string, string[][]> = {
  General: [
    ['folder', 'Default workspace', 'FYIcons'],
    ['clock', 'Start at login', 'Open the app when you sign in.'],
    [
      'cloud',
      'Sync workspace settings',
      'Available on your connected devices.',
    ],
  ],
  Notifications: [
    ['bell-1', 'Task updates', 'Notify when a task finishes or needs input.'],
    ['chat-round', 'New messages', 'Notify when a message arrives.'],
    ['moon', 'Quiet hours', 'Every evening, 8 PM to 8 AM.'],
  ],
  Keyboard: [
    ['kbd-command', 'Command menu', '⌘ K'],
    ['pencil-edit', 'New task', '⌘ N'],
    ['search', 'Find anything', '⌘ F'],
  ],
  Privacy: [
    ['shield-check', 'Local workspace', 'Your projects stay on this device.'],
    ['lock', 'Require authentication', 'Unlock with your system password.'],
    ['eye-closed', 'Private by default', 'Nothing is shared without you.'],
  ],
  'Connected apps': [
    ['git-branch', 'GitHub', 'Connected to FYIcons'],
    ['component', 'Figma', 'Connected to the icon library.'],
    ['calendar', 'Calendar', 'View calendar events.'],
  ],
};
export function Preferences({ notify }: { notify: (message: string) => void }) {
  const [section, setSection] = useState('Appearance');
  const [appearance, setAppearance] = useState('Light');
  const [accent, setAccent] = useState('var(--color-blue-500)');
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState({
    labels: true,
    motion: false,
    contrast: false,
    sounds: true,
  });
  const dark =
    appearance === 'Dark' ||
    (appearance === 'System' &&
      matchMedia('(prefers-color-scheme: dark)').matches);
  const matches = (text: string) =>
    text.toLowerCase().includes(query.toLowerCase());
  const rows = [
    {
      id: 'labels',
      icon: 'panel-left',
      title: 'Show sidebar labels',
      description: 'Display names alongside navigation icons.',
    },
    {
      id: 'motion',
      icon: 'activity',
      title: 'Reduce motion',
      description: 'Use fewer animations throughout the app.',
    },
    {
      id: 'contrast',
      icon: 'circle-halftone',
      title: 'Increase contrast',
      description: 'Make borders and interface controls more distinct.',
    },
    {
      id: 'sounds',
      icon: 'volume-high',
      title: 'Interface sounds',
      description: 'Play a sound when tasks finish.',
    },
  ] as const;
  return (
    <div
      className={cn(
        'study-window demo-surface preferences-window group/preferences flex h-190 overflow-hidden rounded-[13px] border border-mist-300 bg-white font-sans text-sm font-normal tracking-normal text-zinc-800 antialiased scheme-light shadow-xl shadow-slate-900/10 [--app-blue:var(--color-blue-500)] [--app-line:var(--color-gray-200)] [--hover:var(--color-mauve-100)] [--muted:var(--color-neutral-500)] [--pref-card:var(--color-white)] [--pref-line:var(--color-zinc-200)] [--pref-muted:var(--color-zinc-500)] [--pref-page:var(--color-zinc-50)] [--pref-text:var(--color-zinc-900)] [--text:var(--color-zinc-800)] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-neutral-500 [&_input]:focus-visible:outline-neutral-500 [&_textarea]:focus-visible:outline-neutral-500',
        dark
          ? 'appearance-dark [--pref-card:var(--color-zinc-800)] [--pref-line:var(--color-zinc-700)] [--pref-muted:var(--color-zinc-400)] [--pref-page:var(--color-zinc-900)] [--pref-text:var(--color-zinc-100)]'
          : '',
        options.contrast
          ? 'high-contrast [--pref-line:var(--color-zinc-400)] [--pref-muted:var(--color-zinc-500)] [&.appearance-dark]:[--pref-muted:var(--color-zinc-300)]'
          : '',
      )}
      id="preferences-window"
      style={
        { '--pref-accent': accent, '--control-accent': accent } as CSSProperties
      }
    >
      <aside
        className={cn(
          'study-sidebar preferences-sidebar group/sidebar flex shrink-0 basis-56 flex-col border-r border-(--app-line) border-r-zinc-200 bg-gray-100 px-3 pt-5 pb-3 max-[1240px]:basis-51 max-[1050px]:basis-46 max-[850px]:basis-40 max-[680px]:hidden',
          options.labels ? '' : 'compact-labels',
        )}
      >
        <div
          className={cn(
            'window-controls mb-6 flex h-4 items-center gap-2 px-2 [&_i]:size-2.75 [&_i]:rounded-full [&_i]:bg-red-400 [&_i]:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_5%,transparent)] [&_i:nth-child(2)]:bg-amber-400 [&_i:nth-child(3)]:bg-green-500',
          )}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </div>
        <div
          className={cn(
            'preferences-profile mb-2 flex flex-col items-start px-3.5 [&_strong]:text-base [&_strong]:font-semibold [&_strong]:tracking-normal [&>span:last-child]:mt-1 [&>span:last-child]:text-xs [&>span:last-child]:text-zinc-500',
          )}
        >
          <Avatar
            aria-label="Jamie Davis"
            className={cn(
              'profile-monogram mb-3.5 grid size-12 place-items-center rounded-full bg-linear-145 from-slate-300 to-mist-400 text-xl font-medium text-white',
            )}
          >
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <strong>Jamie Davis</strong>
          <span>Personal workspace</span>
        </div>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-neutral-500',
          )}
        >
          Preferences
        </div>
        {sections.map((name, i) => (
          <Button
            variant="unstyled"
            size="unstyled"
            key={name}
            className={cn(
              'app-nav-item my-0.5 flex min-h-10 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 group-[.compact-labels]/sidebar:justify-center group-[.compact-labels]/sidebar:gap-0 group-[.compact-labels]/sidebar:text-[0px] hover:bg-gray-200 max-[1050px]:text-xs max-[850px]:gap-2 max-[850px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-gray-200 [&.selected]:text-mauve-600',
              section === name ? 'selected' : '',
            )}
            aria-label={name}
            onClick={() => {
              setSection(name);
              setQuery('');
            }}
          >
            <span
              className={cn(
                'settings-icon grid size-6 shrink-0 place-items-center rounded-md text-white shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_2%,transparent)] [&.blue]:bg-slate-400 [&.coral]:bg-red-400 [&.slate]:bg-zinc-400 [&.teal]:bg-slate-400 [&.violet]:bg-indigo-400',
                ['slate', 'violet', 'coral', 'blue', 'teal', 'slate'][i],
              )}
            >
              <Icon name={sectionIcons[i]} />
            </span>
            <span
              className={cn(
                'preference-nav-label group-[.compact-labels]/sidebar:text-[0px]',
              )}
            >
              {name}
            </span>
          </Button>
        ))}
        <div className={cn('sidebar-bottom mt-auto')}>
          <Button
            variant="unstyled"
            size="unstyled"
            className={cn(
              'app-nav-item my-0.5 flex min-h-10 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 group-[.compact-labels]/sidebar:justify-center group-[.compact-labels]/sidebar:gap-0 group-[.compact-labels]/sidebar:text-[0px] hover:bg-gray-200 max-[1050px]:text-xs max-[850px]:gap-2 max-[850px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-gray-200 [&.selected]:text-mauve-600',
            )}
            onClick={() =>
              notify(
                'Try appearance, accent colors, and the preference switches.',
              )
            }
          >
            <Icon name="info" />
            Help & feedback
          </Button>
        </div>
      </aside>
      <section
        className={cn(
          'preferences-main flex min-w-0 flex-1 flex-col bg-(--pref-page)',
        )}
      >
        <header
          className={cn(
            'preferences-titlebar flex min-h-14 items-center justify-between gap-5 border-b border-(--pref-line) px-6 text-(--pref-muted) max-[680px]:min-h-13 max-[680px]:gap-2.5 max-[680px]:px-4 [&>div]:flex [&>div]:items-center [&>div]:gap-3.5 [&>div]:text-xs max-[680px]:[&>div]:gap-2 max-[680px]:[&>div]:text-xs',
          )}
        >
          <div>
            <Icon name="sliders" />
            Preferences
          </div>
          <label
            className={cn(
              'preference-search flex items-center gap-2 text-mist-500 [&_input]:w-32 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-xs [&_input]:text-(--pref-muted) [&_input]:placeholder:text-mist-500 max-[680px]:[&_input]:w-28 max-[680px]:[&_input]:text-base max-[680px]:[&_input]:placeholder:text-xs',
            )}
          >
            <Icon name="search" />
            <input
              aria-label="Search preferences"
              placeholder="Search settings"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSection('Appearance');
              }}
            />
          </label>
        </header>
        <div
          className={cn(
            'preferences-scroll flex-1 overflow-auto px-10 pt-7 pb-5.5 max-[1240px]:px-7 max-[850px]:px-5.5 max-[850px]:py-6 max-[680px]:px-4 max-[680px]:py-6',
          )}
        >
          <div className={cn('preferences-content mx-auto max-w-181.5')}>
            <div
              className={cn(
                'preferences-heading mb-6.5 flex items-center justify-between gap-5 max-[680px]:gap-2.5 [&_h2]:my-2 [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-(--pref-text) max-[680px]:[&_h2]:text-3xl [&_p]:text-sm [&_p]:text-(--pref-muted) max-[680px]:[&_p]:text-xs',
              )}
            >
              <div>
                <h2>{section}</h2>
                <p>
                  {section === 'Appearance'
                    ? 'Choose the look and behavior of your workspace.'
                    : 'Manage your workspace settings.'}
                </p>
              </div>
              <span
                className={cn(
                  'saved-indicator flex items-center gap-1.5 text-xs text-mist-500 max-[680px]:text-xs',
                )}
              >
                <Icon name="circle-check-fill" />
                Saved
              </span>
            </div>
            {section === 'Appearance' ? (
              <>
                {matches('Appearance theme light dark system') && (
                  <>
                    <div
                      className={cn(
                        'setting-section-heading mb-3 flex items-baseline justify-between gap-4 max-[850px]:block [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-(--pref-text) [&_p]:text-xs [&_p]:text-(--pref-muted) max-[850px]:[&_p]:mt-1.5',
                      )}
                    >
                      <h3>Appearance</h3>
                      <p>Choose a theme</p>
                    </div>
                    <ToggleGroup
                      className={cn(
                        'appearance-options mb-6 grid grid-cols-3 gap-3 max-[850px]:gap-2.5 max-[680px]:mb-5.5 max-[680px]:gap-2',
                      )}
                      value={[appearance]}
                      onValueChange={(values) => {
                        if (values[0]) setAppearance(values[0]);
                      }}
                      aria-label="Appearance"
                    >
                      {['Light', 'Dark', 'System'].map((name, i) => (
                        <Toggle
                          variant="unstyled"
                          size="unstyled"
                          key={name}
                          value={name}
                          className={cn(
                            'appearance-option group/theme min-w-0 p-0 text-left',
                            name === appearance ? 'selected' : '',
                          )}
                          aria-label={name + ' appearance'}
                        >
                          <span
                            className={cn(
                              'theme-preview flex h-24 overflow-hidden rounded-lg border border-gray-200 bg-gray-200 px-4 pt-4 shadow-[inset_0_0_0_3px_var(--pref-page)] group-data-pressed/theme:border-2 group-data-pressed/theme:border-(--pref-accent) group-data-pressed/theme:px-3.75 group-data-pressed/theme:pt-3.75 max-[850px]:px-2.5 max-[850px]:group-data-pressed/theme:px-2.25 max-[680px]:h-19.5 max-[680px]:px-2 max-[680px]:pt-3.5 max-[680px]:group-data-pressed/theme:px-1.75 max-[680px]:group-data-pressed/theme:pt-3.25',
                              name === 'Dark' && 'border-zinc-200 bg-mauve-700',
                              name === 'System' &&
                                'bg-[linear-gradient(90deg,var(--color-gray-200)_50%,var(--color-zinc-800)_50%)]',
                            )}
                            aria-hidden="true"
                          >
                            <span
                              className={cn(
                                'mini-sidebar w-[31%] rounded-tl bg-mauve-100 px-2 pt-5 max-[680px]:px-1.25 max-[680px]:pt-4 [&_i]:mb-1.75 [&_i]:block [&_i]:h-1 [&_i]:rounded-sm [&_i]:bg-gray-300 [&_i:nth-child(2)]:bg-slate-300',
                                name === 'Dark' &&
                                  'bg-zinc-700 [&_i]:bg-mauve-500 [&_i:nth-child(2)]:bg-slate-500',
                              )}
                            >
                              <i />
                              <i />
                              <i />
                            </span>
                            <span
                              className={cn(
                                'mini-window flex-1 rounded-tr bg-white px-2.5 py-4 max-[680px]:px-1.5 max-[680px]:py-3.5 [&_b]:mt-2.5 [&_b]:block [&_b]:h-2.25 [&_b]:w-6 [&_b]:rounded-sm [&_b]:bg-indigo-200 max-[680px]:[&_b]:w-5 [&_i]:mb-1.75 [&_i]:block [&_i]:h-1 [&_i]:w-4/5 [&_i]:rounded-sm [&_i]:bg-mauve-100 [&_i:first-child]:mb-3 [&_i:first-child]:h-1.25 [&_i:first-child]:w-[45%] [&_i:first-child]:bg-mauve-300',
                                name === 'Dark' &&
                                  'bg-zinc-600 [&_b]:bg-slate-500 [&_i]:bg-zinc-500 [&_i:first-child]:bg-zinc-400',
                                name === 'System' &&
                                  'bg-[linear-gradient(90deg,var(--color-white)_28%,var(--color-zinc-700)_28%)] [&_b]:bg-slate-400 [&_i]:bg-[linear-gradient(90deg,var(--color-gray-300)_22%,var(--color-zinc-500)_22%)]',
                              )}
                            >
                              <i />
                              <i />
                              <i />
                              <b />
                            </span>
                          </span>
                          <span
                            className={cn(
                              'theme-option-label mt-2.5 flex items-center justify-between px-0.5 text-xs text-(--pref-muted) group-data-pressed/theme:text-(--pref-text) max-[680px]:text-xs [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-2 max-[680px]:[&>span:first-child]:gap-1.25',
                            )}
                          >
                            <span>
                              <Icon name={['sun', 'moon', 'laptop'][i]} />
                              {name}
                            </span>
                            <Icon
                              name="circle-check-fill"
                              className="invisible text-(--pref-accent) group-data-pressed/theme:visible"
                            />
                          </span>
                        </Toggle>
                      ))}
                    </ToggleGroup>
                  </>
                )}
                {matches('Accent color') && (
                  <div
                    className={cn(
                      'settings-group mb-4 overflow-hidden rounded-[10px] border border-(--pref-line) bg-(--pref-card) shadow-xs',
                    )}
                  >
                    <div
                      className={cn(
                        'setting-row flex min-h-16.5 items-center gap-3 px-4 py-3 not-first:border-t not-first:border-(--pref-line) max-[1050px]:gap-2 max-[1050px]:px-3 max-[850px]:has-[.accent-swatches]:flex-wrap max-[680px]:min-h-18 max-[680px]:gap-1.75 max-[680px]:px-2.5',
                      )}
                    >
                      <span
                        className={cn(
                          'setting-row-icon flex w-5 shrink-0 items-center justify-center text-zinc-500 max-[680px]:w-4.5',
                        )}
                      >
                        <Icon name="palette" />
                      </span>
                      <div
                        className={cn(
                          'setting-description min-w-0 flex-1 [&_strong]:block [&_strong]:text-sm [&_strong]:leading-snug [&_strong]:font-normal [&_strong]:text-(--pref-text) max-[680px]:[&_strong]:text-xs [&>span]:mt-1 [&>span]:block [&>span]:text-xs [&>span]:leading-snug [&>span]:text-(--pref-muted) max-[1050px]:[&>span]:text-xs max-[850px]:[&>span]:max-w-58 max-[680px]:[&>span]:leading-normal',
                        )}
                      >
                        <strong>Accent color</strong>
                        <span>Used for selected controls and highlights.</span>
                      </div>
                      <ToggleGroup
                        className={cn(
                          "accent-swatches ml-2.5 flex items-center gap-2 max-[1050px]:ml-0 max-[850px]:my-1 max-[850px]:basis-full max-[850px]:gap-3 max-[850px]:pl-7 [&_[data-pressed]]:outline [&_[data-pressed]]:outline-offset-3 [&_[data-pressed]]:outline-(--swatch) [&_button]:grid [&_button]:size-4.75 [&_button]:shrink-0 [&_button]:place-items-center [&_button]:rounded-full [&_button]:bg-(--swatch) [&_button]:p-0 [&_button]:text-white max-[1050px]:[&_button]:size-4.25 pointer-coarse:[&_button]:relative pointer-coarse:[&_button]:mx-1 pointer-coarse:[&_button]:my-1 pointer-coarse:[&_button]:after:absolute pointer-coarse:[&_button]:after:-inset-2.5 pointer-coarse:[&_button]:after:content-['']",
                        )}
                        value={[accent]}
                        onValueChange={(values) => {
                          if (values[0]) setAccent(values[0]);
                        }}
                        aria-label="Accent color"
                      >
                        {colors.map(([name, value]) => (
                          <Toggle
                            variant="unstyled"
                            size="unstyled"
                            key={name}
                            value={value}
                            className={cn(accent === value ? 'selected' : '')}
                            aria-label={name + ' accent'}
                            style={{ '--swatch': value } as CSSProperties}
                          >
                            {accent === value && <Icon name="check-thick-sm" />}
                          </Toggle>
                        ))}
                      </ToggleGroup>
                    </div>
                  </div>
                )}
                <div
                  className={cn(
                    'settings-group mb-4 overflow-hidden rounded-[10px] border border-(--pref-line) bg-(--pref-card) shadow-xs',
                  )}
                >
                  {rows
                    .filter((row) => matches(row.title + ' ' + row.description))
                    .map((row) => (
                      <Field.Root
                        className={cn(
                          'setting-row flex min-h-16.5 items-center gap-3 px-4 py-3 not-first:border-t not-first:border-(--pref-line) max-[1050px]:gap-2 max-[1050px]:px-3 max-[850px]:has-[.accent-swatches]:flex-wrap max-[680px]:min-h-18 max-[680px]:gap-1.75 max-[680px]:px-2.5',
                        )}
                        key={row.id}
                      >
                        <span
                          className={cn(
                            'setting-row-icon flex w-5 shrink-0 items-center justify-center text-zinc-500 max-[680px]:w-4.5',
                          )}
                        >
                          <Icon name={row.icon} />
                        </span>
                        <div
                          className={cn(
                            'setting-description min-w-0 flex-1 [&_strong]:block [&_strong]:text-sm [&_strong]:leading-snug [&_strong]:font-normal [&_strong]:text-(--pref-text) max-[680px]:[&_strong]:text-xs [&>span]:mt-1 [&>span]:block [&>span]:text-xs [&>span]:leading-snug [&>span]:text-(--pref-muted) max-[1050px]:[&>span]:text-xs max-[850px]:[&>span]:max-w-58 max-[680px]:[&>span]:leading-normal',
                          )}
                        >
                          <Field.Label className="block text-sm text-(--pref-text)">
                            {row.title}
                          </Field.Label>
                          <Field.Description className="mt-1 text-xs leading-snug text-(--pref-muted)">
                            {row.description}
                          </Field.Description>
                        </div>
                        <Switch
                          checked={options[row.id]}
                          onCheckedChange={(checked) =>
                            setOptions({ ...options, [row.id]: checked })
                          }
                        />
                      </Field.Root>
                    ))}
                </div>
                {!matches('Appearance theme light dark system Accent color') &&
                  !rows.some((row) =>
                    matches(row.title + ' ' + row.description),
                  ) && (
                    <p
                      className={cn(
                        'pref-no-results p-12 text-center text-sm text-(--pref-muted)',
                      )}
                    >
                      No matching preferences.
                    </p>
                  )}
              </>
            ) : (
              <div
                className={cn(
                  'settings-group mb-4 overflow-hidden rounded-[10px] border border-(--pref-line) bg-(--pref-card) shadow-xs',
                )}
              >
                {secondary[section].map(([icon, title, description]) => (
                  <div
                    className={cn(
                      'setting-row flex min-h-16.5 items-center gap-3 px-4 py-3 not-first:border-t not-first:border-(--pref-line) max-[1050px]:gap-2 max-[1050px]:px-3 max-[850px]:has-[.accent-swatches]:flex-wrap max-[680px]:min-h-18 max-[680px]:gap-1.75 max-[680px]:px-2.5',
                    )}
                    key={title}
                  >
                    <span
                      className={cn(
                        'setting-row-icon flex w-5 shrink-0 items-center justify-center text-zinc-500 max-[680px]:w-4.5',
                      )}
                    >
                      <Icon name={icon} />
                    </span>
                    <div
                      className={cn(
                        'setting-description min-w-0 flex-1 [&_strong]:block [&_strong]:text-sm [&_strong]:leading-snug [&_strong]:font-normal [&_strong]:text-(--pref-text) max-[680px]:[&_strong]:text-xs [&>span]:mt-1 [&>span]:block [&>span]:text-xs [&>span]:leading-snug [&>span]:text-(--pref-muted) max-[1050px]:[&>span]:text-xs max-[850px]:[&>span]:max-w-58 max-[680px]:[&>span]:leading-normal',
                      )}
                    >
                      <strong>{title}</strong>
                      <span>{description}</span>
                    </div>
                    <Icon name="chevron-right-sm" />
                  </div>
                ))}
              </div>
            )}
            <p
              className={cn(
                'settings-bottom-note mt-5 flex items-center justify-center gap-2 text-xs text-mist-500 max-[680px]:mt-4 max-[680px]:gap-1.25 max-[680px]:text-xs',
              )}
            >
              <Icon name="lock" />
              Settings apply to this demo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
