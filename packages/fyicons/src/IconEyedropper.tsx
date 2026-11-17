import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyedropper = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyedropper(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eyedropper"><path fill="currentColor" d="M9.015 3.075a2.82 2.82 0 0 1 4.339-.428l.113.12a2.82 2.82 0 0 1-.408 4.122l-.135.096-1.941 1.292.37.37.083.091a1.208 1.208 0 0 1-1.698 1.699l-.092-.083-.68-.681-4.945 4.048a1.239 1.239 0 0 1-2.02-.957c0-.286.098-.563.279-.784l4.046-4.947-.68-.68a1.207 1.207 0 0 1 1.708-1.706l.367.367zm-5.96 9.539a.237.237 0 0 0 .332.332l4.868-3.983-1.22-1.22z" />{props.children}</SvgRoot>;
});
export default IconEyedropper;
