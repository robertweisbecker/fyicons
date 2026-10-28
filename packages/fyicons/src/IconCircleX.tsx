import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-x"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.146 3.146a.5.5 0 1 1 .707.708L8.708 8l2.146 2.146a.5.5 0 1 1-.707.707L8 8.708l-2.146 2.146a.5.5 0 1 1-.708-.707L7.293 8 5.146 5.854a.5.5 0 1 1 .708-.708L8 7.293z" /></SvgRoot>;
});
export default IconCircleX;
