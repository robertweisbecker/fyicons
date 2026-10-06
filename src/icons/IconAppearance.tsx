import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconAppearance = React.forwardRef<SVGSVGElement, IconProps>(function IconAppearance(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C6.4087 2 4.88303 2.63259 3.75781 3.75781C2.6326 4.88303 2 6.4087 2 8C2 9.5913 2.63259 11.117 3.75781 12.2422C4.88303 13.3674 6.4087 14 8 14V11C7.20435 11 6.44151 10.6837 5.87891 10.1211C5.3163 9.55849 5 8.79565 5 8C5 7.20435 5.3163 6.44152 5.87891 5.87891C6.44151 5.3163 7.20435 5 8 5V2ZM8 11C8.79565 11 9.55849 10.6837 10.1211 10.1211C10.6837 9.55849 11 8.79565 11 8C11 7.20435 10.6837 6.44152 10.1211 5.87891C9.55849 5.3163 8.79565 5 8 5V11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconAppearance;
