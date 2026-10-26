import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListExpand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListExpand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.647 10.65a.5.5 0 1 1 .707.707l-1.998 1.998a.5.5 0 0 1-.708 0L9.65 11.357a.5.5 0 0 1 .707-.707l1.645 1.644zM6.502 12a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm5.146-3.352a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.706L12.002 3.71l-1.646 1.645a.5.5 0 0 1-.707-.707zM6.502 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListExpand;
