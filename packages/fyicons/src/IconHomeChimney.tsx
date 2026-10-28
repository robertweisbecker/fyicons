import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeChimney = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeChimney(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.215 2.242a1.25 1.25 0 0 1 1.571 0L11 4.03v-.531a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2.146l1.815 1.467a.5.5 0 0 1-.628.777L13 6.93v4.97c0 .271 0 .505-.016.697a1.5 1.5 0 0 1-.147.583 1.5 1.5 0 0 1-.656.656 1.5 1.5 0 0 1-.583.148c-.192.016-.426.015-.698.015H5.1c-.272 0-.506 0-.698-.015a1.5 1.5 0 0 1-.583-.148 1.5 1.5 0 0 1-.656-.656 1.5 1.5 0 0 1-.147-.583C3 12.406 3 12.171 3 11.9V6.932l-1.185.957a.5.5 0 0 1-.628-.777zm.942.777a.25.25 0 0 0-.313 0L4 6.124V11.9c0 .287 0 .474.012.615a.5.5 0 0 0 .043.211c.048.094.124.17.218.219a.6.6 0 0 0 .211.043c.142.011.328.011.616.011H6v-3a1 1 0 0 1 1-1h2l.103.004c.503.052.897.478.897.996v3h.9c.287 0 .473 0 .615-.011a.6.6 0 0 0 .21-.043.5.5 0 0 0 .22-.219.6.6 0 0 0 .042-.21c.012-.142.012-.329.012-.616V6.123zm-1.156 9.98h2v-3h-2z" /></SvgRoot>;
});
export default IconHomeChimney;
