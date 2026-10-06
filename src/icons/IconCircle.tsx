import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircle = React.forwardRef<SVGSVGElement, IconProps>(function IconCircle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13403 15 1 11.866 1 8C1 4.13402 4.13403 1.00002 8 1ZM8 2C4.68631 2.00002 2 4.68631 2 8C2 11.3137 4.68631 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCircle;
