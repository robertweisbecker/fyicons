import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProjector = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProjector(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="projector"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 4.5H3A1.5 1.5 0 0 0 1.5 6v4A1.5 1.5 0 0 0 3 11.5h10a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 13 4.5h-1" /><mask id={idPrefix + "path-2-inside-1_1027_11010"} fill="white"><path d="M6 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" /></mask><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" mask={"url(#" + idPrefix + "path-2-inside-1_1027_11010)"} /><path fill="currentColor" d="M8 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.5h1" /><path stroke="currentColor" strokeLinecap="round" d="M3.5 12.5v-1m9 1v-1" /></SvgRoot>;
});
export default IconProjector;
