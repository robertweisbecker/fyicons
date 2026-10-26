import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutPinned = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPinned(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6.293-.5a1 1 0 0 1 1.414 0L14.5 2.793a1 1 0 0 1 0 1.414l-1.5 1.5v1.586c0 .89-1.077 1.337-1.707.707L10 6.707 7.854 8.854a.5.5 0 0 1-.708-.707L9.293 6 8 4.707C7.37 4.077 7.816 3 8.707 3h1.586z" /></SvgRoot>;
});
export default IconLayoutPinned;
