import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleAlert = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleAlert(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5.875a.64.64 0 0 1 .452.183.6.6 0 0 1 .173.442l-.006.188-.113 3.375L8.5 8.5a.504.504 0 0 1-.5.484.504.504 0 0 1-.5-.483l-.006-.188-.113-3.375-.006-.188a.6.6 0 0 1 .173-.442A.64.64 0 0 1 8 4.125" /></SvgRoot>;
});
export default IconCircleAlert;
