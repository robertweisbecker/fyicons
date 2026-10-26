import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFullscreenExitLandscape = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreenExitLandscape(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.5 9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V10H1.5a.5.5 0 0 1 0-1zm8 0a.5.5 0 0 1 0 1H10v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm-8-6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5V6h4.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconFullscreenExitLandscape;
