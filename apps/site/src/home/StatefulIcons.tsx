import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { statefulIconPairs } from './statefulIconPairs';
import { ProgressIcons } from './ProgressIcons';

const pairs = statefulIconPairs.map(([icon, activeIcon]) => ({
  id: `${icon}/${activeIcon}`,
  icon,
  activeIcon,
}));

export function StatefulIcons() {
  const [flipped, setFlipped] = useState(false);
  const [activePairs, setActivePairs] = useState<string[]>([]);

  function flipAll(checked: boolean) {
    setFlipped(checked);
    // Invert every pair, including any that were toggled individually.
    setActivePairs((current) => {
      const active = new Set(current);
      return pairs.filter(({ id }) => !active.has(id)).map(({ id }) => id);
    });
  }

  return (
    <section
      aria-labelledby="stateful-icons-heading"
      className="flex flex-col gap-6"
    >
      <h3
        id="stateful-icons-heading"
        className="text-2xl font-medium tracking-tight"
      >
        Stateful icons
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10">
        <div
          role="group"
          aria-label="Discrete states"
          className="flex min-h-80 min-w-0 flex-col gap-6 rounded-2xl bg-surface p-2 sm:p-5 lg:p-8"
        >
          <ToggleGroup
            multiple
            value={activePairs}
            onValueChange={setActivePairs}
            aria-label="Icon states"
            className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(2.25rem,1fr))] content-center justify-items-center gap-1 pointer-coarse:grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))]"
          >
            {pairs.map(({ id, icon, activeIcon }) => (
              <DemoToggle
                key={id}
                value={id}
                label={`${icon} / ${activeIcon}`}
                icon={icon}
                activeIcon={activeIcon}
                className="size-9 touch-manipulation pointer-coarse:size-11 [&>svg]:size-5 sm:[&>svg]:size-6"
              />
            ))}
          </ToggleGroup>
          <Field.Root className="flex min-h-11 items-center justify-center">
            <Field.Label className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2.5 text-sm text-muted">
              Toggle
              <Switch checked={flipped} onCheckedChange={flipAll} />
            </Field.Label>
          </Field.Root>
        </div>
        <ProgressIcons />
      </div>
    </section>
  );
}
