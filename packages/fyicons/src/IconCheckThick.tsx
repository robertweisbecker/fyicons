import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckThick = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThick(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check-thick"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75 3.75 4.5 6.75-9.5" /></SvgRoot>;
});
export default IconCheckThick;
