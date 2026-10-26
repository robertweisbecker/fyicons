import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapesPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapesPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4zm9 0v4m2-2h-4m-5-10 3 3-3 3-3-3zm7.29 1.074a.25.25 0 0 1 .42 0l2.29 3.54a.25.25 0 0 1-.21.386H9.71a.25.25 0 0 1-.21-.386z" /></SvgRoot>;
});
export default IconShapesPlus;
