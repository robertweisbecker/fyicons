import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerResize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerResize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-corner-resize"><path d="M5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4.5C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V10.5C13 10.2239 13.2239 10 13.5 10C13.7761 10 14 10.2239 14 10.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H5.5ZM13.5 2C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V3.70703L8.70703 8H10.5C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H7.5C7.22386 9 7 8.77614 7 8.5V5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5V7.29297L12.293 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowCornerResize;
