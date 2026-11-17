import { createIconLookup } from '@/components/createIconLookup';

import { IconRendererContext } from '@/components/UIIcon';
import { useId, useRef, useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { statefulIconGroups } from './statefulIconPairs';

import Glyph0 from 'fyicons/icons/IconTextTitle';
import Glyph1 from 'fyicons/icons/IconArrowCounterClockwise';
import Glyph2 from 'fyicons/icons/IconChevronsExpand';
import Glyph3 from 'fyicons/icons/IconChevronsCollapse';
import Glyph4 from 'fyicons/icons/IconArrowsExpand';
import Glyph5 from 'fyicons/icons/IconArrowsCollapse';
import Glyph6 from 'fyicons/icons/IconArrowsMaximize';
import Glyph7 from 'fyicons/icons/IconArrowsMinimize';
import Glyph8 from 'fyicons/icons/IconListExpand';
import Glyph9 from 'fyicons/icons/IconListCollapse';
import Glyph10 from 'fyicons/icons/IconRowExpand';
import Glyph11 from 'fyicons/icons/IconRowCollapse';
import Glyph12 from 'fyicons/icons/IconBookOpen';
import Glyph13 from 'fyicons/icons/IconBookReading';
import Glyph14 from 'fyicons/icons/IconDoor';
import Glyph15 from 'fyicons/icons/IconDoorOpen';
import Glyph16 from 'fyicons/icons/IconNotebook';
import Glyph17 from 'fyicons/icons/IconNotebookOpen';
import Glyph18 from 'fyicons/icons/IconJournal';
import Glyph19 from 'fyicons/icons/IconJournalOpen';
import Glyph20 from 'fyicons/icons/IconEnvelopeSimple';
import Glyph21 from 'fyicons/icons/IconEnvelopeSimpleOpen';
import Glyph22 from 'fyicons/icons/IconEyeClosed';
import Glyph23 from 'fyicons/icons/IconEye';
import Glyph24 from 'fyicons/icons/IconFolder';
import Glyph25 from 'fyicons/icons/IconFolderOpen';
import Glyph26 from 'fyicons/icons/IconArchive';
import Glyph27 from 'fyicons/icons/IconArchiveOpen';
import Glyph28 from 'fyicons/icons/IconPanelLeftClosed';
import Glyph29 from 'fyicons/icons/IconPanelLeft';
import Glyph30 from 'fyicons/icons/IconPanelRightClosed';
import Glyph31 from 'fyicons/icons/IconPanelRightOpen';
import Glyph32 from 'fyicons/icons/IconHeaderCollapsed';
import Glyph33 from 'fyicons/icons/IconHeaderExpanded';
import Glyph34 from 'fyicons/icons/IconFooterCollapsed';
import Glyph35 from 'fyicons/icons/IconFooterExpanded';
import Glyph36 from 'fyicons/icons/IconLightbulbSimple';
import Glyph37 from 'fyicons/icons/IconLightbulbSimpleOn';
import Glyph38 from 'fyicons/icons/IconBrightnessLow';
import Glyph39 from 'fyicons/icons/IconBrightnessHigh';
import Glyph40 from 'fyicons/icons/IconFlashlightOffFill';
import Glyph41 from 'fyicons/icons/IconFlashlightOnFill';
import Glyph42 from 'fyicons/icons/IconLockOpen';
import Glyph43 from 'fyicons/icons/IconLockFill';
import Glyph44 from 'fyicons/icons/IconSwitchOff';
import Glyph45 from 'fyicons/icons/IconSwitchOn';
import Glyph46 from 'fyicons/icons/IconBell';
import Glyph47 from 'fyicons/icons/IconBellSlash';
import Glyph48 from 'fyicons/icons/IconCloud';
import Glyph49 from 'fyicons/icons/IconCloudSlash';
import Glyph50 from 'fyicons/icons/IconLink';
import Glyph51 from 'fyicons/icons/IconLinkSlash';
import Glyph52 from 'fyicons/icons/IconVolumeHigh';
import Glyph53 from 'fyicons/icons/IconVolumeSlash';
import Glyph54 from 'fyicons/icons/IconWifi';
import Glyph55 from 'fyicons/icons/IconWifiError';
const Icon = createIconLookup({
  text: { Component: Glyph0, id: '58:9540' },
  'arrow-counter-clockwise': { Component: Glyph1, id: '529:7942' },
  'chevrons-expand': { Component: Glyph2, id: '816:11019' },
  'chevrons-collapse': { Component: Glyph3, id: '816:11028' },
  'arrows-expand': { Component: Glyph4, id: '129:6741' },
  'arrows-collapse': { Component: Glyph5, id: '129:6740' },
  'arrows-maximize': { Component: Glyph6, id: '129:6744' },
  'arrows-minimize': { Component: Glyph7, id: '154:11389' },
  'list-expand': { Component: Glyph8, id: '693:382' },
  'list-collapse': { Component: Glyph9, id: '693:381' },
  'row-expand': { Component: Glyph10, id: '693:397' },
  'row-collapse': { Component: Glyph11, id: '693:408' },
  'book-open': { Component: Glyph12, id: '325:4648' },
  'book-reading': { Component: Glyph13, id: '134:4679' },
  door: { Component: Glyph14, id: '1001:19028' },
  'door-open': { Component: Glyph15, id: '1009:19276' },
  notebook: { Component: Glyph16, id: '534:8034' },
  'notebook-open': { Component: Glyph17, id: '534:8072' },
  journal: { Component: Glyph18, id: '1179:2502' },
  'journal-open': { Component: Glyph19, id: '1179:2503' },
  'envelope-simple': { Component: Glyph20, id: '770:956' },
  'envelope-simple-open': { Component: Glyph21, id: '770:957' },
  'eye-closed': { Component: Glyph22, id: '120:2553' },
  eye: { Component: Glyph23, id: '120:2551' },
  folder: { Component: Glyph24, id: '102:4392' },
  'folder-open': { Component: Glyph25, id: '102:4393' },
  archive: { Component: Glyph26, id: '114:2146' },
  'archive-open': { Component: Glyph27, id: '732:380' },
  'panel-left-closed': { Component: Glyph28, id: '578:2530' },
  'panel-left': { Component: Glyph29, id: '97:1821' },
  'panel-right-closed': { Component: Glyph30, id: '811:8808' },
  'panel-right-open': { Component: Glyph31, id: '282:17288' },
  'header-collapsed': { Component: Glyph32, id: '732:900' },
  'header-expanded': { Component: Glyph33, id: '732:896' },
  'footer-collapsed': { Component: Glyph34, id: '604:5145' },
  'footer-expanded': { Component: Glyph35, id: '604:5164' },
  'lightbulb-simple': { Component: Glyph36, id: '610:10719' },
  'lightbulb-simple-on': { Component: Glyph37, id: '847:16063' },
  'brightness-low': { Component: Glyph38, id: '811:8859' },
  'brightness-high': { Component: Glyph39, id: '811:8858' },
  'flashlight-off-fill': { Component: Glyph40, id: '520:5393' },
  'flashlight-on-fill': { Component: Glyph41, id: '120:2550' },
  'lock-open': { Component: Glyph42, id: '193:13627' },
  'lock-fill': { Component: Glyph43, id: '752:4245' },
  'switch-off': { Component: Glyph44, id: '841:12779' },
  'switch-on': { Component: Glyph45, id: '841:12780' },
  bell: { Component: Glyph46, id: '101:4284' },
  'bell-slash': { Component: Glyph47, id: '705:2000' },
  cloud: { Component: Glyph48, id: '129:5293' },
  'cloud-slash': { Component: Glyph49, id: '667:471' },
  link: { Component: Glyph50, id: '58:9555' },
  'link-slash': { Component: Glyph51, id: '747:267' },
  'volume-high': { Component: Glyph52, id: '46:898' },
  'volume-slash': { Component: Glyph53, id: '472:629' },
  wifi: { Component: Glyph54, id: '498:490' },
  'wifi-error': { Component: Glyph55, id: '1061:1230' },
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
