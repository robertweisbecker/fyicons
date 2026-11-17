import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMicrophoneNarrow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneNarrow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="microphone-narrow"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 8V4a1.5 1.5 0 1 0-3 0v4a1.5 1.5 0 1 0 3 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 6.5V8a3.5 3.5 0 1 1-7 0V6.5M8 12v1" /><path stroke="currentColor" strokeLinecap="round" d="M9.5 13.5h-3" />{props.children}</SvgRoot>;
});
export default IconMicrophoneNarrow;
