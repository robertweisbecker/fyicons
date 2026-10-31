import { Icon } from './Icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '../lib/utils';
import { getIconDisplayName, type IconRecord } from '../lib/catalog';

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
  toggleSelection?: () => void;
}) {
  const name = getIconDisplayName(icon);
  return (
    <div
      className={cn(
        'group/tile relative min-w-0 rounded-lg outline outline-transparent hover:outline-line',
        inspected &&
          'bg-selection outline-2 outline-focus hover:bg-selection hover:outline-focus',
        selected && 'bg-surface outline-focus',
      )}
    >
      <Button
        variant="unstyled"
        size="unstyled"
        className={cn(
          'icon-tile flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-2 rounded-lg p-2',
          // 'group-[.large]/grid:h-36',
        )}
        data-id={icon.id}
        aria-label={'Inspect ' + name}
        aria-pressed={inspected}
        onClick={inspect}
      >
        <Icon name={icon.id} className="bg-grid size-(--preview-size)" />
        <span
          className={cn(
            'tile-name hidden max-w-full truncate text-[11px] leading-none font-normal wrap-anywhere text-muted opacity-0 group-focus-within/tile:opacity-100 group-hover/tile:opacity-100 md:block',
            (inspected || selected) && 'opacity-100',
          )}
          title={name}
        >
          {name}
        </span>
      </Button>
      {toggleSelection && (
        <Checkbox
          checked={selected}
          aria-label={'Select ' + name}
          onCheckedChange={toggleSelection}
          className={cn(
            'absolute top-0 right-0 opacity-0 group-focus-within/tile:opacity-100 group-hover/tile:opacity-100 data-checked:opacity-100 [@media(hover:none)]:opacity-100',
          )}
        />
      )}
    </div>
  );
}
