import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideoCameraFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideoCameraFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="video-camera-fill"><path d="M9 3C10.1046 3 11 3.89543 11 5V5.99902L13.4004 4.2002C14.0596 3.70596 15 4.17602 15 5V11C15 11.824 14.0596 12.294 13.4004 11.7998L11 10V11C11 12.1046 10.1046 13 9 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H9Z" fill="currentColor" /></SvgRoot>;
});
export default IconVideoCameraFill;
