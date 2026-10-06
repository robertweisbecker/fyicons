import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPointerFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPointerFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M1.93886 3.50136C1.64391 2.54237 2.54237 1.64391 3.50136 1.93886L13.0736 4.88417C14.2083 5.2334 14.2628 6.8193 13.1547 7.2455L8.8871 8.8871L7.2455 13.1547C6.81915 14.2624 5.23351 14.208 4.88417 13.0736L1.93886 3.50136Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPointerFill;
