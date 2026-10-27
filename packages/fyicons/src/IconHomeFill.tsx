import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.70801 1.43848C7.45373 0.807602 8.54733 0.807454 9.29297 1.43848L14.5811 5.91406C14.8464 6.13878 15 6.46965 15 6.81738C14.9998 7.47019 14.4702 7.99968 13.8174 8H13.001V12.25C13.001 13.2163 12.2172 13.9997 11.251 14H9.5V9.75C9.5 9.33579 9.16421 9 8.75 9H7.25C6.83579 9 6.5 9.33579 6.5 9.75V14H4.75098C3.78453 13.9999 3.00092 13.2165 3.00098 12.25L3.00195 8H2.18359C1.53058 7.99995 1.0012 7.47036 1.00098 6.81738C1.00098 6.46952 1.15438 6.13878 1.41992 5.91406L6.70801 1.43848Z" fill="currentColor" /></SvgRoot>;
});
export default IconHomeFill;
