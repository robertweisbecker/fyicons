import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconXSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconXSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.148 5.147a.5.5 0 1 1 .707.707L8.707 8l2.146 2.147a.5.5 0 0 1-.707.707L8 8.707l-2.146 2.147a.5.5 0 0 1-.707-.707L7.293 8 5.146 5.854a.5.5 0 0 1 .708-.707L8 7.293z" /></SvgRoot>;
});
export default IconXSm;
