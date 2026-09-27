import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Button, IconButton } from '../components/ui';

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
        'study-window demo-surface post-window flex h-190 overflow-hidden rounded-[13px] border border-[#d8dadd] bg-white font-sans text-sm font-normal tracking-normal text-[#28292b] antialiased scheme-light shadow-[0_2px_5px_#10182803,0_16px_48px_-24px_#27334638] [--app-blue:#007aff] [--app-line:#e7e8ea] [--hover:#eceef0] [--muted:#777a80] [--text:#28292b] max-[850px]:h-205 max-[680px]:h-197.5 max-[680px]:flex-col max-[680px]:rounded-[10px] [&_button]:focus-visible:outline-[#777] [&_input]:focus-visible:outline-[#777] [&_textarea]:focus-visible:outline-[#777]',
      )}
      id="post-window"
    >
      <aside
        className={cn(
          'study-sidebar post-sidebar flex shrink-0 basis-50 flex-col border-r border-(--app-line) bg-[#f4f6f8] px-3 pt-5 pb-3 max-[1240px]:basis-45 max-[1050px]:basis-39 max-[850px]:basis-37.5 max-[680px]:hidden',
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
            'mail-brand mx-2.5 mb-6 flex items-center gap-2 text-2xl font-semibold tracking-normal',
          )}
        >
          <Icon name="envelope" />
          post
        </div>
        <Button
          className={cn(
            'app-primary compose-button inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-(--app-blue,#007aff) px-3 py-2 text-sm whitespace-nowrap text-white shadow-[inset_0_0_0_1px_#00000005] pointer-coarse:min-h-11',
          )}
          onClick={() => setCompose('New message')}
        >
          <Icon name="pencil-edit" />
          New message
        </Button>
        <div
          className={cn(
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-[#999b9d]',
          )}
        >
          Mailboxes
        </div>
        {['Inbox', 'Favorites', 'Sent', 'Drafts', 'Archive'].map((name, i) => (
          <Button
            key={name}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-[#62656b] hover:bg-[#e6edf5] pointer-coarse:min-h-11 [&.selected]:bg-[#e1ebf8] [&.selected]:text-[#3474ba] [&.selected_.nav-count]:text-[#6a97c6]',
              folder === name ? 'selected' : '',
            )}
            onClick={() => setFolder(name)}
          >
            <Icon name={['inbox', 'star', 'send', 'file-text', 'archive'][i]} />
            {name}
            {name === 'Inbox' && (
              <span
                className={cn(
                  'nav-count ml-auto text-xs text-[#969a9d] tabular-nums',
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
            'app-nav-label mt-7 mb-2 flex items-center justify-between px-2.5 text-xs font-medium text-[#999b9d]',
          )}
        >
          Collections
        </div>
        {['Studio', 'Personal', 'Reading'].map((name, i) => (
          <Button
            key={name}
            className={cn(
              'app-nav-item my-px flex min-h-9 w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm whitespace-nowrap text-[#62656b] hover:bg-[#e6edf5] pointer-coarse:min-h-11 [&.selected]:bg-[#e1ebf8] [&.selected]:text-[#3474ba] [&.selected_.nav-count]:text-[#6a97c6]',
              folder === name ? 'selected' : '',
            )}
            onClick={() => setFolder(name)}
          >
            <span
              className={cn(
                'collection-dot mx-1 size-1.75 shrink-0 rounded-full bg-[#7eabd0] [&.color-1]:bg-[#c99fbb] [&.color-2]:bg-[#9aaa89]',
                'color-' + i,
              )}
            />
            {name}
          </Button>
        ))}
        <div className={cn('sidebar-bottom mt-auto')}>
          <div
            className={cn(
              'mail-storage flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#969fac]',
            )}
          >
            <Icon name="cloud" />
            Everything synced
          </div>
          <div
            className={cn(
              'mail-profile flex items-center gap-2 border-t border-[#e1e6eb] px-1 pt-4 pb-1 [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-[#9ba6b3] max-[1050px]:[&_small]:hidden [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:text-xs [&>span:nth-child(2)]:text-[#657183] [&>svg]:text-[#9ca8b6]',
            )}
          >
            <Avatar
              aria-label="Jamie Davis"
              className={cn(
                'person-avatar grid size-6.5 shrink-0 place-items-center rounded-full bg-[#d9ded9] text-xs font-semibold tracking-normal text-[#687267]',
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
          'mail-list-pane flex min-w-0 shrink-0 basis-72.5 flex-col border-r border-(--app-line) bg-[#fdfdfe] max-[1240px]:basis-65.5 max-[1050px]:basis-59 max-[850px]:basis-55 max-[680px]:basis-51 max-[680px]:border-r-0 max-[680px]:border-b',
        )}
      >
        <div
          className={cn(
            'mail-list-title flex items-center justify-between px-5 pt-5.5 pb-3 max-[680px]:px-4 max-[680px]:pt-3 max-[680px]:pb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-normal max-[680px]:[&_h2]:text-xl',
          )}
        >
          <h2>{folder}</h2>
          <IconButton
            className={cn(
              'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
            )}
            icon="filter"
            label="Unread messages only"
            aria-pressed={unread}
            onClick={() => setUnread(!unread)}
          />
        </div>
        <label
          className={cn(
            'mail-search mx-5 flex items-center gap-2 rounded-[7px] border border-[#edeff2] bg-[#f2f4f6] px-2.5 py-2 text-[#9aa4b0] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#aaa] max-[680px]:mx-4 [&_input]:w-full [&_input]:min-w-0 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-xs [&_input]:text-[#657182] [&_input]:outline-none [&_input]:placeholder:text-[#9aa4b0] max-[680px]:[&_input]:text-base',
          )}
        >
          <Icon name="search-1" />
          <input
            aria-label="Search mail"
            placeholder="Search mail"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div
          className={cn(
            'mail-list-meta flex items-center justify-between px-5 pt-4.5 pb-3 text-xs text-[#a1a9b2] max-[680px]:px-4 max-[680px]:py-2',
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
              key={message.id}
              className={cn(
                "mail-row relative block w-full rounded-[7px] px-3 py-3.5 text-left after:absolute after:right-3 after:bottom-0 after:left-3 after:h-px after:bg-[#edeff2] after:content-[''] last:after:hidden hover:bg-[#f1f5fa] max-[680px]:shrink-0 max-[680px]:basis-51 max-[680px]:border max-[680px]:border-[#edf0f4] max-[680px]:py-2.5 max-[680px]:after:hidden [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:text-[#4d596a] [&_time]:text-xs [&_time]:text-[#a1abba] [&_time]:tabular-nums [&.selected]:bg-[#eaf2fc] [&.selected]:after:hidden [&.selected_strong]:text-[#386fa7] [&.selected>b]:text-[#648bb4] [&.selected>p]:text-[#7594b6] [&>b]:mb-1 [&>b]:block [&>b]:truncate [&>b]:text-xs [&>b]:font-normal [&>b]:text-[#727f91] max-[680px]:[&>b]:mb-0 max-[680px]:[&>b]:text-xs [&>p]:line-clamp-2 [&>p]:text-xs [&>p]:leading-snug [&>p]:text-[#8290a0] max-[680px]:[&>p]:hidden",
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
                        'unread-dot mr-1 inline-block size-1.25 rounded-full bg-[#6b9ad2] align-[2px]',
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
            'mail-list-footer flex items-center justify-center gap-2 border-t border-[#edf0f3] p-4 text-xs text-[#aab3bd] max-[680px]:hidden',
          )}
        >
          <Icon name="check-sm" />
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
            'mail-actions flex min-h-14 items-center justify-between gap-3 border-b border-(--app-line) px-6 max-[850px]:px-2.5 max-[680px]:min-h-12 max-[680px]:px-3.5 [&_button]:text-[#8793a1] [&_button]:aria-pressed:bg-[#fcf6e9] [&_button]:aria-pressed:text-[#d09e56] [&>div]:flex [&>div]:items-center [&>div]:gap-3 max-[850px]:[&>div]:gap-1.5',
          )}
        >
          <div>
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="archive"
              label="Archive message"
              disabled={!current}
              onClick={() => {
                if (current) setArchived([...archived, current.id]);
              }}
            />
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="trash"
              label="Delete message"
              disabled={!current}
              onClick={() => {
                if (current) setDeleted([...deleted, current.id]);
              }}
            />
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
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
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="star"
              label="Favorite message"
              aria-pressed={!!current && favorites.includes(current.id)}
              disabled={!current}
              onClick={() => {
                if (current)
                  setFavorites(
                    favorites.includes(current.id)
                      ? favorites.filter((id) => id !== current.id)
                      : [...favorites, current.id],
                  );
              }}
            />
          </div>
          <div>
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
              icon="chevron-up-sm"
              label="Previous message"
              disabled={!current}
              onClick={() => move(-1)}
            />
            <IconButton
              className={cn(
                'app-icon-button inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#757980] hover:bg-[#f0f1f3] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              )}
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
                    'mail-label inline-block rounded bg-[#f0f4f8] px-2 py-1 text-xs tracking-normal text-[#92a5b7]',
                  )}
                >
                  {current.collection.toUpperCase()}
                </span>
              </div>
              <div
                className={cn(
                  'sender-detail my-6 flex items-center gap-3 [&_p]:mt-1 [&_p]:text-xs [&_p]:text-[#98a4b1] [&_strong]:text-xs [&_strong]:font-semibold [&_time]:text-xs [&_time]:whitespace-nowrap [&_time]:text-[#98a4b1] [&>div]:min-w-0 [&>div]:flex-1',
                )}
              >
                <Avatar
                  aria-label={current.sender}
                  className={cn(
                    'sender-avatar grid size-8.5 shrink-0 place-items-center rounded-full bg-[#e5edf4] text-xs text-[#8399ad]',
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
                  'mail-message-body text-base leading-relaxed text-[#596573] max-[1050px]:text-sm max-[850px]:text-xs max-[680px]:text-sm [&_li]:mb-1 [&_li]:pl-1 [&_p]:mb-4 [&_ul]:mt-0.5 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5',
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
                  className={cn(
                    'mail-attachment mt-4.5 mb-5.5 flex w-full items-center gap-3 rounded-lg border border-[#e5e9ee] bg-[#fbfcfe] p-3 text-left [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-[#a9b4c0] [&_strong]:text-xs [&_strong]:font-medium [&_strong]:text-[#77879a] max-[850px]:[&_strong]:text-xs [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>svg]:text-[#a2b2c2]',
                  )}
                  onClick={() =>
                    setFeedback(
                      'Review notes: type sizes, interface states, and responsive layouts.',
                    )
                  }
                >
                  <span
                    className={cn(
                      'attachment-icon grid h-9.5 w-8.5 place-items-center rounded bg-[#edf2f7]',
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
                  className={cn(
                    'app-secondary inline-flex min-h-8 items-center justify-center gap-2 rounded-md border border-[#dde0e3] bg-white px-3 py-2 text-xs whitespace-nowrap text-[#8291a3] shadow-xs hover:bg-[#f8fafc] pointer-coarse:min-h-11',
                  )}
                  onClick={() => setCompose('Reply to ' + current.sender)}
                >
                  <Icon name="arrow-undo" />
                  Reply
                </Button>
                <Button
                  className={cn(
                    'app-secondary inline-flex min-h-8 items-center justify-center gap-2 rounded-md border border-[#dde0e3] bg-white px-3 py-2 text-xs whitespace-nowrap text-[#8291a3] shadow-xs hover:bg-[#f8fafc] pointer-coarse:min-h-11',
                  )}
                  onClick={() => setCompose('Forward message')}
                >
                  <Icon name="arrow-redo" />
                  Forward
                </Button>
              </div>
            </>
          ) : (
            <p className={cn('py-10 text-center text-sm text-slate-400')}>
              Select a message
            </p>
          )}
          {compose && (
            <form
              className={cn(
                'mail-inline-compose mt-4.5 rounded-lg border border-[#dee5ef] bg-[#f8faff] p-4 [&_label]:mb-2.5 [&_label]:block [&_label]:text-xs [&_label]:text-[#8697ae] [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:border-0 [&_textarea]:bg-transparent [&_textarea]:text-sm [&_textarea]:leading-normal [&_textarea]:text-[#6e819a] max-[680px]:[&_textarea]:text-base [&>div]:mt-2.5 [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2.5 [&>div>span]:text-xs [&>div>span]:text-[#a3afbd]',
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
                  className={cn(
                    'app-primary inline-flex min-h-8 items-center justify-center gap-2 rounded-md bg-(--app-blue,#007aff) px-3 py-2 text-sm whitespace-nowrap text-white shadow-[inset_0_0_0_1px_#00000005] pointer-coarse:min-h-11',
                  )}
                  type="submit"
                >
                  <Icon name="send" />
                  Send
                </Button>
              </div>
            </form>
          )}
          <p
            className={cn(
              'mail-feedback text-xs leading-normal text-[#6e91b2]',
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
