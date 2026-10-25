import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWatch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWatch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 14C11 14.5523 10.5523 15 10 15H6C5.44772 15 5 14.5523 5 14V11.3525C5.79623 12.0655 6.84708 12.5 8 12.5C9.15292 12.5 10.2038 12.0655 11 11.3525V14ZM10 1C10.5523 1 11 1.44772 11 2V4.64648C10.2038 3.93375 9.15269 3.5 8 3.5C6.84731 3.5 5.79617 3.93375 5 4.64648V2C5 1.44772 5.44772 1 6 1H10Z" fill="currentColor" /><circle cx={8} cy={8} r={4.5} stroke="currentColor" /><path d="M8.5 5.5V8.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 8H13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconWatch;
