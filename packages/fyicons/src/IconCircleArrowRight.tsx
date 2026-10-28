import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-arrow-right"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m.646 3.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.708-.707L10.293 8.5H4.5a.5.5 0 0 1 0-1h5.793L8.646 5.854a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconCircleArrowRight;
