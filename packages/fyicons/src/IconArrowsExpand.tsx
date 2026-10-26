import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsExpand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsExpand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.146 9.146a.5.5 0 1 1 .708.708L3.707 13H6.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793zM13.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V3.707L9.854 6.854a.5.5 0 1 1-.708-.708L12.293 3H9.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowsExpand;
