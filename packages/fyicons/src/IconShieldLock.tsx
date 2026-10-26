import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldLock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldLock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.324 1.243a2 2 0 0 1 1.351 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.508l-.24 3.776a6.5 6.5 0 0 1-2.502 4.72l-2.572 1.998-.142.092c-.294.157-.65.157-.943 0l-.142-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.461l.115-.047zm1.014.941a1 1 0 0 0-.676 0L3.4 3.714a.5.5 0 0 0-.33.502l.241 3.778a5.5 5.5 0 0 0 2.116 3.994L8 13.985l2.572-1.997a5.5 5.5 0 0 0 2.116-3.994l.241-3.778a.5.5 0 0 0-.33-.502zM8 4.002a2 2 0 0 1 2 2v1.133a1 1 0 0 1 .499.865v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 .5-.867V6.002a2 2 0 0 1 2-2M8 8a.497.497 0 0 0-.25.93v.82a.25.25 0 0 0 .5 0v-.82A.498.498 0 0 0 8 8m0-3a1 1 0 0 0-1 1v1h2v-.998c0-.552-.449-1-1-1" /></SvgRoot>;
});
export default IconShieldLock;
