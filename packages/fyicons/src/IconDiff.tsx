import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiff = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiff(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="diff"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm6 7a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1h-1V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5" /></SvgRoot>;
});
export default IconDiff;
