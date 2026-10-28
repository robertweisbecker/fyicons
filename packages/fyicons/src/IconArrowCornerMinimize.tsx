import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerMinimize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerMinimize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-corner-minimize"><path fill="currentColor" d="M2 10.5a.5.5 0 0 1 1 0v1A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm.146-7.646a.5.5 0 1 1 .708-.707l4.145 4.146V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h2.793z" /></SvgRoot>;
});
export default IconArrowCornerMinimize;
