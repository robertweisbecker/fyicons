import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleNull = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNull(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM9.55762 5.55762C9.80169 5.31354 10.1983 5.31354 10.4424 5.55762C10.6865 5.80169 10.6865 6.19831 10.4424 6.44238L6.44238 10.4424C6.19831 10.6865 5.80169 10.6865 5.55762 10.4424C5.31354 10.1983 5.31354 9.80169 5.55762 9.55762L9.55762 5.55762Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCircleNull;
