import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5845 2C13.2111 2 14.1575 3.8384 13.2124 5.16211L9.99951 9.66016V12.7793C9.99949 13.4248 9.58647 13.9979 8.97412 14.2021L6.65771 14.9746C6.50535 15.0253 6.3378 14.9991 6.20752 14.9053C6.07727 14.8113 5.99951 14.6606 5.99951 14.5V9.66016L2.78662 5.16211C1.84176 3.8385 2.78822 2.00026 4.41455 2H11.5845ZM4.41455 3C3.60159 3.00026 3.12801 3.91932 3.6001 4.58105L6.90674 9.20898C6.96731 9.29379 6.99951 9.39579 6.99951 9.5V13.8057L8.65771 13.2539C8.86187 13.1859 8.99949 12.9945 8.99951 12.7793V9.5C8.99951 9.39585 9.03179 9.29375 9.09229 9.20898L12.3989 4.58105C12.8713 3.91921 12.3977 3 11.5845 3H4.41455Z" fill="currentColor" /></SvgRoot>;
});
export default IconFilter;
