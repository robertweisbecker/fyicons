import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrushSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrushSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="brush-simple"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.793 4.207 5.5 5.5l5 5 1.293-1.293a1 1 0 0 0 0-1.414L8.207 4.207a1 1 0 0 0-1.414 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 5.5 2.207 8.793a1 1 0 0 0 0 1.414l3.586 3.586a1 1 0 0 0 1.414 0L10.5 10.5zM3 11l1.5-1.5m0 3 1-1m7.586-6.586L11 7 9 5l2.086-2.086a1.414 1.414 0 1 1 2 2" />{props.children}</SvgRoot>;
});
export default IconBrushSimple;
