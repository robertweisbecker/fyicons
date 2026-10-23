import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.99951 1C11.8655 1 14.9995 4.13401 14.9995 8C14.9995 11.866 11.8655 15 7.99951 15C4.13354 15 0.999512 11.866 0.999512 8C0.999513 4.13402 4.13354 1.00002 7.99951 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleFill;
