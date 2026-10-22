import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDroplet = React.forwardRef<SVGSVGElement, IconProps>(function IconDroplet(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.8103 7.36194L8 1.5L4.18974 7.36194C2.74148 9.59003 3.50571 12.58 5.84548 13.8399C7.19053 14.5641 8.80947 14.5641 10.1545 13.8399C12.4943 12.58 13.2585 9.59003 11.8103 7.36194Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconDroplet;
