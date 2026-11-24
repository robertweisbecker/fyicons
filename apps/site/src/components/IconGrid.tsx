import { useState, type CSSProperties, type ReactNode } from 'react';
import { ContextMenu } from '@base-ui/react/context-menu';
import { byId, getIconDisplayName, type IconRecord } from '@/lib/catalog';
import { useIconSource } from '@/lib/use-icon-source';
import { Icon } from './Icon';
import {
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
} from '@/components/ui/menu';
import { notify } from '@/components/ui/toast';
import { copy, downloadIcon } from '@/lib/downloads';

function tileFor(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest<HTMLElement>('[data-icon-tile]')
    : null;
}

export function IconGrid({
  previewSize,
  children,
}: {
  previewSize: number;
  children: ReactNode;
}) {
  const [icon, setIcon] = useState<IconRecord | null>(null);
  return (
    <ContextMenu.Root
      onOpenChange={(open, details) => {
        if (!open) return;
        const tile = tileFor(details.event.target);
        const item = byId.get(tile?.dataset.iconTile ?? '');
        if (item) setIcon(item);
        else details.cancel();
      }}
      onOpenChangeComplete={(open) => {
        if (!open) setIcon(null);
      }}
    >
      <ContextMenu.Trigger
        onContextMenuCapture={(event) => {
          if (!tileFor(event.target)) {
            // Keep the native menu in the space between tiles.
            event.stopPropagation();
          }
        }}
        onTouchStart={(event) => {
          if (!tileFor(event.target)) event.preventBaseUIHandler();
        }}
        className="icon-grid grid grid-cols-[repeat(auto-fill,minmax(min(100%,var(--tile-min-size)),1fr))] gap-2 [--tile-min-size:max(4rem,calc(var(--preview-size)+1rem))] md:[--tile-min-size:clamp(4rem,calc(var(--preview-size)*4),10rem)]"
        style={
          {
            '--preview-size': `${previewSize}px`,
          } as CSSProperties
        }
      >
        {children}
      </ContextMenu.Trigger>
      {icon && <TileMenu key={icon.id} icon={icon} />}
    </ContextMenu.Root>
  );
}

function TileMenu({ icon }: { icon: IconRecord }) {
  const source = useIconSource(icon);
  const name = getIconDisplayName(icon);
  async function copyValue(value: string, label: string) {
    if (await copy(value)) {
      notify(
        <>
          &quot;<span className="font-semibold">{name}</span>&quot; copied
        </>,
        { id: `copy:${icon.id}:${label}`, icon: <Icon name={icon.id} /> },
      );
    } else {
      notify('Clipboard unavailable. Please try again.');
    }
  }

  return (
    <MenuContent aria-label={`${name} actions`} sideOffset={0}>
      <MenuGroup>
        <MenuGroupLabel>{name}</MenuGroupLabel>
        <MenuItem onClick={() => copyValue(name, 'Name')}>
          <Icon name="text-title" />
          Copy name
        </MenuItem>
        <MenuItem
          disabled={!source.text && !source.error}
          closeOnClick={!source.error}
          onClick={() =>
            source.error
              ? source.retry()
              : source.text && copyValue(source.text, 'SVG')
          }
        >
          <Icon name="copy" />
          {source.error
            ? 'Retry loading SVG'
            : source.text
              ? 'Copy SVG'
              : 'Loading SVG…'}
        </MenuItem>
        <MenuItem onClick={() => downloadIcon(icon)}>
          <Icon name="download-square" />
          Download
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  );
}
