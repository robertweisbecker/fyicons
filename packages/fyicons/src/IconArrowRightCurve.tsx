import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRightCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRightCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 9.5H5A2.5 2.5 0 0 1 2.5 7V2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 5.5 4 4-4 4" /></SvgRoot>;
});
export default IconArrowRightCurve;
