import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPresentation = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPresentation(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="presentation"><path fill="currentColor" d="M8 2a.5.5 0 0 1 .5.5V3h5a.5.5 0 0 1 .5.5v7a1.5 1.5 0 0 1-1.5 1.5h-1.192l.637 1.277a.501.501 0 0 1-.894.448L10.19 12H8.5v.501a.5.5 0 0 1-1 0V12H5.81l-.864 1.725a.501.501 0 0 1-.895-.447L4.692 12H3.5A1.5 1.5 0 0 1 2 10.5v-7a.5.5 0 0 1 .5-.5h5v-.5A.5.5 0 0 1 8 2m-5 8.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V4H3z" /><path stroke="currentColor" strokeLinecap="round" d="M14.5 3.5h-13" /></SvgRoot>;
});
export default IconPresentation;
