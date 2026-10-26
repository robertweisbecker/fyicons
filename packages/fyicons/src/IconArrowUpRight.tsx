import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUpRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V4.707l-8.146 8.147a.5.5 0 1 1-.708-.707L11.293 4H5.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowUpRight;
