import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideoCameraFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideoCameraFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="video-camera-fill"><path fill="currentColor" d="M9 3a2 2 0 0 1 2 2v.999L13.4 4.2A1 1 0 0 1 15 5v6a1 1 0 0 1-1.6.8L11 10v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></SvgRoot>;
});
export default IconVideoCameraFill;
