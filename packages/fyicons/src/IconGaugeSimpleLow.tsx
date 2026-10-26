import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimpleLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimpleLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1.657 6c.335 0 .57.334.496.662a6 6 0 0 0 1.605 5.58.501.501 0 0 1-.708.709A7 7 0 0 1 1.2 6.35c.05-.21.242-.35.458-.35M8 1a7.001 7.001 0 0 1 4.95 11.95.502.502 0 0 1-.707-.707 6 6 0 0 0-.91-9.232 6 6 0 0 0-4.667-.86c-.327.074-.66-.161-.66-.497 0-.216.141-.408.35-.458A7 7 0 0 1 8 1M2.65 2.647a.5.5 0 0 1 .707 0l3.5 3.5a.5.5 0 0 1 .1.147 2 2 0 1 1-.661.66.5.5 0 0 1-.146-.1l-3.5-3.5a.5.5 0 0 1 0-.707M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimpleLow;
