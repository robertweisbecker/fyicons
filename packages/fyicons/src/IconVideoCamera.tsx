import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideoCamera = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideoCamera(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="video-camera"><path fill="currentColor" d="M9 3a2 2 0 0 1 2 2v.999L13.4 4.2A1 1 0 0 1 15 5v6a1 1 0 0 1-1.6.8L11 10v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm8.2 3.1a.5.5 0 0 0-.2.4v1a.5.5 0 0 0 .2.4L14 11V5z" /></SvgRoot>;
});
export default IconVideoCamera;
