import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPalette = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPalette(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.249 1a7 7 0 0 1 6.616 4.709c.313.902.054 1.769-.488 2.37-.524.581-1.307.921-2.128.921h-1.124A2.125 2.125 0 0 0 9.4 12.364c.334.462.404 1.045.267 1.529C9.523 14.402 9.063 15 8.249 15h-.25a7 7 0 1 1 0-14zm-.25 1a6 6 0 0 0 0 12h.25c.48 0 .622-.661.34-1.05A3.125 3.125 0 0 1 11.125 8h1.125l.205-.01c1.01-.106 1.805-.975 1.466-1.954A6 6 0 0 0 8.249 2zM5 9.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconPalette;
