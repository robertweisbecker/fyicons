import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.25 9.75-3.5 3.5m0-3.5 3.5 3.5M9.5 4.5h4m-11 7h4m-2-9v4m2-2h-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 9.5h.01m-.01 4h.01" /></SvgRoot>;
});
export default IconMath;
