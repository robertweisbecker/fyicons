import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldUserSolid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUserSolid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.324 1.242a2 2 0 0 1 1.351 0l4.262 1.53c.629.226 1.033.842.99 1.508l-.24 3.777a6.5 6.5 0 0 1-2.502 4.72l-2.572 1.998-.142.091a1 1 0 0 1-.943 0l-.142-.091-2.572-1.998a6.5 6.5 0 0 1-2.47-4.374l-.03-.346-.242-3.777a1.5 1.5 0 0 1 .875-1.46l.115-.047zm1.014.942a1 1 0 0 0-.676 0L3.4 3.714a.5.5 0 0 0-.33.502l.241 3.777a5.5 5.5 0 0 0 1.795 3.722 2.998 2.998 0 0 1 5.786 0 5.5 5.5 0 0 0 1.796-3.722l.241-3.777a.5.5 0 0 0-.33-.502zM8 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" /></SvgRoot>;
});
export default IconShieldUserSolid;
