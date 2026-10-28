import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlusThick = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlusThick(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="plus-thick"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 8h8.5M8 3.75v8.5" /></SvgRoot>;
});
export default IconPlusThick;
