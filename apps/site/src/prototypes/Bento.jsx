'use client';

import { useState } from 'react';
import {
  IconShuffle, IconSkipBackwardFill, IconSkipForwardFill, IconPlayFill, IconPauseFill,
  IconRepeat, IconHeart, IconHeartFill, IconVolumeHigh, IconVolumeSlash, IconMusicNote,
  IconWifi, IconBluetooth, IconAirplane, IconMoon, IconBellSlash,
  IconTextBold, IconItalic, IconTextUnderline, IconTextStrikethrough,
  IconTextAlignStart, IconTextAlignCenter, IconTextAlignEnd, IconListBullet, IconLink,
  IconPaperclipTilt, IconEmojiSmile, IconSend, IconMicrophone,
  IconSun, IconCloud, IconCloudBolt, IconCloudSimple, IconMapPin,
  IconFolder, IconFolderOpen, IconFileCode, IconFileImage, IconFileText, IconFileZip,
  IconChevronRight, IconChevronDown, IconBell, IconGitPullRequest, IconChatRound,
  IconCreditCard, IconCheck, IconCalendar, IconShoppingCart, IconMinus, IconPlus, IconTrash,
  IconStar, IconStarFill, IconZoomIn, IconZoomOut, IconContrastHigh,
  IconHome, IconSearch, IconSettings, IconInbox, IconCamera, IconCompass,
  IconTimer, IconArrowCounterClockwise,
  IconProgressTaskTodo, IconProgressTask25, IconProgressTask50, IconProgressTask75, IconProgressTaskDone,
  IconAirplaneDiagonal, IconTicket, IconBattery, IconSignalFour, IconCopy,
} from 'fyicons';

const cx = (...c) => c.filter(Boolean).join(' ');

const tile = 'flex min-w-0 flex-col gap-3.5 overflow-hidden rounded-[28px] p-5';
const label = 'text-xs font-semibold opacity-70';
const card = 'rounded-[18px] bg-white text-[#1D1C23]';
const iconBtn = 'inline-flex size-11 items-center justify-center rounded-full transition-colors';
const row = 'flex min-h-11 w-full items-center gap-3 rounded-[14px] px-2.5 py-2 text-left hover:bg-black/5';
const chip = 'h-8 rounded-full px-3 text-xs font-semibold';
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1C23]';

