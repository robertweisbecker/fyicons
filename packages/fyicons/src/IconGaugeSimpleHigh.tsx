import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimpleHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimpleHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1c.808 0 1.605.14 2.358.41l-.797.797a6 6 0 0 0-4.893.804 6.002 6.002 0 0 0-.91 9.231.501.501 0 0 1-.708.708A7.002 7.002 0 0 1 8 1m6.595 4.658a7 7 0 0 1-1.644 7.292.501.501 0 0 1-.708-.708 6 6 0 0 0 1.642-3.071 6 6 0 0 0-.088-2.714zM13.15 2.146a.5.5 0 1 1 .707.708L9.722 6.987a2 2 0 1 1-.706-.708zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimpleHigh;
