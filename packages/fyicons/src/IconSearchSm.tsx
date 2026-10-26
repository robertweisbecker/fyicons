import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.249 10.249 3.25 3.25" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" /></SvgRoot>;
});
export default IconSearchSm;
