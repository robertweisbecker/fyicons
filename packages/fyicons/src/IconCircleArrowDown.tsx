import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 2a.5.5 0 0 1 .5.5v5.793l1.646-1.647a.5.5 0 1 1 .707.708l-2.5 2.5a.5.5 0 0 1-.707 0l-2.5-2.5a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" /></SvgRoot>;
});
export default IconCircleArrowDown;
