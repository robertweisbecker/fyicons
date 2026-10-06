import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTelevision = React.forwardRef<SVGSVGElement, IconProps>(function IconTelevision(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M14 3C14.5523 3 15 3.44771 15 4V11C15 11.5523 14.5523 12 14 12H11.3916C11.5884 12.1269 11.7792 12.2646 11.9619 12.4141L12.8154 13.1133C13.029 13.2881 13.0604 13.6027 12.8857 13.8164C12.7109 14.0299 12.3963 14.0614 12.1826 13.8867L11.3281 13.1885C10.3891 12.4203 9.21325 12.0001 8 12C6.78661 12 5.61008 12.4202 4.6709 13.1885L3.81641 13.8867C3.60273 14.0613 3.2881 14.0299 3.11328 13.8164C2.93863 13.6028 2.97013 13.2881 3.18359 13.1133L4.03711 12.4141C4.21977 12.2646 4.41071 12.1269 4.60742 12H2C1.44772 12 1 11.5523 1 11V4C1 3.44772 1.44772 3 2 3H14ZM2 11H14V4H2V11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTelevision;
