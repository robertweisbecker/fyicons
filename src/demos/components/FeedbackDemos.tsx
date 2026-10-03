import { useState } from 'react';
import { Field } from '@base-ui/react/field';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export function AlertsDemo() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div className="flex flex-1 flex-col justify-center gap-3">
      <Alert>
        <Icon name="circle-check-fill" />
        <div>
          <AlertTitle>Changes saved</AlertTitle>
          <AlertDescription>Your project is up to date.</AlertDescription>
        </div>
      </Alert>
      {!dismissed ? (
        <Alert>
          <Icon name="warning" />
          <div className="flex-1">
            <AlertTitle>Connection interrupted</AlertTitle>
            <AlertDescription>
              Your changes are safe on this device.
            </AlertDescription>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Dismiss connection alert"
            onClick={() => setDismissed(true)}
          >
            <Icon name="xmark-sm" />
          </Button>
        </Alert>
      ) : (
        <Button
          variant="ghost"
          className="w-fit"
          onClick={() => setDismissed(false)}
        >
          <Icon name="arrow-restart" />
          Show alert again
        </Button>
      )}
      <Alert>
        <Icon name="info" />
        <div>
          <AlertTitle>A new version is available</AlertTitle>
          <AlertDescription>Restart whenever you’re ready.</AlertDescription>
        </div>
      </Alert>
    </div>
  );
}
export function BadgesDemo() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6">
      <div className="flex flex-wrap gap-2">
        <Badge>
          <Icon name="circle-check-fill" />
          Published
        </Badge>
        <Badge variant="outline">
          <Icon name="clock" />
          Scheduled
        </Badge>
        <Badge variant="solid">
          <Icon name="lock" />
          Private
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">
          <Icon name="git-branch" />
          main
        </Badge>
        <Badge variant="outline">
          <Icon name="tag" />
          Design
        </Badge>
        <Badge>
          <Icon name="sparkles" />
          New
        </Badge>
        <Badge>
          <Icon name="cloud-check" />
          Synced
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="solid">
          <Icon name="lightning-bolt" />
          Pro
        </Badge>
        <Badge variant="outline">
          <Icon name="shield-check" />
          Verified
        </Badge>
        <Badge>
          <Icon name="circle-progress-half" />
          In progress
        </Badge>
      </div>
    </div>
  );
}
export function TasksDemo() {
  const [done, setDone] = useState(['Explore concepts']);
  const tasks = [
    'Explore concepts',
    'Refine the details',
    'Review with the team',
  ];
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Design review</h3>
        <Badge variant="outline">{done.length} / 3</Badge>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Field.Root
            key={task}
            className="flex items-center gap-2 rounded-lg bg-surface px-2 py-1"
          >
            <Checkbox
              size="sm"
              checked={done.includes(task)}
              onCheckedChange={(checked) =>
                setDone(
                  checked ? [...done, task] : done.filter((x) => x !== task),
                )
              }
            />
            <Field.Label
              className={cn(
                'flex-1 text-sm',
                done.includes(task) && 'text-muted line-through',
              )}
            >
              {task}
            </Field.Label>
          </Field.Root>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs text-muted">
        <Icon name="calendar" />
        Friday, October 9<Icon name="flag" className="ml-auto" />
        Normal priority
      </div>
    </div>
  );
}
export function SharingDemo() {
  const [invited, setInvited] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-5">
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
        <div>
          <p className="text-sm font-medium">Made together</p>
          <p className="mt-1 text-xs text-muted">3 collaborators</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-line p-4">
        <Icon name="link" />
        <div className="flex-1">
          <p className="text-sm font-medium">Anyone with the link</p>
          <p className="mt-1 text-xs text-muted">Can view this project</p>
        </div>
        <Icon name="eye-open" />
      </div>
      <Button
        variant="outline"
        className="mt-auto w-fit"
        disabled={invited}
        onClick={() => setInvited(true)}
      >
        <Icon name={invited ? 'check' : 'user-group'} />
        {invited ? 'Invitation sent' : 'Invite teammates'}
      </Button>
    </div>
  );
}
