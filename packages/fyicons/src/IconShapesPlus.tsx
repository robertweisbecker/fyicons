import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapesPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapesPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes-plus"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4zm9 0v4m2-2h-4m-5-9.75L7.25 4.5 4.5 7.25 1.75 4.5zm6.787.6a.25.25 0 0 1 .426 0l2.305 3.77a.25.25 0 0 1-.214.38H9.196a.25.25 0 0 1-.214-.38z" /></SvgRoot>;
});
export default IconShapesPlus;
