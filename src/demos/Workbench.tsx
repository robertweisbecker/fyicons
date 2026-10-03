import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { cn } from '../lib/utils';
import { useRef, useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '../components/Icon';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';
import { copy } from '../lib/downloads';

const sessions = [
  'Refine the command menu',
  'Explore a quieter palette',
  'Review keyboard shortcuts',
  'Organize the icon library',
];
const code =
  'export function CommandItem({\n  icon, children, shortcut,\n}) {\n  return (\n    <button className={cn("command-item")}>\n      <Icon name={icon} />\n      <span>{children}</span>\n      <kbd>{shortcut}</kbd>\n    </button>\n  );\n}';
const css =
  ':root {\n  --row-height: 36px;\n  --group-gap: 12px;\n}\n\n.command-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 12px;\n  border-radius: 6px;\n}';

export function Workbench({ notify }: { notify: (message: string) => void }) {
  const [title, setTitle] = useState(sessions[0]);
  const [terminal, setTerminal] = useState(false);
  const [review, setReview] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [file, setFile] = useState('component');
  const [attached, setAttached] = useState(false);
  const [mode, setMode] = useState('Thoughtful');
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const input = useRef<HTMLTextAreaElement>(null);
  return (
    <div
      className={cn(
        'study-window demo-surface workbench-window flex h-190 overflow-hidden rounded-[13px] border border-mist-300 bg-white font-sans text-sm font-normal tracking-normal text-zinc-800 antialiased scheme-light shadow-xl shadow-slate-900/10 [--app-blue:var(--color-blue-500)] [--app-line:var(--color-olive-200)] [--hover:var(--color-mauve-100)] [--muted:var(--color-neutral-500)] [--text:var(--color-zinc-800)] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-neutral-500 [&_input]:focus-visible:outline-neutral-500 [&_textarea]:focus-visible:outline-neutral-500',
      )}
      id="workbench-window"
    >
      <aside
        className={cn(
          'study-sidebar workbench-sidebar flex shrink-0 basis-56.5 flex-col border-r border-(--app-line) bg-stone-100 px-3 pt-5 pb-3 max-[1240px]:basis-52 max-[1050px]:basis-46 max-[850px]:basis-49 max-[680px]:hidden',
        )}
      >
        <div
          className={cn(
            'window-controls mb-6 flex h-4 items-center gap-2 px-2 [&_i]:size-2.75 [&_i]:rounded-full [&_i]:bg-red-400 [&_i]:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_5%,transparent)] [&_i:nth-child(2)]:bg-amber-400 [&_i:nth-child(3)]:bg-green-500',
          )}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </div>
        <div
          className={cn(
            'workspace-identity mt-1 mb-6 flex items-center gap-2.5 px-2 [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:font-normal [&_small]:text-olive-500 [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:text-sm [&>span:nth-child(2)]:font-semibold [&>svg]:text-olive-500',
          )}
        >
          <span
            className={cn(
              'workspace-avatar grid size-8 place-items-center rounded-lg bg-neutral-700 text-base font-semibold text-white',
            )}
          >
            FY
          </span>
          <span>
            FYIcons<small>Personal workspace</small>
          </span>
          <Icon name="chevrons-up-down-sm" />
        </div>
        <Button
          variant="unstyled"
          size="unstyled"
          className={cn(
            'app-nav-item new-task my-px flex min-h-8 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-olive-800 hover:bg-olive-200 max-[1050px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-olive-200 [&.selected]:text-neutral-700',
          )}
          onClick={() => {
            setTitle('New task');
            setMessages([]);
            input.current?.focus();
          }}
        >
          <Icon name="pencil-edit" />
          New task
          <span
            className={cn(
              'key-hint ml-auto text-xs text-zinc-500 tabular-nums',
            )}
          >
            ⌘ N
          </span>
        </Button>
        <Button
          variant="unstyled"
          size="unstyled"
          className={cn(
            'app-nav-item my-px flex min-h-8 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-olive-200 max-[1050px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-olive-200 [&.selected]:text-neutral-700',
          )}
          onClick={() => input.current?.focus()}
        >
          <Icon name="search" />
          Find a task
          <span
            className={cn(
              'key-hint ml-auto text-xs text-zinc-500 tabular-nums',
            )}
          >
            ⌘ K
          </span>
        </Button>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-neutral-500',
          )}
        >
          Workspace
        </div>
        {['Projects', 'Automations', 'Saved context'].map((label, i) => (
          <Button
            variant="unstyled"
            size="unstyled"
            key={label}
            className={cn(
              'app-nav-item my-px flex min-h-8 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-olive-200 max-[1050px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-olive-200 [&.selected]:text-neutral-700',
            )}
            onClick={() => setTitle(label)}
          >
            <Icon name={['folder', 'clock', 'book-open'][i]} />
            {label}
          </Button>
        ))}
        <div
          className={cn(
            'app-nav-label recent-label mt-8 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-neutral-500',
          )}
        >
          Recent tasks
          <Icon name="ellipsis-h" />
        </div>
        {sessions.map((session) => (
          <Button
            variant="unstyled"
            size="unstyled"
            key={session}
            className={cn(
              'app-nav-item my-px flex min-h-8 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-olive-200 max-[1050px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-olive-200 [&.selected]:text-neutral-700',
              title === session ? 'selected' : '',
            )}
            onClick={() => setTitle(session)}
          >
            <Icon name="chat-round" />
            {session}
          </Button>
        ))}
        <div className={cn('sidebar-bottom mt-auto')}>
          <div
            className={cn(
              'local-indicator mx-2.5 my-5 flex items-center gap-2 text-xs text-neutral-500',
            )}
          >
            <span
              className={cn(
                'status-point size-1.25 shrink-0 rounded-full bg-olive-500',
              )}
            />
            Everything up to date
          </div>
          <Button
            variant="unstyled"
            size="unstyled"
            className={cn(
              'app-nav-item my-px flex min-h-8 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-olive-200 max-[1050px]:text-xs pointer-coarse:min-h-11 [&.selected]:bg-olive-200 [&.selected]:text-neutral-700',
            )}
            onClick={() => notify('Jamie Davis · Personal workspace')}
          >
            <Avatar
              aria-label="Jamie Davis"
              className={cn(
                'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-olive-300 text-xs font-semibold tracking-normal text-neutral-500',
              )}
            >
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            Jamie Davis
            <Icon name="settings" />
          </Button>
        </div>
      </aside>
      <div
        className={cn('workbench-main flex min-w-0 flex-1 flex-col bg-white')}
      >
        <header
          className={cn(
            'app-titlebar flex shrink-0 basis-13 items-center justify-between gap-3 border-b border-(--app-line) px-4.5 max-[680px]:px-3',
          )}
        >
          <div
            className={cn(
              'app-breadcrumb flex min-w-0 items-center gap-2 text-xs whitespace-nowrap text-neutral-500 max-[680px]:gap-1.5 max-[680px]:text-[0px] [&_strong]:truncate [&_strong]:font-medium [&_strong]:text-mist-600 max-[680px]:[&_strong]:max-w-44 max-[680px]:[&_strong]:text-xs max-[680px]:[&>svg]:hidden',
            )}
          >
            <Icon name="folder" />
            Interface kit
            <span
              className={cn(
                'breadcrumb-slash px-1 text-mauve-300 max-[680px]:hidden',
              )}
            >
              /
            </span>
            <strong>{title}</strong>
          </div>
          <div className={cn('titlebar-actions flex gap-2 max-[680px]:gap-1')}>
            <Toggle
              size="icon-sm"
              aria-label="Toggle terminal"
              pressed={terminal}
              onPressedChange={setTerminal}
            >
              <Icon name="terminal-rectangle" />
            </Toggle>
            <Toggle
              size="icon-sm"
              aria-label="Toggle changes panel"
              pressed={review}
              onPressedChange={setReview}
            >
              <ToggleIcon
                icon="panel-right-docked"
                activeIcon="panel-right-open"
              />
            </Toggle>
          </div>
        </header>
        <div className={cn('workbench-split flex min-h-0 flex-1')}>
          <section
            className={cn('conversation-pane flex min-w-0 flex-1 flex-col')}
          >
            <div
              className={cn(
                'conversation-scroll min-h-0 flex-1 overflow-auto px-8.5 pt-5.5 max-[1240px]:px-6 max-[1050px]:px-5.5 max-[850px]:px-7.5 max-[850px]:pt-6.5 max-[680px]:px-4.5 max-[680px]:pt-5.5',
              )}
            >
              <div
                className={cn(
                  'conversation-meta mb-5 flex items-center justify-center gap-2 text-xs text-mist-500',
                )}
              >
                Today, 10:42 AM
              </div>
              <div
                className={cn(
                  'user-message mb-6 flex items-start gap-3 [&_p]:mt-1 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-olive-600 [&_strong]:text-xs [&_strong]:text-neutral-500 max-[680px]:[&>.person-avatar]:hidden [&>div]:min-w-0 [&>div]:flex-1 [&>div]:rounded-xl [&>div]:bg-taupe-100 [&>div]:px-4 [&>div]:py-3',
                )}
              >
                <Avatar
                  aria-label="Jamie Davis"
                  className={cn(
                    'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-olive-300 text-xs font-semibold tracking-normal text-neutral-500',
                  )}
                >
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <strong>Jamie Davis</strong>
                  <p>
                    Refine the command menu. Tighten the hierarchy and make the
                    keyboard shortcuts easier to scan.
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  'assistant-message grid grid-cols-[25px_minmax(0,1fr)] gap-3 max-[680px]:block',
                )}
              >
                <div
                  className={cn(
                    'assistant-mark grid size-6.25 place-items-center rounded-[7px] bg-olive-200 text-olive-600 max-[680px]:mb-3',
                  )}
                >
                  <Icon name="asterisk-simple" />
                </div>
                <div
                  className={cn(
                    'assistant-content [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-normal max-[1050px]:[&_h2]:text-2xl max-[680px]:[&_h2]:text-2xl [&>p]:mb-4 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-stone-500',
                  )}
                >
                  <div
                    className={cn(
                      'assistant-meta mt-1 mb-4.5 flex flex-wrap items-center gap-2.5 text-xs [&>span]:text-xs [&>span]:text-neutral-500',
                    )}
                  >
                    <strong>Assistant</strong>
                  </div>
                  <h3 className="text-lg leading-tight font-medium tracking-normal">
                    Command menu updated
                  </h3>
                  <p>
                    The menu has a clearer hierarchy, consistent spacing, and a
                    dedicated column for keyboard shortcuts.
                  </p>
                  <div
                    className={cn(
                      'work-done [&>div]:flex [&>div]:min-h-7.5 [&>div]:items-center [&>div]:gap-2 [&>div]:text-xs [&>div]:text-olive-500',
                    )}
                  >
                    <div>
                      <Icon name="circle-check-fill" />
                      <span>Grouped related commands</span>
                    </div>
                    <div>
                      <Icon name="circle-check-fill" />
                      <span>Aligned icons and shortcut labels</span>
                    </div>
                    <div>
                      <Icon name="circle-check-fill" />
                      <span>Added keyboard focus states</span>
                    </div>
                  </div>
                  <Button
                    variant="unstyled"
                    size="unstyled"
                    className={cn(
                      'change-summary mt-5 mb-2.5 flex w-full items-center gap-4 rounded-lg border border-neutral-200 bg-olive-50 p-3 text-left [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-olive-500 [&_strong]:block [&_strong]:text-xs [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>svg]:text-olive-500',
                    )}
                    onClick={() => setReview(true)}
                  >
                    <span className={cn('change-summary-icon')}>
                      <Icon name="files" className="size-6" />
                    </span>
                    <span>
                      <p className="text-sm/none font-medium">
                        2 files changed
                      </p>
                      <small>command-menu.tsx · command-menu.css</small>
                    </span>
                    <span
                      className={cn(
                        'diff-count inline-flex gap-2 text-xs tabular-nums [&_b]:font-medium [&_b]:text-emerald-600 [&_i]:text-red-500 [&_i]:not-italic',
                      )}
                    >
                      <b>+28</b>
                      <i>−12</i>
                    </span>
                    <Icon name="chevron-right-sm" />
                  </Button>
                  <p className={cn('assistant-next')}>
                    The updated files are ready to review.
                  </p>
                  <div
                    className={cn(
                      'message-actions flex items-center gap-2 text-xs text-stone-500 [&>span]:ml-auto',
                    )}
                  >
                    <IconButton
                      size="icon-sm"
                      className="text-mist-500"
                      icon="copy-sm"
                      label="Copy summary"
                      onClick={async () =>
                        notify(
                          (await copy(
                            'Command menu updated. Grouped commands, aligned shortcuts, and added focus states.',
                          ))
                            ? 'Summary copied'
                            : 'Clipboard unavailable',
                        )
                      }
                    />
                    <span>All checks passed</span>
                    <Icon name="shield-check" />
                  </div>
                </div>
              </div>
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={cn(
                    'user-message mb-6 flex items-start gap-3 [&_p]:mt-1 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-olive-600 [&_strong]:text-xs [&_strong]:text-neutral-500 max-[680px]:[&>.person-avatar]:hidden [&>div]:min-w-0 [&>div]:flex-1 [&>div]:rounded-xl [&>div]:bg-taupe-100 [&>div]:px-4 [&>div]:py-3',
                  )}
                >
                  <Avatar
                    aria-label="Jamie Davis"
                    className={cn(
                      'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-olive-300 text-xs font-semibold tracking-normal text-neutral-500',
                    )}
                  >
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <p>{message}</p>
                </div>
              ))}
            </div>
            <form
              className={cn(
                'refined-composer mx-5.5 mt-3 mb-4 shrink-0 rounded-[11px] border border-olive-300 bg-white px-3 pt-3 pb-2 shadow-xs focus-within:border-olive-400 max-[680px]:mx-3.5 [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:border-0 [&_textarea]:bg-transparent [&_textarea]:px-0.5 [&_textarea]:text-sm [&_textarea]:leading-normal [&_textarea]:text-olive-600 [&_textarea]:outline-none [&_textarea]:placeholder:text-olive-500 max-[680px]:[&_textarea]:text-base',
              )}
              onSubmit={(event) => {
                event.preventDefault();
                if (prompt.trim()) {
                  setMessages([...messages, prompt.trim()]);
                  setPrompt('');
                }
              }}
            >
              {attached && (
                <div
                  className={cn(
                    'composer-attachment flex items-center gap-1.5 py-1 text-xs text-olive-500 [&_button]:ml-auto',
                  )}
                >
                  <Icon name="file-text" />
                  command-menu.tsx
                  <IconButton
                    icon="xmark"
                    label="Remove attachment"
                    onClick={() => setAttached(false)}
                  />
                </div>
              )}
              <textarea
                ref={input}
                aria-label="Follow-up message"
                placeholder="Ask a follow-up…"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' &&
                    (event.metaKey || event.ctrlKey)
                  ) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
              />
              <div
                className={cn(
                  'composer-bottom flex items-center justify-between gap-1 [&>div]:flex [&>div]:items-center [&>div]:gap-1',
                )}
              >
                <div>
                  <IconButton
                    size="icon-sm"
                    className="text-mist-500"
                    icon="plus"
                    label="Attach context"
                    onClick={() => setAttached(!attached)}
                  />
                  <Select
                    value={mode}
                    onValueChange={(value) => {
                      if (value) setMode(value);
                    }}
                  >
                    <SelectTrigger
                      aria-label="Response mode"
                      className="min-h-8 gap-1.5 border-transparent bg-transparent px-2 text-xs text-olive-600 hover:bg-current/5"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-olive-200 bg-white text-olive-700 [--hover:var(--color-olive-100)]">
                      <SelectItem value="Thoughtful">Thoughtful</SelectItem>
                      <SelectItem value="Quick">Quick</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="unstyled"
                  size="unstyled"
                  type="submit"
                  className={cn(
                    'composer-submit grid size-7.25 place-items-center rounded-[7px] bg-olive-600 text-white',
                  )}
                  aria-label="Send follow-up"
                >
                  <Icon name="send-fill" />
                </Button>
              </div>
            </form>
          </section>
          {review && (
            <aside
              className={cn(
                'changes-pane flex min-w-0 shrink-0 basis-69.5 flex-col border-l border-(--app-line) bg-olive-50 max-[1240px]:basis-62 max-[1050px]:basis-56 max-[850px]:hidden',
              )}
            >
              <div
                className={cn(
                  'changes-heading flex items-center gap-2 px-4 pt-5 pb-4 [&_strong]:text-xs [&_strong]:font-semibold',
                )}
              >
                <strong>Changes</strong>
                <span>2 files</span>
              </div>
              <Tabs.Root
                value={file}
                onValueChange={(value) => setFile(String(value))}
              >
                <Tabs.List
                  className={cn('changed-files block')}
                  aria-label="Changed files"
                >
                  <Tabs.Tab
                    value="component"
                    className={cn(
                      'changed-file flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs text-olive-500 data-active:bg-taupe-100 data-active:text-olive-500 [&>span:last-child]:ml-auto [&>span:last-child]:text-xs [&>span:last-child]:whitespace-nowrap',
                      file === 'component' ? 'active' : '',
                    )}
                  >
                    <Icon name="code" />
                    command-menu.tsx<span>+18 −8</span>
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="styles"
                    className={cn(
                      'changed-file flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs text-olive-500 data-active:bg-taupe-100 data-active:text-olive-500 [&>span:last-child]:ml-auto [&>span:last-child]:text-xs [&>span:last-child]:whitespace-nowrap',
                      file === 'styles' ? 'active' : '',
                    )}
                  >
                    <Icon name="code" />
                    command-menu.css<span>+10 −4</span>
                  </Tabs.Tab>
                </Tabs.List>
                <div
                  className={cn(
                    'code-caption mt-5 flex justify-between gap-3 border-y border-(--app-line) px-3.5 py-3 text-xs text-stone-500',
                  )}
                >
                  <Icon name="code" />
                  <strong>
                    {file === 'styles'
                      ? 'command-menu.css'
                      : 'command-menu.tsx'}
                  </strong>
                </div>
                <pre
                  className={cn(
                    'code-preview m-0 flex-1 overflow-auto py-4 font-mono text-xs leading-6 text-taupe-500 max-[1240px]:text-xs max-[1050px]:text-xs',
                  )}
                >
                  {(file === 'styles' ? css : code)
                    .split('\n')
                    .map((line, i) => (
                      <span
                        key={i}
                        className={cn(
                          'code-line block pr-3 whitespace-pre [&_i]:inline-block [&_i]:w-8 [&_i]:pr-2.5 [&_i]:text-right [&_i]:text-olive-500 [&_i]:not-italic [&_i]:select-none',
                          i > 3 && i < 9 ? 'added bg-olive-100' : '',
                        )}
                      >
                        <i>{i + 1}</i>
                        {line || ' '}
                      </span>
                    ))}
                </pre>
              </Tabs.Root>
              {terminal && (
                <div
                  className={cn(
                    'wb-terminal border-t border-(--app-line) px-4 py-3.5 text-xs leading-relaxed text-olive-500 [&>div]:mb-2 [&>div]:flex [&>div]:gap-2',
                  )}
                >
                  <div>
                    <Icon name="terminal-rectangle" />
                    Terminal
                  </div>
                  <p>
                    $ npm run check
                    <br />
                    <span>✓ Types and accessibility checks passed</span>
                  </p>
                </div>
              )}
              <div
                className={cn(
                  'review-bottom mt-auto flex flex-col gap-3 border-t border-(--app-line) p-4 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span]:text-xs [&>span]:text-stone-500',
                )}
              >
                <span>
                  <Icon name="circle-check-fill" />
                  {accepted ? 'Accepted in this demo' : 'Ready to review'}
                </span>
                <Button
                  variant="unstyled"
                  size="unstyled"
                  className={cn(
                    'app-primary inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-olive-600 px-3 py-2 text-xs whitespace-nowrap text-white shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_2%,transparent)] pointer-coarse:min-h-11',
                  )}
                  disabled={accepted}
                  onClick={() => setAccepted(true)}
                >
                  <Icon name="check" />
                  {accepted ? 'Changes accepted' : 'Accept changes'}
                </Button>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
