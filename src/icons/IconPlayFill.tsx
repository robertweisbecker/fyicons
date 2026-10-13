import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlayFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path fillRule="evenodd" clipRule="evenodd" d="M4 3.7C4 2.52319 5.29328 1.80471 6.29245 2.42641L13.5443 6.93868C14.3305 7.42785 14.3305 8.57215 13.5443 9.06132L6.29245 13.5736C5.29328 14.1953 4 13.4768 4 12.3V3.7Z" fill="currentColor" /></SvgRoot>;
});
export default IconPlayFill;
