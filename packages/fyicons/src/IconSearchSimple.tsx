import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="search-simple"><path fill="currentColor" d="M7 1a6 6 0 0 1 4.58 9.873l3.274 3.274a.5.5 0 1 1-.707.707l-3.274-3.274A6 6 0 1 1 7 1m0 1a5 5 0 1 0 0 10A5 5 0 0 0 7 2" /></SvgRoot>;
});
export default IconSearchSimple;
