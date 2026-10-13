import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGift = React.forwardRef<SVGSVGElement, IconProps>(function IconGift(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.5 5.5V14.5" stroke="currentColor" /><path d="M4.5 3.5C4.5 2.39543 5.39543 1.5 6.5 1.5V1.5C7.60457 1.5 8.5 2.39543 8.5 3.5V5.5H6.5C5.39543 5.5 4.5 4.60457 4.5 3.5V3.5Z" stroke="currentColor" /><path d="M8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V2.5C10.8284 2.5 11.5 3.17157 11.5 4V4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4Z" stroke="currentColor" /><rect x={2.5} y={5.5} width={11} height={3} rx={0.5} stroke="currentColor" /><path d="M3.5 8.5H12.5V13C12.5 13.8284 11.8284 14.5 11 14.5H5C4.17157 14.5 3.5 13.8284 3.5 13V8.5Z" stroke="currentColor" /></SvgRoot>;
});
export default IconGift;
