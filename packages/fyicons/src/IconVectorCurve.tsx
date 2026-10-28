import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7-8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 4.5a5 5 0 0 0-5 5" /></SvgRoot>;
});
export default IconVectorCurve;
