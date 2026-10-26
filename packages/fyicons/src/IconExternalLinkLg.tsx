import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExternalLinkLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExternalLinkLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3.707L7.854 8.854a.5.5 0 1 1-.708-.708L12.293 3H8.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconExternalLinkLg;
