import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.646 3.647a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707L11.793 8.5H2.5a.5.5 0 0 1 0-1h9.293L8.646 4.354a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconArrowRight;
