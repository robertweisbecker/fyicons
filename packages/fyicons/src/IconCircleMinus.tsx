import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-minus"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.5 5.813a.562.562 0 1 1 0 1.125h-5a.563.563 0 0 1 0-1.126z" /></SvgRoot>;
});
export default IconCircleMinus;
