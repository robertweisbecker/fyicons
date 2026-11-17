import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutMeasure = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutMeasure(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-measure"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={1.5} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M7.5 4.5v2m0 2v2m1-6h-2m2 7h-2m-2-4h2m2 0h2m-6-1v2m7-2v2" />{props.children}</SvgRoot>;
});
export default IconLayoutMeasure;
