import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridLines = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridLines(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-lines"><path fill="currentColor" fillOpacity={0.9} d="M13.5 1a.5.5 0 0 1 .5.5V2h.5a.5.5 0 0 1 0 1H14v4.5h.5a.5.5 0 0 1 0 1H14V13h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V14H8.5v.5a.5.5 0 0 1-1 0V14H3v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1H2V8.5h-.5a.5.5 0 0 1 0-1H2V3h-.5a.5.5 0 0 1 0-1H2v-.5a.5.5 0 0 1 1 0V2h4.5v-.5a.5.5 0 0 1 1 0V2H13v-.5a.5.5 0 0 1 .5-.5M3 13h4.5V8.5H3zm5.5 0H13V8.5H8.5zM3 7.5h4.5V3H3zm5.5 0H13V3H8.5z" /></SvgRoot>;
});
export default IconGridLines;
