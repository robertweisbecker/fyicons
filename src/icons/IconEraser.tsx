import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEraser = React.forwardRef<SVGSVGElement, IconProps>(function IconEraser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9 1.5C9.13242 1.50014 9.25987 1.55284 9.35352 1.64648L14.3535 6.64648C14.4471 6.74023 14.5 6.86751 14.5 7C14.5 7.13249 14.4471 7.25977 14.3535 7.35352L7.76758 13.9395C6.7914 14.9156 5.20874 14.9153 4.23242 13.9395L2.06055 11.7676C1.08441 10.7913 1.0844 9.2087 2.06055 8.23242L8.64648 1.64648L8.72266 1.58398C8.80411 1.52979 8.90071 1.5 9 1.5ZM2.76758 8.93945C2.18196 9.52521 2.18196 10.4748 2.76758 11.0605L4.93945 13.2324C5.52525 13.8178 6.47489 13.818 7.06055 13.2324L8.29297 12L4 7.70703L2.76758 8.93945ZM4.70703 7L9 11.293L13.293 7L9 2.70703L4.70703 7Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconEraser;
