import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeaderSquareExpanded = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderSquareExpanded(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="header-square-expanded"><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM11.5 4C11.7761 4 12 4.22386 12 4.5V7.5C12 7.77614 11.7761 8 11.5 8H4.5C4.22386 8 4 7.77614 4 7.5V4.5C4 4.22386 4.22386 4 4.5 4H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconHeaderSquareExpanded;
