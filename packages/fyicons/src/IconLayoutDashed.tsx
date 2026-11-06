import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutDashed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutDashed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-dashed"><path fill="currentColor" d="M2.5 11a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5m6 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm5-2a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 .5-.5m-7-3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-4-1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5m-7-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H6V4.5a.5.5 0 0 1 .5-.5m5 2a.5.5 0 1 1 0 1h-3a.5.5 0 0 1 0-1zm-7-4a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zM12 2a2 2 0 0 1 2 2v.5a.5.5 0 1 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM8.5 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconLayoutDashed;
