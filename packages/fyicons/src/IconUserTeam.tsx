import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserTeam = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserTeam(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 11.5h2.4a.468.468 0 0 0 .455-.582A1.87 1.87 0 0 0 12.538 9.5h-.21a2 2 0 0 0-1.414.586l-.164.164" /><path fill="currentColor" d="M8 9c2.014 0 3.6 1.145 4.22 2.858a1.49 1.49 0 0 1-.308 1.534c-.343.38-.864.608-1.412.608h-5a1.9 1.9 0 0 1-1.412-.608 1.49 1.49 0 0 1-.308-1.534C4.4 10.144 5.986 9 8 9m0 1c-1.606 0-2.807.893-3.28 2.198a.49.49 0 0 0 .11.524c.145.16.39.278.67.278h5c.28 0 .525-.118.67-.278a.49.49 0 0 0 .11-.524C10.806 10.893 9.605 10 8 10M3.501 5a1.5 1.5 0 1 1-.002 3.002A1.5 1.5 0 0 1 3.501 5M8 3a2.5 2.5 0 1 1-.001 5.001A2.5 2.5 0 0 1 8 3m4.501 2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12.5 5m-9 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.501 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 11.5H2.1a.468.468 0 0 1-.455-.582A1.87 1.87 0 0 1 3.462 9.5h.21a2 2 0 0 1 1.414.586l.164.164" /></SvgRoot>;
});
export default IconUserTeam;
