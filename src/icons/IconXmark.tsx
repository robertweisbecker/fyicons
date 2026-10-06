import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconXmark = React.forwardRef<SVGSVGElement, IconProps>(function IconXmark(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.1473 4.14693C11.3426 3.95167 11.6591 3.95167 11.8544 4.14693C12.0496 4.3422 12.0496 4.65871 11.8544 4.85397L8.7069 8.00045L11.8534 11.1469C12.0484 11.3422 12.0486 11.6588 11.8534 11.854C11.6582 12.049 11.3416 12.049 11.1463 11.854L7.99987 8.70748L4.85436 11.854C4.65907 12.0489 4.34247 12.0491 4.14733 11.854C3.95219 11.6588 3.95243 11.3422 4.14733 11.1469L7.29283 8.00045L4.14635 4.85397C3.95115 4.65877 3.95128 4.34221 4.14635 4.14693C4.34161 3.95167 4.65812 3.95167 4.85338 4.14693L7.99987 7.29342L11.1473 4.14693Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconXmark;
