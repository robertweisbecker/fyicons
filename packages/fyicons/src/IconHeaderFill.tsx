import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeaderFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="header-fill"><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM2 7V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V7H2Z" fill="currentColor" /></SvgRoot>;
});
export default IconHeaderFill;
