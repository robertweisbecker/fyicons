import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVoltage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVoltage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.649 1.008c.653.081 1.086.751.861 1.393L9.25 6h2.706a1 1 0 0 1 .79 1.614L7.328 14.58l-.082.094a1.1 1.1 0 0 1-.779.327l-.134-.008a1.09 1.09 0 0 1-.942-1.265l.03-.131L6.501 10H4.044l-.152-.01a1 1 0 0 1-.638-1.604l5.43-6.98C8.883 1.15 9.19 1 9.515 1zM9.516 2a.06.06 0 0 0-.043.02L4.045 9h3.8l-.386 1.287-1.08 3.596a.092.092 0 0 0 .088.117.1.1 0 0 0 .072-.035L11.956 7H7.84l.465-1.33 1.26-3.599.004-.025-.01-.024-.02-.017z" /></SvgRoot>;
});
export default IconVoltage;
