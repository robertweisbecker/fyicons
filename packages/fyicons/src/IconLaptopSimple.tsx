import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1046 3 14 3.89543 14 5V10.0869C14.5823 10.293 15 10.8471 15 11.5V12.5C15 13.3284 14.3284 14 13.5 14H2.5C1.67157 14 1 13.3284 1 12.5V11.5C1 10.8471 1.41766 10.293 2 10.0869V5C2 3.89543 2.89543 3 4 3H12ZM2.5 11C2.22386 11 2 11.2239 2 11.5V12.5C2 12.7761 2.22386 13 2.5 13H13.5C13.7761 13 14 12.7761 14 12.5V11.5C14 11.2239 13.7761 11 13.5 11H2.5ZM4 4C3.44772 4 3 4.44772 3 5V10H13V5C13 4.44772 12.5523 4 12 4H4Z" fill="currentColor" /></SvgRoot>;
});
export default IconLaptopSimple;
