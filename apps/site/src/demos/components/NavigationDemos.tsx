import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { createIconLookup } from '@/components/createIconLookup';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { createDemoControls } from './DemoControls';

import Glyph0 from 'fyicons/icons/IconAlert';
import Glyph1 from 'fyicons/icons/IconAlertFill';
import Glyph2 from 'fyicons/icons/IconBookmark';
import Glyph3 from 'fyicons/icons/IconBookmarkFill';
import Glyph4 from 'fyicons/icons/IconCalendar';
import Glyph5 from 'fyicons/icons/IconCalendarFill';
import Glyph6 from 'fyicons/icons/IconCalendarSolid';
import Glyph7 from 'fyicons/icons/IconChevronDownSm';
import Glyph8 from 'fyicons/icons/IconChevronRightSm';
import Glyph9 from 'fyicons/icons/IconComponent';
import Glyph10 from 'fyicons/icons/IconCopied';
import Glyph11 from 'fyicons/icons/IconCopiedFill';
import Glyph12 from 'fyicons/icons/IconCopy';
import Glyph13 from 'fyicons/icons/IconError';
import Glyph14 from 'fyicons/icons/IconErrorFill';
import Glyph15 from 'fyicons/icons/IconFolder';
import Glyph16 from 'fyicons/icons/IconFolderAdd';
import Glyph17 from 'fyicons/icons/IconFolderFill';
import Glyph18 from 'fyicons/icons/IconFolderOpen';
import Glyph19 from 'fyicons/icons/IconFolderOpenFill';
import Glyph20 from 'fyicons/icons/IconGhost';
import Glyph21 from 'fyicons/icons/IconGlobe';
import Glyph22 from 'fyicons/icons/IconHomeWide';
import Glyph23 from 'fyicons/icons/IconHomeWideFill';
import Glyph24 from 'fyicons/icons/IconPalette';
import Glyph25 from 'fyicons/icons/IconPhone';
import Glyph26 from 'fyicons/icons/IconPhoneFill';
import Glyph27 from 'fyicons/icons/IconSettingsSmall';
import Glyph28 from 'fyicons/icons/IconSettingsSmallFill';
import Glyph29 from 'fyicons/icons/IconUsers';
import Glyph30 from 'fyicons/icons/IconUsersFill';
const Icon = createIconLookup({
  alert: { Component: Glyph0, id: '667:563' },
  'alert-fill': { Component: Glyph1, id: '667:570' },
  bookmark: { Component: Glyph2, id: '124:2571' },
  'bookmark-fill': { Component: Glyph3, id: '506:2914' },
  calendar: { Component: Glyph4, id: '344:9669' },
  'calendar-fill': { Component: Glyph5, id: '1350:2792' },
  'calendar-solid': { Component: Glyph6, id: '96:1603' },
  'chevron-down-sm': { Component: Glyph7, id: '142:6351' },
  'chevron-right-sm': { Component: Glyph8, id: '142:6353' },
  component: { Component: Glyph9, id: '58:9529' },
  copied: { Component: Glyph10, id: '548:8698' },
  'copied-fill': { Component: Glyph11, id: '892:30476' },
  copy: { Component: Glyph12, id: '245:15242' },
  error: { Component: Glyph13, id: '1001:675' },
  'error-fill': { Component: Glyph14, id: '1001:681' },
  folder: { Component: Glyph15, id: '102:4392' },
  'folder-add': { Component: Glyph16, id: '747:3749' },
  'folder-fill': { Component: Glyph17, id: '741:7685' },
  'folder-open': { Component: Glyph18, id: '102:4393' },
  'folder-open-fill': { Component: Glyph19, id: '741:7694' },
  ghost: { Component: Glyph20, id: '727:314' },
  globe: { Component: Glyph21, id: '158:11702' },
  'home-wide': { Component: Glyph22, id: '957:33306' },
  'home-wide-fill': { Component: Glyph23, id: '959:33671' },
  palette: { Component: Glyph24, id: '479:1759' },
  phone: { Component: Glyph25, id: '596:4380' },
  'phone-fill': { Component: Glyph26, id: '596:4389' },
  'settings-small': { Component: Glyph27, id: '178:12405' },
  'settings-small-fill': { Component: Glyph28, id: '178:12414' },
  users: { Component: Glyph29, id: '469:1440' },
  'users-fill': { Component: Glyph30, id: '487:1492' },
});

