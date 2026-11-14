import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAlert = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAlert(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-alert"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5.875a.64.64 0 0 1 .452.183.6.6 0 0 1 .173.442l-.006.188-.113 3.375L8.5 8.5a.504.504 0 0 1-.5.484.504.504 0 0 1-.5-.483l-.006-.188-.113-3.375-.006-.188a.6.6 0 0 1 .173-.442A.64.64 0 0 1 8 4.125" /></SvgRoot>;
});
export default IconSquareAlert;
