import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBorderInner = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBorderInner(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm0 7a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H5a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5m4 1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm3-1a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5m-7-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m7 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-6-3a.5.5 0 0 1 0 1H5v.5a.5.5 0 0 1-1 0V5a1 1 0 0 1 1-1zM11 4a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V5h-.5a.5.5 0 0 1 0-1zM8.5 4a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBorderInner;
