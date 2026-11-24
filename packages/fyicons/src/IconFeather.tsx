import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFeather = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFeather(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="feather"><path stroke="currentColor" strokeLinejoin="round" d="m4 12 2.787-.253a7 7 0 0 0 4.546-2.263l1.997-2.197A4.5 4.5 0 0 0 14.5 4.26V1.5h-2.76a4.5 4.5 0 0 0-3.028 1.17L6.516 4.667a7 7 0 0 0-2.263 4.546z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 4.5-10 10m8-5H11m.5-2H13m-4.5-3V3m-2 3.5V5" />{props.children}</SvgRoot>;
});
export default IconFeather;
