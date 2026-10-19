import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconRowCollapse = React.forwardRef<SVGSVGElement, IconProps>(function IconRowCollapse(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.65133 10.648C7.84659 10.4528 8.1631 10.4528 8.35836 10.648L10.8584 13.148C11.0535 13.3433 11.0536 13.6599 10.8584 13.8551C10.6631 14.0503 10.3466 14.0502 10.1513 13.8551L8.00484 11.7086L5.85836 13.8551C5.66315 14.0503 5.3466 14.0502 5.15133 13.8551C4.95607 13.6598 4.95607 13.3433 5.15133 13.148L7.65133 10.648ZM10.1552 3.14707C10.3505 2.95231 10.6672 2.9521 10.8623 3.14707C11.0573 3.34218 11.057 3.65884 10.8623 3.8541L8.36031 6.35605C8.16508 6.55127 7.84854 6.55121 7.65328 6.35605L5.15133 3.8541C4.95623 3.65886 4.95623 3.3423 5.15133 3.14707C5.34658 2.95219 5.66321 2.95204 5.85836 3.14707L8.0068 5.2955L10.1552 3.14707Z" fill="currentColor" /><path d="M3.5 8.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconRowCollapse;
