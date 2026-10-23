import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglassSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglassSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.49991 1.5L4.50005 4.3076C4.50014 5.93374 5.49018 7.39603 7 8L6.38567 8.24568C5.24653 8.70125 4.49957 9.80454 4.49966 11.0314L4.49991 14.5" stroke="currentColor" strokeLinejoin="round" /><path d="M12.5 1.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 14.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 1.5V4.30742C11.5 5.93364 10.5099 7.39603 9 8L9.61424 8.24567C10.7533 8.70125 11.5002 9.80449 11.5002 11.0313L11.5 14.5" stroke="currentColor" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHourglassSimple;
