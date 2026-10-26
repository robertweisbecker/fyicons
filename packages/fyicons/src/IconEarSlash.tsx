import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEarSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEarSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 11-2.728 2.83A2.193 2.193 0 0 1 4.5 12.306V6a4.5 4.5 0 0 1 9 0v.176a5.6 5.6 0 0 1-1.643 3.967z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.5V6a1.5 1.5 0 1 0-3 0v.621c0 .563.223 1.102.621 1.5L8.5 8.5m-2 2a2 2 0 0 0 2-2m-7-7 13 13" /></SvgRoot>;
});
export default IconEarSlash;
