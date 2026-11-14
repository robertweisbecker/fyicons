import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="math"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 9.5-4 4m0-4 4 4m-4-9h5M2 11.5h5m-2.5-9v4m2-2h-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 9.5h.01m-.01 4h.01" /></SvgRoot>;
});
export default IconMath;
