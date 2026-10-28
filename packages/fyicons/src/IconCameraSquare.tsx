import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCameraSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCameraSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 6.41915V11.5C2.5 12.6046 3.39543 13.5 4.5 13.5H11.5C12.6046 13.5 13.5 12.6046 13.5 11.5V6.41915C13.5 5.45258 12.8088 4.62432 11.8578 4.45141L10.75 4.25L9.94867 3.12814C9.66711 2.73395 9.2125 2.5 8.72807 2.5H7.27193C6.7875 2.5 6.33289 2.73395 6.05133 3.12814L5.25 4.25L4.14223 4.45141C3.19125 4.62432 2.5 5.45258 2.5 6.41915Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={5.5} y={6.5} width={5} height={5} rx={2.5} stroke="currentColor" /></SvgRoot>;
});
export default IconCameraSquare;
