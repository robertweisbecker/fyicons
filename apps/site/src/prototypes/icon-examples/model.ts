import type { CSSProperties } from 'react';

export type LayoutId = 'player' | 'navigation' | 'toolbar' | 'composer';
export type IconMapping = {
  icon: string;
  size: number;
  inheritColor: boolean;
  color: string;
  opacity: number;
  rotation: number;
  flipX: boolean;
  flipY: boolean;
};
export type Slot = {
  id: string;
  label: string;
  states: string[];
  suggestions: string[][];
};
export type Layout = {
  id: LayoutId;
  label: string;
  icon: string;
  slots: Slot[];
};
export type Arrangement = Record<string, IconMapping[]>;
export type Workspace = Record<LayoutId, Arrangement>;
export type Remix = { layout: LayoutId; icons: Record<string, string[]> };

export const layouts: Layout[] = [
  {
    id: 'player',
    label: 'Media player',
    icon: 'play',
    slots: [
      {
        id: 'previous',
        label: 'Previous',
        states: ['Default'],
        suggestions: [
          ['skip-backward', 'skip-backward-fill', 'arrow-left', 'caret-left'],
        ],
      },
      {
        id: 'playback',
        label: 'Playback',
        states: ['Paused', 'Playing'],
        suggestions: [
          ['play', 'play-fill', 'circle-play', 'circle-play-fill'],
          ['pause', 'pause-fill', 'stop', 'stop-fill'],
        ],
      },
      {
        id: 'next',
        label: 'Next',
        states: ['Default'],
        suggestions: [
          ['skip-forward', 'skip-forward-fill', 'arrow-right', 'caret-right'],
        ],
      },
      {
        id: 'volume',
        label: 'Volume',
        states: ['Sound on', 'Muted'],
        suggestions: [
          ['volume-high', 'volume-high-fill', 'volume-medium'],
          ['volume-slash', 'volume-x', 'volume-none'],
        ],
      },
      {
        id: 'save',
        label: 'Save',
        states: ['Unsaved', 'Saved'],
        suggestions: [
          ['heart', 'bookmark', 'star'],
          ['heart-fill', 'bookmark-fill', 'star-fill'],
        ],
      },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: 'sidebar-left',
    slots: [
      {
        id: 'home',
        label: 'Home',
        states: ['Default', 'Selected'],
        suggestions: [
          ['home', 'home-wide', 'grid'],
          ['home-fill', 'home-wide-fill', 'grid-fill'],
        ],
      },
      {
        id: 'explore',
        label: 'Explore',
        states: ['Default', 'Selected'],
        suggestions: [
          ['compass', 'search', 'globe'],
          ['compass-fill', 'search-simple', 'globe'],
        ],
      },
      {
        id: 'saved',
        label: 'Saved',
        states: ['Default', 'Selected'],
        suggestions: [
          ['bookmark', 'heart', 'star'],
          ['bookmark-fill', 'heart-fill', 'star-fill'],
        ],
      },
      {
        id: 'profile',
        label: 'Profile',
        states: ['Default', 'Selected'],
        suggestions: [
          ['user', 'circle-user', 'emoji-smile'],
          ['user-fill', 'circle-user-fill', 'emoji-smile-fill'],
        ],
      },
    ],
  },
  {
    id: 'toolbar',
    label: 'Action toolbar',
    icon: 'cursor',
    slots: [
      {
        id: 'copy',
        label: 'Copy',
        states: ['Ready', 'Copied'],
        suggestions: [
          ['copy', 'clipboard', 'file-text'],
          ['check', 'copied', 'circle-check'],
        ],
      },
      {
        id: 'save',
        label: 'Save',
        states: ['Unsaved', 'Saved'],
        suggestions: [
          ['bookmark', 'heart', 'star'],
          ['bookmark-fill', 'heart-fill', 'star-fill'],
        ],
      },
      {
        id: 'download',
        label: 'Download',
        states: ['Ready', 'Complete'],
        suggestions: [
          ['download', 'arrow-down', 'cloud-download'],
          ['check', 'download-square', 'circle-check'],
        ],
      },
      {
        id: 'share',
        label: 'Share',
        states: ['Ready', 'Shared'],
        suggestions: [
          ['share', 'link', 'send'],
          ['check', 'circle-check', 'link'],
        ],
      },
    ],
  },
  {
    id: 'composer',
    label: 'Message composer',
    icon: 'chat-round',
    slots: [
      {
        id: 'attach',
        label: 'Attach',
        states: ['Empty', 'Attached'],
        suggestions: [
          ['paperclip', 'plus', 'file'],
          ['file-text', 'check', 'paperclip'],
        ],
      },
      {
        id: 'emoji',
        label: 'Reaction',
        states: ['Default', 'Added'],
        suggestions: [
          ['emoji-smile', 'heart', 'star'],
          ['emoji-smile-fill', 'heart-fill', 'star-fill'],
        ],
      },
      {
        id: 'microphone',
        label: 'Microphone',
        states: ['Off', 'Recording'],
        suggestions: [
          ['microphone', 'microphone-narrow', 'waveform'],
          ['microphone-fill', 'stop-fill', 'waveform'],
        ],
      },
      {
        id: 'send',
        label: 'Send',
        states: ['Ready', 'Sent'],
        suggestions: [
          ['arrow-up', 'send', 'arrow-right'],
          ['check', 'circle-check', 'circle-check-fill'],
        ],
      },
    ],
  },
];
export const emptyMapping = (): IconMapping => ({
  icon: '',
  size: 24,
  inheritColor: true,
  color: '#3b82f6',
  opacity: 100,
  rotation: 0,
  flipX: false,
  flipY: false,
});
export const emptyArrangement = (layout: Layout): Arrangement =>
  Object.fromEntries(
    layout.slots.map((slot) => [slot.id, slot.states.map(emptyMapping)]),
  );
export const emptyWorkspace = (): Workspace =>
  Object.fromEntries(
    layouts.map((layout) => [layout.id, emptyArrangement(layout)]),
  ) as Workspace;
export function exampleArrangement(
  layout: Layout,
  hasIcon: (name: string) => boolean,
): Arrangement {
  return Object.fromEntries(
    layout.slots.map((slot) => [
      slot.id,
      slot.states.map((_, index) => ({
        ...emptyMapping(),
        icon: slot.suggestions[index].find(hasIcon) ?? '',
      })),
    ]),
  );
}
export function mappingStyle(mapping: IconMapping): CSSProperties {
  return {
    color: mapping.inheritColor ? undefined : mapping.color,
    opacity: mapping.opacity / 100,
    transform: `rotate(${mapping.rotation}deg) scale(${mapping.flipX ? -1 : 1}, ${mapping.flipY ? -1 : 1})`,
  };
}
export function serializeWorkspace(layout: LayoutId, workspace: Workspace) {
  return `#icons=${encodeURIComponent(JSON.stringify({ version: 1, layout, workspace }))}`;
}
export function parseWorkspace(
  hash: string,
  hasIcon: (name: string) => boolean,
): { layout: LayoutId; workspace: Workspace } | null {
  if (!hash.startsWith('#icons=') || hash.length > 100000) return null;
  try {
    const data = JSON.parse(decodeURIComponent(hash.slice(7)));
    if (
      data.version !== 1 ||
      !layouts.some((layout) => layout.id === data.layout)
    )
      return null;
    const workspace = emptyWorkspace();
    for (const layout of layouts) {
      for (const slot of layout.slots) {
        const mappings = data.workspace?.[layout.id]?.[slot.id];
        if (!Array.isArray(mappings) || mappings.length !== slot.states.length)
          return null;
        workspace[layout.id][slot.id] = mappings.map((mapping: IconMapping) => {
          if (
            !mapping ||
            typeof mapping.icon !== 'string' ||
            (mapping.icon && !hasIcon(mapping.icon))
          )
            throw new Error('Unknown icon');
          if (
            !Number.isFinite(mapping.size) ||
            mapping.size < 16 ||
            mapping.size > 48 ||
            !Number.isFinite(mapping.opacity) ||
            mapping.opacity < 0 ||
            mapping.opacity > 100 ||
            !Number.isFinite(mapping.rotation) ||
            Math.abs(mapping.rotation) > 180
          )
            throw new Error('Invalid props');
          if (
            typeof mapping.color !== 'string' ||
            mapping.color.length > 100 ||
            !['inheritColor', 'flipX', 'flipY'].every(
              (key) => typeof mapping[key as keyof IconMapping] === 'boolean',
            )
          )
            throw new Error('Invalid props');
          return {
            icon: mapping.icon,
            size: mapping.size,
            opacity: mapping.opacity,
            rotation: mapping.rotation,
            color: mapping.color,
            inheritColor: mapping.inheritColor,
            flipX: mapping.flipX,
            flipY: mapping.flipY,
          };
        });
      }
    }
    return { layout: data.layout, workspace };
  } catch {
    return null;
  }
}
export function reactCode(
  layout: Layout,
  arrangement: Arrangement,
  componentName: (name: string) => string | undefined,
) {
  const imports = new Set<string>();
  const render = (mapping: IconMapping) => {
    const component = componentName(mapping.icon);
    if (!component) return 'null';
    imports.add(component);
    const style = mappingStyle(mapping);
    return `<${component} size={${mapping.size}} style={${JSON.stringify(style)}} aria-hidden />`;
  };
  const snippets = layout.slots.map((slot) => {
    const name = slot.id[0].toUpperCase() + slot.id.slice(1) + 'Icon';
    const states = arrangement[slot.id];
    if (states.length === 1)
      return `export function ${name}() {\n  return ${render(states[0])};\n}`;
    return `// ${slot.states[0]} / ${slot.states[1]}\nexport function ${name}({ active = false }: { active?: boolean }) {\n  return active ? ${render(states[1])} : ${render(states[0])};\n}`;
  });
  return `import { ${[...imports].sort().join(', ')} } from 'fyicons';\n\n${snippets.join('\n\n')}`;
}
