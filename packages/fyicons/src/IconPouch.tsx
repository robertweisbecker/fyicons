import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPouch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPouch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 2a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 .5-.5zM13 7.496A2.5 2.5 0 0 1 11.5 8h-7A2.5 2.5 0 0 1 3 7.496V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM3 5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V3H3zM8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconPouch;
