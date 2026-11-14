import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRaysSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRaysSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="rays-sm"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2.5v2m3.89-.389-1.415 1.414M13.5 8h-2m.39 3.889-1.415-1.414M8 13.5v-2m-3.89.389 1.415-1.414M2.5 8h2m-.39-3.889 1.415 1.414" />{props.children}</SvgRoot>;
});
export default IconRaysSm;
