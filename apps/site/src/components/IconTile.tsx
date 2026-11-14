import { ContextMenu } from '@base-ui/react/context-menu';
import { Icon } from './Icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
} from '@/components/ui/menu';
import { notify } from '@/components/ui/toast';
import { copy, download } from '@/lib/downloads';
import { cn } from '../lib/utils';
import { getIconDisplayName, type IconRecord } from '../lib/catalog';
import { getRecentIconAddition } from '@/lib/icon-releases';

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
  const addedVersion = getRecentIconAddition(icon.id);
  const addedLabel = addedVersion ? `Added in v${addedVersion}` : undefined;

  async function copyValue(value: string, label: string) {
    if (await copy(value)) {
      notify(
        <>
          <span className="font-semibold">{name}</span> {label} copied
        </>,
        { id: `copy:${icon.id}:${label}`, icon: <Icon name={icon.id} /> },
      );
    } else {
      notify('Clipboard unavailable. Please try again.');
    }
  }

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger
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
          )}
          data-id={icon.id}
          aria-label={'Inspect ' + name}
          aria-description={addedLabel}
          aria-pressed={inspected}
          title={addedLabel}
          onClick={inspect}
        >
          {addedVersion && (
            // <Icon
            //   name="diamond-fill"

            // />
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              className="absolute top-1 right-[75%] size-4 text-control-accent"
              strokeWidth={1.5}
            >
              <path
                d="M9.5 9.5L5.5 5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
              <path
                d="M8.5 13.5H2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
              <path
                d="M13.5 2.5V8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
          )}
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
      </ContextMenu.Trigger>
      <MenuContent aria-label={`${name} actions`} sideOffset={0}>
        <MenuGroup>
          <MenuGroupLabel>{name}</MenuGroupLabel>
          <MenuItem onClick={() => copyValue(name, 'Name')}>
            <Icon name="text-title" />
            Copy name
          </MenuItem>
          <MenuItem onClick={() => copyValue(icon.svg, 'SVG')}>
            <Icon name="copy" />
            Copy SVG
          </MenuItem>
          <MenuItem
            onClick={() => download(icon.svg, icon.filename, 'image/svg+xml')}
          >
            <Icon name="download-square" />
            Download
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </ContextMenu.Root>
  );
}
