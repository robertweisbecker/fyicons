import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsSwap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsSwap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-swap"><path fill="currentColor" d="M4.146 4.147a.5.5 0 0 0 0 .707l2 2a.5.5 0 0 0 .707-.707L5.706 5H10.5A3.5 3.5 0 0 1 14 8.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 0 10.5 4H5.706l1.147-1.146a.5.5 0 0 0-.707-.707zM.999 7.5a4.5 4.5 0 0 0 4.5 4.5h4.793l-1.146 1.147a.5.5 0 0 0 .707.707l2-2a.5.5 0 0 0 0-.707l-2-2a.5.5 0 1 0-.707.707L10.292 11H5.499a3.5 3.5 0 0 1-3.5-3.5.5.5 0 0 0-1 0" /></SvgRoot>;
});
export default IconArrowsSwap;
