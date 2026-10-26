import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridColumns = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumns(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" fillOpacity={0.9} d="M12.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 0 1H13v8h.5a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-1 0V13H8.5v.5a.5.5 0 0 1-1 0V13H4v.5a.5.5 0 0 1-1 0V13h-.5a.5.5 0 0 1 0-1H3V4h-.5a.5.5 0 0 1 0-1H3v-.5a.5.5 0 0 1 1 0V3h3.5v-.5a.5.5 0 0 1 1 0V3H12v-.5a.5.5 0 0 1 .5-.5M4 12h3.5V4H4zm4.5 0H12V4H8.5z" /></SvgRoot>;
});
export default IconGridColumns;
