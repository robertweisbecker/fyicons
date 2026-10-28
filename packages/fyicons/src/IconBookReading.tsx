import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.001 2c.007-.812.814-1.47 1.644-1.124.991.414 1.945 1.036 2.46 1.996A2.5 2.5 0 0 1 10 2h2.5A1.5 1.5 0 0 1 14 3.5v8a1.5 1.5 0 0 1-1.5 1.5H10a2 2 0 0 0-1.6.8.502.502 0 0 1-.754.053l-.12-.121A2.5 2.5 0 0 0 5.757 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2zM10 3a1.5 1.5 0 0 0-1.5 1.5v7.902A3 3 0 0 1 10 12h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM3.5 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h2.258q.466 0 .907.12a5.9 5.9 0 0 0-1.79-1.395C4.373 10.465 4 9.947 4 9.333V3zm1.76-1.2a.16.16 0 0 0-.166.019A.23.23 0 0 0 5 2.01v7.323c0 .193.12.393.335.504.996.517 1.689 1.14 2.165 1.72V4.5c0-1.334-.907-2.145-2.24-2.7" /></SvgRoot>;
});
export default IconBookReading;
