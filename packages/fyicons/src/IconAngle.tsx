import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAngle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAngle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="angle"><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v2.516h.002q.838.051 1.65.264a.48.48 0 0 1 .32.627.527.527 0 0 1-.63.324A7.5 7.5 0 0 0 3 6.018v-.001V13h6.984a7.5 7.5 0 0 0-.215-1.343.527.527 0 0 1 .324-.632.48.48 0 0 1 .628.322c.142.54.232 1.094.265 1.653H13.5a.5.5 0 0 1 0 1H2V2.5a.5.5 0 0 1 .5-.5m5.976 6.23a.48.48 0 0 1 .717.032q.432.552.768 1.168a.48.48 0 0 1-.273.677.53.53 0 0 1-.633-.25 7.5 7.5 0 0 0-.614-.933.53.53 0 0 1 .035-.695M5.89 6.31a.48.48 0 0 1 .677-.273q.616.336 1.167.769a.478.478 0 0 1 .034.716.53.53 0 0 1-.696.036 7.5 7.5 0 0 0-.931-.614.53.53 0 0 1-.251-.633" /></SvgRoot>;
});
export default IconAngle;
