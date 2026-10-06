import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { DemoToggle } from './DemoControls';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

export function StateDemo() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-4">
      {(
        [
          [
            'Favorites',
            [
              ['Like', 'heart-alt', 'heart-alt-fill'],
              ['Star', 'star', 'star-fill'],
              ['Save', 'bookmark', 'bookmark-fill'],
            ],
          ],
          [
            'Media',
            [
              ['Play', 'play', 'play-fill'],
              ['Captions', 'closed-captions', 'closed-captions-fill'],
              [
                'Audio description',
                'audio-description',
                'audio-description-fill',
              ],
            ],
          ],
          [
            'Visibility',
            [
              ['Visible', 'eye-closed', 'eye'],
              ['Light', 'sun-lg', 'sun-lg-fill'],
              ['People', 'users-two', 'users-two-fill'],
            ],
          ],
          [
            'Feedback',
            [
              ['Helpful', 'thumbs-up', 'thumbs-up-fill'],
              ['Not helpful', 'thumbs-down', 'thumbs-down-fill'],
              ['Question', 'circle-question', 'circle-question-fill'],
            ],
          ],
        ] as const
      ).map(([label, items]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-3 pointer-coarse:min-h-11"
        >
          <span className="text-sm text-muted">{label}</span>
          <ToggleGroup
            multiple={label !== 'Feedback'}
            defaultValue={[items[0][0]]}
            aria-label={label}
          >
            {items.map(([name, icon, activeIcon]) => (
              <DemoToggle
                key={name}
                value={name}
                label={name}
                icon={icon}
                activeIcon={activeIcon}
              />
            ))}
          </ToggleGroup>
        </div>
      ))}
    </div>
  );
}
export function SettingsDemo() {
  const [enabled, setEnabled] = useState(true);
  const [sync, setSync] = useState(true);
  const [preferences, setPreferences] = useState([true, true, false]);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <Field.Root className="flex items-center gap-3">
        <Icon name={enabled ? 'bell-2' : 'bell-2-slash'} />
        <div className="flex-1">
          <Field.Label className="text-sm font-medium">
            Notifications
          </Field.Label>
          <p className="mt-1 text-xs text-muted">
            Stay up to date with your projects.
          </p>
        </div>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
      </Field.Root>
      <div className="ml-7 flex flex-col gap-4 border-l border-line pl-4">
        {[
          ['Task updates', 'circle-check', 'circle-check-fill'],
          ['New messages', 'chat', 'chat-text'],
          ['Quiet hours', 'moon', 'moon-fill'],
        ].map(([label, icon, activeIcon], i) => (
          <Field.Root
            key={label}
            className="flex items-center justify-between gap-3 pointer-coarse:min-h-11"
          >
            <Field.Label className="flex items-center gap-2 text-sm">
              <Icon name={preferences[i] ? activeIcon : icon} />
              {label}
            </Field.Label>
            <Switch
              size="sm"
              checked={preferences[i]}
              onCheckedChange={(value) =>
                setPreferences((previous) =>
                  previous.map((item, index) => (index === i ? value : item)),
                )
              }
              disabled={!enabled}
            />
          </Field.Root>
        ))}
      </div>
      <Field.Root className="mt-auto flex items-center justify-between gap-3 pointer-coarse:min-h-11">
        <Field.Label className="flex items-center gap-2 text-sm">
          <Icon name={sync ? 'cloud-check' : 'cloud-slash'} />
          Sync across devices
        </Field.Label>
        <Switch checked={sync} onCheckedChange={setSync} />
      </Field.Root>
    </div>
  );
}
