import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="point-down"><path d="M7.1221 13.3905L2.80665 5.47885C2.44317 4.81248 2.92548 4 3.68454 4H12.3155C13.0745 4 13.5568 4.81248 13.1934 5.47885L8.8779 13.3905C8.49888 14.0854 7.50112 14.0854 7.1221 13.3905Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointDown;
