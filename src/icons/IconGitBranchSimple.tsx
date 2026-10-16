import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitBranchSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranchSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5 8.0498C5.9796 8.24864 6.75136 9.0204 6.9502 10H7.5C9.28308 10 10.7532 8.66643 10.9707 6.94238C9.84436 6.69944 9 5.699 9 4.5C9 3.11929 10.1193 2 11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.71765 13.1292 6.73052 11.9766 6.95312C11.7493 9.22558 9.83231 11 7.5 11H6.9502C6.75138 11.9795 5.97951 12.7503 5 12.9492V14H4V12.9492C2.85895 12.7175 2 11.7094 2 10.5C2 9.29051 2.85886 8.28142 4 8.0498V2H5V8.0498ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitBranchSimple;
