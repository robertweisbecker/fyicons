import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSideSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSideSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="link-side-slash"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 13.5-11-11" /><path fill="currentColor" d="M4.75 4.5a.5.5 0 0 1-.5.5H4a3 3 0 0 0 0 6h1.5a.5.5 0 0 1 0 1H4a4 4 0 0 1 0-8h.25a.5.5 0 0 1 .5.5M12 4a4 4 0 0 1 0 8h-.25a.5.5 0 0 1 0-1H12a3 3 0 1 0 0-6h-1.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconLinkSideSlash;
