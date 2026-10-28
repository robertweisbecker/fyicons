import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowDownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowDownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-arrow-down-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 3a.5.5 0 0 0-.5.5v5.793L5.854 8.646a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 1 0-.707-.708L8.5 10.293V4.5A.5.5 0 0 0 8 4" /></SvgRoot>;
});
export default IconCircleArrowDownFill;
