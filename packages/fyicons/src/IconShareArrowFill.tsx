import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareArrowFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareArrowFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7 3.31c0-1.113 1.346-1.67 2.134-.884l4.512 4.513a1.5 1.5 0 0 1 0 2.12l-4.512 4.514c-.788.787-2.134.23-2.134-.884v-1.69h-.5a4.5 4.5 0 0 0-3.6 1.8.501.501 0 0 1-.9-.3v-2a5.5 5.5 0 0 1 5-5.476z" /></SvgRoot>;
});
export default IconShareArrowFill;
