import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheckSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.0654 4.25227C11.2024 4.01261 11.5083 3.92892 11.748 4.06575C11.9874 4.2028 12.0713 4.50875 11.9345 4.74837L7.93453 11.7484C7.85729 11.8835 7.72065 11.9746 7.56637 11.9954C7.41203 12.0161 7.25662 11.9639 7.14645 11.8538L4.14645 8.85383C3.95118 8.65857 3.95118 8.34207 4.14645 8.1468C4.34172 7.95164 4.65825 7.95157 4.85348 8.1468L7.38961 10.6829L11.0654 4.25227Z" fill="currentColor" /></SvgRoot>;
});
export default IconCheckSm;