export function SidebarDemo() {
  const [value, setValue] = useState(['Home']);
  const [projects, setProjects] = useState(['Website', 'Design system']);
  const [projectsOpen, setProjectsOpen] = useState(true);
  return (
    <nav
      aria-label="Workspace navigation"
      className="flex flex-1 flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-lg bg-inset text-ink">
          <Icon name="palette" />
        </div>
        <div>
          <p className="text-sm font-semibold">Studio</p>
          <p className="text-xs text-muted">Personal workspace</p>
        </div>
        <DemoIconButton
          className="ml-auto"
          label="Add project"
          icon="folder-add"
          onClick={() => {
            setProjects((p) => [...p, `Untitled ${p.length - 1}`]);
            setProjectsOpen(true);
          }}
        />
      </div>
      <ToggleGroup
        orientation="vertical"
        value={value}
        onValueChange={(v) => v.length && setValue(v)}
        aria-label="Workspace section"
        className="gap-px"
      >
        {[
          ['Home', 'home-wide', 'home-wide-fill', ''],
          ['Priority', 'alert', 'alert-fill', '8'],
          ['Calls', 'phone', 'phone-fill', ''],
          ['Calendar', 'calendar', 'calendar-solid', '3'],
          ['Saved', 'bookmark', 'bookmark-fill', ''],
          ['Contacts', 'users', 'users-fill', ''],
        ].map(([label, icon, active, count]) => (
          <Toggle
            key={label}
            value={label}
            className="w-full justify-start gap-2 font-normal"
          >
            <ToggleIcon icon={icon} activeIcon={active} />
            {label}
            <span className="ml-auto text-xs text-muted tabular-nums">
              {count}
            </span>
          </Toggle>
        ))}
      </ToggleGroup>
      <Collapsible.Root open={projectsOpen} onOpenChange={setProjectsOpen}>
        <Collapsible.Trigger
          render={
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-xs text-muted"
            />
          }
        >
          <Icon name={projectsOpen ? 'folder-open' : 'folder'} />
          Projects
          <Icon
            name={projectsOpen ? 'chevron-down-sm' : 'chevron-right-sm'}
            className="ml-auto"
          />
        </Collapsible.Trigger>
        <Collapsible.Panel className="max-h-32 overflow-auto">
          <ToggleGroup
            orientation="vertical"
            value={value}
            onValueChange={(v) => v.length && setValue(v)}
            aria-label="Project navigation"
          >
            {projects.map((name, i) => (
              <Toggle
                key={name}
                value={name}
                className="min-h-9 w-full justify-start gap-3 px-3 font-normal"
              >
                <Icon
                  name={i === 0 ? 'globe' : i === 1 ? 'component' : 'folder'}
                />
                <span className="truncate">{name}</span>
              </Toggle>
            ))}
          </ToggleGroup>
        </Collapsible.Panel>
      </Collapsible.Root>
      <div className="mt-auto flex items-center gap-2 pt-2">
        <Avatar className="size-7 bg-current/10">
          <AvatarFallback className="text-xs">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs">Jamie Davis</span>
        <DemoIconButton
          label="Workspace settings"
          icon="settings-small"
          className="ml-auto"
          onClick={() => setValue(['Settings'])}
        />
        <span className="sr-only" role="status">
          {value[0]} selected
        </span>
      </div>
    </nav>
  );
}

const { DemoIconButton } = createDemoControls(Icon);
