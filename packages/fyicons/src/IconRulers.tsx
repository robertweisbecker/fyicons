import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRulers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRulers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="rulers"><path d="M2 12.5C2 13.3284 2.67157 14 3.5 14H5.5C6.32843 14 7 13.3284 7 12.5L7 7L12.5 7C13.3284 7 14 6.32843 14 5.5V3.5C14 2.67157 13.3284 2 12.5 2L3.5 2C2.67157 2 2 2.67157 2 3.5L2 12.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3L12.5 3C12.7761 3 13 3.22386 13 3.5V5.5C13 5.77614 12.7761 6 12.5 6H12V4H11V6H10V5H9V6H7V4H6V6H4V7H6V9H5V10H6V11H4L4 12H6V12.5C6 12.7761 5.77614 13 5.5 13H3.5C3.22386 13 3 12.7761 3 12.5L3 3.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconRulers;
