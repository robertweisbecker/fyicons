import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleStop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleStop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleStop;
