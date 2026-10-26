import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendStraight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendStraight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.14 4.423c-.553-1.494 1.016-2.89 2.436-2.167l8.65 4.408c1.092.556 1.092 2.117 0 2.673l-8.65 4.408c-1.42.723-2.989-.673-2.437-2.167L3.464 8zm1.982-1.275a.75.75 0 0 0-1.044.929L4.345 7.5h4.152a.5.5 0 1 1 0 1H4.345l-1.267 3.424c-.237.64.436 1.239 1.044.929l8.651-4.407a.5.5 0 0 0 0-.89z" /></SvgRoot>;
});
export default IconSendStraight;
