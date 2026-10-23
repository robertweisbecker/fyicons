import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.0659 4.25203C11.2029 4.01236 11.5088 3.92867 11.7485 4.0655C11.9879 4.20256 12.0718 4.50851 11.935 4.74812L7.93502 11.7481C7.85777 11.8833 7.72114 11.9744 7.56686 11.9952C7.41252 12.0159 7.25711 11.9636 7.14693 11.8536L4.14693 8.85359C3.95167 8.65833 3.95167 8.34182 4.14693 8.14656C4.3422 7.95139 4.65874 7.95133 4.85397 8.14656L7.3901 10.6827L11.0659 4.25203Z" fill="currentColor" /></SvgRoot>;
});
export default IconCheckSm;
