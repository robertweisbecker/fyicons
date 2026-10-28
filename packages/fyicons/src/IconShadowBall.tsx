import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShadowBall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShadowBall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 2C10.7614 2 13 4.23858 13 7C13 9.76142 10.7614 12 8 12C5.23858 12 3 9.76142 3 7C3 4.23858 5.23858 2 8 2ZM8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3Z" fill="currentColor" /><path opacity={0.3} d="M11.8472 9.58398C13.1623 10.0426 13.9995 10.7295 13.9995 11.5C13.9995 12.8807 11.3132 14 7.99951 14C4.6858 14 1.99951 12.8807 1.99951 11.5C1.99951 10.7297 2.83621 10.0426 4.15088 9.58398C4.94015 10.8827 6.36872 11.75 7.99951 11.75C9.63013 11.75 11.0578 10.8824 11.8472 9.58398Z" fill="currentColor" /></SvgRoot>;
});
export default IconShadowBall;
