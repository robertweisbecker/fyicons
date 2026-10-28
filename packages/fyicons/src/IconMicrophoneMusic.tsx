import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMicrophoneMusic = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneMusic(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="microphone-music"><path fill="currentColor" d="M7.647 3.146a3.683 3.683 0 0 1 5.206 5.207 3.67 3.67 0 0 1-2.594 1.077L6.21 12.581a1.98 1.98 0 0 1-2.228.143l-.542.544a1.5 1.5 0 0 0-.44 1.06v.172a.5.5 0 0 1-1 0v-.171a2.5 2.5 0 0 1 .733-1.768l.543-.544a1.98 1.98 0 0 1 .143-2.227l3.149-4.05a3.67 3.67 0 0 1 1.079-2.594m-3.439 7.258a.99.99 0 0 0 1.39 1.388l3.298-2.568a3.83 3.83 0 0 1-2.099-2.15z" /></SvgRoot>;
});
export default IconMicrophoneMusic;
