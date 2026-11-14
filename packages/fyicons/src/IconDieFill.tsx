import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDieFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDieFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="die-fill"><path fill="currentColor" d="M5.46 5.193a1.25 1.25 0 0 1 1.733.347l2.614 3.92a1.25 1.25 0 0 1-.347 1.733l-3.92 2.614a1.25 1.25 0 0 1-1.733-.347L1.193 9.54a1.25 1.25 0 0 1 .347-1.733zM7 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3-1a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m5.853-5.515a.75.75 0 0 1 .882-.588l3.53.706a.75.75 0 0 1 .588.882l-.705 3.53a.75.75 0 0 1-.883.589l-3.53-.707a.75.75 0 0 1-.587-.882zM12 4.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" />{props.children}</SvgRoot>;
});
export default IconDieFill;
