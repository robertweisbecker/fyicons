import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2M6.646 5.146a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 0 1H5.707l1.647 1.646a.5.5 0 1 1-.708.707l-2.5-2.5a.5.5 0 0 1 0-.707z" /></SvgRoot>;
});
export default IconCircleArrowLeft;
