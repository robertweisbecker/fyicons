import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoltFlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoltFlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 1a.5.5 0 0 1 .479.644L9.172 6H12.5a.5.5 0 0 1 .4.8l-6 8a.501.501 0 0 1-.898-.342L6.457 9H3.5a.5.5 0 0 1-.495-.57l1-7A.5.5 0 0 1 4.5 1zM4.076 8H7a.5.5 0 0 1 .498.542l-.356 4.268L11.5 7h-3a.5.5 0 0 1-.479-.644L9.328 2H4.934z" /></SvgRoot>;
});
export default IconBoltFlash;
