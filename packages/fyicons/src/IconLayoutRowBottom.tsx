import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutRowBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutRowBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-row-bottom"><path fill="currentColor" d="M14.001 12a2 2 0 0 1-2 2h-.5a.5.5 0 1 1 0-1h.5a1 1 0 0 0 1-1v-1.5a.5.5 0 1 1 1 0zm-4 1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5m-7.5-3.5a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1h-.5a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 .5-.5m11.5-2.5a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0zM2.501 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m9.5-4a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 1 1 0-1zm-7.5 0a.5.5 0 0 1 0 1h-.5a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zm5 0a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1z" /><path fill="currentColor" d="M13.5 9a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 .5-.5zM3 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2H3z" /></SvgRoot>;
});
export default IconLayoutRowBottom;
