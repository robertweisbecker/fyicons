import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyedropper = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyedropper(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eyedropper"><path fill="currentColor" d="M9.015 3.075a2.82 2.82 0 0 1 4.339-.428l.113.12a2.82 2.82 0 0 1-.408 4.122l-.135.095-1.941 1.292.37.37.083.092a1.208 1.208 0 0 1-1.698 1.699l-.092-.083-.68-.681-4.945 4.048A1.238 1.238 0 0 1 2.28 11.98l4.046-4.947-.68-.68a1.207 1.207 0 0 1 1.708-1.706l.367.367zm-5.96 9.538a.237.237 0 0 0 .183.387c.054 0 .107-.02.15-.054l4.867-3.983-1.22-1.22z" /></SvgRoot>;
});
export default IconEyedropper;
