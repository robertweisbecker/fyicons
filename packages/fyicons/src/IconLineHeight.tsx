import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineHeight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineHeight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.225 2.08a.5.5 0 0 1 .63.065l2 2.001a.5.5 0 0 1-.708.707L5.001 3.707v8.691l1.17-1.024a.5.5 0 1 1 .659.752l-2 1.75a.5.5 0 0 1-.658 0l-2-1.75a.5.5 0 0 1 .658-.752L4 12.398V3.707L2.855 4.853a.5.5 0 0 1-.707-.707l2-2.001zM13.5 12a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconLineHeight;
