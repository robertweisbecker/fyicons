import { Icon } from './Icon';
import { Button } from './ui';
import { SelectionCheckbox } from './SelectionCheckbox';
import { cn } from '../lib/utils';
import type { IconRecord } from '../lib/catalog';

export function IconTile({
  icon,
  inspected,
  selected,
  inspect,
  toggleSelection,
}: {
  icon: IconRecord;
  inspected: boolean;
  selected: boolean;
  inspect: () => void;
  toggleSelection: () => void;
}) {
  return (
    <div
      className={cn(
        'group/tile relative min-w-0 rounded-lg border border-line bg-surface hover:border-zinc-400',
        (inspected || selected) && 'border-zinc-500 bg-selection',
      )}
    >
      <Button
        className={cn(
          'icon-tile flex h-28 w-full min-w-0 scroll-mt-18 flex-col items-center justify-center gap-4 rounded-lg px-2 pt-3 group-[.large]/grid:h-36 [&>svg]:size-(--preview-size)',
        )}
        data-id={icon.id}
        aria-label={'Inspect ' + icon.name}
        aria-pressed={inspected}
        onClick={inspect}
      >
        <Icon name={icon.id} />
        <span
          className={cn(
            'tile-name max-w-full truncate text-xs leading-4 text-muted',
          )}
          title={icon.name}
        >
          {icon.name}
        </span>
      </Button>
      <SelectionCheckbox
        checked={selected}
        label={'Select ' + icon.name}
        onChange={toggleSelection}
        className={cn(
          'absolute top-0 right-0 opacity-0 group-focus-within/tile:opacity-100 group-hover/tile:opacity-100 data-checked:opacity-100 [@media(hover:none)]:opacity-100',
        )}
      />
    </div>
  );
}
