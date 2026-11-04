import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRays = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRays(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="rays"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 1.5v2m4.596-.096-1.414 1.414M14.5 8h-2m.096 4.596-1.414-1.414M8 14.5v-2m-4.596.096 1.414-1.414M1.5 8h2m-.096-4.596 1.414 1.414" /></SvgRoot>;
});
export default IconRays;
