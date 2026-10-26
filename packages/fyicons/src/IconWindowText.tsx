import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWindowText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWindowText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.5 10a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1H12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5m-5 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM5.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zm5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM12 2a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconWindowText;
