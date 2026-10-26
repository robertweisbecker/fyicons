import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleNullFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNullFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.354 4.646a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.707l4-4a.5.5 0 0 0 0-.707" /></SvgRoot>;
});
export default IconCircleNullFill;
