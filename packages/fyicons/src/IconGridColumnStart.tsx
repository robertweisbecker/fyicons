import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridColumnStart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnStart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" fillOpacity={0.9} d="M14 12.5a.5.5 0 0 1-.5.5H13v.5a.5.5 0 1 1-1 0V13H4v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1H3V4h-.5a.5.5 0 0 1 0-1H3v-.5a.5.5 0 0 1 1 0V3h8v-.5a.5.5 0 0 1 1 0V3h.5a.5.5 0 0 1 0 1H13v8h.5a.5.5 0 0 1 .5.5M4 4v8h8V4zm4 6.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5z" /></SvgRoot>;
});
export default IconGridColumnStart;
