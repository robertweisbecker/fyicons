import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBlock = React.forwardRef<SVGSVGElement, IconProps>(function IconBlock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.37109 2.23926C7.76991 2.05521 8.23009 2.05521 8.62891 2.23926L14.1289 4.77832C14.6598 5.02354 14.9999 5.55485 15 6.13965V9.40234C15 9.95415 14.6968 10.462 14.2109 10.7236L8.71094 13.6846C8.26698 13.9236 7.73302 13.9236 7.28906 13.6846L1.78906 10.7236C1.30323 10.462 1 9.95415 1 9.40234V6.13965C1.00012 5.55485 1.34021 5.02354 1.87109 4.77832L7.37109 2.23926ZM2 9.40234C2 9.58616 2.10093 9.75552 2.2627 9.84277L7.5 12.6631V9.05859L2 6.30859V9.40234ZM8.5 9.05859V12.6631L13.7373 9.84277C13.8991 9.75552 14 9.58616 14 9.40234V6.30859L8.5 9.05859ZM8.20996 3.14746C8.07704 3.08613 7.92296 3.08613 7.79004 3.14746L2.65332 5.51758L8 8.19043L13.3457 5.51758L8.20996 3.14746Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBlock;
