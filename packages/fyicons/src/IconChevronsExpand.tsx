import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsExpand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsExpand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.5 12.035a.5.5 0 0 1 0 1H3.464a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 1 0v3.535zm5.388-8.925a.5.5 0 0 1 .146.354v4.035a.5.5 0 1 1-1 0V3.964H8.5a.5.5 0 0 1 0-1h4.035c.133 0 .26.053.354.146" /></SvgRoot>;
});
export default IconChevronsExpand;
