import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7 1a6 6 0 0 1 4.58 9.873l3.272 3.273a.5.5 0 1 1-.707.706l-3.272-3.272A6 6 0 1 1 7 1m0 1a5 5 0 1 0 0 10A5 5 0 0 0 7 2" /></SvgRoot>;
});
export default IconSearchLg;
