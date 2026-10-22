import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 4.58754C3.0002 3.89652 3.76063 3.47517 4.34668 3.84145L9.80566 7.25356C10.3571 7.59822 10.3571 8.40205 9.80566 8.74672L4.34668 12.1588C3.76067 12.5251 3.0003 12.1037 3 11.4127V4.58754ZM12.5 4.00063C12.7761 4.00063 13 4.22448 13 4.50063V11.5006C12.9997 11.7765 12.776 12.0006 12.5 12.0006H11.5C11.224 12.0006 11.0003 11.7765 11 11.5006V4.50063C11 4.22448 11.2239 4.00063 11.5 4.00063H12.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconSkipForwardFill;
