import { useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createDemoControls, CopyButton } from './DemoControls';

import Glyph0 from 'fyicons/icons/IconAlert';
import Glyph1 from 'fyicons/icons/IconAlertFill';
import Glyph2 from 'fyicons/icons/IconArrowRevert';
import Glyph3 from 'fyicons/icons/IconArrowsSwap';
import Glyph4 from 'fyicons/icons/IconCheck';
import Glyph5 from 'fyicons/icons/IconCircleCheck';
import Glyph6 from 'fyicons/icons/IconCircleCheckFill';
import Glyph7 from 'fyicons/icons/IconClock';
import Glyph8 from 'fyicons/icons/IconClockFill';
import Glyph9 from 'fyicons/icons/IconCloudCheck';
import Glyph10 from 'fyicons/icons/IconCloudSlash';
import Glyph11 from 'fyicons/icons/IconCopied';
import Glyph12 from 'fyicons/icons/IconCopiedFill';
import Glyph13 from 'fyicons/icons/IconCopy';
import Glyph14 from 'fyicons/icons/IconDownload';
import Glyph15 from 'fyicons/icons/IconEdit';
import Glyph16 from 'fyicons/icons/IconError';
import Glyph17 from 'fyicons/icons/IconErrorFill';
import Glyph18 from 'fyicons/icons/IconEye';
import Glyph19 from 'fyicons/icons/IconEyeFill';
import Glyph20 from 'fyicons/icons/IconGhost';
import Glyph21 from 'fyicons/icons/IconInfo';
import Glyph22 from 'fyicons/icons/IconInfoFill';
import Glyph23 from 'fyicons/icons/IconLink';
import Glyph24 from 'fyicons/icons/IconLinkNewWindow';
import Glyph25 from 'fyicons/icons/IconLock';
import Glyph26 from 'fyicons/icons/IconLockFill';
import Glyph27 from 'fyicons/icons/IconPlugs';
import Glyph28 from 'fyicons/icons/IconProgressTask50';
import Glyph29 from 'fyicons/icons/IconProgressTaskTodo';
import Glyph30 from 'fyicons/icons/IconSend';
import Glyph31 from 'fyicons/icons/IconSendFill';
import Glyph32 from 'fyicons/icons/IconSparkles';
import Glyph33 from 'fyicons/icons/IconSparklesFill';
import Glyph34 from 'fyicons/icons/IconTag';
import Glyph35 from 'fyicons/icons/IconTags';
import Glyph36 from 'fyicons/icons/IconTextTitle';
import Glyph37 from 'fyicons/icons/IconTextTitleFill';
import Glyph38 from 'fyicons/icons/IconWarning';
import Glyph39 from 'fyicons/icons/IconWarningFill';
import Glyph40 from 'fyicons/icons/IconX';
const Icon = createIconLookup({
  alert: { Component: Glyph0, id: '667:563' },
  'alert-fill': { Component: Glyph1, id: '667:570' },
  'arrow-revert': { Component: Glyph2, id: '334:6730' },
  'arrows-swap': { Component: Glyph3, id: '635:556' },
  check: { Component: Glyph4, id: '96:1604' },
  'circle-check': { Component: Glyph5, id: '158:11585' },
  'circle-check-fill': { Component: Glyph6, id: '506:2715' },
  clock: { Component: Glyph7, id: '245:15235' },
  'clock-fill': { Component: Glyph8, id: '716:3694' },
  'cloud-check': { Component: Glyph9, id: '673:286' },
  'cloud-slash': { Component: Glyph10, id: '667:471' },
  copied: { Component: Glyph11, id: '548:8698' },
  'copied-fill': { Component: Glyph12, id: '892:30476' },
  copy: { Component: Glyph13, id: '245:15242' },
  download: { Component: Glyph14, id: '559:8913' },
  edit: { Component: Glyph15, id: '133:4571' },
  error: { Component: Glyph16, id: '1001:675' },
  'error-fill': { Component: Glyph17, id: '1001:681' },
  eye: { Component: Glyph18, id: '120:2551' },
  'eye-fill': { Component: Glyph19, id: '1010:19329' },
  ghost: { Component: Glyph20, id: '727:314' },
  info: { Component: Glyph21, id: '132:4339' },
  'info-fill': { Component: Glyph22, id: '487:1519' },
  link: { Component: Glyph23, id: '58:9555' },
  'link-new-window': { Component: Glyph24, id: '416:11628' },
  lock: { Component: Glyph25, id: '101:4339' },
  'lock-fill': { Component: Glyph26, id: '752:4245' },
  plugs: { Component: Glyph27, id: '472:650' },
  'progress-task-50': { Component: Glyph28, id: '506:2045' },
  'progress-task-todo': { Component: Glyph29, id: '506:2043' },
  send: { Component: Glyph30, id: '600:4613' },
  'send-fill': { Component: Glyph31, id: '679:4229' },
  sparkles: { Component: Glyph32, id: '11:883' },
  'sparkles-fill': { Component: Glyph33, id: '856:18071' },
  tag: { Component: Glyph34, id: '118:2265' },
  tags: { Component: Glyph35, id: '506:4118' },
  text: { Component: Glyph36, id: '58:9540' },
  'text-fill': { Component: Glyph37, id: '1084:12366' },
  warning: { Component: Glyph38, id: '101:2291' },
  'warning-fill': { Component: Glyph39, id: '667:582' },
  x: { Component: Glyph40, id: '506:3897' },
});

