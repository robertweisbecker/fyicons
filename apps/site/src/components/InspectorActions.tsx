import type { ReactNode } from 'react';
import type { IconRecord } from '@/lib/catalog';
import { download } from '@/lib/downloads';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';
import { IconCopyButton } from './IconCopyButton';
import { ToggleIcon } from './ToggleIcon';
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';
import { Tooltip } from './ui/tooltip';

export function IconDownloadButton({
  item,
  className,
  children,
}: {
  item: IconRecord;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Button
      variant="neutral"
      size="lg"
      aria-label="Download SVG"
      className={cn('size-11 rounded-full p-0', className)}
      onClick={() => download(item.svg, item.filename, 'image/svg+xml')}
    >
      <Icon name="download-square" />
      {children}
    </Button>
  );
}

export function InspectorActions({
  item,
  selected,
  toggleSelection,
}: {
  item: IconRecord;
  selected: boolean;
  toggleSelection: () => void;
}) {
  return (
    <div className="@container flex min-w-0 flex-wrap items-center gap-2">
      <IconCopyButton
        key={item.id}
        item={item}
        size="lg"
        showLabel
        className="w-full px-3.5 @3xs:w-auto @3xs:flex-1"
      >
        <span className="hidden @3xs:inline @xs:hidden">Copy</span>
        <span className="@3xs:hidden @xs:inline">Copy SVG</span>
      </IconCopyButton>
      <IconDownloadButton
        item={item}
        className="ml-auto @3xs:ml-0 @xs:w-auto @xs:flex-1 @xs:px-3.5"
      >
        <span className="hidden @xs:inline">Download</span>
      </IconDownloadButton>
      <Tooltip label={selected ? 'Remove from export' : 'Add to export'}>
        <Toggle
          size="icon"
          className="size-11 rounded-full data-pressed:text-control-accent"
          aria-label="Add to export"
          variant="outline"
          pressed={selected}
          onPressedChange={toggleSelection}
        >
          <ToggleIcon icon="bookmark" activeIcon="bookmark-fill" />
        </Toggle>
      </Tooltip>
    </div>
  );
}
