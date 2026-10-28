import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowClockwise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowClockwise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-clockwise"><path d="M8 2C11.3136 2.00013 14 4.6864 14 8H15.3584C15.7939 8.00031 16.0208 8.51866 15.7256 8.83887L13.8672 10.8516C13.6692 11.066 13.3308 11.066 13.1328 10.8516L11.2744 8.83887C10.9792 8.51866 11.2061 8.00031 11.6416 8H13C13 5.23868 10.7613 3.00013 8 3C5.23871 3.00013 3.00003 5.23868 3 8C3.00003 10.7613 5.23871 12.9999 8 13C8.27601 13.0001 8.49997 13.224 8.5 13.5C8.49997 13.776 8.27601 13.9999 8 14C4.68642 13.9999 2.00003 11.3136 2 8C2.00003 4.6864 4.68642 2.00013 8 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowClockwise;
