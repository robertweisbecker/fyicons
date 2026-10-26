import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleXFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleXFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.854 4.146a.5.5 0 0 0-.707 0L8 7.293 5.854 5.146a.5.5 0 1 0-.708.708L7.293 8l-2.147 2.146a.5.5 0 1 0 .708.707L8 8.708l2.146 2.146a.5.5 0 1 0 .707-.707L8.708 8l2.146-2.146a.5.5 0 0 0 0-.708" /></SvgRoot>;
});
export default IconCircleXFill;
