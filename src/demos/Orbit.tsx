import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { ToggleIcon } from '@/components/ToggleIcon';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';

export function Orbit() {
  const [tab, setTab] = useState('Overview');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [complete, setComplete] = useState(false);
  return (
    <div
      className={cn(
        'demo-card flex h-115 overflow-hidden rounded-xl border border-neutral-200 bg-olive-100 text-olive-700 scheme-light shadow-sm max-[680px]:h-117.5',
      )}
    >
      <aside
        className={cn(
          'flex w-12 shrink-0 flex-col border-r border-neutral-200 bg-olive-200 px-1 py-2 sm:w-38',
        )}
      >
        <strong className={cn('mb-6 flex items-center gap-2 ps-1.5 text-base')}>
          <Icon name="atom-simple" />
          <span className={cn('hidden sm:inline')}>orbit</span>
        </strong>
        <ToggleGroup
          orientation="vertical"
          aria-label="Orbit navigation"
          value={[tab]}
          onValueChange={(values) => {
            if (values[0]) setTab(values[0]);
          }}
        >
          {[
            'Overview',
            'Conversations',
            'Automations',
            'Website refresh',
            'Design system',
          ].map((name, i) => (
            <Toggle
              size="unstyled"
              key={name}
              value={name}
              aria-label={name}
              className="min-h-7 justify-start ps-1.5 pe-2 text-left text-xs pointer-coarse:min-h-11"
            >
              {i === 0 ? (
                <ToggleIcon icon="home" activeIcon="home-fill" />
              ) : i === 3 ? (
                <ToggleIcon icon="folder" activeIcon="folder-open" />
              ) : (
                <Icon
                  name={
                    ['home', 'chat-round', 'workflow', 'folder', 'component'][i]
                  }
                />
              )}
              <span className="hidden sm:inline">{name}</span>
            </Toggle>
          ))}
        </ToggleGroup>
        <span className={cn('mt-auto hidden text-xs sm:block')}>
          Personal workspace
        </span>
      </aside>
      <div className={cn('flex min-w-0 flex-1 flex-col')}>
        <div
          className={cn(
            'flex h-13 items-center justify-between border-b border-olive-200 px-5 text-xs',
          )}
        >
          <strong>{tab}</strong>
          <IconButton
            icon="chat-plus"
            label="New conversation"
            onClick={() => {
              setPrompt('');
              setResponse('');
              setComplete(false);
            }}
          />
        </div>
        <div className={cn('min-h-0 flex-1 overflow-auto px-5 pt-5')}>
          <div
            className={cn(
              'mb-3 flex items-center gap-2 text-xs tracking-normal text-stone-500',
            )}
          >
            <Icon name="agent-clank" />
            Assistant
          </div>
          <h4 className={cn('text-2xl font-medium tracking-normal')}>
            New task
          </h4>
          <p className={cn('mt-1 text-xs text-olive-500')}>
            Enter a message to start a task.
          </p>
          <div
            className={cn(
              'mt-5 rounded-lg border border-olive-300 bg-white/60 p-3',
            )}
          >
            <div className={cn('flex items-center gap-1 text-sm font-medium')}>
              <Icon name="sparkles" />
              Refine the navigation
            </div>
            <p className={cn('my-3 text-xs text-olive-500')}>
              Three navigation changes are ready.
            </p>
            <div
              className={cn('flex items-center justify-between gap-2 text-xs')}
            >
              <span className={cn('flex items-center gap-1')}>
                <Icon name="git-branch" />
                design/navigation
              </span>
              <Button
                variant="unstyled"
                size="unstyled"
                className={cn('flex items-center gap-1')}
                disabled={complete}
                onClick={() => {
                  setComplete(true);
                  setResponse(
                    'Task complete. Three navigation changes are ready for review.',
                  );
                }}
              >
                <Icon name={complete ? 'circle-check-fill' : 'circle-play'} />
                {complete ? 'Complete' : 'Run task'}
              </Button>
            </div>
          </div>
          <p className={cn('mt-3 text-xs leading-relaxed')} role="status">
            {response}
          </p>
        </div>
        <form
          className={cn('m-4 rounded-lg border border-olive-300 bg-white p-3')}
          onSubmit={(event) => {
            event.preventDefault();
            if (prompt.trim()) {
              setResponse(
                'Added to this local conversation: “' + prompt.trim() + '”',
              );
              setPrompt('');
            }
          }}
        >
          <input
            className={cn('w-full bg-transparent text-xs outline-none')}
            aria-label="Message the assistant"
            placeholder="Ask a question or start a task…"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
          <div className={cn('mt-3 flex items-center justify-between')}>
            <span className={cn('flex items-center gap-2 text-stone-500')}>
              <Icon name="paperclip" />
              <Icon name="globe-simple" />
            </span>
            <Button
              variant="unstyled"
              size="unstyled"
              type="submit"
              className={cn(
                'grid size-7 place-items-center rounded-md bg-olive-600 text-white',
              )}
              aria-label="Send message"
            >
              <Icon name="arrow-up" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
