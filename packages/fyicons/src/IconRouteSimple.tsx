import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRouteSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRouteSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="route-simple"><rect width={4} height={4} x={2.501} y={1.5} stroke="currentColor" rx={2} /><rect width={4} height={4} x={9.5} y={10.5} stroke="currentColor" rx={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5v.265a2 2 0 0 0 1.717 1.98l3.566.51a2 2 0 0 1 1.717 1.98v.265" />{props.children}</SvgRoot>;
});
export default IconRouteSimple;
