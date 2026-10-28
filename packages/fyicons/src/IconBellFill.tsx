import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBellFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBellFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-fill"><path fill="currentColor" d="M8.004 1a1 1 0 0 1 1 1v.1A5 5 0 0 1 13.001 7v1.842c0 .062.02.123.056.173l.439.601c.722.991.014 2.384-1.212 2.384h-1.831a2.501 2.501 0 0 1-4.9 0H3.716c-1.227 0-1.935-1.393-1.212-2.384l.439-.602A.3.3 0 0 0 3 8.842V7c0-2.42 1.72-4.44 4.004-4.901V2a1 1 0 0 1 1-1M6.59 12a1.5 1.5 0 0 0 2.827 0z" /></SvgRoot>;
});
export default IconBellFill;
