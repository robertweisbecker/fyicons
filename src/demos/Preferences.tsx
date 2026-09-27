import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { cn } from '../lib/utils';
import { useState, type CSSProperties } from 'react';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react/toggle';
import { Icon } from '../components/Icon';
import { Button, SwitchControl } from '../components/ui';

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
  ['Blue', '#007aff'],
  ['Purple', '#8555d9'],
  ['Pink', '#d96393'],
  ['Orange', '#dd9850'],
  ['Green', '#5b9c78'],
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
    ['command', 'Command menu', '⌘ K'],
    ['pencil-edit', 'New task', '⌘ N'],
    ['search-1', 'Find anything', '⌘ F'],
  ],
  Privacy: [
    ['shield-check', 'Local workspace', 'Your projects stay on this device.'],
    ['lock', 'Require authentication', 'Unlock with your system password.'],
    ['eye-closed', 'Private by default', 'Nothing is shared without you.'],
  ],
  'Connected apps': [
    ['git-branch', 'GitHub', 'Connected to FYIcons'],
    ['component', 'Figma', 'Connected to the icon library.'],
    ['calendar-1', 'Calendar', 'View calendar events.'],
  ],
};
export function Preferences({ notify }: { notify: (message: string) => void }) {
  const [section, setSection] = useState('Appearance');
  const [appearance, setAppearance] = useState('Light');
  const [accent, setAccent] = useState('#007aff');
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
        'study-window demo-surface preferences-window group/preferences flex h-190 overflow-hidden rounded-[13px] border border-[#d8dadd] bg-white font-sans text-sm font-normal tracking-normal text-[#28292b] antialiased scheme-light shadow-[0_2px_5px_#10182803,0_16px_48px_-24px_#27334638] [--app-blue:#007aff] [--app-line:#e7e8ea] [--hover:#eceef0] [--muted:#777a80] [--pref-card:#fff] [--pref-line:#ececf1] [--pref-muted:#7c7e8a] [--pref-page:#fbfbfd] [--pref-text:#303139] [--text:#28292b] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-[#777] [&_input]:focus-visible:outline-[#777] [&_textarea]:focus-visible:outline-[#777]',
        dark
          ? 'appearance-dark [--pref-card:#2e3038] [--pref-line:#3d3f4a] [--pref-muted:#9295a6] [--pref-page:#25262d] [--pref-text:#d9dbe4]'
          : '',
        options.contrast
          ? 'high-contrast [--pref-line:#9c9daa] [--pref-muted:#737585] [&.appearance-dark]:[--pref-muted:#b0b3c3]'
          : '',
      )}
      id="preferences-window"
      style={{ '--pref-accent': accent } as CSSProperties}
    >
      <aside
        className={cn(
          'study-sidebar preferences-sidebar group/sidebar flex shrink-0 basis-56 flex-col border-r border-(--app-line) border-r-[#e3e4e9] bg-[#f4f4f7] px-3 pt-5 pb-3 max-[1240px]:basis-51 max-[1050px]:basis-46 max-[850px]:basis-40 max-[680px]:hidden',
          options.labels ? '' : 'compact-labels',
        )}
      >
        <div
          className={cn(
            'window-controls mb-6 flex h-4 items-center gap-2 px-2 [&_i]:size-2.75 [&_i]:rounded-full [&_i]:bg-[#ff5f57] [&_i]:shadow-[inset_0_0_0_1px_#0000000d] [&_i:nth-child(2)]:bg-[#febc2e] [&_i:nth-child(3)]:bg-[#28c840]',
          )}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </div>
        <div
          className={cn(
            'preferences-profile mb-2 flex flex-col items-start px-3.5 [&_strong]:text-base [&_strong]:font-semibold [&_strong]:tracking-normal [&>span:last-child]:mt-1 [&>span:last-child]:text-xs [&>span:last-child]:text-[#9a9dac]',
          )}
        >
          <Avatar
            aria-label="Jamie Davis"
            className={cn(
              'profile-monogram mb-3.5 grid size-12 place-items-center rounded-full bg-linear-145 from-[#bfcbdf] to-[#aeb8d0] text-base font-medium text-white',
            )}
          >
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <strong>Jamie Davis</strong>
          <span>Personal workspace</span>
        </div>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-[#999b9d]',
          )}
        >
          Preferences
        </div>
        {sections.map((name, i) => (
          <Button
            key={name}
            className={cn(
              'app-nav-item my-0.5 flex min-h-10 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-[#62656b] group-[.compact-labels]/sidebar:justify-center group-[.compact-labels]/sidebar:gap-0 group-[.compact-labels]/sidebar:text-[0px] hover:bg-[#e9ebed] max-[1050px]:text-xs max-[850px]:gap-2 max-[850px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-[#e7e7ed] [&.selected]:text-[#4d4b5b]',
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
                'settings-icon grid size-6 shrink-0 place-items-center rounded-md text-white shadow-[inset_0_0_0_1px_#00000005] [&.blue]:bg-[#6394c8] [&.coral]:bg-[#dc7281] [&.slate]:bg-[#9298a3] [&.teal]:bg-[#62a29a] [&.violet]:bg-[#9476c8]',
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
            className={cn(
              'app-nav-item my-0.5 flex min-h-10 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-[#62656b] group-[.compact-labels]/sidebar:justify-center group-[.compact-labels]/sidebar:gap-0 group-[.compact-labels]/sidebar:text-[0px] hover:bg-[#e9ebed] max-[1050px]:text-xs max-[850px]:gap-2 max-[850px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-[#e7e7ed] [&.selected]:text-[#4d4b5b]',
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
              'preference-search flex items-center gap-2 text-[#b1b1bd] [&_input]:w-32 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-xs [&_input]:text-(--pref-muted) [&_input]:placeholder:text-[#b1b1bd] max-[680px]:[&_input]:w-28 max-[680px]:[&_input]:text-base max-[680px]:[&_input]:placeholder:text-xs',
            )}
          >
            <Icon name="search-1" />
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
                  'saved-indicator flex items-center gap-1.5 text-xs text-[#8ca79a] max-[680px]:text-xs',
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
                              'theme-preview flex h-24 overflow-hidden rounded-lg border border-[#e6e7ed] bg-[#e9eaf0] px-4 pt-4 shadow-[inset_0_0_0_3px_var(--pref-page)] group-data-pressed/theme:border-2 group-data-pressed/theme:border-(--pref-accent) group-data-pressed/theme:px-3.75 group-data-pressed/theme:pt-3.75 max-[850px]:px-2.5 max-[850px]:group-data-pressed/theme:px-2.25 max-[680px]:h-19.5 max-[680px]:px-2 max-[680px]:pt-3.5 max-[680px]:group-data-pressed/theme:px-1.75 max-[680px]:group-data-pressed/theme:pt-3.25',
                              name === 'Dark' &&
                                'border-[#dddde6] bg-[#33343d]',
                              name === 'System' &&
                                'bg-[linear-gradient(90deg,#e9eaf0_50%,#33343d_50%)]',
                            )}
                            aria-hidden="true"
                          >
                            <span
                              className={cn(
                                'mini-sidebar w-[31%] rounded-tl bg-[#f0f1f4] px-2 pt-5 max-[680px]:px-1.25 max-[680px]:pt-4 [&_i]:mb-1.75 [&_i]:block [&_i]:h-1 [&_i]:rounded-sm [&_i]:bg-[#d5d9e3] [&_i:nth-child(2)]:bg-[#c4d5ed]',
                                name === 'Dark' &&
                                  'bg-[#3e3f49] [&_i]:bg-[#62636e] [&_i:nth-child(2)]:bg-[#5d78a4]',
                              )}
                            >
                              <i />
                              <i />
                              <i />
                            </span>
                            <span
                              className={cn(
                                'mini-window flex-1 rounded-tr bg-white px-2.5 py-4 max-[680px]:px-1.5 max-[680px]:py-3.5 [&_b]:mt-2.5 [&_b]:block [&_b]:h-2.25 [&_b]:w-6 [&_b]:rounded-sm [&_b]:bg-[#b6cbef] max-[680px]:[&_b]:w-5 [&_i]:mb-1.75 [&_i]:block [&_i]:h-1 [&_i]:w-4/5 [&_i]:rounded-sm [&_i]:bg-[#ececf1] [&_i:first-child]:mb-3 [&_i:first-child]:h-1.25 [&_i:first-child]:w-[45%] [&_i:first-child]:bg-[#c4c7d0]',
                                name === 'Dark' &&
                                  'bg-[#4b4c57] [&_b]:bg-[#627faa] [&_i]:bg-[#696a75] [&_i:first-child]:bg-[#8d8d9c]',
                                name === 'System' &&
                                  'bg-[linear-gradient(90deg,#fff_28%,#4b4c57_28%)] [&_b]:bg-[#82a3cc] [&_i]:bg-[linear-gradient(90deg,#d9dbe3_22%,#72737d_22%)]',
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
                              <Icon
                                name={['sun', 'moon', 'device-laptop'][i]}
                              />
                              {name}
                            </span>
                            <span
                              className={cn(
                                'selection-radio inline-block size-3 rounded-full border border-[#ced0d9] group-data-pressed/theme:border-4 group-data-pressed/theme:border-(--pref-accent) group-data-pressed/theme:bg-white max-[680px]:size-2.5 max-[680px]:group-data-pressed/theme:border-3',
                              )}
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
                          'setting-row-icon flex w-5 shrink-0 items-center justify-center text-[#a2a0b0] max-[680px]:w-4.5',
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
                            key={name}
                            value={value}
                            className={cn(accent === value ? 'selected' : '')}
                            aria-label={name + ' accent'}
                            style={{ '--swatch': value } as CSSProperties}
                          >
                            {accent === value && <Icon name="check-sm" />}
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
                      <div
                        className={cn(
                          'setting-row flex min-h-16.5 items-center gap-3 px-4 py-3 not-first:border-t not-first:border-(--pref-line) max-[1050px]:gap-2 max-[1050px]:px-3 max-[850px]:has-[.accent-swatches]:flex-wrap max-[680px]:min-h-18 max-[680px]:gap-1.75 max-[680px]:px-2.5',
                        )}
                        key={row.id}
                      >
                        <span
                          className={cn(
                            'setting-row-icon flex w-5 shrink-0 items-center justify-center text-[#a2a0b0] max-[680px]:w-4.5',
                          )}
                        >
                          <Icon name={row.icon} />
                        </span>
                        <div
                          className={cn(
                            'setting-description min-w-0 flex-1 [&_strong]:block [&_strong]:text-sm [&_strong]:leading-snug [&_strong]:font-normal [&_strong]:text-(--pref-text) max-[680px]:[&_strong]:text-xs [&>span]:mt-1 [&>span]:block [&>span]:text-xs [&>span]:leading-snug [&>span]:text-(--pref-muted) max-[1050px]:[&>span]:text-xs max-[850px]:[&>span]:max-w-58 max-[680px]:[&>span]:leading-normal',
                          )}
                        >
                          <strong>{row.title}</strong>
                          <span>{row.description}</span>
                        </div>
                        <SwitchControl
                          label={row.title}
                          checked={options[row.id]}
                          onChange={(checked) =>
                            setOptions({ ...options, [row.id]: checked })
                          }
                        />
                      </div>
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
                        'setting-row-icon flex w-5 shrink-0 items-center justify-center text-[#a2a0b0] max-[680px]:w-4.5',
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
                'settings-bottom-note mt-5 flex items-center justify-center gap-2 text-xs text-[#aaadba] max-[680px]:mt-4 max-[680px]:gap-1.25 max-[680px]:text-xs',
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
