import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSun = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSun(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 12m-3.854-.854a.5.5 0 1 1 .708.707l-1.5 1.5a.5.5 0 1 1-.708-.707zm7 0a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3.5 7.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm11 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM2.646 2.646a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708m10 0a.5.5 0 1 1 .707.708l-1.5 1.5a.5.5 0 1 1-.707-.708zM8 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconSun;
