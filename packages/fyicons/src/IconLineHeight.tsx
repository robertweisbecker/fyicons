import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineHeight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineHeight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="line-height"><path fill="currentColor" d="M4.226 2.082a.5.5 0 0 1 .628.064l2 2a.5.5 0 0 1-.707.707L5.001 3.707v8.586l1.146-1.147a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707l1.147 1.147V3.707L2.854 4.853a.5.5 0 0 1-.707-.707l2-2zM13.5 12a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconLineHeight;
