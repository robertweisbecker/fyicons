import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSlash = React.forwardRef<SVGSVGElement, IconProps>(function IconSlash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.0329 1.31994C10.1321 1.06248 10.4218 0.93399 10.6794 1.03283C10.937 1.132 11.0655 1.42165 10.9665 1.67932L5.96651 14.6793C5.86734 14.937 5.57772 15.0655 5.32003 14.9664C5.06262 14.8671 4.93385 14.5775 5.03292 14.3199L10.0329 1.31994Z" fill="currentColor" /></SvgRoot>;
});
export default IconSlash;
