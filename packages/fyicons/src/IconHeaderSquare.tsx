import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeaderSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="header-square"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM3 7v4.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V7zm1.5-4A1.5 1.5 0 0 0 3 4.5V6h10V4.5A1.5 1.5 0 0 0 11.5 3z" /></SvgRoot>;
});
export default IconHeaderSquare;
