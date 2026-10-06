import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconUser2Fill = React.forwardRef<SVGSVGElement, IconProps>(function IconUser2Fill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00011 9.5C10.2452 9.50011 12.202 10.8363 13.2306 12.8145C13.7918 13.894 12.84 15 11.6232 15H4.37706C3.16027 15 2.20847 13.894 2.76964 12.8145C3.79819 10.8363 5.75492 9.5 8.00011 9.5ZM8.00011 1.75C9.39994 1.75 10.7499 2.71354 10.7501 4.45801C10.7501 5.42171 10.4954 6.39579 10.0167 7.11133C9.54726 7.81258 8.87972 8.25 8.00011 8.25C7.12052 8.24999 6.45296 7.81257 5.98351 7.11133C5.50484 6.3958 5.25011 5.42169 5.25011 4.45801C5.25028 2.71356 6.60029 1.75002 8.00011 1.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconUser2Fill;
