import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotification = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotification(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5 8.5V9.5C13.5 10.9001 13.5 11.6002 13.2275 12.135C12.9878 12.6054 12.6054 12.9878 12.135 13.2275C11.6002 13.5 10.9001 13.5 9.5 13.5H6.5C5.09987 13.5 4.3998 13.5 3.86502 13.2275C3.39462 12.9878 3.01217 12.6054 2.77248 12.135C2.5 11.6002 2.5 10.9001 2.5 9.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H7.5" stroke="currentColor" strokeLinecap="round" /><circle cx={12.5} cy={3.5} r={2.5} fill="currentColor" /></SvgRoot>;
});
export default IconNotification;
