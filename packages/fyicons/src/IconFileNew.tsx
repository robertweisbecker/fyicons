import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileNew = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileNew(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1a2.5 2.5 0 0 1 2 1l2.4 3.2a.5.5 0 0 1 .1.3v1.757a4.5 4.5 0 0 0-1-.229V6h-1.5A1.5 1.5 0 0 1 9 4.5V2.086A1.5 1.5 0 0 0 8.5 2H5a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h2.259c.253.378.561.715.914 1H5.5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zm3 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1.375a.375.375 0 0 0-.375.375v1.37H9.75a.375.375 0 0 0 0 .75h1.375v1.38a.375.375 0 0 0 .75 0v-1.38h1.375a.375.375 0 0 0 0-.75h-1.375V9.75a.375.375 0 0 0-.375-.375M10 4.5a.5.5 0 0 0 .5.5h1L10 2.999z" /></SvgRoot>;
});
export default IconFileNew;
