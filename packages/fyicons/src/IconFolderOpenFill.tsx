import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderOpenFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderOpenFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-open-fill"><path d="M4.67188 2C5.33481 2.00008 5.97068 2.26365 6.43945 2.73242L7.70703 4H11C12.3807 4 13.5 5.11929 13.5 6.5V7H6.65723C5.32081 7 4.13359 7.85507 3.71094 9.12305C3.41942 9.99759 2.88922 10.7716 2.18164 11.3574C1.96893 11.5335 1.93914 11.8488 2.11523 12.0615C2.29125 12.2738 2.60576 12.3035 2.81836 12.1279C3.66996 11.4229 4.30938 10.4918 4.66016 9.43945C4.94665 8.57996 5.7511 8 6.65723 8H13.8818C14.9273 8 15.6301 9.03161 15.3027 9.98242L15.2236 10.1709L14.1377 12.3418C14.1367 12.3438 14.1357 12.3457 14.1348 12.3477C13.6255 13.3603 12.589 13.9999 11.4551 14H3.5C2.11929 14 1 12.8807 1 11.5V4.5C1 3.11929 2.11929 2 3.5 2H4.67188Z" fill="currentColor" /></SvgRoot>;
});
export default IconFolderOpenFill;
