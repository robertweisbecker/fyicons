import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretUp = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.2603 8.16782C11.5469 8.49027 11.318 9 10.8866 9H5.11342C4.682 9 4.45309 8.49027 4.73972 8.16782L7.6263 4.92042C7.82519 4.69666 8.17481 4.69666 8.3737 4.92042L11.2603 8.16782Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretUp;
