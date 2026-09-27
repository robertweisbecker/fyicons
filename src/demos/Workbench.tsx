import { cn } from '../lib/utils';
import { useRef, useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '../components/Icon';
import { Button, IconButton } from '../components/ui';
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
        'study-window demo-surface workbench-window flex h-190 overflow-hidden rounded-[13px] border border-[#d8dadd] bg-white font-sans text-[13px] font-normal tracking-[-.1px] text-[#28292b] antialiased scheme-light shadow-[0_2px_5px_#10182803,0_16px_48px_-24px_#27334638] [--app-blue:#007aff] [--app-line:#e9e9e5] [--hover:#eceef0] [--muted:#777a80] [--text:#28292b] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-[#777] [&_input]:focus-visible:outline-[#777] [&_textarea]:focus-visible:outline-[#777]',
      )}
      id="workbench-window"
    >
      <aside
        className={cn(
          'study-sidebar workbench-sidebar flex shrink-0 basis-56.5 flex-col border-r border-(--app-line) bg-[#f5f5f2] px-3 pt-5 pb-3 max-[1240px]:basis-52 max-[1050px]:basis-46 max-[850px]:basis-49 max-[680px]:hidden',
        )}
      >
        <div
          className={cn(
            'window-controls mb-6 flex h-4 items-center gap-2 px-2 [&_i]:size-2.75 [&_i]:rounded-full [&_i]:bg-[#ff5f57] [&_i]:shadow-[inset_0_0_0_1px_#0000000d] [&_i:nth-child(2)]:bg-[#febc2e] [&_i:nth-child(3)]:bg-[#28c840]',
          )}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </div>
        <div
          className={cn(
            'workspace-identity mt-1 mb-6 flex items-center gap-2.5 px-2 [&_small]:mt-1 [&_small]:block [&_small]:text-[11px] [&_small]:font-normal [&_small]:text-[#8a8b87] [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:text-[13px] [&>span:nth-child(2)]:font-semibold [&>svg]:text-[#8a8b87]',
          )}
        >
          <span
            className={cn(
              'workspace-avatar grid size-8 place-items-center rounded-lg bg-[#303734] text-base font-semibold text-white',
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
          className={cn(
            'app-nav-item new-task my-px flex min-h-9 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] whitespace-nowrap text-[#303632] hover:bg-[#eceee7] max-[1050px]:text-[11px] pointer-coarse:min-h-11 [&.selected]:bg-[#e9ebe6] [&.selected]:text-[#333b32]',
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
              'key-hint ml-auto text-[11px] text-[#969a9d] tabular-nums',
            )}
          >
            ⌘ N
          </span>
        </Button>
        <Button
          className={cn(
            'app-nav-item my-px flex min-h-9 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] whitespace-nowrap text-[#62656b] hover:bg-[#eceee7] max-[1050px]:text-[11px] pointer-coarse:min-h-11 [&.selected]:bg-[#e9ebe6] [&.selected]:text-[#333b32]',
          )}
          onClick={() => input.current?.focus()}
        >
          <Icon name="search-1" />
          Find a task
          <span
            className={cn(
              'key-hint ml-auto text-[11px] text-[#969a9d] tabular-nums',
            )}
          >
            ⌘ K
          </span>
        </Button>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-[11px] font-medium text-[#999b9d]',
          )}
        >
          Workspace
        </div>
        {['Projects', 'Automations', 'Saved context'].map((label, i) => (
          <Button
            key={label}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] whitespace-nowrap text-[#62656b] hover:bg-[#eceee7] max-[1050px]:text-[11px] pointer-coarse:min-h-11 [&.selected]:bg-[#e9ebe6] [&.selected]:text-[#333b32]',
            )}
            onClick={() => setTitle(label)}
          >
            <Icon name={['folder', 'clock', 'book-open'][i]} />
            {label}
          </Button>
        ))}
        <div
          className={cn(
            'app-nav-label recent-label mt-8 mb-2 flex items-center justify-between px-2.5 text-[11px] font-medium text-[#999b9d]',
          )}
        >
          Recent tasks
          <Icon name="ellipsis-h" />
        </div>
        {sessions.map((session) => (
          <Button
            key={session}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] whitespace-nowrap text-[#62656b] hover:bg-[#eceee7] max-[1050px]:text-[11px] pointer-coarse:min-h-11 [&.selected]:bg-[#e9ebe6] [&.selected]:text-[#333b32]',
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
              'local-indicator mx-2.5 my-5 flex items-center gap-2 text-[11px] text-[#8b8f8a]',
            )}
          >
            <span
              className={cn(
                'status-point size-1.25 shrink-0 rounded-full bg-[#799380]',
              )}
            />
            Everything up to date
          </div>
          <Button
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] whitespace-nowrap text-[#62656b] hover:bg-[#eceee7] max-[1050px]:text-[11px] pointer-coarse:min-h-11 [&.selected]:bg-[#e9ebe6] [&.selected]:text-[#333b32]',
            )}
            onClick={() => notify('Jamie Davis · Personal workspace')}
          >
            <span
              className={cn(
                'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-[#d9ded9] text-[9px] font-semibold tracking-normal text-[#687267]',
              )}
            >
              JD
            </span>
            Jamie Davis
            <Icon name="settings" />
          </Button>
        </div>
      </aside>
      <div
        className={cn(
          'workbench-main flex min-w-0 flex-1 flex-col bg-[#fefefd]',
        )}
      >
        <header
          className={cn(
            'app-titlebar flex shrink-0 basis-13 items-center justify-between gap-3 border-b border-(--app-line) px-4.5 max-[680px]:px-3',
          )}
        >
          <div
            className={cn(
              'app-breadcrumb flex min-w-0 items-center gap-2 text-xs whitespace-nowrap text-[#999c9d] max-[680px]:gap-1.5 max-[680px]:text-[0px] [&_strong]:truncate [&_strong]:font-medium [&_strong]:text-[#555b58] max-[680px]:[&_strong]:max-w-44 max-[680px]:[&_strong]:text-[11px] max-[680px]:[&>svg]:hidden',
            )}
          >
            <Icon name="folder" />
            Interface kit
            <span
              className={cn(
                'breadcrumb-slash px-1 text-[#c5c8c6] max-[680px]:hidden',
              )}
            >
              /
            </span>
            <strong>{title}</strong>
          </div>
          <div className={cn('titlebar-actions flex gap-2 max-[680px]:gap-1')}>
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="terminal-square"
              label="Toggle terminal"
              aria-pressed={terminal}
              onClick={() => setTerminal(!terminal)}
            />
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="panel-right"
              label="Toggle changes panel"
              aria-pressed={review}
              onClick={() => setReview(!review)}
            />
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
                  'conversation-meta mb-5 flex items-center justify-center gap-2 text-[10px] text-[#a7a9a6]',
                )}
              >
                TODAY, 10:42 AM
              </div>
              <div
                className={cn(
                  'user-message mb-6 flex items-start gap-3 [&_p]:mt-1 [&_p]:text-[13px] [&_p]:leading-relaxed [&_p]:text-[#5c6359] [&_strong]:text-[11px] [&_strong]:text-[#8c9585] max-[680px]:[&>.person-avatar]:hidden [&>div]:min-w-0 [&>div]:flex-1 [&>div]:rounded-xl [&>div]:bg-[#f1f2ee] [&>div]:px-4 [&>div]:py-3',
                )}
              >
                <span
                  className={cn(
                    'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-[#d9ded9] text-[9px] font-semibold tracking-normal text-[#687267]',
                  )}
                >
                  JD
                </span>
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
                    'assistant-mark grid size-6.25 place-items-center rounded-[7px] bg-[#e9ede5] text-[#5c7454] max-[680px]:mb-3',
                  )}
                >
                  <Icon name="asterisk-star" />
                </div>
                <div
                  className={cn(
                    'assistant-content [&_h2]:mb-4 [&_h2]:text-[26px] [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-[-.8px] max-[1050px]:[&_h2]:text-2xl max-[680px]:[&_h2]:text-[25px] [&>p]:mb-4 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-[#626b5d]',
                  )}
                >
                  <div
                    className={cn(
                      'assistant-meta mt-1 mb-4.5 flex flex-wrap items-center gap-2.5 text-xs [&>span]:text-[10px] [&>span]:text-[#a1a69e]',
                    )}
                  >
                    <strong>Assistant</strong>
                    <span>Completed in 24 seconds</span>
                  </div>
                  <h2>Command menu updated</h2>
                  <p>
                    The menu has a clearer hierarchy, consistent spacing, and a
                    dedicated column for keyboard shortcuts.
                  </p>
                  <div
                    className={cn(
                      'work-done [&>div]:flex [&>div]:min-h-7.5 [&>div]:items-center [&>div]:gap-2 [&>div]:text-xs [&>div]:text-[#6d7964]',
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
                    className={cn(
                      'change-summary mt-5 mb-2.5 flex w-full items-center gap-4 rounded-lg border border-[#e1e5dc] bg-[#fbfcf9] p-3 text-left [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:text-[#a0a992] [&_strong]:block [&_strong]:text-xs [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>svg]:text-[#a5ab9e]',
                    )}
                    onClick={() => setReview(true)}
                  >
                    <span className={cn('change-summary-icon')}>
                      <Icon name="code" />
                    </span>
                    <span>
                      <strong>2 files changed</strong>
                      <small>command-menu.tsx · command-menu.css</small>
                    </span>
                    <span
                      className={cn(
                        'diff-count inline-flex gap-2 text-[11px] tabular-nums [&_b]:font-medium [&_b]:text-[#54866a] [&_i]:text-[#b47e72] [&_i]:not-italic',
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
                      'message-actions flex items-center gap-2 text-[10px] text-[#9ba093] [&>span]:ml-auto',
                    )}
                  >
                    <IconButton
                      className={cn(
                        'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
                      )}
                      icon="copy"
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
                    <Icon name="check-sm" />
                  </div>
                </div>
              </div>
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={cn(
                    'user-message mb-6 flex items-start gap-3 [&_p]:mt-1 [&_p]:text-[13px] [&_p]:leading-relaxed [&_p]:text-[#5c6359] [&_strong]:text-[11px] [&_strong]:text-[#8c9585] max-[680px]:[&>.person-avatar]:hidden [&>div]:min-w-0 [&>div]:flex-1 [&>div]:rounded-xl [&>div]:bg-[#f1f2ee] [&>div]:px-4 [&>div]:py-3',
                  )}
                >
                  <span
                    className={cn(
                      'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-[#d9ded9] text-[9px] font-semibold tracking-normal text-[#687267]',
                    )}
                  >
                    JD
                  </span>
                  <p>{message}</p>
                </div>
              ))}
            </div>
            <form
              className={cn(
                'refined-composer mx-5.5 mt-3 shrink-0 rounded-[11px] border border-[#dcdfd6] bg-white px-3 pt-3 pb-2 shadow-xs focus-within:border-[#a0aa98] max-[680px]:mx-3.5 [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:border-0 [&_textarea]:bg-transparent [&_textarea]:px-0.5 [&_textarea]:text-[13px] [&_textarea]:leading-normal [&_textarea]:text-[#5e6657] [&_textarea]:outline-none [&_textarea]:placeholder:text-[#a1a79a] max-[680px]:[&_textarea]:text-base',
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
                    'composer-attachment flex items-center gap-1.5 py-1 text-[11px] text-[#89917f] [&_button]:ml-auto',
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
                    className={cn(
                      'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
                    )}
                    icon="plus"
                    label="Attach context"
                    onClick={() => setAttached(!attached)}
                  />
                  <Button
                    className={cn(
                      'composer-mode flex items-center gap-1.5 px-1 py-1.5 text-[11px] text-[#737a6b]',
                    )}
                    onClick={() =>
                      setMode(mode === 'Thoughtful' ? 'Quick' : 'Thoughtful')
                    }
                  >
                    {mode}
                    <Icon name="chevron-down-sm" />
                  </Button>
                </div>
                <Button
                  type="submit"
                  className={cn(
                    'composer-submit grid size-7.25 place-items-center rounded-[7px] bg-[#596751] text-white',
                  )}
                  aria-label="Send follow-up"
                >
                  <Icon name="arrow-up" />
                </Button>
              </div>
            </form>
            <div
              className={cn(
                'composer-caption mx-6.5 mt-2.5 mb-4 flex items-center gap-1.5 text-[10px] text-[#a9afa2] max-[680px]:ml-4.5 max-[680px]:text-[9px]',
              )}
            >
              <Icon name="lock" />
              Local demo · messages stay in this browser
            </div>
          </section>
          {review && (
            <aside
              className={cn(
                'changes-pane flex min-w-0 shrink-0 basis-69.5 flex-col border-l border-(--app-line) bg-[#fbfbfa] max-[1240px]:basis-62 max-[1050px]:basis-56 max-[850px]:hidden',
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
                      'changed-file flex w-full items-center gap-2 px-4 py-2.5 text-left text-[11px] text-[#83897e] data-active:bg-[#eef1e9] data-active:text-[#68765d] [&>span:last-child]:ml-auto [&>span:last-child]:text-[9px] [&>span:last-child]:whitespace-nowrap',
                      file === 'component' ? 'active' : '',
                    )}
                  >
                    <Icon name="code" />
                    command-menu.tsx<span>+18 −8</span>
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="styles"
                    className={cn(
                      'changed-file flex w-full items-center gap-2 px-4 py-2.5 text-left text-[11px] text-[#83897e] data-active:bg-[#eef1e9] data-active:text-[#68765d] [&>span:last-child]:ml-auto [&>span:last-child]:text-[9px] [&>span:last-child]:whitespace-nowrap',
                      file === 'styles' ? 'active' : '',
                    )}
                  >
                    <Icon name="code" />
                    command-menu.css<span>+10 −4</span>
                  </Tabs.Tab>
                </Tabs.List>
                <div
                  className={cn(
                    'code-caption mt-5 flex justify-between gap-3 border-y border-(--app-line) px-3.5 py-3 text-[10px] text-[#9da296]',
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
                    'code-preview m-0 flex-1 overflow-auto py-4 font-mono text-[11px] leading-6 text-[#62695f] max-[1240px]:text-[9px] max-[1050px]:text-[8px]',
                  )}
                >
                  {(file === 'styles' ? css : code)
                    .split('\n')
                    .map((line, i) => (
                      <span
                        key={i}
                        className={cn(
                          'code-line block pr-3 whitespace-pre [&_i]:inline-block [&_i]:w-8 [&_i]:pr-2.5 [&_i]:text-right [&_i]:text-[#b1b6ac] [&_i]:not-italic [&_i]:select-none',
                          i > 3 && i < 9 ? 'added bg-[#edf4e8]' : '',
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
                    'wb-terminal border-t border-(--app-line) px-4 py-3.5 text-[10px] leading-relaxed text-[#71845e] [&>div]:mb-2 [&>div]:flex [&>div]:gap-2',
                  )}
                >
                  <div>
                    <Icon name="terminal-square" />
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
                  'review-bottom mt-auto flex flex-col gap-3 border-t border-(--app-line) p-4 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span]:text-[11px] [&>span]:text-[#8e9b80]',
                )}
              >
                <span>
                  <Icon name="circle-check-fill" />
                  {accepted ? 'Accepted in this demo' : 'Ready to review'}
                </span>
                <Button
                  className={cn(
                    'app-primary inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-[#596751] px-3 py-2 text-xs whitespace-nowrap text-white shadow-[inset_0_0_0_1px_#00000005] pointer-coarse:min-h-11',
                  )}
                  disabled={accepted}
                  onClick={() => setAccepted(true)}
                >
                  <Icon name="check-sm" />
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
