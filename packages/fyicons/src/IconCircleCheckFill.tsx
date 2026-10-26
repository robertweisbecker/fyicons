import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleCheckFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleCheckFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.757 4.071a.5.5 0 0 0-.686.172l-2.67 4.45-1.547-1.547a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .783-.097l3-5a.5.5 0 0 0-.172-.686" /></SvgRoot>;
});
export default IconCircleCheckFill;
