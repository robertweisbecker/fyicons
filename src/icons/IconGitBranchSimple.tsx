import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitBranchSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranchSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5 6.5127C5.77961 5.58802 6.94585 5 8.25 5H9.0498C9.28142 3.85886 10.2905 3 11.5 3C12.8807 3 14 4.11929 14 5.5C14 6.88071 12.8807 8 11.5 8C10.2905 8 9.28142 7.14114 9.0498 6H8.25C6.52197 6 5.10878 7.34863 5.00586 9.05078C6.1441 9.28464 7 10.2926 7 11.5C7 12.8807 5.88071 14 4.5 14C3.11929 14 2 12.8807 2 11.5C2 10.2905 2.85886 9.28142 4 9.0498V0H5V6.5127ZM4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10ZM11.5 4C10.6716 4 10 4.67157 10 5.5C10 6.32843 10.6716 7 11.5 7C12.3284 7 13 6.32843 13 5.5C13 4.67157 12.3284 4 11.5 4Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitBranchSimple;
