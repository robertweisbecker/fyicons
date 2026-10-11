import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconShareArrow = React.forwardRef<SVGSVGElement, IconProps>(function IconShareArrow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 3.81007C7.00029 2.69676 8.34639 2.13918 9.13379 2.92628L13.6465 7.43898C14.2321 8.02471 14.232 8.9743 13.6465 9.56007L9.13379 14.0728C8.34635 14.8601 7.00009 14.3025 7 13.189V10.9995H6.90723C5.36276 10.9996 3.89306 11.6663 2.87598 12.8286C2.7388 12.9853 2.51918 13.0406 2.32422 12.9673C2.12928 12.894 2 12.7078 2 12.4995V11.4995C2.00012 8.63065 4.19687 6.27561 7 6.02296V3.81007ZM8.42676 3.63331C8.26932 3.47617 8.00029 3.58767 8 3.81007V6.49953C8 6.77567 7.77614 6.99953 7.5 6.99953C5.06711 6.99953 3.08639 8.93048 3.00391 11.3433C4.11115 10.4811 5.48127 9.9996 6.90723 9.99953H7.5C7.77606 9.99953 7.99987 10.2235 8 10.4995V13.189C8.00009 13.4116 8.26929 13.5231 8.42676 13.3657L12.9395 8.85304C13.1345 8.65779 13.1346 8.34121 12.9395 8.14601L8.42676 3.63331Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconShareArrow;
