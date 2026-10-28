import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilterLines = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilterLines(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="filter-lines"><path fill="currentColor" d="M9.5 12a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM12 7.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1zM14.5 3a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconFilterLines;
