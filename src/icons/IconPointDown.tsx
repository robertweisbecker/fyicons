import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.1221 12.3905L2.80665 4.47885C2.44317 3.81248 2.92548 3 3.68454 3H12.3155C13.0745 3 13.5568 3.81248 13.1934 4.47885L8.8779 12.3905C8.49888 13.0854 7.50112 13.0854 7.1221 12.3905Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointDown;
