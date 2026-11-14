import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglass = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hourglass"><path stroke="currentColor" strokeLinejoin="bevel" d="M4.5 1.5v3.038c0 1.497.882 2.854 2.25 3.462a3.79 3.79 0 0 0-2.25 3.463V14.5" /><path fill="currentColor" d="M8 9a.5.5 0 0 1 .5.5v.674c0 .274.096.54.272.75l1.046 1.256a.5.5 0 0 1-.384.82H6.57a.5.5 0 0 1-.384-.82l1.043-1.252c.176-.211.272-.478.272-.753V9.5A.5.5 0 0 1 8 9m2-4a2 2 0 0 1-4 0V4h4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 1.5h-9m9 13h-9" /><path stroke="currentColor" strokeLinejoin="bevel" d="M11.5 1.5v3.038A3.79 3.79 0 0 1 9.25 8l.468.208A3 3 0 0 1 11.5 10.95v3.55" />{props.children}</SvgRoot>;
});
export default IconHourglass;
