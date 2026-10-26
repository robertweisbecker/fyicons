import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFullscreen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.5 10a.5.5 0 0 1 .5.5V13h2.5a.5.5 0 0 1 0 1H3a1 1 0 0 1-1-1v-2.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V13a1 1 0 0 1-1 1h-2.5a.5.5 0 0 1 0-1H13v-2.5a.5.5 0 0 1 .5-.5m-8-8a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0V3a1 1 0 0 1 1-1zM13 2a1 1 0 0 1 1 1v2.5a.5.5 0 0 1-1 0V3h-2.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconFullscreen;
