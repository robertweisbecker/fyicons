'use client';

import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type Ref,
} from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
} from '@/components/ui/input-group';
import { Badge } from '@/components/ui/badge';
import { byName } from '@/lib/catalog';
import { cn } from '@/lib/utils';
import { Choice } from './Choice';
import { IconPicker } from './IconPicker';
import { IconInspector, type InspectorHandle } from './IconInspector';
import {
  layouts,
  emptyWorkspace,
  emptyArrangement,
  exampleArrangement,
  mappingStyle,
  serializeWorkspace,
  parseWorkspace,
  reactCode,
  type LayoutId,
  type IconMapping,
  type Remix,
} from './model';

export type PlaygroundHandle = { load: (remix: Remix) => void };
const compactLabels: Record<string, string> = {
  previous: 'Prev',
  volume: 'Vol.',
  microphone: 'Mic',
  emoji: 'React',
};
const previewTheme =
  '[--text:var(--color-taupe-900)] [--muted:var(--color-taupe-500)] [--surface:var(--color-white)] [--bg:var(--color-taupe-100)] [--line:var(--color-taupe-200)] [--border:var(--color-taupe-300)] data-[theme=dark]:[--text:var(--color-neutral-100)] data-[theme=dark]:[--muted:var(--color-neutral-400)] data-[theme=dark]:[--surface:var(--color-neutral-900)] data-[theme=dark]:[--bg:var(--color-neutral-950)] data-[theme=dark]:[--line:var(--color-neutral-800)] data-[theme=dark]:[--border:var(--color-neutral-700)] bg-bg text-ink';

