import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookFlat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookFlat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="book-flat"><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H12ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H5V3H4.5ZM6 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H6V13ZM9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H9.5ZM11.5 5C11.7761 5 12 5.22386 12 5.5C12 5.77614 11.7761 6 11.5 6H7.5C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconBookFlat;
