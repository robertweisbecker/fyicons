'use client';

import { useEffect, useImperativeHandle, useState, type Ref } from 'react';
import { DialRoot, useDialKitController, type DialConfig } from 'dialkit';
import { icons } from '@/lib/catalog';
import { useTheme } from '@/lib/use-theme';
import type { IconMapping } from '@/prototypes/icon-examples/model';
import 'dialkit/styles.css';

export type InspectorHandle = { assign: (name: string) => void };
const iconOptions = [
  { value: '', label: 'Empty slot' },
  ...icons
    .map((icon) => ({ value: icon.name, label: icon.name }))
    .sort((a, b) => a.label.localeCompare(b.label)),
];

export function IconInspector({
  id,
  name,
  initial,
  onChange,
  ref,
}: {
  id: string;
  name: string;
  initial: IconMapping;
  onChange: (mapping: IconMapping) => void;
  ref: Ref<InspectorHandle>;
}) {
  // Defaults stay fixed for this selection; DialKit's reset and versions retain a
  // meaningful baseline while live edits are sent back to the canvas.
  const [config] = useState(
    () =>
      ({
        icon: { type: 'select', options: iconOptions, default: initial.icon },
        size: [initial.size, 16, 48, 4],
        inheritColor: initial.inheritColor,
        color: { type: 'color', default: initial.color },
        opacity: [initial.opacity, 0, 100, 1],
        transform: {
          _collapsed: true,
          rotation: [initial.rotation, -180, 180, 15],
          flipX: initial.flipX,
          flipY: initial.flipY,
        },
      }) satisfies DialConfig,
  );
  const dial = useDialKitController(name, config, { id });
  const theme = useTheme();
  useImperativeHandle(
    ref,
    () => ({ assign: (name: string) => dial.setValue('icon', name) }),
    [dial],
  );
  useEffect(() => {
    const { transform, ...props } = dial.values;
    onChange({
      ...props,
      rotation: transform.rotation,
      flipX: transform.flipX,
      flipY: transform.flipY,
    });
  }, [dial.values, onChange]);
  return <DialRoot mode="inline" theme={theme} defaultOpen />;
}
