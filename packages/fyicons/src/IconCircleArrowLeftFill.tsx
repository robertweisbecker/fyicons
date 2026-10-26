import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowLeftFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowLeftFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.146 4.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0-.083.113.5.5 0 0 0-.054.339q.016.076.054.142.034.061.083.114l2.5 2.5a.5.5 0 1 0 .708-.707L6.207 8.5H11.5a.5.5 0 0 0 0-1H6.207l1.647-1.646a.5.5 0 0 0 0-.708" /></SvgRoot>;
});
export default IconCircleArrowLeftFill;
