import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="laptop-simple"><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v6h.5a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5a.5.5 0 0 1 .5-.5H2V5a2 2 0 0 1 2-2zM4 4a1 1 0 0 0-1 1v6h10V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconLaptopSimple;
