import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseModern = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseModern(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><rect width={2} height={3} x={7} y={4} fill="currentColor" rx={1} /><path stroke="currentColor" d="M3.5 4.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4z" /></SvgRoot>;
});
export default IconMouseModern;
