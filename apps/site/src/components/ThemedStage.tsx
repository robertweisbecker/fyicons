'use client';

import { useSyncExternalStore } from 'react';
import { Stage, type StageProps } from '@/vendor/stageshow/stage';

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

function readTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemedStage<S extends object>(
  props: Omit<StageProps<S>, 'theme'>,
) {
  const theme = useSyncExternalStore<'light' | 'dark'>(
    subscribeToTheme,
    readTheme,
    () => 'light',
  );
  return <Stage {...props} theme={theme} />;
}
