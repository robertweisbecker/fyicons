import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRulerMeasure = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRulerMeasure(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M1 12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5V8.5C15 7.67157 14.3284 7 13.5 7L2.5 7C1.67157 7 1 7.67157 1 8.5L1 12.5ZM3 5V4L13 4V5H14V2H13V3L3 3V2H2L2 5H3ZM2 8.5C2 8.22386 2.22386 8 2.5 8H4V11H5V8H7.5L7.5 10H8.5V8H11V11H12V8H13.5C13.7761 8 14 8.22386 14 8.5V12.5C14 12.7761 13.7761 13 13.5 13H2.5C2.22386 13 2 12.7761 2 12.5L2 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconRulerMeasure;
