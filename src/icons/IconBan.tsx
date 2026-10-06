import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBan = React.forwardRef<SVGSVGElement, IconProps>(function IconBan(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM3.41895 4.12598C2.53405 5.17132 2 6.52315 2 8C2 11.3137 4.68629 14 8 14C9.47681 14 10.8277 13.4649 11.873 12.5801L3.41895 4.12598ZM8 2C6.52315 2 5.17132 2.53405 4.12598 3.41895L12.5801 11.873C13.4649 10.8277 14 9.47681 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBan;
