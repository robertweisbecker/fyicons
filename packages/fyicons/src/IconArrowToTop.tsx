import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToTop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToTop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.725 3.582a.5.5 0 0 1 .629.064l4 4a.5.5 0 1 1-.707.708L8.5 5.207V14.5a.5.5 0 0 1-1 0V5.207L4.354 8.354a.5.5 0 1 1-.708-.708l4-4zM12.5 1a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowToTop;
