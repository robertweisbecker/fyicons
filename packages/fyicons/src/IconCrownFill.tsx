import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.975 12q.024.12.025.25v.5c0 .69-.56 1.25-1.25 1.25h-5.5C4.56 14 4 13.44 4 12.75v-.5q0-.13.025-.25zM8 2.75a1.25 1.25 0 0 1 .822 2.19l1.01 1.765a.5.5 0 0 0 .504.247l1.928-.276a1.25 1.25 0 1 1 .84 1.009L12 11H4L2.895 7.685A1.246 1.246 0 0 1 1.25 6.5a1.25 1.25 0 1 1 2.485.176l1.93.276a.5.5 0 0 0 .504-.247L7.177 4.94A1.25 1.25 0 0 1 8 2.75" /></SvgRoot>;
});
export default IconCrownFill;
