import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutRowTop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutRowTop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-row-top"><path fill="currentColor" d="M14 12a2 2 0 0 1-2 2h-.499a.5.5 0 1 1 0-1H12a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0zm-3.999 1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5M2.5 11a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.501a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5M14 9.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zM2.5 8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M12 2a2 2 0 0 1 2 2v2.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.499a.5.5 0 1 1 0-1zM4.501 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zm5 0a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1z" /><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v2h10V4a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconLayoutRowTop;
