import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={5} height={5} x={9} y={9} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 2 2.598 4.5H8.902zm-7-.5 3 3-3 3-3-3z" /></SvgRoot>;
});
export default IconShapes;
