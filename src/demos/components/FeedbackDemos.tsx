import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CopyButton, DemoIconButton } from './DemoControls';

export function AlertsDemo() {
  const [connected, setConnected] = useState(false);
  const [updated, setUpdated] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-3">
      <Alert className="text-(--demo-success)">
        <Icon name="circle-check-fill" />
        <div>
          <AlertTitle>All changes saved</AlertTitle>
          <AlertDescription>Your project is up to date.</AlertDescription>
        </div>
      </Alert>
      <Alert
        className={
          connected ? 'text-(--demo-success)' : 'text-(--demo-warning)'
        }
      >
        <Icon name={connected ? 'cloud-check' : 'cloud-slash'} />
        <div className="min-w-0 flex-1">
          <AlertTitle>
            {connected ? 'Connected again' : 'You’re offline'}
          </AlertTitle>
          <AlertDescription>
            {connected
              ? 'Sync is back up and running.'
              : 'Changes are saved on this device.'}
          </AlertDescription>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 -ml-2"
            onClick={() => setConnected(!connected)}
          >
            <Icon name={connected ? 'cloud-slash' : 'arrows-rotate'} />
            {connected ? 'Disconnect' : 'Reconnect'}
          </Button>
        </div>
      </Alert>
      <Alert className="text-(--demo-info)">
        <Icon name={updated ? 'circle-check' : 'info-fill'} />
        <div className="flex-1">
          <AlertTitle>
            {updated ? 'You’re on the latest version' : 'Update available'}
          </AlertTitle>
          <AlertDescription>
            {updated
              ? 'Everything is ready to go.'
              : 'A few small improvements are ready.'}
          </AlertDescription>
        </div>
        <DemoIconButton
          label={updated ? 'Reset update' : 'Install update'}
          icon={updated ? 'arrow-restart' : 'download'}
          onClick={() => setUpdated(!updated)}
        />
      </Alert>
    </div>
  );
}
export function BadgesDemo() {
  const [status, setStatus] = useState<string | null>('In progress');
  const [tags, setTags] = useState(['Design', 'Interface']);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <Badge tone="success">
          <Icon name="circle-check-fill" />
          Published
        </Badge>
        <Badge tone="warning">
          <Icon name="clock" />
          Scheduled
        </Badge>
        <Badge variant="solid">
          <Icon name="lock" />
          Private
        </Badge>
        <Badge tone="info">
          <Icon name="sparkles" />
          New
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            <Icon name="tag" />
            {tag}
            <DemoIconButton
              label={'Remove ' + tag + ' tag'}
              icon="xmark-sm"
              size="icon-sm"
              className="-mr-1 size-5"
              onClick={() => setTags(tags.filter((value) => value !== tag))}
            />
          </Badge>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTags(['Design', 'Interface'])}
        >
          <Icon name="plus-sm" />
          Add tags
        </Button>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-sm">Task status</span>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger
            aria-label="Task status"
            className="min-h-8 gap-2 rounded-full pointer-coarse:min-h-11"
          >
            <Icon
              name={
                status === 'Done'
                  ? 'circle-check-fill'
                  : status === 'In progress'
                    ? 'circle-progress-half'
                    : 'circle-progress-todo'
              }
            />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {['To do', 'In progress', 'Done'].map((value) => (
                <SelectItem value={value} key={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
const tasks = [
  {
    name: 'Explore concepts',
    icon: 'thought-bubble',
    detail: 'Sketch the first direction',
  },
  {
    name: 'Refine the details',
    icon: 'pen-tool',
    detail: 'Spacing, type, and state changes',
  },
  {
    name: 'Review with the team',
    icon: 'users-two',
    detail: 'Ready for a second pair of eyes',
  },
];
export function TasksDemo() {
  const [done, setDone] = useState(['Explore concepts']);
  const complete = done.length === tasks.length;
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Design review</h3>
        <Badge tone={complete ? 'success' : 'default'}>
          <Icon
            name={complete ? 'circle-check-fill' : 'circle-progress-half'}
          />
          {done.length} / 3
        </Badge>
      </div>
      <div className="flex flex-col gap-1">
        {tasks.map((task) => (
          <Field.Root
            key={task.name}
            className="flex items-center gap-2 rounded-lg bg-surface px-2 py-2"
          >
            <Checkbox
              size="sm"
              checked={done.includes(task.name)}
              onCheckedChange={(checked) =>
                setDone(
                  checked
                    ? [...done, task.name]
                    : done.filter((value) => value !== task.name),
                )
              }
            />
            <Field.Label className="min-w-0 flex-1 cursor-pointer">
              <span
                className={cn(
                  'block text-sm',
                  done.includes(task.name) && 'text-muted line-through',
                )}
              >
                {task.name}
              </span>
              <span className="mt-1 block text-xs text-muted">
                {task.detail}
              </span>
            </Field.Label>
            <Icon
              name={done.includes(task.name) ? 'check' : task.icon}
              className="text-muted"
            />
          </Field.Root>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs text-muted">
        <Icon name={complete ? 'circle-check' : 'calendar'} />
        <span role="status">
          {complete ? 'Ready for review' : 'Due Friday, October 9'}
        </span>
        <DemoIconButton
          label="Reset checklist"
          icon="arrow-restart"
          className="ml-auto"
          onClick={() => setDone([])}
        />
      </div>
    </div>
  );
}
export function SharingDemo() {
  const [access, setAccess] = useState<string | null>('Can view');
  const [invited, setInvited] = useState(false);
  const [privateLink, setPrivateLink] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex">
          {['JD', 'MK', 'AL'].map((person) => (
            <Avatar
              key={person}
              className="border-2 border-canvas bg-hover not-first:-ml-2"
            >
              <AvatarFallback className="text-xs">{person}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Project collaborators</p>
          <p className="mt-1 text-xs text-muted">Jamie, Morgan, and Alex</p>
        </div>
        <DemoIconButton
          label={invited ? 'Invitation sent' : 'Invite teammate'}
          icon={invited ? 'check' : 'user-group'}
          onClick={() => setInvited(!invited)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface p-4">
        <Icon name={privateLink ? 'lock' : 'link'} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            {privateLink ? 'Only invited people' : 'Anyone with the link'}
          </p>
          <Button
            variant="text"
            size="sm"
            className="mt-1 h-auto min-h-6 justify-start p-0 text-xs font-normal pointer-coarse:min-h-11"
            onClick={() => setPrivateLink(!privateLink)}
          >
            {privateLink ? 'Enable link sharing' : 'Restrict access'}
          </Button>
        </div>
        <Select value={access} onValueChange={setAccess}>
          <SelectTrigger
            aria-label="Link permission"
            className="min-h-8 gap-2 border-0 bg-transparent p-0 text-xs pointer-coarse:min-h-11"
          >
            <Icon name={access === 'Can edit' ? 'pencil-edit' : 'eye'} />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Can view">Can view</SelectItem>
              <SelectItem value="Can edit">Can edit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-lg border border-line px-3 py-1.5">
        <Icon name="link-new-tab" />
        <span className="min-w-0 flex-1 truncate text-xs text-muted">
          studio.example/project/interface-kit
        </span>
        <CopyButton
          showLabel
          label="Copy link"
          getText={() => 'https://studio.example/project/interface-kit'}
        />
      </div>
      <p role="status" className="min-h-4 text-xs text-muted">
        {invited
          ? 'Invitation sent to your teammate.'
          : privateLink
            ? 'Link access is restricted.'
            : 'Link sharing is enabled.'}
      </p>
    </div>
  );
}
