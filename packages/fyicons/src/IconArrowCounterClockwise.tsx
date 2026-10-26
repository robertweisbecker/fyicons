import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCounterClockwise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCounterClockwise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.376 1.03a7 7 0 0 1 7.375 5.12 7.002 7.002 0 0 1-8.482 8.633 7 7 0 0 1-5.251-7.282.501.501 0 0 1 .998.071 6 6 0 0 0 4.5 6.242 6.001 6.001 0 0 0 4.906-10.742 6.004 6.004 0 0 0-7.273.327l.747.747A.5.5 0 0 1 4.542 5H2.5a.5.5 0 0 1-.5-.5V2.457a.5.5 0 0 1 .854-.354l.587.587a7 7 0 0 1 3.936-1.66" /></SvgRoot>;
});
export default IconArrowCounterClockwise;
