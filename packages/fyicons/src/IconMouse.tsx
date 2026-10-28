import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="mouse"><path d="M3.5 4.5C3.5 2.84315 4.84315 1.5 6.5 1.5H9.5C11.1569 1.5 12.5 2.84315 12.5 4.5V10.5C12.5 12.7091 10.7091 14.5 8.5 14.5H7.5C5.29086 14.5 3.5 12.7091 3.5 10.5V4.5Z" stroke="currentColor" /><path d="M3.5 6.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 6.5V1.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconMouse;
