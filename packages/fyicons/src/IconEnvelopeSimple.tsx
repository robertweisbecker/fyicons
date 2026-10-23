import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3H12ZM9.3457 9.45312C8.58287 10.1466 7.41713 10.1466 6.6543 9.45312L3 6.12988V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6.12988L9.3457 9.45312ZM4 4C3.51697 4 3.114 4.34248 3.02051 4.79785L7.32715 8.71289C7.70857 9.05964 8.29143 9.05964 8.67285 8.71289L12.9785 4.79785C12.885 4.34258 12.483 4 12 4H4Z" fill="currentColor" /></SvgRoot>;
});
export default IconEnvelopeSimple;
