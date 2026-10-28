import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMicrophoneWideFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneWideFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="microphone-wide-fill"><path fill="currentColor" d="M13.442 7.94a.5.5 0 0 1 .353.613A6 6 0 0 1 8.5 12.979V14.5a.5.5 0 0 1-1 0v-1.521a6 6 0 0 1-5.296-4.426.5.5 0 0 1 .965-.26 5.002 5.002 0 0 0 7.874 2.674 5 5 0 0 0 1.787-2.673.5.5 0 0 1 .612-.354M8 1a3 3 0 0 1 3 3v3a3 3 0 1 1-6 0V4a3 3 0 0 1 3-3" /></SvgRoot>;
});
export default IconMicrophoneWideFill;
