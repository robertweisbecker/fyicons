import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsRotate = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsRotate(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-rotate"><path fill="currentColor" d="M13.499 8a.47.47 0 0 1 .479.5 5.99 5.99 0 0 1-3.238 4.84 6 6 0 0 1-6.623-.764 6 6 0 0 1-.98-1.063l-.14 1.531a.5.5 0 0 1-.996-.09l.25-2.75.02-.1a.5.5 0 0 1 .524-.353l2.751.25a.5.5 0 0 1-.09.996l-1.558-.142a5 5 0 0 0 .866.959 5.001 5.001 0 0 0 8.21-3.315.54.54 0 0 1 .524-.499M7.51 2.02a6 6 0 0 1 5.352 2.466l.14-1.53a.5.5 0 0 1 .996.09l-.25 2.748a.5.5 0 0 1-.543.453l-2.75-.25a.501.501 0 0 1 .09-.996l1.556.141a5 5 0 0 0-2.571-1.9 5.005 5.005 0 0 0-5.343 1.524 5 5 0 0 0-1.161 2.735.54.54 0 0 1-.525.5.47.47 0 0 1-.478-.5A5.98 5.98 0 0 1 3.425 4.12a6 6 0 0 1 4.085-2.1" /></SvgRoot>;
});
export default IconArrowsRotate;
