import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMicrophoneNarrow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneNarrow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="microphone-narrow"><path fill="currentColor" d="M11.5 6a.5.5 0 0 1 .5.5V8a4 4 0 0 1-3.504 3.968c0 .01.004.021.004.032v1h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1v-1l.003-.032A4 4 0 0 1 4 8V6.5a.5.5 0 0 1 1 0V8a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5M8 2a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1" /></SvgRoot>;
});
export default IconMicrophoneNarrow;
