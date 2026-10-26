import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.001 2.16c.007-.812.814-1.47 1.644-1.123 1.146.478 2.244 1.234 2.67 2.47a4.34 4.34 0 0 1 4.279-1.127A1.94 1.94 0 0 1 14 4.246v7.51a1.5 1.5 0 0 1-1.712 1.486l-1.273-.182a2.5 2.5 0 0 0-1.68.355l-1.07.669a.5.5 0 0 1-.53 0l-1.07-.67a2.5 2.5 0 0 0-1.68-.354l-1.273.182A1.5 1.5 0 0 1 2 11.756V4.16a2 2 0 0 1 2-2zm8.317 1.182a3.34 3.34 0 0 0-3.523 1.124l-.295.368v7.923l.306-.19a3.5 3.5 0 0 1 2.35-.497l1.274.181a.5.5 0 0 0 .57-.495v-7.51a.94.94 0 0 0-.682-.904M4 3.16a1 1 0 0 0-1 1v7.596a.5.5 0 0 0 .57.495l1.275-.181a3.5 3.5 0 0 1 2.35.497l.023.014a6 6 0 0 0-.139-.367c-.343-.819-.896-1.618-1.762-1.921C4.697 10.075 4 9.515 4 8.66zm1.26-1.2a.16.16 0 0 0-.166.019A.23.23 0 0 0 5 2.17v6.49c0 .25.226.54.648.69.843.295 1.436.89 1.852 1.526V4.66c0-1.334-.907-2.144-2.24-2.7" /></SvgRoot>;
});
export default IconBookReading;
