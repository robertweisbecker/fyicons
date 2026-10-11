import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconAlignWrap = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignWrap(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 2C12.7759 2.00023 13 2.224 13 2.5V13.5C13 13.776 12.7759 13.9998 12.5 14C12.2239 14 12 13.7761 12 13.5V2.5C12 2.22386 12.2239 2 12.5 2ZM6.5 3C8.43281 3.00022 10 4.56714 10 6.5C10 8.43286 8.43281 9.99978 6.5 10H3.70605L4.85352 11.1475C5.04877 11.3427 5.04877 11.6592 4.85352 11.8545C4.65825 12.0496 4.34171 12.0497 4.14648 11.8545L2.14551 9.85352C2.05183 9.75979 1.99906 9.63252 1.99902 9.5C1.99906 9.36751 2.05186 9.2402 2.14551 9.14648L4.14648 7.14551C4.34173 6.95026 4.65825 6.95028 4.85352 7.14551C5.04877 7.34076 5.04877 7.65727 4.85352 7.85254L3.70605 9H6.5C7.88053 8.99978 9 7.88058 9 6.5C9 5.11942 7.88053 4.00022 6.5 4H4.5C4.22386 4 4 3.77614 4 3.5C4 3.22386 4.22386 3 4.5 3H6.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconAlignWrap;
