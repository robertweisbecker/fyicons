import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';

const initialMessages = [
  {
    id: 1,
    sender: 'Alex Lin',
    subject: 'Design review notes',
    preview: 'Notes on navigation, spacing, and interface states.',
    collection: 'Studio',
    time: '10:24 AM',
    unread: true,
  },
  {
    id: 2,
    sender: 'Morgan Chen',
    subject: 'The next chapter',
    preview: 'A few references for the direction we discussed.',
    collection: 'Studio',
    time: '9:48 AM',
    unread: true,
  },
  {
    id: 3,
    sender: 'Offscreen',
    subject: 'This week in design',
    preview: 'Small studios, new tools, and process notes.',
    collection: 'Reading',
    time: '9:02 AM',
    unread: true,
  },
  {
    id: 4,
    sender: 'Sofia Park',
    subject: 'Friday, if you’re free',
    preview: 'Coffee and a walk? There’s a new place on the corner.',
    collection: 'Personal',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 5,
    sender: 'Figma',
    subject: 'Your weekly design digest',
    preview: 'The latest tools and resources from the community.',
    collection: 'Reading',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 6,
    sender: 'Noah Williams',
    subject: 'One more small detail',
    preview: 'The new navigation is almost there. A thought…',
    collection: 'Studio',
    time: 'Thu',
    unread: false,
  },
  {
    id: 7,
    sender: 'Field Notes',
    subject: 'Things we noticed',
    preview: 'This week’s product and design notes.',
    collection: 'Reading',
    time: 'Thu',
    unread: false,
  },
  {
    id: 8,
    sender: 'Jamie Davis',
    subject: 'A note for later',
    preview: 'Review the backlog before planning.',
    collection: 'Personal',
    time: 'Wed',
    unread: false,
  },
];
const initials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('');
export function Post() {
  const [messages, setMessages] = useState(initialMessages);
  const [folder, setFolder] = useState('Inbox');
  const [query, setQuery] = useState('');
  const [unread, setUnread] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [archived, setArchived] = useState<number[]>([]);
  const [deleted, setDeleted] = useState<number[]>([]);
  const [selected, setSelected] = useState(1);
  const [compose, setCompose] = useState('');
  const [reply, setReply] = useState('');
  const [feedback, setFeedback] = useState('');
  const visible = messages.filter(
    (message) =>
      !deleted.includes(message.id) &&
      (folder === 'Inbox'
        ? !archived.includes(message.id)
        : folder === 'Archive'
          ? archived.includes(message.id)
          : folder === 'Favorites'
            ? favorites.includes(message.id)
            : folder === 'Sent'
              ? message.sender === 'Jamie Davis'
              : folder === 'Drafts'
                ? false
                : message.collection === folder) &&
      (!unread || message.unread) &&
      (message.sender + ' ' + message.subject + ' ' + message.preview)
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const current =
    visible.find((message) => message.id === selected) ?? visible[0];
  const move = (step: number) => {
    if (current)
      setSelected(
        visible[
          (visible.indexOf(current) + step + visible.length) % visible.length
        ].id,
      );
  };
  return (
    <div
      className={cn(
        'study-window demo-surface post-window flex h-190 overflow-hidden rounded-[13px] border border-mist-300 bg-white font-sans text-sm font-normal tracking-normal text-zinc-800 antialiased scheme-light shadow-xl shadow-slate-900/10 [--app-blue:var(--color-blue-500)] [--app-line:var(--color-gray-200)] [--hover:var(--color-mauve-100)] [--muted:var(--color-neutral-500)] [--text:var(--color-zinc-800)] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:flex-col max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-neutral-500 [&_input]:focus-visible:outline-neutral-500 [&_textarea]:focus-visible:outline-neutral-500',
      )}
      id="post-window"
    >
      <aside
        className={cn(
          'study-sidebar post-sidebar flex shrink-0 basis-50 flex-col border-r border-(--app-line) bg-neutral-100 px-3 pt-5 pb-3 max-[1240px]:basis-45 max-[1050px]:basis-39 max-[850px]:basis-37.5 max-[680px]:hidden',
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
            'mail-brand mx-2.5 mb-6 flex items-center gap-2 text-2xl font-semibold tracking-normal',
          )}
        >
          <Icon name="envelope" />
          post
        </div>
        <Button
          variant="unstyled"
          size="unstyled"
          className={cn(
            'app-primary compose-button inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-(--app-blue,var(--color-blue-500)) px-3 py-2 text-sm whitespace-nowrap text-white shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_2%,transparent)] pointer-coarse:min-h-11',
          )}
          onClick={() => setCompose('New message')}
        >
          <Icon name="pencil-edit" />
          New message
        </Button>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-neutral-500',
          )}
        >
          Mailboxes
        </div>
        {['Inbox', 'Favorites', 'Sent', 'Drafts', 'Archive'].map((name, i) => (
          <Button
            variant="unstyled"
            size="unstyled"
            key={name}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-slate-200 pointer-coarse:min-h-11 [&.selected]:bg-slate-200 [&.selected]:text-sky-600 [&.selected_.nav-count]:text-slate-500',
              folder === name ? 'selected' : '',
            )}
            onClick={() => setFolder(name)}
          >
            <Icon
              name={
                ['inbox', 'star', 'send-straight', 'file-text', 'archive'][i]
              }
            />
            {name}
            {name === 'Inbox' && (
              <span
                className={cn(
                  'nav-count ml-auto text-xs text-zinc-500 tabular-nums',
                )}
              >
                {messages.length -
                  deleted.length -
                  archived.filter((id) => !deleted.includes(id)).length}
              </span>
            )}
          </Button>
        ))}
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-neutral-500',
          )}
        >
          Collections
        </div>
        {['Studio', 'Personal', 'Reading'].map((name, i) => (
          <Button
            variant="unstyled"
            size="unstyled"
            key={name}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-zinc-500 hover:bg-slate-200 pointer-coarse:min-h-11 [&.selected]:bg-slate-200 [&.selected]:text-sky-600 [&.selected_.nav-count]:text-slate-500',
              folder === name ? 'selected' : '',
            )}
            onClick={() => setFolder(name)}
          >
            <span
              className={cn(
                'collection-dot mx-1 size-1.75 shrink-0 rounded-full bg-slate-400 [&.color-1]:bg-mauve-400 [&.color-2]:bg-olive-400',
                'color-' + i,
              )}
            />
            {name}
          </Button>
        ))}
        <div className={cn('sidebar-bottom mt-auto')}>
          <div
            className={cn(
              'mail-storage flex items-center gap-2 px-2.5 py-3.5 text-xs text-gray-500',
            )}
          >
            <Icon name="cloud-check" />
            Everything synced
          </div>
          <div
            className={cn(
              'mail-profile flex items-center gap-2 border-t border-mist-200 px-1 pt-4 pb-1 [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-gray-500 max-[1050px]:[&_small]:hidden [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:text-xs [&>span:nth-child(2)]:text-gray-500 [&>svg]:text-mist-500',
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
            <span>
              Jamie Davis<small>Personal account</small>
            </span>
            <Icon name="settings" />
          </div>
        </div>
      </aside>
      <section
        className={cn(
          'mail-list-pane flex min-w-0 shrink-0 basis-72.5 flex-col border-r border-(--app-line) bg-white max-[1240px]:basis-65.5 max-[1050px]:basis-59 max-[850px]:basis-55 max-[680px]:basis-51 max-[680px]:border-r-0 max-[680px]:border-b',
        )}
      >
        <div
          className={cn(
            'mail-list-title flex items-center justify-between px-5 pt-5.5 pb-3 max-[680px]:px-4 max-[680px]:pt-3 max-[680px]:pb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-normal max-[680px]:[&_h2]:text-xl',
          )}
        >
          <h2>{folder}</h2>
          <Toggle
            size="icon-sm"
            aria-label="Unread messages only"
            pressed={unread}
            onPressedChange={setUnread}
          >
            <ToggleIcon icon="envelope-open" activeIcon="envelope" />
          </Toggle>
        </div>
        <label
          className={cn(
            'mail-search mx-5 flex items-center gap-2 rounded-[7px] border border-mauve-100 bg-gray-100 px-2.5 py-2 text-gray-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-mist-400 max-[680px]:mx-4 [&_input]:w-full [&_input]:min-w-0 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-xs [&_input]:text-gray-500 [&_input]:outline-none [&_input]:placeholder:text-gray-500 max-[680px]:[&_input]:text-base',
          )}
        >
          <Icon name="search" />
          <input
            aria-label="Search mail"
            placeholder="Search mail"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div
          className={cn(
            'mail-list-meta flex items-center justify-between px-5 pt-4.5 pb-3 text-xs text-mist-500 max-[680px]:px-4 max-[680px]:py-2',
          )}
        >
          <span>{visible.length} messages</span>
          <span>Newest first</span>
        </div>
        <div
          className={cn(
            'mail-messages flex-1 overflow-auto px-2 max-[680px]:flex max-[680px]:gap-1.5 max-[680px]:overflow-x-auto max-[680px]:overflow-y-hidden max-[680px]:pb-2',
          )}
        >
          {visible.map((message) => (
            <Button
              variant="unstyled"
              size="unstyled"
              key={message.id}
              className={cn(
                "mail-row relative block w-full rounded-[7px] px-3 py-3.5 text-left after:absolute after:right-3 after:bottom-0 after:left-3 after:h-px after:bg-mauve-100 after:content-[''] last:after:hidden hover:bg-slate-100 max-[680px]:shrink-0 max-[680px]:basis-51 max-[680px]:border max-[680px]:border-mauve-100 max-[680px]:py-2.5 max-[680px]:after:hidden [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:text-gray-600 [&_time]:text-xs [&_time]:text-mist-500 [&_time]:tabular-nums [&.selected]:bg-indigo-50 [&.selected]:after:hidden [&.selected_strong]:text-sky-700 [&.selected>b]:text-cyan-600 [&.selected>p]:text-slate-500 [&>b]:mb-1 [&>b]:block [&>b]:truncate [&>b]:text-xs [&>b]:font-normal [&>b]:text-mist-500 max-[680px]:[&>b]:mb-0 max-[680px]:[&>b]:text-xs [&>p]:line-clamp-2 [&>p]:text-xs [&>p]:leading-snug [&>p]:text-slate-500 max-[680px]:[&>p]:hidden",
                current?.id === message.id ? 'selected' : '',
              )}
              aria-label={message.sender + ': ' + message.subject}
              aria-pressed={current?.id === message.id}
              onClick={() => {
                setSelected(message.id);
                setMessages(
                  messages.map((item) =>
                    item.id === message.id ? { ...item, unread: false } : item,
                  ),
                );
                setCompose('');
                setFeedback('');
              }}
            >
              <span
                className={cn(
                  'mail-row-head mb-1.5 flex items-center justify-between gap-1.5',
                )}
              >
                <strong>
                  {message.unread && (
                    <span
                      className={cn(
                        'unread-dot mr-1 inline-block size-1.25 rounded-full bg-slate-400 align-[2px]',
                      )}
                    />
                  )}
                  {message.sender}
                </strong>
                <time>{message.time}</time>
              </span>
              <b>{message.subject}</b>
              <p>{message.preview}</p>
            </Button>
          ))}
          {!visible.length && (
            <p className={cn('p-5 text-xs text-slate-500')}>
              No messages in this folder.
            </p>
          )}
        </div>
        <div
          className={cn(
            'mail-list-footer flex items-center justify-center gap-2 border-t border-mauve-100 p-4 text-xs text-mist-500 max-[680px]:hidden',
          )}
        >
          <Icon name="check-thick-sm" />
          Updated just now
        </div>
      </section>
      <section
        className={cn(
          'mail-reading flex min-w-0 flex-1 flex-col max-[680px]:min-h-0',
        )}
      >
        <div
          className={cn(
            'mail-actions flex min-h-14 items-center justify-between gap-3 border-b border-(--app-line) px-6 max-[850px]:px-2.5 max-[680px]:min-h-12 max-[680px]:px-3.5 [&_button]:text-slate-500 [&>div]:flex [&>div]:items-center [&>div]:gap-3 max-[850px]:[&>div]:gap-1.5',
          )}
        >
          <div>
            <IconButton
              size="icon-sm"
              className="text-mist-500"
              icon="archive"
              label="Archive message"
              disabled={!current}
              onClick={() => {
                if (current) setArchived([...archived, current.id]);
              }}
            />
            <IconButton
              size="icon-sm"
              className="text-mist-500"
              icon="trash"
              label="Delete message"
              disabled={!current}
              onClick={() => {
                if (current) setDeleted([...deleted, current.id]);
              }}
            />
            <IconButton
              size="icon-sm"
              className="text-mist-500"
              icon="envelope"
              label="Mark unread"
              disabled={!current}
              onClick={() =>
                setMessages(
                  messages.map((message) =>
                    message.id === current?.id
                      ? { ...message, unread: true }
                      : message,
                  ),
                )
              }
            />
            <Toggle
              size="icon-sm"
              aria-label="Favorite message"
              pressed={!!current && favorites.includes(current.id)}
              disabled={!current}
              onPressedChange={(pressed) => {
                if (current)
                  setFavorites(
                    pressed
                      ? [...favorites, current.id]
                      : favorites.filter((id) => id !== current.id),
                  );
              }}
            >
              <ToggleIcon icon="heart-alt" activeIcon="heart-alt-fill" />
            </Toggle>
          </div>
          <div>
            <IconButton
              size="icon-sm"
              className="text-mist-500"
              icon="chevron-up-sm"
              label="Previous message"
              disabled={!current}
              onClick={() => move(-1)}
            />
            <IconButton
              size="icon-sm"
              className="text-mist-500"
              icon="chevron-down-sm"
              label="Next message"
              disabled={!current}
              onClick={() => move(1)}
            />
          </div>
        </div>
        <div
          className={cn(
            'mail-reading-scroll overflow-auto px-9.5 pt-7 pb-5 max-[1240px]:px-7 max-[1050px]:px-6 max-[850px]:px-5 max-[680px]:px-6 max-[680px]:py-5.5',
          )}
        >
          {current ? (
            <>
              <div
                className={cn(
                  'mail-subject-row [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-normal max-[1050px]:[&_h2]:text-2xl max-[850px]:[&_h2]:text-xl max-[680px]:[&_h2]:text-2xl',
                )}
              >
                <h2>{current.subject}</h2>
                <span
                  className={cn(
                    'mail-label inline-block rounded bg-slate-100 px-2 py-1 text-xs tracking-normal text-slate-500',
                  )}
                >
                  {current.collection}
                </span>
              </div>
              <div
                className={cn(
                  'sender-detail my-6 flex items-center gap-3 [&_p]:mt-1 [&_p]:text-xs [&_p]:text-gray-500 [&_strong]:text-xs [&_strong]:font-semibold [&_time]:text-xs [&_time]:whitespace-nowrap [&_time]:text-gray-500 [&>div]:min-w-0 [&>div]:flex-1',
                )}
              >
                <Avatar
                  aria-label={current.sender}
                  className={cn(
                    'sender-avatar grid size-8.5 shrink-0 place-items-center rounded-full bg-slate-200 text-xs text-slate-500',
                  )}
                >
                  <AvatarFallback>{initials(current.sender)}</AvatarFallback>
                </Avatar>
                <div>
                  <strong>{current.sender}</strong>
                  <p>
                    {current.sender.split(' ')[0].toLowerCase()}@example.com{' '}
                    <span>to me</span>
                  </p>
                </div>
                <time>{current.time}</time>
              </div>
              <div
                className={cn(
                  'mail-message-body text-base leading-relaxed text-gray-500 max-[1050px]:text-sm max-[850px]:text-xs max-[680px]:text-sm [&_li]:mb-1 [&_li]:pl-1 [&_p]:mb-4 [&_ul]:mt-0.5 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5',
                )}
              >
                <p>Hey Jamie,</p>
                <p>
                  {current.id === 1
                    ? 'Thanks for sharing the latest interface work. The navigation feels clearer and the spacing is much more consistent.'
                    : current.preview}
                </p>
                <p>A few notes for the next pass:</p>
                <ul>
                  <li>Keep the primary action easy to find.</li>
                  <li>Use the quieter treatment for supporting controls.</li>
                  <li>Check the keyboard focus and empty states.</li>
                </ul>
                <p>Let’s review it together on Friday.</p>
                <p>{current.sender.split(' ')[0]}</p>
              </div>
              {current.id === 1 && (
                <Button
                  variant="unstyled"
                  size="unstyled"
                  className={cn(
                    'mail-attachment mt-4.5 mb-5.5 flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-mist-50 p-3 text-left [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-mist-500 [&_strong]:text-xs [&_strong]:font-medium [&_strong]:text-mist-500 max-[850px]:[&_strong]:text-xs [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>svg]:text-mist-500',
                  )}
                  onClick={() =>
                    setFeedback(
                      'Review notes: type sizes, interface states, and responsive layouts.',
                    )
                  }
                >
                  <span
                    className={cn(
                      'attachment-icon grid h-9.5 w-8.5 place-items-center rounded bg-mauve-100',
                    )}
                  >
                    <Icon name="file-text" />
                  </span>
                  <span>
                    <strong>Interface review.pdf</strong>
                    <small>Document · 248 KB · sample</small>
                  </span>
                  <Icon name="download-square" />
                </Button>
              )}
              <div className={cn('mail-reply-actions flex gap-2')}>
                <Button
                  variant="unstyled"
                  size="unstyled"
                  className={cn(
                    'app-secondary inline-flex min-h-8 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs whitespace-nowrap text-slate-500 shadow-xs hover:bg-slate-50 pointer-coarse:min-h-11',
                  )}
                  onClick={() => setCompose('Reply to ' + current.sender)}
                >
                  <Icon name="arrow-undo" />
                  Reply
                </Button>
                <Button
                  variant="unstyled"
                  size="unstyled"
                  className={cn(
                    'app-secondary inline-flex min-h-8 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs whitespace-nowrap text-slate-500 shadow-xs hover:bg-slate-50 pointer-coarse:min-h-11',
                  )}
                  onClick={() => setCompose('Forward message')}
                >
                  <Icon name="arrow-redo" />
                  Forward
                </Button>
              </div>
            </>
          ) : (
            <p className={cn('py-10 text-center text-sm text-slate-500')}>
              Select a message
            </p>
          )}
          {compose && (
            <form
              className={cn(
                'mail-inline-compose mt-4.5 rounded-lg border border-slate-200 bg-slate-50 p-4 [&_label]:mb-2.5 [&_label]:block [&_label]:text-xs [&_label]:text-slate-500 [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:border-0 [&_textarea]:bg-transparent [&_textarea]:text-sm [&_textarea]:leading-normal [&_textarea]:text-slate-500 max-[680px]:[&_textarea]:text-base [&>div]:mt-2.5 [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2.5 [&>div>span]:text-xs [&>div>span]:text-mist-500',
              )}
              onSubmit={(event) => {
                event.preventDefault();
                setCompose('');
                setReply('');
                setFeedback('Message added to this demo. No email was sent.');
              }}
            >
              <label htmlFor="reply-text">{compose}</label>
              <textarea
                id="reply-text"
                aria-label="Message text"
                rows={4}
                value={reply}
                onChange={(event) => setReply(event.target.value)}
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
              <div className={cn('justify-end!')}>
                <Button
                  variant="unstyled"
                  size="unstyled"
                  className={cn(
                    'app-primary inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-(--app-blue,var(--color-blue-500)) px-3 py-2 text-sm whitespace-nowrap text-white shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-black)_2%,transparent)] pointer-coarse:min-h-11',
                  )}
                  type="submit"
                >
                  <Icon name="send-straight" />
                  Send
                </Button>
              </div>
            </form>
          )}
          <p
            className={cn(
              'mail-feedback text-xs leading-normal text-slate-500',
            )}
            role="status"
          >
            {feedback}
          </p>
        </div>
      </section>
    </div>
  );
}
