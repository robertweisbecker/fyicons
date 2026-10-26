import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.146 8.146a.5.5 0 0 1 .708 0l2.887 2.888a1 1 0 1 1-.707.707L4.146 8.854a.5.5 0 0 1 0-.708M8 2a7 7 0 0 1 6.063 10.5.5.5 0 0 1-.867-.5 6 6 0 1 0-10.392 0 .5.5 0 0 1-.866.5A7 7 0 0 1 8 2m2.5 9a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m1-2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5.5 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m5 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M8 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /></SvgRoot>;
});
export default IconGaugeLow;
