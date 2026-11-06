import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconViewCenter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconViewCenter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="view-center"><path fill="currentColor" d="M2.5 10a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1H12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5M9 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zM12 2a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconViewCenter;
