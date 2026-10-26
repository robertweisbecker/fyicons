import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRowCollapse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRowCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.651 10.648a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1-.707.707L8.005 11.71l-2.147 2.146a.5.5 0 0 1-.707-.707zm2.504-7.5a.5.5 0 0 1 .707.706L8.36 6.356a.5.5 0 0 1-.707 0L5.151 3.854a.5.5 0 0 1 .707-.707l2.149 2.149z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5h9" /></SvgRoot>;
});
export default IconRowCollapse;
