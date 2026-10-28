import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapesPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapesPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes-plus"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4zm9 0v4m2-2h-4m-5-10 3 3-3 3-3-3zm7.284.624a.25.25 0 0 1 .432 0l2.317 4a.25.25 0 0 1-.217.376H9.684a.25.25 0 0 1-.217-.375z" /></SvgRoot>;
});
export default IconShapesPlus;
