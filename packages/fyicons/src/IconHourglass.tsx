import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglass = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 1.5v2.808C4.5 5.934 5.49 7.396 7 8l-.614.246A3 3 0 0 0 4.5 11.03v3.47" /><path fill="currentColor" d="M8 9a.5.5 0 0 1 .5.5v.673c0 .274.096.54.271.75l1.047 1.257a.5.5 0 0 1-.384.82H6.569a.5.5 0 0 1-.384-.82l1.043-1.251c.176-.212.272-.478.272-.753V9.5A.5.5 0 0 1 8 9m1.68-4c.162 0 .278.151.221.304C9.693 5.864 9.131 7 8 7 6.87 7 6.307 5.863 6.099 5.304 6.042 5.15 6.158 5 6.32 5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 1.5h-9m9 13h-9m8-13v2.807C11.5 5.934 10.51 7.396 9 8l.614.246A3 3 0 0 1 11.5 11.03v3.47" /></SvgRoot>;
});
export default IconHourglass;
