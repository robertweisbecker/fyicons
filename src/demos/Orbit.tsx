import { cn } from '../lib/utils';
import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Button, IconButton } from '../components/ui';

export function Orbit() {
  const [tab, setTab] = useState('Overview');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [complete, setComplete] = useState(false);
  return (
    <div
      className={cn(
        'demo-card flex h-115 overflow-hidden rounded-xl border border-[#dfe1dd] bg-[#f5f8f0] text-[#445138] scheme-light shadow-[0_12px_30px_-26px_#243c263b] max-[680px]:h-117.5',
      )}
    >
      <aside
        className={cn(
          'flex w-12 shrink-0 flex-col border-r border-[#dce4d2] bg-[#e9f0de] p-2 sm:w-38 sm:p-4',
        )}
      >
        <strong className={cn('mb-6 flex items-center gap-2 text-base')}>
          <Icon name="atom-simple" />
          <span className={cn('hidden sm:inline')}>orbit</span>
        </strong>
        {[
          'Overview',
          'Conversations',
          'Automations',
          'Website refresh',
          'Design system',
        ].map((name, i) => (
          <Button
            key={name}
            aria-label={name}
            className={cn(
              'mb-1 flex min-h-9 items-center gap-2 rounded-md px-2 text-left text-xs',
              tab === name ? 'bg-white/60' : '',
            )}
            onClick={() => setTab(name)}
          >
            <Icon
              name={
                ['home', 'chat-round', 'workflow', 'folder', 'component'][i]
              }
            />
            <span className={cn('hidden sm:inline')}>{name}</span>
          </Button>
        ))}
        <span className={cn('mt-auto hidden text-xs sm:block')}>
          Personal workspace
        </span>
      </aside>
      <div className={cn('flex min-w-0 flex-1 flex-col')}>
        <div
          className={cn(
            'flex h-13 items-center justify-between border-b border-[#e0e6d9] px-5 text-xs',
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
              'mb-3 flex items-center gap-2 text-xs tracking-normal text-[#8b9a7c]',
            )}
          >
            <Icon name="agent-clank" />
            Assistant
          </div>
          <h4 className={cn('text-2xl font-medium tracking-normal')}>
            New task
          </h4>
          <p className={cn('mt-1 text-xs text-[#859278]')}>
            Enter a message to start a task.
          </p>
          <div
            className={cn(
              'mt-5 rounded-lg border border-[#d9e2ce] bg-white/60 p-3',
            )}
          >
            <div className={cn('flex items-center gap-2 text-xs')}>
              <Icon name="git-pull-request" />
              <strong>Refine the navigation</strong>
            </div>
            <p className={cn('my-3 text-xs text-[#809071]')}>
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
                className={cn('flex items-center gap-1')}
                disabled={complete}
                onClick={() => {
                  setComplete(true);
                  setResponse(
                    'Task complete. Three navigation changes are ready for review.',
                  );
                }}
              >
                <Icon name={complete ? 'check-sm' : 'play-filled'} />
                {complete ? 'Complete' : 'Run task'}
              </Button>
            </div>
          </div>
          <p className={cn('mt-3 text-xs leading-relaxed')} role="status">
            {response}
          </p>
        </div>
        <form
          className={cn('m-4 rounded-lg border border-[#d8e0ce] bg-white p-3')}
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
            <span className={cn('flex items-center gap-2 text-[#94a485]')}>
              <Icon name="paperclip" />
              <Icon name="globe-simple" />
            </span>
            <Button
              type="submit"
              className={cn(
                'grid size-7 place-items-center rounded-md bg-[#667a50] text-white',
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
