import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.708 1.438a2 2 0 0 1 2.585 0l5.288 4.476A1.183 1.183 0 0 1 13.817 8h-.816v4.25a1.75 1.75 0 0 1-1.75 1.75H10v-4a2 2 0 1 0-4 0v4H4.751a1.75 1.75 0 0 1-1.75-1.75L3.002 8h-.818a1.184 1.184 0 0 1-.764-2.086zM8 9a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1" /></SvgRoot>;
});
export default IconHomeFill;
