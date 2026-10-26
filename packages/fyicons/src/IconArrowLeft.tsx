import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.646 3.647a.5.5 0 0 1 .708.707L4.207 7.5H13.5a.5.5 0 0 1 0 1H4.207l3.147 3.147a.5.5 0 0 1-.708.707l-4-4-.062-.077a.5.5 0 0 1 .062-.63z" /></SvgRoot>;
});
export default IconArrowLeft;