export function AlertsDemo() {
  const [connected, setConnected] = useState(false);
  const [updated, setUpdated] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-3">
      <Alert>
        <Icon name="circle-check-fill" />
        <div>
          <AlertTitle>All changes saved</AlertTitle>
          <AlertDescription>Your project is up to date.</AlertDescription>
        </div>
      </Alert>
      <Alert>
        <Icon name={connected ? 'cloud-check' : 'cloud-slash'} />
        <div className="min-w-0 flex-1">
          <AlertTitle>
            {connected ? 'Reconnected' : 'You’re offline'}
          </AlertTitle>
          <AlertDescription>
            {connected
              ? 'Sync is back up and running.'
              : 'Changes are saved on this device.'}
          </AlertDescription>
          <Button
            variant="ghost"
            size="xs"
            className="mt-2 -ml-2"
            onClick={() => setConnected(!connected)}
          >
            <Icon name={connected ? 'plugs' : 'arrows-swap'} />
            {connected ? 'Disconnect' : 'Reconnect'}
          </Button>
        </div>
      </Alert>
      <Alert>
        <Icon name={updated ? 'circle-check' : 'info'} />
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
          label={updated ? 'Revert' : 'Install'}
          icon={updated ? 'arrow-revert' : 'download'}
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
          <Icon name="circle-check-fill" className="-ms-1.5" />
          Published
        </Badge>
        <Badge tone="warning">
          <Icon name="clock" className="-ms-1.5" />
          Scheduled
        </Badge>
        <Badge>
          <Icon name="lock" className="-ms-1.5 -me-1" />
          Private
        </Badge>
        <Badge tone="info">
          <Icon name="sparkles" className="-ms-1.5" />
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
              icon="x"
              size="icon-sm"
              className="-m-1 -me-1.5 size-5 rounded-full"
              onClick={() => setTags(tags.filter((value) => value !== tag))}
            />
          </Badge>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTags(['Design', 'Interface'])}
        >
          <Icon name="tags" />
          Add tags
        </Button>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-sm">Task status</span>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger
            aria-label="Task status"
            className="min-h-8 gap-2 rounded-full"
          >
            <Icon
              name={
                status === 'Done'
                  ? 'circle-check-fill'
                  : status === 'In progress'
                    ? 'progress-task-50'
                    : 'progress-task-todo'
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
          icon={invited ? 'check' : 'send'}
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
            className="mt-1 h-auto min-h-6 justify-start p-0 text-xs font-normal"
            onClick={() => setPrivateLink(!privateLink)}
          >
            {privateLink ? 'Enable link sharing' : 'Restrict access'}
          </Button>
        </div>
        <Select value={access} onValueChange={setAccess}>
          <SelectTrigger
            aria-label="Link permission"
            className="min-h-8 gap-2 border-0 bg-transparent p-0 text-xs"
          >
            <Icon name={access === 'Can edit' ? 'edit' : 'eye'} />
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
        <Icon name="link-new-window" />
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

const { DemoIconButton } = createDemoControls(Icon);
