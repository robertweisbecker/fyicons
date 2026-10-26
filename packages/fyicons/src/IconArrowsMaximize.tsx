import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsMaximize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsMaximize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.146 9.146a.5.5 0 1 1 .708.708L3.707 13H5.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.793zm3 0a.5.5 0 0 1 .708 0L13 12.293V10.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L9.146 9.854a.5.5 0 0 1 0-.708M5.5 2a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 1 1-.708.708L3 3.707V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3.707L9.854 6.854a.5.5 0 1 1-.708-.708L12.293 3H10.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowsMaximize;
