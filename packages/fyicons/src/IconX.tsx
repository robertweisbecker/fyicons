import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.147 3.147a.5.5 0 1 1 .707.707L8.707 8l4.147 4.147a.5.5 0 0 1-.708.707L8 8.707l-4.146 4.147a.5.5 0 0 1-.707-.707L7.293 8 3.146 3.854a.5.5 0 0 1 .707-.707L8 7.293z" /></SvgRoot>;
});
export default IconX;
