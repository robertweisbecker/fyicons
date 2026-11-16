import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="crown"><path fill="currentColor" d="M8 1.75a1.75 1.75 0 0 1 .877 3.263l1.134 1.941 1.996-.308A2 2 0 0 0 12 6.5a1.5 1.5 0 1 1 1.201 1.47h.002L12 11.583v.918a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5v-.918L2.796 7.971h-.001Q2.652 8 2.5 8a1.5 1.5 0 1 1 1.492-1.354l1.997.308 1.132-1.942A1.748 1.748 0 0 1 8 1.75M5 12.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V12H5zm1.854-5.042a1 1 0 0 1-1.016.484l-2.105-.324L4.86 11h6.28l1.126-3.382-2.104.324a1 1 0 0 1-1.016-.484L8 5.492zM2.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m11 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" /></SvgRoot>;
});
export default IconCrown;
