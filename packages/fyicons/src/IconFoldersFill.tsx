import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFoldersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFoldersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.63379 2C8.36325 2.00002 9.01633 2.45272 9.27246 3.13574L9.59668 4H12C13.1046 4 14 4.89543 14 6V9C14 10.1046 13.1046 11 12 11V12C12 13.1046 11.1046 14 10 14H4C2.89543 14 2 13.1046 2 12V7C2 5.89543 2.89543 5 4 5V4C4 2.89543 4.89543 2 6 2H7.63379ZM6 3C5.44772 3 5 3.44772 5 4V5H5.13379C5.65483 5.00002 6.12076 5.32366 6.30371 5.81152L6.75 7H10C11.1046 7 12 7.89543 12 9V10C12.5523 10 13 9.55228 13 9V6C13 5.44772 12.5523 5 12 5H8.90332L8.78223 4.67578L8.33594 3.48633C8.22609 3.19378 7.9463 3.00002 7.63379 3H6Z" fill="currentColor" /></SvgRoot>;
});
export default IconFoldersFill;
