import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsSync = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsSync(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-sync"><path fill="currentColor" d="M12 4.23c0-.384.394-.638.716-.43A5 5 0 0 1 10 13H7.706l1.148 1.147a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707L7.708 12h2.293a4 4 0 0 0 2.259-7.3.58.58 0 0 1-.26-.47M7.146 1.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707L8.294 4H6.001a4 4 0 0 0-2.26 7.298.58.58 0 0 1 .259.47c0 .384-.393.636-.715.428A4.99 4.99 0 0 1 1 8a5 5 0 0 1 5.001-5h2.291L7.146 1.854a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconArrowsSync;
