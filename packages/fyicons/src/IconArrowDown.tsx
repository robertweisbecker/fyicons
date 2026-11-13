import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-down"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2.5V13M3.5 8.5 8 13l4.5-4.5" /></SvgRoot>;
});
export default IconArrowDown;
