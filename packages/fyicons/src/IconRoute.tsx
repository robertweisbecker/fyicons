import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRoute = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRoute(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="route"><rect width={3} height={3} x={2.501} y={2.5} stroke="currentColor" rx={1.5} /><rect width={3} height={3} x={10.5} y={10.5} stroke="currentColor" rx={1.5} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M5.5 3.5h4.75a2.25 2.25 0 0 1 0 4.5h-4.5a2.25 2.25 0 0 0 0 4.5h4.75" />{props.children}</SvgRoot>;
});
export default IconRoute;
