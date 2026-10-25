import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowserUrl = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserUrl(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="browser-url"><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM3 12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6H3V12ZM4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3ZM7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H12C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3H7Z" fill="currentColor" /></SvgRoot>;
});
export default IconBrowserUrl;
