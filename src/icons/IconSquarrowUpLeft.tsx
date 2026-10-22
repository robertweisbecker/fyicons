import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowUpLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUpLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 5.5L10.0858 10.0858C11.3457 11.3457 13.5 10.4534 13.5 8.67157V4.5C13.5 3.39543 12.6046 2.5 11.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V11.5C2.5 12.6046 3.39543 13.5 4.5 13.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 5.5H5.5V9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSquarrowUpLeft;
