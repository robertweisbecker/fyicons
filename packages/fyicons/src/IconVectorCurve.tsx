import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9-10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.5h-3a4 4 0 0 0-4 4v3" /></SvgRoot>;
});
export default IconVectorCurve;
