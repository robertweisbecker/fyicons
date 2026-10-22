import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlassesSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconGlassesSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M0.5 8.5C0.5 10.1569 1.84315 11.5 3.5 11.5C5.15685 11.5 6.5 10.1569 6.5 8.5C6.5 6.84315 5.15685 5.5 3.5 5.5C1.84315 5.5 0.5 6.84315 0.5 8.5Z" stroke="currentColor" /><path d="M9.5 8.5C9.5 10.1569 10.8431 11.5 12.5 11.5C14.1569 11.5 15.5 10.1569 15.5 8.5C15.5 6.84315 14.1569 5.5 12.5 5.5C10.8431 5.5 9.5 6.84315 9.5 8.5Z" stroke="currentColor" /><path d="M6.5 8.5V8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8V8.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconGlassesSimple;
