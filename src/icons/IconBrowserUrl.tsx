import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowserUrl = React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserUrl(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM3 12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6H3V12ZM3.5 4C3.22386 4 3 4.22386 3 4.5C3 4.77614 3.22386 5 3.5 5C3.77614 5 4 4.77614 4 4.5C4 4.22386 3.77614 4 3.5 4ZM6 3C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H10C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3H6ZM12.5 4C12.2239 4 12 4.22386 12 4.5C12 4.77614 12.2239 5 12.5 5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4Z" fill="currentColor" /></SvgRoot>;
});
export default IconBrowserUrl;
