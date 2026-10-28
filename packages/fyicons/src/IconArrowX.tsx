import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-x"><path fill="currentColor" d="M14.354 7.646a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.707-.707l1.648-1.648H3.207l1.648 1.648a.5.5 0 0 1-.708.707l-2.5-2.5a.504.504 0 0 1 0-.708l2.5-2.499a.5.5 0 0 1 .707.707L3.208 7.498h9.583l-1.644-1.645a.5.5 0 0 1 .707-.707z" /></SvgRoot>;
});
export default IconArrowX;
