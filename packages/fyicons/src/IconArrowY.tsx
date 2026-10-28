import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowY = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowY(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-y"><path fill="currentColor" d="M8 1.5a.5.5 0 0 1 .354.147l2.5 2.5a.5.5 0 0 1-.707.707L8.499 3.206v8.588l1.648-1.646a.5.5 0 0 1 .707.708l-2.5 2.498a.5.5 0 0 1-.63.062l-.076-.062-2.5-2.5a.5.5 0 0 1 .708-.707l1.643 1.644V3.208L5.855 4.854a.5.5 0 0 1-.707-.707l2.499-2.5.076-.063A.5.5 0 0 1 8 1.5" /></SvgRoot>;
});
export default IconArrowY;
