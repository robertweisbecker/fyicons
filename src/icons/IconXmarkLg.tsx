import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconXmarkLg = React.forwardRef<SVGSVGElement, IconProps>(function IconXmarkLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.1473 2.14693C13.3426 1.95167 13.6591 1.95167 13.8543 2.14693C14.0494 2.34221 14.0495 2.65878 13.8543 2.85397L8.70688 8.00045L13.8534 13.1469C14.0484 13.3422 14.0486 13.6588 13.8534 13.854C13.6582 14.0489 13.3415 14.0489 13.1463 13.854L7.99985 8.70748L2.85434 13.854C2.65914 14.0489 2.34252 14.0489 2.14731 13.854C1.95213 13.6588 1.95228 13.3422 2.14731 13.1469L7.29282 8.00045L2.14634 2.85397C1.95115 2.65878 1.9513 2.34221 2.14634 2.14693C2.3416 1.95167 2.65811 1.95167 2.85337 2.14693L7.99985 7.29342L13.1473 2.14693Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconXmarkLg;
