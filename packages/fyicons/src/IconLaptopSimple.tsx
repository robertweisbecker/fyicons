import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v5h.125a.75.75 0 0 1 .75.75V11a2 2 0 0 1-2 2h-9.75a2 2 0 0 1-2-2v-.25a.75.75 0 0 1 .75-.75H2V5a2 2 0 0 1 2-2zm-9.875 8a1 1 0 0 0 1 1h9.75a1 1 0 0 0 1-1zM4 4a1 1 0 0 0-1 1v5h10V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconLaptopSimple;
