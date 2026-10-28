import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-plus"><path fill="currentColor" d="M6.5 3a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.031A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.651A2.999 2.999 0 0 1 12 14H4.487l-.154-.004H4.32v-.001A3.5 3.5 0 0 1 1 10.5c0-1.433.862-2.66 2.093-3.201A3.5 3.5 0 0 1 6.5 3m0 1a2.5 2.5 0 0 0-2.322 3.423.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .518 4.906l.15.004H12a2 2 0 0 0 .255-3.983.502.502 0 0 1-.407-.667c.097-.268.152-.554.152-.85a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.308A2.5 2.5 0 0 0 6.5 4m1.495 3.5a.5.5 0 0 1 .5.5v.995H9.5a.5.5 0 0 1 0 1H8.495V11a.5.5 0 0 1-1 0V9.995H6.5a.5.5 0 1 1 0-1h.995V8a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCloudPlus;
