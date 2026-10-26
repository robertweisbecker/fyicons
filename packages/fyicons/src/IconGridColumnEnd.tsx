import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridColumnEnd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnEnd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" fillOpacity={0.9} d="M2 12.5a.5.5 0 0 0 .5.5H3v.5a.5.5 0 1 0 1 0V13h8v.5a.5.5 0 1 0 1 0V13h.5a.5.5 0 1 0 0-1H13V4h.5a.5.5 0 0 0 0-1H13v-.5a.5.5 0 0 0-1 0V3H4v-.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1H3v8h-.5a.5.5 0 0 0-.5.5M12 4v8H4V4zm-4 6.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5z" /></SvgRoot>;
});
export default IconGridColumnEnd;
