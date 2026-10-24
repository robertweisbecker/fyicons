import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerExpand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerExpand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V10.5C2 10.2239 2.22386 10 2.5 10C2.77614 10 3 10.2239 3 10.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H11.5ZM5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3.70703L8 7.29297V5.5C8 5.22386 8.22386 5 8.5 5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8H7.29297L3 3.70703V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2H5.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowCornerExpand;
