import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdOpt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdOpt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.85 3a1.5 1.5 0 0 1 1.37.89l3.473 7.813a.5.5 0 0 0 .456.297H13.5a.5.5 0 0 1 0 1h-3.35a1.5 1.5 0 0 1-1.37-.89L5.306 4.296A.5.5 0 0 0 4.85 4H2.5a.5.5 0 0 1 0-1zm8.65 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconKbdOpt;
