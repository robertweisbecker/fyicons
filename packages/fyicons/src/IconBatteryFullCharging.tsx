import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryFullCharging = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryFullCharging(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_895_31023)"}><path d="M12 3a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm.89 3.241A1.5 1.5 0 0 0 6 9.75h.13l-.094.425c-.063.282-.04.566.05.825H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.927zM12 5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.03l1.881-2.3a1.501 1.501 0 0 0-1.103-2.448l.063-.143c.161-.362.167-.758.042-1.11z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 8.25 8.5 5.5l-1 2.25h2.25L7.5 10.5 8 8.25z" /></g><defs><clipPath id={idPrefix + "clip0_895_31023"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconBatteryFullCharging;
