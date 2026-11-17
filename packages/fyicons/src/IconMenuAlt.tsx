import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-alt"><path stroke="currentColor" strokeLinecap="round" d="M2.5 3.5h9m-9 10h5m-5-5h12" /></SvgRoot>;
});
export default IconMenuAlt;
