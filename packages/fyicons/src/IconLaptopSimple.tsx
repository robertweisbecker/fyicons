import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v5.024c.57.116 1 .621 1 1.226v.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 13 1 12.44 1 11.75v-.5c0-.605.43-1.11 1-1.226V5a2 2 0 0 1 2-2zm-9.75 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM4 4a1 1 0 0 0-1 1v5h10V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconLaptopSimple;
