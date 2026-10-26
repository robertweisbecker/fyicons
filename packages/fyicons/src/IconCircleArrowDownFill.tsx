import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowDownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowDownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 3a.5.5 0 0 0-.5.5v5.293L5.854 8.146a.5.5 0 1 0-.708.708l2.5 2.5q.052.05.113.082a.5.5 0 0 0 .339.054.5.5 0 0 0 .142-.055.5.5 0 0 0 .114-.082l2.5-2.5a.5.5 0 1 0-.707-.707L8.5 9.793V4.5A.5.5 0 0 0 8 4" /></SvgRoot>;
});
export default IconCircleArrowDownFill;
