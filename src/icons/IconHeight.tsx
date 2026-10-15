import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHeight = React.forwardRef<SVGSVGElement, IconProps>(function IconHeight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.5 12.5V11.5M3.5 3.5V4.5M3.5 7.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 12.5V11.5M12.5 3.5V4.5M12.5 7.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.499 14.5H3.5" stroke="currentColor" strokeLinecap="round" /><path d="M12.499 1.5H3.5" stroke="currentColor" strokeLinecap="round" /><path d="M6.00195 5.99902L8.00098 4L10 5.99902M8.00098 4L8.00098 12M6 9.99902L8.00098 12L10 10.001" stroke="currentColor" strokeOpacity={0.9} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHeight;
