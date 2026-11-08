import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPresentation = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPresentation(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="presentation"><path fill="currentColor" d="M8 2a.5.5 0 0 1 .5.5V3h5a.5.5 0 0 1 .5.5v6a1.5 1.5 0 0 1-1.5 1.5h-1.067l1.481 2.224a.5.5 0 0 1-.832.554L10.232 11H8.498v1.501a.5.5 0 0 1-1 0V11h-1.73l-1.854 2.778a.5.5 0 0 1-.693.139.5.5 0 0 1-.139-.693L4.565 11H3.5A1.5 1.5 0 0 1 2 9.5v-6a.5.5 0 0 1 .5-.5h5v-.5A.5.5 0 0 1 8 2M3 9.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V4H3z" /><path stroke="currentColor" strokeLinecap="round" d="M14.5 3.5h-13" /></SvgRoot>;
});
export default IconPresentation;