/* Music player */
function Player() {
  const tracks = [
    { title: 'Soft Signal', len: '3:42', pct: 38, art: 'bg-[#FF7AB8]' },
    { title: 'Window Seat', len: '3:16', pct: 43, art: 'bg-[#FFC727]' },
    { title: 'After Hours', len: '4:08', pct: 34, art: 'bg-[#7DE3EF]' },
  ];
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [muted, setMuted] = useState(false);
  const t = tracks[((i % 3) + 3) % 3];
  const w = cx(iconBtn, 'hover:bg-white/15', focus, 'focus-visible:outline-white');
  return (
    <div className={cx(tile, 'bg-[#3B1D8F] text-white sm:col-span-2')}>
      <span className={label}>Music player</span>
      <div className="flex flex-1 flex-wrap items-center gap-5">
        <div className={cx('flex size-32 shrink-0 items-center justify-center rounded-[20px] text-[#1D1C23]', t.art)}>
          <IconMusicNote size={48} />
        </div>
        <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-2.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[22px] font-semibold tracking-tight">{t.title}</p>
              <p className="mt-0.5 text-sm text-[#CFC4FF]">The Quiet Hours</p>
            </div>
            <button type="button" aria-label="Like" aria-pressed={liked} onClick={() => setLiked(!liked)}
              className={cx(w, liked ? 'text-[#FF7AB8]' : 'text-white')}>
              {liked ? <IconHeartFill size={20} /> : <IconHeart size={20} />}
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-1 rounded-full bg-white/20">
              <div className="h-1 rounded-full bg-white" style={{ width: `${t.pct}%` }} />
            </div>
            <div className="flex justify-between font-mono text-[11px] text-[#CFC4FF]">
              <span>1:24</span><span>{t.len}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="button" aria-label="Shuffle" aria-pressed={shuffle} onClick={() => setShuffle(!shuffle)} className={cx(w, shuffle && 'bg-white/20')}><IconShuffle size={20} /></button>
            <button type="button" aria-label="Previous" onClick={() => setI(i - 1)} className={w}><IconSkipBackwardFill size={24} /></button>
            <button type="button" aria-label={playing ? 'Pause' : 'Play'} onClick={() => setPlaying(!playing)}
              className={cx('inline-flex size-14 items-center justify-center rounded-full bg-white text-[#3B1D8F]', focus, 'focus-visible:outline-white')}>
              {playing ? <IconPauseFill size={24} /> : <IconPlayFill size={24} />}
            </button>
            <button type="button" aria-label="Next" onClick={() => setI(i + 1)} className={w}><IconSkipForwardFill size={24} /></button>
            <button type="button" aria-label="Repeat" aria-pressed={repeat} onClick={() => setRepeat(!repeat)} className={cx(w, repeat && 'bg-white/20')}><IconRepeat size={20} /></button>
            <button type="button" aria-label="Mute" aria-pressed={muted} onClick={() => setMuted(!muted)} className={w}>
              {muted ? <IconVolumeSlash size={20} /> : <IconVolumeHigh size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Weather */
function Weather() {
  const [f, setF] = useState(false);
  const cv = (c) => `${f ? Math.round((c * 9) / 5 + 32) : c}°`;
  const days = [['Tue', IconSun, 19], ['Wed', IconCloudSimple, 17], ['Thu', IconCloud, 15], ['Fri', IconCloudBolt, 13], ['Sat', IconSun, 18]];
  return (
    <div className={cx(tile, 'bg-[#4CC2FF]')}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold"><IconMapPin />San Francisco</span>
        <button type="button" onClick={() => setF(!f)} aria-label={f ? 'Switch to Celsius' : 'Switch to Fahrenheit'} className={cx(chip, 'bg-white/60', focus)}>{f ? '°F' : '°C'}</button>
      </div>
      <div className="flex items-center gap-3.5">
        <IconSun size={56} />
        <div>
          <p className="text-[44px] leading-none font-semibold tracking-tighter">{cv(18)}</p>
          <p className="mt-1 text-[13px]">Sunny, clouds later</p>
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        {days.map(([d, Icon, c]) => (
          <div key={d} className="flex flex-col items-center gap-1.5 text-xs">
            <span>{d}</span><Icon size={24} /><span className="font-semibold">{cv(c)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Rating */
function Rating() {
  const [rating, setRating] = useState(4);
  const words = ['Tap a star', 'Not for me', 'They’re fine', 'Pretty good', 'Really nice', 'Love them'];
  return (
    <div className={cx(tile, 'bg-[#C8F25C]')}>
      <span className={label}>Rating</span>
      <p className="text-xl font-semibold tracking-tight">How are the icons?</p>
      <div role="group" aria-label="Rating" className="-ml-2 flex">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" aria-pressed={n === rating} aria-label={`${n} star${n > 1 ? 's' : ''}`}
            onClick={() => setRating(n)} className={cx('inline-flex size-11 items-center justify-center transition-transform hover:scale-110', focus)}>
            {n <= rating ? <IconStarFill size={32} /> : <IconStar size={32} />}
          </button>
        ))}
      </div>
      <p className="mt-auto text-sm">{words[rating]}</p>
    </div>
  );
}

/* Quick settings */
function Switch({ icon: Icon, name, status, on, onClick }) {
  return (
    <button type="button" role="switch" aria-checked={on} onClick={onClick} className={cx(row, focus)}>
      <span className={cx('inline-flex size-9 shrink-0 items-center justify-center rounded-full', on ? 'bg-[#1D1C23] text-white' : 'bg-[#EDEBF1] text-[#6A6873]')}><Icon /></span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs text-[#6A6873]">{status}</span>
      </span>
      <span aria-hidden className={cx('relative h-6 w-10 shrink-0 rounded-full transition-colors', on ? 'bg-[#1D1C23]' : 'bg-[#CFCDD6]')}>
        <span className={cx('absolute top-[3px] size-[18px] rounded-full bg-white transition-all', on ? 'left-[19px]' : 'left-[3px]')} />
      </span>
    </button>
  );
}

function QuickSettings() {
  const [s, setS] = useState({ wifi: true, bt: true, air: false, dnd: false });
  const wifi = !s.air && s.wifi;
  const bt = !s.air && s.bt;
  return (
    <div className={cx(tile, 'bg-[#00C98D] row-span-2')}>
      <span className={label}>Quick settings</span>
      <div className={cx(card, 'flex flex-col gap-0.5 p-2')}>
        <Switch icon={IconWifi} name="Wi‑Fi" status={wifi ? 'Home network' : 'Off'} on={wifi} onClick={() => setS({ ...s, wifi: !wifi, air: false })} />
        <Switch icon={IconBluetooth} name="Bluetooth" status={bt ? 'On' : 'Off'} on={bt} onClick={() => setS({ ...s, bt: !bt, air: false })} />
        <Switch icon={IconAirplane} name="Airplane mode" status={s.air ? 'On' : 'Off'} on={s.air} onClick={() => setS({ ...s, air: !s.air })} />
        <Switch icon={s.dnd ? IconBellSlash : IconMoon} name="Do not disturb" status={s.dnd ? 'Until tomorrow' : 'Off'} on={s.dnd} onClick={() => setS({ ...s, dnd: !s.dnd })} />
      </div>
      <p className="mt-auto text-[13px] leading-snug">Airplane mode turns Wi‑Fi and Bluetooth off, like the real thing.</p>
    </div>
  );
}

/* Text formatting */
function Formatting() {
  const [f, setF] = useState({ b: false, i: false, u: false, s: false, list: false, link: false, align: 'left' });
  const tb = (on) => cx('inline-flex h-10 min-w-10 items-center justify-center rounded-[10px] px-2', on ? 'bg-[#1D1C23] text-white' : 'hover:bg-[#F2F1F4]', focus);
  const toggles = [['b', IconTextBold, 'Bold'], ['i', IconItalic, 'Italic'], ['u', IconTextUnderline, 'Underline'], ['s', IconTextStrikethrough, 'Strikethrough']];
  const aligns = [['left', IconTextAlignStart, 'Align left'], ['center', IconTextAlignCenter, 'Align center'], ['right', IconTextAlignEnd, 'Align right']];
  const sep = <span aria-hidden className="mx-1.5 h-6 w-px bg-[#E4E2E8]" />;
  return (
    <div className={cx(tile, 'bg-[#FFC727] sm:col-span-2')}>
      <span className={label}>Text formatting</span>
      <div role="toolbar" aria-label="Formatting" className={cx(card, 'flex flex-wrap items-center gap-0.5 self-start p-1.5')}>
        {toggles.map(([k, Icon, l]) => (
          <button key={k} type="button" aria-label={l} aria-pressed={f[k]} onClick={() => setF({ ...f, [k]: !f[k] })} className={tb(f[k])}><Icon /></button>
        ))}
        {sep}
        {aligns.map(([a, Icon, l]) => (
          <button key={a} type="button" aria-label={l} aria-pressed={f.align === a} onClick={() => setF({ ...f, align: a })} className={tb(f.align === a)}><Icon /></button>
        ))}
        {sep}
        <button type="button" aria-label="Bulleted list" aria-pressed={f.list} onClick={() => setF({ ...f, list: !f.list })} className={tb(f.list)}><IconListBullet /></button>
        <button type="button" aria-label="Link" aria-pressed={f.link} onClick={() => setF({ ...f, link: !f.link })} className={tb(f.link)}><IconLink /></button>
      </div>
      <div className={cx(card, 'flex-1 px-[18px] py-4')}>
        <p
          className={cx('text-lg leading-relaxed', f.b && 'font-bold', f.i && 'italic', (f.u || f.link) && 'underline', f.s && 'line-through', f.link && 'text-[#0077B6]')}
          style={{ textAlign: f.align }}
        >
          {f.list && '•  '}Nice little icons for your nice little apps.
        </p>
      </div>
    </div>
  );
}

/* Chat */
function Chat() {
  const [msgs, setMsgs] = useState([['them', 'Did you see the new emoji icons?'], ['me', 'The weird guys? Yes. Love the skull.'], ['them', 'Ship it 🚢']]);
  const [draft, setDraft] = useState('');
  const send = () => {
    if (!draft.trim()) return;
    setMsgs([...msgs, ['me', draft.trim()]].slice(-6));
    setDraft('');
  };
  return (
    <div className={cx(tile, 'bg-[#FF7AB8] row-span-2')}>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#1D1C23] text-[13px] font-semibold text-white">SA</span>
        <div><p className="text-sm font-semibold">Sam</p><p className="text-xs">Active now</p></div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5">
        {msgs.map(([who, text], i) => (
          <p key={i} className={cx('max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug', who === 'me' ? 'self-end bg-[#1D1C23] text-white' : 'self-start bg-white')}>{text}</p>
        ))}
      </div>
      <div className={cx(card, 'flex items-center gap-0.5 rounded-full p-1')}>
        <button type="button" aria-label="Attach" className={cx(iconBtn, 'hover:bg-black/5', focus)}><IconPaperclipTilt /></button>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Message" aria-label="Message" className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none" />
        <button type="button" aria-label="Add emoji" onClick={() => setDraft(draft + '🙂')} className={cx(iconBtn, 'hover:bg-black/5', focus)}><IconEmojiSmile /></button>
        <button type="button" aria-label={draft.trim() ? 'Send' : 'Record voice message'} onClick={send}
          className={cx('inline-flex size-10 items-center justify-center rounded-full bg-[#1D1C23] text-white', focus)}>
          {draft.trim() ? <IconSend /> : <IconMicrophone />}
        </button>
      </div>
    </div>
  );
}

/* Zoom & contrast */
function Zoom() {
  const sizes = [16, 20, 24, 32, 40, 48];
  const [zi, setZi] = useState(2);
  const [hc, setHc] = useState(false);
  const icons = [IconHome, IconSearch, IconInbox, IconCalendar, IconCamera, IconSettings];
  const b = cx(iconBtn, 'hover:bg-black/10', focus);
  return (
    <div className={cx(tile, 'bg-[#7DE3EF] sm:col-span-2')}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={label}>Zoom &amp; contrast</span>
        <div className="flex items-center gap-1">
          <button type="button" aria-label="Zoom out" onClick={() => setZi(Math.max(0, zi - 1))} className={b}><IconZoomOut /></button>
          <span className="min-w-11 text-center font-mono text-xs">{sizes[zi]} px</span>
          <button type="button" aria-label="Zoom in" onClick={() => setZi(Math.min(sizes.length - 1, zi + 1))} className={b}><IconZoomIn /></button>
          <button type="button" aria-label="High contrast" aria-pressed={hc} onClick={() => setHc(!hc)} className={cx(b, hc && 'bg-[#1D1C23] text-white hover:bg-[#1D1C23]')}><IconContrastHigh /></button>
        </div>
      </div>
      <div className={cx('flex flex-1 flex-wrap items-center justify-around gap-4 rounded-[18px] p-5', hc ? 'bg-[#1D1C23] text-white' : 'bg-white/65')}>
        {icons.map((Icon, i) => <Icon key={i} size={sizes[zi]} />)}
      </div>
    </div>
  );
}

/* Notifications */
function Notifications() {
  const notes = [
    ['n1', IconGitPullRequest, 'bg-[#C8F25C]', 'Pull request #212 was merged', '2m'],
    ['n2', IconChatRound, 'bg-[#FF7AB8]', 'Sam replied to your comment', '1h'],
    ['n3', IconCreditCard, 'bg-[#4CC2FF]', 'Payment received, thanks!', '3h'],
  ];
  const [read, setRead] = useState({});
  const unread = notes.filter(([id]) => !read[id]).length;
  return (
    <div className={cx(tile, 'bg-[#FF9A4D] sm:col-span-2')}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs font-semibold">
          <span className="relative inline-flex">
            <IconBell size={20} />
            {unread > 0 && <span className="absolute -top-1.5 -right-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1D1C23] text-[10px] text-white">{unread}</span>}
          </span>
          Notifications
        </span>
        <button type="button" onClick={() => setRead({ n1: true, n2: true, n3: true })} className={cx(chip, 'inline-flex items-center gap-1.5 bg-white/60', focus)}><IconCheck />Mark all read</button>
      </div>
      <div className={cx(card, 'flex flex-col p-1.5')}>
        {notes.map(([id, Icon, bg, text, when]) => (
          <button key={id} type="button" onClick={() => setRead({ ...read, [id]: true })} aria-label={text + (read[id] ? '' : ', unread')} className={cx(row, focus)}>
            <span className={cx('inline-flex size-9 shrink-0 items-center justify-center rounded-full', bg)}><Icon /></span>
            <span className={cx('min-w-0 flex-1 truncate text-sm', !read[id] && 'font-semibold')}>{text}</span>
            <span className="text-xs text-[#6A6873]">{when}</span>
            <span aria-hidden className={cx('size-2 rounded-full', read[id] ? 'bg-transparent' : 'bg-[#FF6A00]')} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* Cart */
function Cart() {
  const [qty, setQty] = useState(2);
  const b = cx('inline-flex size-9 items-center justify-center rounded-full hover:bg-black/5', focus);
  return (
    <div className={cx(tile, 'bg-[#E9D3AE]')}>
      <span className={cx(label, 'inline-flex items-center gap-1.5')}><IconShoppingCart />Cart</span>
      <div className="flex items-center justify-between gap-2">
        <div><p className="text-[15px] font-semibold">Sticker sheet</p><p className="text-[13px]">$4.00 each</p></div>
        <div className={cx(card, 'flex items-center rounded-full p-0.5')}>
          <button type="button" aria-label={qty <= 1 ? 'Remove' : 'Remove one'} onClick={() => setQty(Math.max(0, qty - 1))} className={b}>{qty <= 1 ? <IconTrash /> : <IconMinus />}</button>
          <span className="min-w-[22px] text-center font-semibold tabular-nums">{qty}</span>
          <button type="button" aria-label="Add one" onClick={() => setQty(qty + 1)} className={b}><IconPlus /></button>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[22px] font-semibold tracking-tight tabular-nums">${(qty * 4).toFixed(2)}</span>
        <button type="button" disabled={qty === 0} className={cx('inline-flex h-10 items-center gap-2 rounded-full bg-[#1D1C23] px-4 text-[13px] font-semibold text-white disabled:opacity-40', focus)}><IconCreditCard />Pay</button>
      </div>
    </div>
  );
}

/* Focus timer (no countdown wired up) */
function Timer() {
  const [mins, setMins] = useState(25);
  const [running, setRunning] = useState(false);
  return (
    <div className={cx(tile, 'bg-[#1D1C23] text-white')}>
      <span className={cx(label, 'inline-flex items-center gap-1.5')}><IconTimer />Focus</span>
      <p className="font-mono text-[44px] leading-none tracking-tighter">{mins}:00</p>
      <div className="flex gap-1.5">
        {[15, 25, 45].map((m) => (
          <button key={m} type="button" aria-pressed={m === mins} onClick={() => { setMins(m); setRunning(false); }}
            className={cx(chip, m === mins ? 'bg-white text-[#1D1C23]' : 'bg-white/10 text-white', focus, 'focus-visible:outline-white')}>{m}m</button>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        <button type="button" onClick={() => setRunning(!running)} className={cx('inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[13px] font-semibold text-[#1D1C23]', focus, 'focus-visible:outline-white')}>
          {running ? <IconPauseFill /> : <IconPlayFill />}{running ? 'Pause' : 'Start'}
        </button>
        <button type="button" aria-label="Reset" onClick={() => { setRunning(false); setMins(25); }} className={cx(iconBtn, 'hover:bg-white/15', focus, 'focus-visible:outline-white')}><IconArrowCounterClockwise /></button>
      </div>
    </div>
  );
}

/* Files */
function Files() {
  const [open, setOpen] = useState({ src: true, components: false });
  const [sel, setSel] = useState('Button.tsx');
  const tree = [
    ['src', 0, 'dir'], ['components', 1, 'dir', 'src'], ['Button.tsx', 2, 'code', 'components'],
    ['Inspector.tsx', 2, 'code', 'components'], ['icons.zip', 1, 'zip', 'src'], ['logo.png', 1, 'img', 'src'], ['README.md', 0, 'text'],
  ];
  const kinds = { code: [IconFileCode, 'text-[#00A6F4]'], zip: [IconFileZip, 'text-[#E6A600]'], img: [IconFileImage, 'text-[#F6339A]'], text: [IconFileText, 'text-[#6A6873]'] };
  const visible = tree.filter(([, , , parent]) => !parent || (open[parent] && (parent !== 'components' || open.src)));
  return (
    <div className={cx(tile, 'row-span-2 bg-white ring-1 ring-black/5')}>
      <span className={label}>Files</span>
      <div aria-label="Project files" className="-mx-1.5 flex flex-col gap-0.5">
        {visible.map(([name, depth, kind]) => {
          const dir = kind === 'dir';
          const isOpen = dir && open[name];
          const [FileIcon, color] = dir ? [isOpen ? IconFolderOpen : IconFolder, ''] : kinds[kind];
          return (
            <button key={name} type="button" aria-expanded={dir ? !!isOpen : undefined} aria-pressed={!dir ? sel === name : undefined}
              onClick={() => { setSel(name); if (dir) setOpen({ ...open, [name]: !isOpen }); }}
              className={cx(row, 'min-h-9', sel === name && 'bg-[#F0EEF4]', focus)} style={{ paddingLeft: 10 + depth * 18 }}>
              <span className="inline-flex size-4 text-[#8C8996]">{dir && (isOpen ? <IconChevronDown /> : <IconChevronRight />)}</span>
              <FileIcon className={color} />
              <span className="truncate text-sm">{name}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-auto text-[13px] text-[#6A6873]">Folders swap between closed and open as you click.</p>
    </div>
  );
}

/* Phone dock */
function Dock() {
  const apps = [['Home', IconHome, 'bg-[#F6339A]'], ['Search', IconSearch, 'bg-[#1D1C23]'], ['Maps', IconCompass, 'bg-[#00C98D]'], ['Camera', IconCamera, 'bg-[#6A6873]'],
    ['Calendar', IconCalendar, 'bg-[#FF9A4D]'], ['Inbox', IconInbox, 'bg-[#00A6F4]'], ['Music', IconMusicNote, 'bg-[#3B1D8F]'], ['Settings', IconSettings, 'bg-[#8C8996]']];
  const [app, setApp] = useState('Home');
  return (
    <div className={cx(tile, 'bg-[#BEE7FF] sm:col-span-2')}>
      <div className="flex items-center justify-between text-[13px] font-semibold">
        <span>9:41</span>
        <span className="inline-flex items-center gap-1.5"><IconSignalFour /><IconWifi /><IconBattery size={20} /></span>
      </div>
      <p className="mt-auto text-[13px]">{app} is open.</p>
      <div className="flex flex-wrap justify-center gap-2.5 rounded-[26px] bg-white/55 p-3">
        {apps.map(([name, Icon, bg]) => (
          <button key={name} type="button" aria-label={name} aria-pressed={app === name} onClick={() => setApp(name)}
            className={cx('relative inline-flex size-[52px] items-center justify-center rounded-[15px] text-white transition-transform hover:-translate-y-1 hover:scale-105', bg, focus)}>
            <Icon size={24} />
            <span aria-hidden className={cx('absolute -bottom-2 size-1 rounded-full bg-[#1D1C23]', app !== name && 'opacity-0')} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* Tasks */
function Tasks() {
  const steps = [IconProgressTaskTodo, IconProgressTask25, IconProgressTask50, IconProgressTask75, IconProgressTaskDone];
  const names = ['Draw more weird guys', 'Export the SVG zip', 'Publish v0.5.0'];
  const [p, setP] = useState([1, 3, 4]);
  return (
    <div className={cx(tile, 'bg-[#E2D9FF]')}>
      <span className={label}>Tasks</span>
      <div className="-mx-2.5 flex flex-col gap-0.5">
        {names.map((n, i) => {
          const Icon = steps[p[i]];
          const done = p[i] === 4;
          return (
            <button key={n} type="button" aria-label={`${n}, ${done ? 'done' : p[i] * 25 + '% done'}`}
              onClick={() => setP(p.map((v, j) => (j === i ? (v + 1) % 5 : v)))} className={cx(row, focus)}>
              <Icon size={20} className="text-[#5B21B6]" />
              <span className={cx('text-sm', done && 'line-through opacity-55')}>{n}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-auto text-xs text-[#4B4458]">Tap a task to move it along.</p>
    </div>
  );
}

/* Command menu */
function Commands() {
  const all = [['Open folder', IconFolderOpen, '⌘O'], ['Copy link', IconLink, '⌘L'], ['Duplicate', IconCopy, '⌘D'], ['Delete', IconTrash, '⌫']];
  const [q, setQ] = useState('');
  const [ran, setRan] = useState('');
  const list = all.filter(([n]) => n.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <div className={cx(tile, 'bg-white ring-1 ring-black/5 sm:col-span-2')}>
      <label className="flex h-11 items-center gap-2.5 rounded-[14px] bg-[#F4F3F5] px-3.5">
        <IconSearch className="text-[#6A6873]" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command" aria-label="Command" className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none" />
      </label>
      <div className="-mx-1.5 flex flex-col gap-0.5">
        {list.map(([n, Icon, kbd]) => (
          <button key={n} type="button" onClick={() => setRan(n)} className={cx(row, ran === n && 'bg-[#F0EEF4]', focus)}>
            <Icon /><span className="flex-1 text-sm">{n}</span>
            <span className="rounded-md bg-[#F4F3F5] px-1.5 py-0.5 font-mono text-[11px] text-[#6A6873]">{kbd}</span>
          </button>
        ))}
        {list.length === 0 && <p className="p-2.5 text-sm text-[#6A6873]">No commands match.</p>}
      </div>
      <p className="mt-auto text-xs text-[#6A6873]">{ran ? `Ran “${ran}”.` : 'Filter, then pick a command.'}</p>
    </div>
  );
}

/* Boarding pass */
function Boarding() {
  return (
    <div className={cx(tile, 'bg-[#BDF5DD]')}>
      <span className={cx(label, 'inline-flex items-center gap-1.5')}><IconTicket />Boarding pass</span>
      <div className="flex items-center justify-between gap-2">
        <div><p className="text-3xl font-semibold tracking-tight">SFO</p><p className="text-xs">San Francisco</p></div>
        <IconAirplaneDiagonal size={24} />
        <div className="text-right"><p className="text-3xl font-semibold tracking-tight">JFK</p><p className="text-xs">New York</p></div>
      </div>
      <div className={cx(card, 'mt-auto grid grid-cols-3 px-3 py-2.5 text-xs')}>
        {[['Gate', '11'], ['Seat', '4A'], ['Boards', '4:20']].map(([k, v]) => (
          <div key={k}><p className="text-[#6A6873]">{k}</p><p className="text-[15px] font-semibold">{v}</p></div>
        ))}
      </div>
    </div>
  );
}

export default function FyiconsBento() {
  return (
    <section className="bg-[#F4F3F5] px-6 py-14 text-[#1D1C23]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 className="text-[clamp(32px,4vw,52px)] leading-none font-semibold tracking-[-0.04em]">Fits right in.</h2>
          <p className="max-w-[460px] text-base leading-normal text-[#55535E]">The same 16 × 16 drawings in fifteen kinds of interface. Explore the controls and see the icons in action.</p>
        </div>
        <div className="grid grid-flow-row-dense auto-rows-[minmax(236px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Player />
          <Weather />
          <Rating />
          <QuickSettings />
          <Formatting />
          <Chat />
          <Zoom />
          <Notifications />
          <Cart />
          <Timer />
          <Files />
          <Dock />
          <Tasks />
          <Commands />
          <Boarding />
        </div>
      </div>
    </section>
  );
}