export function IconPlayground({ ref }: { ref: Ref<PlaygroundHandle> }) {
  const [workspace, setWorkspace] = useState(emptyWorkspace);
  const [layoutId, setLayoutId] = useState<LayoutId>('player');
  const [selection, setSelection] = useState({ slot: 'playback', state: 0 });
  const [mode, setMode] = useState('edit');
  const [previewStates, setPreviewStates] = useState<Record<string, number>>(
    {},
  );
  const [previewDark, setPreviewDark] = useState(false);
  const [labels, setLabels] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [message, setMessage] = useState('');
  const [track, setTrack] = useState(0);
  const [draft, setDraft] = useState('');
  const instanceId = useId();
  const inspector = useRef<InspectorHandle>(null);
  const pickerTrigger = useRef<HTMLElement>(null);
  const layout = layouts.find((layout) => layout.id === layoutId)!;
  const arrangement = workspace[layoutId];
  const selectedSlot =
    layout.slots.find((slot) => slot.id === selection.slot) ?? layout.slots[0];
  const selectedState = Math.min(
    selection.state,
    selectedSlot.states.length - 1,
  );
  const mapping = arrangement[selectedSlot.id][selectedState];
  const total = layout.slots.reduce(
    (total, slot) => total + slot.states.length,
    0,
  );
  const filled = Object.values(arrangement)
    .flat()
    .filter((mapping) => mapping.icon).length;
  const editorId = `${instanceId}-${generation}-${layoutId}-${selectedSlot.id}-${selectedState}`;

  useEffect(() => {
    const restore = () => {
      const saved = parseWorkspace(location.hash, (name) => byName.has(name));
      if (!saved) return;
      setWorkspace(saved.workspace);
      setLayoutId(saved.layout);
      setSelection({
        slot: layouts.find((layout) => layout.id === saved.layout)!.slots[0].id,
        state: 0,
      });
      setPreviewStates({});
      setMode('edit');
      setGeneration((value) => value + 1);
      setMessage('Your icon combinations are restored.');
    };
    restore();
    window.addEventListener('hashchange', restore);
    return () => window.removeEventListener('hashchange', restore);
  }, []);
  const switchLayout = (id: LayoutId) => {
    setLayoutId(id);
    setSelection({
      slot: layouts.find((layout) => layout.id === id)!.slots[0].id,
      state: 0,
    });
    setPreviewStates({});
    setMode('edit');
    setMessage('');
    setTrack(0);
    setPickerOpen(false);
  };
  useImperativeHandle(ref, () => ({
    load: (remix: Remix) => {
      const target = layouts.find((layout) => layout.id === remix.layout)!;
      const next = emptyArrangement(target);
      for (const slot of target.slots)
        next[slot.id] = next[slot.id].map((mapping, index) => ({
          ...mapping,
          icon: byName.has(remix.icons[slot.id]?.[index])
            ? remix.icons[slot.id][index]
            : '',
        }));
      setWorkspace((workspace) => ({ ...workspace, [remix.layout]: next }));
      switchLayout(remix.layout);
      setGeneration((value) => value + 1);
      setMessage('Example loaded. Select any icon to make it yours.');
    },
  }));
  const updateMapping = useCallback(
    (next: IconMapping) => {
      setWorkspace((workspace) => {
        const previous = workspace[layoutId][selectedSlot.id][selectedState];
        if (
          Object.keys(next).every(
            (key) =>
              next[key as keyof IconMapping] ===
              previous[key as keyof IconMapping],
          )
        )
          return workspace;
        return {
          ...workspace,
          [layoutId]: {
            ...workspace[layoutId],
            [selectedSlot.id]: workspace[layoutId][selectedSlot.id].map(
              (mapping, index) => (index === selectedState ? next : mapping),
            ),
          },
        };
      });
    },
    [layoutId, selectedSlot.id, selectedState],
  );
  const assign = (name: string) => {
    inspector.current?.assign(name);
    setMessage(
      `${name || 'Empty slot'} assigned to ${selectedSlot.label} · ${selectedSlot.states[selectedState]}.`,
    );
  };
  const populate = (empty: boolean) => {
    setWorkspace((workspace) => ({
      ...workspace,
      [layoutId]: empty
        ? emptyArrangement(layout)
        : exampleArrangement(layout, (name) => byName.has(name)),
    }));
    setGeneration((value) => value + 1);
    setPreviewStates({});
    setMode('edit');
    setSelection({ slot: selectedSlot.id, state: 0 });
    setMessage(
      empty
        ? 'This layout is empty. Choose a slot to begin.'
        : 'Example icons added. Select any icon to replace it.',
    );
  };
  const copy = async (kind: 'link' | 'react') => {
    const hash = serializeWorkspace(layoutId, workspace);
    const text =
      kind === 'link'
        ? `${location.origin}${location.pathname}${hash}`
        : reactCode(
            layout,
            arrangement,
            (name) => byName.get(name)?.componentName,
          );
    if (kind === 'link') history.replaceState(null, '', hash);
    try {
      await navigator.clipboard.writeText(text);
      setMessage(
        kind === 'link'
          ? 'Preview link copied. Opens on this local server.'
          : 'React components copied.',
      );
    } catch {
      setMessage(
        kind === 'link'
          ? 'Link saved in the address bar. Copy it to keep your work.'
          : 'Clipboard unavailable. Try copying again.',
      );
    }
  };
  const operate = (id: string) => {
    const slot = layout.slots.find((slot) => slot.id === id)!;
    if (id === 'previous' || id === 'next') {
      setTrack((value) => (value + (id === 'next' ? 1 : 2)) % 3);
      setSelection({ slot: id, state: 0 });
      return;
    }
    const state =
      layoutId === 'navigation'
        ? 1
        : ((previewStates[id] ?? 0) + 1) % slot.states.length;
    setPreviewStates((states) =>
      layoutId === 'navigation' ? { [id]: state } : { ...states, [id]: state },
    );
    setSelection({ slot: id, state });
    if (layoutId === 'composer' && id === 'send') setDraft('');
  };
  const renderSlot = (id: string, row = false) => {
    const slot = layout.slots.find((slot) => slot.id === id)!;
    const selected = selectedSlot.id === id;
    const state =
      mode === 'edit' && selected ? selectedState : (previewStates[id] ?? 0);
    const icon = arrangement[id][state];
    return (
      <Button
        key={id}
        variant="ghost"
        size="unstyled"
        data-icon-slot={id}
        data-state-index={state}
        aria-label={
          mode === 'edit'
            ? `Edit ${slot.label}: ${slot.states[state]}`
            : `${slot.label}: ${slot.states[state]}`
        }
        aria-pressed={
          mode === 'edit'
            ? selected
            : slot.states.length > 1
              ? state > 0
              : undefined
        }
        onClick={(event) => {
          if (mode === 'try') {
            operate(id);
            return;
          }
          setSelection({ slot: id, state });
          if (!icon.icon) {
            pickerTrigger.current = event.currentTarget;
            setPickerOpen(true);
          }
        }}
        className={cn(
          'group min-w-0 gap-1 rounded-xl p-1.5 text-current',
          row ? 'w-full justify-start' : 'flex-1 flex-col',
          layoutId === 'player' && 'col-span-2 sm:col-span-1',
          layoutId === 'player' &&
            (id === 'volume' || id === 'save') &&
            'col-span-3',
          mode === 'try' && state > 0 && 'bg-current/8',
        )}
      >
        <span
          className={cn(
            'grid size-12 shrink-0 place-items-center rounded-lg transition-colors motion-reduce:transition-none',
            mode === 'edit' &&
              'ring-1 ring-current/15 group-hover:bg-current/5',
            mode === 'edit' && selected && 'bg-blue-500/8 ring-2 ring-blue-500',
            !icon.icon && 'border border-dashed border-current/25',
          )}
        >
          {icon.icon ? (
            <Icon
              name={icon.icon}
              size={icon.size}
              style={mappingStyle(icon)}
            />
          ) : (
            <Icon name="plus" className="text-muted" />
          )}
        </span>
        {(labels || mode === 'edit') && (
          <span className="max-w-full truncate text-[11px]">
            {id === 'playback'
              ? state
                ? 'Pause'
                : 'Play'
              : (compactLabels[id] ?? slot.label)}
          </span>
        )}
      </Button>
    );
  };
  return (
    <section
      id="playground"
      aria-labelledby="playground-heading"
      className="mt-16 scroll-mt-24 pb-8"
    >
      <header className="mb-6 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-2 text-xs font-medium text-muted">
            Make your own combination
          </p>
          <h2
            id="playground-heading"
            tabIndex={-1}
            className="text-3xl font-medium tracking-tight outline-none"
          >
            The icon playground
          </h2>
          <p className="mt-3 max-w-140 text-sm leading-relaxed text-muted">
            Choose a layout. Click a slot to add an icon. Give each state its
            own character, then try the result.
          </p>
        </div>
        <Badge variant="outline" size="sm">
          {filled} / {total} states filled
        </Badge>
      </header>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <Icon name={layout.icon} className="text-muted" />
            <Choice
              label="Playground layout"
              value={layoutId}
              onChange={(id) => switchLayout(id as LayoutId)}
              options={layouts.map((layout) => [layout.id, layout.label])}
            />
          </div>
          <ToggleGroup
            aria-label="Playground mode"
            value={[mode]}
            onValueChange={(values) => {
              if (values[0]) {
                setMode(values[0]);
                if (values[0] === 'try') {
                  setPreviewStates((states) =>
                    layoutId === 'navigation'
                      ? { [selectedSlot.id]: selectedState }
                      : { ...states, [selectedSlot.id]: selectedState },
                  );
                }
                setMessage('');
              }
            }}
            className="rounded-lg bg-bg p-1"
          >
            <Toggle value="edit" size="sm" variant="elevated">
              <Icon name="cursor" />
              Edit icons
            </Toggle>
            <Toggle value="try" size="sm" variant="elevated" disabled={!filled}>
              <Icon name="play" />
              Try it
            </Toggle>
          </ToggleGroup>
        </div>
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs sm:px-5">
              <span className="text-muted">
                {mode === 'edit'
                  ? 'Click an icon or an empty slot to edit it.'
                  : 'The controls are live. Click to switch states.'}
              </span>
              <div className="flex items-center gap-2">
                <Toggle
                  size="icon-xs"
                  pressed={labels}
                  onPressedChange={setLabels}
                  aria-label="Show control labels"
                >
                  <Icon name="text-title" />
                </Toggle>
                <Toggle
                  size="icon-xs"
                  pressed={previewDark}
                  onPressedChange={setPreviewDark}
                  aria-label="Dark canvas"
                >
                  <Icon name={previewDark ? 'moon' : 'sun'} />
                </Toggle>
              </div>
            </div>
            <div
              data-playground-canvas
              data-theme={previewDark ? 'dark' : 'light'}
              className={cn(
                previewTheme,
                'flex min-h-104 flex-1 items-center justify-center p-3 sm:p-8',
              )}
            >
              <div className="w-full max-w-140 rounded-2xl bg-surface p-3 text-ink shadow-sm ring-1 ring-border/50 sm:p-6">
                {layoutId === 'player' && (
                  <>
                    <div className="mb-6 flex items-center gap-4 px-1">
                      <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-teal-900 text-teal-100">
                        <Icon name="waveform" size={32} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {
                            [
                              'Quiet hours',
                              'Somewhere, slowly',
                              'The long way home',
                            ][track]
                          }
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          Field recordings · Vol. 02
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 px-2">
                      <div className="h-1 overflow-hidden rounded-full bg-line">
                        <div className="h-full w-2/5 rounded-full bg-current/40" />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-muted tabular-nums">
                        <span>1:24</span>
                        <span>3:42</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 items-start gap-2 sm:grid-cols-5">
                      {layout.slots.map((slot) => renderSlot(slot.id))}
                    </div>
                  </>
                )}
                {layoutId === 'navigation' && (
                  <div className="grid gap-5 sm:grid-cols-[140px_minmax(0,1fr)]">
                    <div className="flex flex-col gap-1 border-b border-line pb-3 sm:border-r sm:border-b-0 sm:pr-3 sm:pb-0">
                      {layout.slots.map((slot) => renderSlot(slot.id, true))}
                    </div>
                    <div className="py-3">
                      <p className="text-base font-medium">
                        {layout.slots.find((slot) => previewStates[slot.id])
                          ?.label ?? 'Your space'}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        A few things worth keeping.
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="h-18 rounded-lg bg-teal-200/60" />
                        <div className="h-18 rounded-lg bg-orange-200/60" />
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 w-4/5 rounded bg-border" />
                        <div className="h-1.5 w-3/5 rounded bg-line" />
                      </div>
                    </div>
                  </div>
                )}
                {layoutId === 'toolbar' && (
                  <>
                    <div className="px-3 pt-4 pb-6">
                      <Icon
                        name="file-text"
                        size={36}
                        className="mb-4 text-muted"
                      />
                      <h3 className="text-lg font-medium">The little things</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        Notes on making everyday interfaces feel a little more
                        considered.
                      </p>
                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 w-full rounded bg-line" />
                        <div className="h-1.5 w-4/5 rounded bg-line" />
                      </div>
                    </div>
                    <div className="flex gap-2 border-t border-line pt-3">
                      {layout.slots.map((slot) => renderSlot(slot.id))}
                    </div>
                  </>
                )}
                {layoutId === 'composer' && (
                  <>
                    <div className="mb-5 flex items-center gap-2 px-2">
                      <span className="grid size-8 place-items-center rounded-full bg-violet-100 text-violet-900">
                        <Icon name="user" />
                      </span>
                      <p className="text-xs text-muted">Message to the team</p>
                    </div>
                    <InputGroup>
                      <InputGroupTextarea
                        aria-label="Playground message"
                        placeholder="What are you working on?"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                      />
                      <InputGroupAddon className="gap-0.5 border-t border-line">
                        {layout.slots.map((slot) => renderSlot(slot.id))}
                      </InputGroupAddon>
                    </InputGroup>
                    {previewStates.send === 1 && (
                      <p role="status" className="mt-3 text-xs text-muted">
                        Message sent.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => populate(false)}
                >
                  <Icon name="sparkles" />
                  Fill with example
                </Button>
                <Button
                  variant="text"
                  size="sm"
                  onClick={() => populate(true)}
                  disabled={!filled}
                >
                  Clear layout
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="text"
                  size="sm"
                  disabled={!filled}
                  onClick={() => copy('react')}
                >
                  <Icon name="code" />
                  Copy React
                </Button>
                <Button variant="text" size="sm" onClick={() => copy('link')}>
                  <Icon name="link" />
                  Copy link
                </Button>
              </div>
            </div>
            <p
              role="status"
              className="min-h-10 px-5 pb-3 text-xs leading-relaxed text-muted"
            >
              {message}
            </p>
          </div>
          <aside
            aria-label="Selected icon editor"
            className="min-w-0 border-t border-line bg-bg/50 p-4 lg:border-t-0 lg:border-l"
          >
            <div className="mb-4 px-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-medium">{selectedSlot.label}</h3>
                <span className="text-[11px] text-muted">Selected slot</span>
              </div>
              <ToggleGroup
                aria-label={`${selectedSlot.label} icon state`}
                value={[String(selectedState)]}
                onValueChange={(values) => {
                  if (values[0] !== undefined) {
                    setSelection({
                      slot: selectedSlot.id,
                      state: Number(values[0]),
                    });
                    setMode('edit');
                  }
                }}
                className="mt-3 flex-wrap"
              >
                {selectedSlot.states.map((state, index) => (
                  <Toggle
                    size="sm"
                    variant="outline"
                    key={state}
                    value={String(index)}
                  >
                    <span
                      className={cn(
                        'size-1.5 rounded-full',
                        arrangement[selectedSlot.id][index].icon
                          ? 'bg-emerald-500'
                          : 'bg-current/20',
                      )}
                    />
                    {state}
                  </Toggle>
                ))}
              </ToggleGroup>
              <Button
                variant="outline"
                className="mt-3 w-full justify-between"
                onClick={(event) => {
                  pickerTrigger.current = event.currentTarget;
                  setPickerOpen(true);
                }}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Icon name={mapping.icon || 'plus'} />
                  <span className="truncate">
                    {mapping.icon || 'Choose an icon'}
                  </span>
                </span>
                <Icon name="grid" />
              </Button>
            </div>
            <div data-docked-dialkit>
              <IconInspector
                key={editorId}
                id={editorId}
                ref={inspector}
                name={`${selectedSlot.label} · ${selectedSlot.states[selectedState]}`}
                initial={mapping}
                onChange={updateMapping}
              />
            </div>
            <p className="mt-3 px-1 text-[11px] leading-relaxed text-muted">
              Properties and versions apply to this state. Turn off “Inherit
              color” to use a custom color.
            </p>
          </aside>
        </div>
      </div>
      <IconPicker
        key={editorId}
        open={pickerOpen}
        onOpenChange={setPickerOpen}
        target={`${layout.label} / ${selectedSlot.label} / ${selectedSlot.states[selectedState]}`}
        current={mapping.icon}
        suggestions={selectedSlot.suggestions[selectedState]}
        onPick={assign}
        finalFocus={pickerTrigger}
      />
    </section>
  );
}
