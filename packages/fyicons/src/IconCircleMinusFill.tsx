import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinusFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinusFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-minus-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M4.5 7.813a.563.563 0 0 0 0 1.125h7a.562.562 0 1 0 0-1.126z" /></SvgRoot>;
});
export default IconCircleMinusFill;
