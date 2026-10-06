import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconKbdCtrl = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCtrl(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.72451 2.58117C7.91853 2.45312 8.18258 2.4749 8.35342 2.64562L12.8534 7.14562C13.0486 7.34084 13.0486 7.65738 12.8534 7.85265C12.6582 8.04792 12.3416 8.04792 12.1464 7.85265L7.9999 3.70617L3.85342 7.85265C3.65815 8.04792 3.34165 8.04792 3.14639 7.85265C2.95125 7.65738 2.95116 7.34084 3.14639 7.14562L7.64639 2.64562L7.72451 2.58117Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconKbdCtrl;
