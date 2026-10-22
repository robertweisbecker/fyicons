import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeight = React.forwardRef<SVGSVGElement, IconProps>(function IconHeight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.49512 1.50488L4.49512 1.50488M12.4951 1.50488L11.4951 1.50488M8.49512 1.50488L7.49512 1.50488" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.49512 14.5049L4.49512 14.5049M12.4951 14.5049L11.4951 14.5049M8.49512 14.5049L7.49512 14.5049" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.00195 5.99902L8.00098 4L10 5.99902M8.00098 4L8.00098 12M6 9.99902L8.00098 12L10 10.001" stroke="currentColor" strokeOpacity={0.9} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHeight;
