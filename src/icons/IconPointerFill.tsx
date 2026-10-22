import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPointerFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M1.93837 3.50136C1.64342 2.54237 2.54188 1.64391 3.50087 1.93886L13.0731 4.88417C14.2078 5.2334 14.2623 6.8193 13.1542 7.2455L8.88661 8.8871L7.24501 13.1547C6.81866 14.2624 5.23302 14.208 4.88368 13.0736L1.93837 3.50136Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointerFill;
