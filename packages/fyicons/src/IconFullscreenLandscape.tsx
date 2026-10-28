import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFullscreenLandscape = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreenLandscape(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fullscreen-landscape"><path fill="currentColor" d="M1.5 9a.5.5 0 0 1 .5.5V12h3.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1h-3.5a.5.5 0 0 1 0-1H14V9.5a.5.5 0 0 1 .5-.5m-9-6a.5.5 0 0 1 0 1H2v2.5a.5.5 0 0 1-1 0V4a1 1 0 0 1 1-1zM14 3a1 1 0 0 1 1 1v2.5a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconFullscreenLandscape;
