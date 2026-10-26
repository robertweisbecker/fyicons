import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleNull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m1.646 3.646a.5.5 0 1 1 .707.708l-4 4a.5.5 0 1 1-.707-.708z" /></SvgRoot>;
});
export default IconCircleNull;
