import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutApp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutApp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM3 6V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6H3ZM4 3C3.44772 3 3 3.44772 3 4V5H13V4C13 3.44772 12.5523 3 12 3H4Z" fill="currentColor" /><path d="M6.5 6V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 10.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLayoutApp;
