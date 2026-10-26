import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.063 3.256a.502.502 0 0 1 .874.487l-5 9a.5.5 0 0 1-.79.11l-4-4a.5.5 0 0 1 .707-.707l3.53 3.53z" /></SvgRoot>;
});
export default IconCheck;
