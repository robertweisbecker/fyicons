import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroadcastAntenna = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroadcastAntenna(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="broadcast-antenna"><path fill="currentColor" d="M8 6.75a1.25 1.25 0 0 1 .5 2.395V13.5a.5.5 0 0 1-1 0V9.145A1.25 1.25 0 0 1 8 6.75M3.102 3.002a.47.47 0 0 1 .664.014.533.533 0 0 1-.016.75A5.98 5.98 0 0 0 2 8c0 1.653.67 3.148 1.75 4.233a.533.533 0 0 1 .016.75.47.47 0 0 1-.665.014A6.98 6.98 0 0 1 1 8c0-1.958.805-3.727 2.102-4.998m9.131.014a.47.47 0 0 1 .663-.014A6.98 6.98 0 0 1 15 8a6.97 6.97 0 0 1-2.102 4.997.47.47 0 0 1-.666-.014.533.533 0 0 1 .017-.75A5.98 5.98 0 0 0 14 8a5.98 5.98 0 0 0-1.751-4.234.533.533 0 0 1-.016-.75m-2.109 2.108a.45.45 0 0 1 .629-.025A4 4 0 0 1 12 8a4 4 0 0 1-1.247 2.9.45.45 0 0 1-.629-.026c-.215-.215-.18-.573.031-.792a2.987 2.987 0 0 0 0-4.166c-.212-.219-.246-.576-.031-.792M5.246 5.1a.45.45 0 0 1 .629.025c.215.216.18.573-.031.791A3 3 0 0 0 5 8c0 .81.322 1.544.844 2.083.211.219.246.575.031.79a.45.45 0 0 1-.629.026A4 4 0 0 1 4 8a4 4 0 0 1 1.246-2.9" />{props.children}</SvgRoot>;
});
export default IconBroadcastAntenna;
