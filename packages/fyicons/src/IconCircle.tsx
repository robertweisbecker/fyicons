import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="circle"><path d="M7.99951 1C11.8655 1 14.9995 4.13401 14.9995 8C14.9995 11.866 11.8655 15 7.99951 15C4.13354 15 0.999512 11.866 0.999512 8C0.999513 4.13402 4.13354 1.00002 7.99951 1ZM7.99951 2C4.68582 2.00002 1.99951 4.68631 1.99951 8C1.99951 11.3137 4.68582 14 7.99951 14C11.3132 14 13.9995 11.3137 13.9995 8C13.9995 4.68629 11.3132 2 7.99951 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircle;
