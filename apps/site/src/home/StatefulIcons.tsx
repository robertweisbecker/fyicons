import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { statefulIconPairs } from './statefulIconPairs';

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

  function reset() {
    setFlipped(false);
    setActivePairs([]);
  }

  return (
    <section
      aria-labelledby="stateful-icons-heading"
      className="grid items-start gap-6 md:grid-cols-2 md:gap-10"
    >
      <h2
        id="stateful-icons-heading"
        className="text-2xl font-medium tracking-tight"
      >
        Stateful icons
      </h2>
      <div className="min-w-0 space-y-4">
        <div className="flex flex-wrap items-center justify-end gap-4">
          <Field.Root className="flex items-center gap-2.5">
            <Field.Label className="cursor-pointer text-sm text-muted">
              Flip all
            </Field.Label>
            <Switch checked={flipped} onCheckedChange={flipAll} />
          </Field.Root>
          <Button type="button" variant="outline" size="sm" onClick={reset}>
            Reset
          </Button>
        </div>
        <ToggleGroup
          multiple
          value={activePairs}
          onValueChange={setActivePairs}
          aria-label="Icon states"
          className="grid grid-cols-[repeat(auto-fill,minmax(2.25rem,1fr))] justify-items-center gap-1 rounded-2xl bg-canvas p-3 sm:p-5 pointer-coarse:grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))]"
        >
          {pairs.map(({ id, icon, activeIcon }) => (
            <DemoToggle
              key={id}
              value={id}
              label={`${icon} / ${activeIcon}`}
              icon={icon}
              activeIcon={activeIcon}
              className="size-9 touch-manipulation pointer-coarse:size-11 [&>svg]:size-6"
            />
          ))}
        </ToggleGroup>
      </div>
    </section>
  );
}
