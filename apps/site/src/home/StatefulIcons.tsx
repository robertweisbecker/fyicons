import { createIconLookup } from '@/components/createIconLookup';
import { IconRendererContext } from '@/components/UIIcon';
import { useId, useRef, useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { statefulIconGroups } from './statefulIconPairs';
import {
  IconTextTitle,
  IconArrowCounterClockwise,
  IconChevronsExpand,
  IconChevronsCollapse,
  IconArrowsExpand,
  IconArrowsCollapse,
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconListExpand,
  IconListCollapse,
  IconRowExpand,
  IconRowCollapse,
  IconBookOpen,
  IconBookReading,
  IconDoor,
  IconDoorOpen,
  IconNotebook,
  IconNotebookOpen,
  IconJournal,
  IconJournalOpen,
  IconEnvelopeSimple,
  IconEnvelopeSimpleOpen,
  IconEyeClosed,
  IconEye,
  IconFolder,
  IconFolderOpen,
  IconArchive,
  IconArchiveOpen,
  IconPanelLeftClosed,
  IconPanelLeft,
  IconPanelRightClosed,
  IconPanelRightOpen,
  IconHeaderCollapsed,
  IconHeaderExpanded,
  IconFooterCollapsed,
  IconFooterExpanded,
  IconLightbulbSimple,
  IconLightbulbSimpleOn,
  IconBrightnessLow,
  IconBrightnessHigh,
  IconFlashlightOffFill,
  IconFlashlightOnFill,
  IconLockOpen,
  IconLockFill,
  IconSwitchOff,
  IconSwitchOn,
  IconBell,
  IconBellSlash,
  IconCloud,
  IconCloudSlash,
  IconLink,
  IconLinkSlash,
  IconVolumeHigh,
  IconVolumeSlash,
  IconWifi,
  IconWifiError,
} from 'fyicons';

const Icon = createIconLookup({
  text: IconTextTitle,
  'arrow-counter-clockwise': IconArrowCounterClockwise,
  'chevrons-expand': IconChevronsExpand,
  'chevrons-collapse': IconChevronsCollapse,
  'arrows-expand': IconArrowsExpand,
  'arrows-collapse': IconArrowsCollapse,
  'arrows-maximize': IconArrowsMaximize,
  'arrows-minimize': IconArrowsMinimize,
  'list-expand': IconListExpand,
  'list-collapse': IconListCollapse,
  'row-expand': IconRowExpand,
  'row-collapse': IconRowCollapse,
  'book-open': IconBookOpen,
  'book-reading': IconBookReading,
  door: IconDoor,
  'door-open': IconDoorOpen,
  notebook: IconNotebook,
  'notebook-open': IconNotebookOpen,
  journal: IconJournal,
  'journal-open': IconJournalOpen,
  'envelope-simple': IconEnvelopeSimple,
  'envelope-simple-open': IconEnvelopeSimpleOpen,
  'eye-closed': IconEyeClosed,
  eye: IconEye,
  folder: IconFolder,
  'folder-open': IconFolderOpen,
  archive: IconArchive,
  'archive-open': IconArchiveOpen,
  'panel-left-closed': IconPanelLeftClosed,
  'panel-left': IconPanelLeft,
  'panel-right-closed': IconPanelRightClosed,
  'panel-right-open': IconPanelRightOpen,
  'header-collapsed': IconHeaderCollapsed,
  'header-expanded': IconHeaderExpanded,
  'footer-collapsed': IconFooterCollapsed,
  'footer-expanded': IconFooterExpanded,
  'lightbulb-simple': IconLightbulbSimple,
  'lightbulb-simple-on': IconLightbulbSimpleOn,
  'brightness-low': IconBrightnessLow,
  'brightness-high': IconBrightnessHigh,
  'flashlight-off-fill': IconFlashlightOffFill,
  'flashlight-on-fill': IconFlashlightOnFill,
  'lock-open': IconLockOpen,
  'lock-fill': IconLockFill,
  'switch-off': IconSwitchOff,
  'switch-on': IconSwitchOn,
  bell: IconBell,
  'bell-slash': IconBellSlash,
  cloud: IconCloud,
  'cloud-slash': IconCloudSlash,
  link: IconLink,
  'link-slash': IconLinkSlash,
  'volume-high': IconVolumeHigh,
  'volume-slash': IconVolumeSlash,
  wifi: IconWifi,
  'wifi-error': IconWifiError,
});

const groups = statefulIconGroups.map(({ label, pairs }) => ({
  label,
  ids: new Set(pairs.map(([icon, activeIcon]) => `${icon}/${activeIcon}`)),
  pairs: pairs.map(([icon, activeIcon]) => ({
    id: `${icon}/${activeIcon}`,
    icon,
    activeIcon,
  })),
}));
const pairIds = groups.flatMap(({ pairs }) => pairs.map(({ id }) => id));

function StatefulIconsContent() {
  const groupId = useId();
  const toggleAllRef = useRef<HTMLSpanElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [activePairs, setActivePairs] = useState<string[]>([]);
  const canReset = flipped
    ? activePairs.length !== pairIds.length
    : activePairs.length > 0;

  function flipAll(checked: boolean) {
    setFlipped(checked);
    // Invert every pair, including any that were toggled individually.
    setActivePairs((current) => {
      const active = new Set(current);
      return pairIds.filter((id) => !active.has(id));
    });
  }

  return (
    <div
      role="group"
      aria-label="Toggles"
      className="@container flex min-w-0 flex-1 flex-col gap-4 rounded-xl bg-surface p-4 sm:rounded-2xl sm:p-5 lg:p-8"
    >
      <div className="flex flex-1 flex-col justify-center gap-4">
        {groups.map(({ label, ids, pairs }) => (
          <div
            key={label}
            className="grid gap-1 @sm:grid-cols-[5rem_minmax(0,1fr)] @sm:gap-3"
          >
            <span
              id={`${groupId}-${label}`}
              className="text-sm text-muted @sm:leading-9 pointer-coarse:@sm:leading-11"
            >
              {label}
            </span>
            <ToggleGroup
              multiple
              value={activePairs.filter((id) => ids.has(id))}
              onValueChange={(values) =>
                setActivePairs((current) => [
                  ...current.filter((id) => !ids.has(id)),
                  ...values,
                ])
              }
              aria-labelledby={`${groupId}-${label}`}
              className="flex-wrap gap-0"
            >
              {pairs.map(({ id, icon, activeIcon }) => (
                <DemoToggle
                  key={id}
                  value={id}
                  label={`${icon} / ${activeIcon}`}
                  icon={icon}
                  activeIcon={activeIcon}
                  variant="text"
                  className="size-9 touch-manipulation text-ink pointer-coarse:size-11 [&>svg]:size-5 sm:[&>svg]:size-6"
                />
              ))}
            </ToggleGroup>
          </div>
        ))}
      </div>
      <div className="flex min-h-11 items-center justify-center gap-2">
        <Field.Root>
          <Field.Label className="flex min-h-11 min-w-11 items-center justify-center gap-2.5 text-sm text-muted">
            Toggle all
            <Switch
              ref={toggleAllRef}
              checked={flipped}
              onCheckedChange={flipAll}
            />
          </Field.Label>
        </Field.Root>
        <DemoIconButton
          label="Reset states"
          icon="arrow-counter-clockwise"
          className={cn(
            'size-9 text-muted pointer-coarse:size-11',
            !canReset && 'invisible',
          )}
          disabled={!canReset}
          onClick={() => {
            setActivePairs(flipped ? pairIds : []);
            toggleAllRef.current?.focus();
          }}
        />
      </div>
    </div>
  );
}

export function StatefulIcons() {
  return (
    <IconRendererContext value={Icon}>
      <StatefulIconsContent />
    </IconRendererContext>
  );
}

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
