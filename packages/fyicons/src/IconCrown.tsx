import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="crown"><path fill="currentColor" d="M8 2.5a1.5 1.5 0 0 1 .959 2.652l1.052 1.802 1.996-.308A2 2 0 0 0 12 6.5a1.5 1.5 0 1 1 1.202 1.47l-1 3.005a1.5 1.5 0 0 1-.325.545A1 1 0 0 1 12 12v.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5V12c0-.174.044-.338.122-.48a1.5 1.5 0 0 1-.324-.545L2.796 7.97Q2.652 8 2.5 8a1.5 1.5 0 1 1 1.492-1.354l1.997.308 1.05-1.803A1.5 1.5 0 0 1 8 2.5m-3 10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V12H5zm3-7-.006-.001-1.14 1.959a1 1 0 0 1-1.016.484l-2.105-.324 1.013 3.04a.5.5 0 0 0 .475.342h5.558a.5.5 0 0 0 .475-.342l1.012-3.04-2.104.324a1 1 0 0 1-1.016-.484L8.003 5.499zM2.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m11 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8 3.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconCrown;
