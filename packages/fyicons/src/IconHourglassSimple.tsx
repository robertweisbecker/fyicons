import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglassSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglassSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinejoin="round" d="M4.5 1.5v2.808C4.5 5.934 5.49 7.396 7 8l-.614.246A3 3 0 0 0 4.5 11.03v3.47" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 1.5h-9m9 13h-9" /><path stroke="currentColor" strokeLinejoin="round" d="M11.5 1.5v2.807C11.5 5.934 10.51 7.396 9 8l.614.246A3 3 0 0 1 11.5 11.03v3.47" /></SvgRoot>;
});
export default IconHourglassSimple;
