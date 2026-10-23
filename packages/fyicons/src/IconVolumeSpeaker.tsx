import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSpeaker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSpeaker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.9326 1.4422C11.7425 0.742935 12.9999 1.31853 13 2.38849V13.6111C12.9999 14.6812 11.7425 15.2569 10.9326 14.5574L6.81445 10.9998H3.5C2.6716 10.9998 2.00003 10.3282 2 9.49982V6.49982C2.0001 5.67151 2.67167 4.99987 3.5 4.99982H6.81348L10.9326 1.4422ZM12 2.38849C11.9999 2.17476 11.7489 2.05971 11.5869 2.19904L7.32715 5.87775C7.23634 5.95617 7.11998 5.99981 7 5.99982H3.5C3.22393 5.99984 3.0001 6.22377 3 6.49982V9.49982C3.00003 9.77594 3.22388 9.99982 3.5 9.99982H7L7.08887 10.0076C7.17635 10.0234 7.25904 10.0621 7.32715 10.1209L11.5869 13.8006C11.7489 13.94 11.9999 13.825 12 13.6111V2.38849Z" fill="currentColor" /></SvgRoot>;
});
export default IconVolumeSpeaker;
