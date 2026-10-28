import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseModern = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseModern(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={7} y={4} width={2} height={3} rx={1} fill="currentColor" /><path d="M3.5 4.5C3.5 2.84315 4.84315 1.5 6.5 1.5H9.5C11.1569 1.5 12.5 2.84315 12.5 4.5V10.5C12.5 12.7091 10.7091 14.5 8.5 14.5H7.5C5.29086 14.5 3.5 12.7091 3.5 10.5V4.5Z" stroke="currentColor" /></SvgRoot>;
});
export default IconMouseModern;
