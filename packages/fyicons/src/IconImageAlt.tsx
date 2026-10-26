import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImageAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImageAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 11a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5a.5.5 0 0 1 1 0A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5M7.499 6a.5.5 0 0 1 .5.5v2.501H9.5a.5.5 0 1 1 0 1H7.499a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .5-.5m-4.02.202a.626.626 0 0 1 1.04-.002l.047.086L5.958 9.29a.5.5 0 0 1-.908.42L4.72 9H3.285l-.326.709a.5.5 0 1 1-.908-.418l1.382-3.004zM13.5 6a.5.5 0 0 1 0 1h-.999v2.5a.5.5 0 0 1-1 0V7H10.5a.5.5 0 0 1 0-1zM3.629 8.25h.745L4 7.442zM11.5 2A2.5 2.5 0 0 1 14 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 4.5 2z" /></SvgRoot>;
});
export default IconImageAlt;
