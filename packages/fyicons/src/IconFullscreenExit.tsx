import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFullscreenExit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreenExit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V11H2.5a.5.5 0 0 1 0-1zm8 0a.5.5 0 0 1 0 1H11v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm-8-8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H5V2.5a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5V5h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconFullscreenExit;
