import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-check"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.071 3.243a.5.5 0 0 1 .858.514l-3 5a.5.5 0 0 1-.783.097l-2-2a.5.5 0 1 1 .708-.708L7.4 9.693z" /></SvgRoot>;
});
export default IconCircleCheck;
