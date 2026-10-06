import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconUser3Fill = React.forwardRef<SVGSVGElement, IconProps>(function IconUser3Fill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.99674 1C9.47349 1 10.9985 1.88226 10.9987 4.08789C10.9987 5.79516 10.6414 7.34247 9.81264 8.22634C9.65798 8.39128 9.72515 8.71191 9.94241 8.77458C11.8526 9.32567 13.4267 10.6681 14.2868 12.4248C14.9243 13.7271 13.7465 14.9999 12.2965 15H3.70084C2.25085 14.9999 1.07303 13.7271 1.7106 12.4248C2.57042 10.6687 4.14352 9.32619 6.05281 8.77465C6.26995 8.71192 6.33707 8.39154 6.18255 8.22659C5.35463 7.34276 4.99869 5.7953 4.99869 4.08789C4.99885 1.8824 6.52007 1.00011 7.99674 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconUser3Fill;
