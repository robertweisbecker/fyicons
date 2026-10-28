import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Icon } from '@/components/Icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DemoIconButton } from './DemoControls';

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
          ['Calendar', 'calendar', 'calendar-fill', '3'],
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
