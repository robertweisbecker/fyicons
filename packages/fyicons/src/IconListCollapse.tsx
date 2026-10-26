import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListCollapse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.502 12a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm5.146-2.353a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707l-1.646-1.647-1.647 1.647a.5.5 0 1 1-.707-.707zM6.502 9a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1zm7.146-2.352a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .707-.707l1.647 1.646zM6.502 3a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListCollapse;
