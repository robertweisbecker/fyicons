import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointUp = React.forwardRef<SVGSVGElement, IconProps>(function IconPointUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.1221 3.60947L2.80665 11.5211C2.44317 12.1875 2.92548 13 3.68454 13H12.3155C13.0745 13 13.5568 12.1875 13.1934 11.5211L8.8779 3.60948C8.49888 2.91461 7.50112 2.91461 7.1221 3.60947Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointUp;
