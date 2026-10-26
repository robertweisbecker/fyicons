import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareArrow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareArrow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7 3.31c0-1.113 1.346-1.67 2.134-.884l4.512 4.513a1.5 1.5 0 0 1 0 2.12l-4.512 4.514c-.788.787-2.134.23-2.134-.884V10.93a4.26 4.26 0 0 0-3.45 1.225l-.696.697A.5.5 0 0 1 2 12.499v-2a5.5 5.5 0 0 1 5-5.476zm1.427-.177A.25.25 0 0 0 8 3.31V5.5a.5.5 0 0 1-.5.5A4.5 4.5 0 0 0 3 10.5v.802a5.26 5.26 0 0 1 4.598-1.293.5.5 0 0 1 .402.49v2.19c0 .222.27.334.427.177l4.513-4.513a.5.5 0 0 0 0-.707z" /></SvgRoot>;
});
export default IconShareArrow;
