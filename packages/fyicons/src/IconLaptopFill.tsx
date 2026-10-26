import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6 11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1h3V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm8.75 0a.25.25 0 0 1 .25.25v.25a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-.25a.25.25 0 0 1 .25-.25H2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6z" /></SvgRoot>;
});
export default IconLaptopFill;
