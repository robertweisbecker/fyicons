import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextStrikethrough = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextStrikethrough(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-strikethrough"><path fill="currentColor" d="M7.747 2.008c.857-.005 1.625.277 2.163.545a6 6 0 0 1 .83.501l.05.039.015.011.005.003.002.002v.001a.5.5 0 0 1-.624.78q-.003 0-.007-.005l-.034-.025a5 5 0 0 0-.682-.412c-.462-.23-1.07-.444-1.712-.44-.757.004-1.464.178-1.964.516C5.311 3.847 5 4.33 5 5.046c0 .624.302 1.037.86 1.385.59.37 1.394.62 2.291.904.594.188 1.23.394 1.806.665H14.5a.5.5 0 0 1 0 1h-3.14c.392.458.64 1.04.64 1.788 0 2.05-1.868 3.453-3.998 3.462-1.83.007-3.364-.975-3.97-2.618a.5.5 0 0 1 .937-.347c.446 1.209 1.574 1.97 3.029 1.965C9.757 13.243 11 12.123 11 10.788c0-.715-.323-1.18-.875-1.554A4 4 0 0 0 9.724 9H1.5a.5.5 0 0 1 0-1h5.466c-.582-.198-1.16-.422-1.638-.721C4.574 6.807 4 6.113 4 5.046c0-1.07.493-1.853 1.229-2.35.713-.482 1.633-.684 2.518-.688" /></SvgRoot>;
});
export default IconTextStrikethrough;
