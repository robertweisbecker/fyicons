import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.70801 1.43855C7.45373 0.807663 8.54732 0.807523 9.29297 1.43855L14.5811 5.91413C14.8464 6.13885 15 6.46973 15 6.81746C14.9998 7.47025 14.4702 7.99976 13.8174 8.00007H13.001V12.5001C13.001 13.3283 12.3292 13.9998 11.501 14.0001H4.50098C3.67259 14 3.00094 13.3285 3.00098 12.5001L3.00195 8.00007H2.18359C1.53059 8.00002 1.00121 7.47042 1.00098 6.81746C1.00098 6.46959 1.15438 6.13886 1.41992 5.91413L6.70801 1.43855ZM7.25 8.9991C6.83579 8.9991 6.5 9.33488 6.5 9.7491V13.9991H9.5V9.7491C9.5 9.33488 9.16421 8.9991 8.75 8.9991H7.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconHomeFill;
