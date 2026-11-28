'use client';

import { useTheme } from '@/lib/use-theme';
import { Stage, type StageProps } from '@/vendor/stageshow/stage';

export function ThemedStage<S extends object>(
  props: Omit<StageProps<S>, 'theme'>,
) {
  const theme = useTheme();
  return <Stage {...props} theme={theme} />;
}
