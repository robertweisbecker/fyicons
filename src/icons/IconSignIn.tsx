import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSignIn = React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.14648 5.14718C7.34175 4.95192 7.65825 4.95192 7.85352 5.14718L10.3535 7.64718C10.5243 7.81805 10.5461 8.08205 10.418 8.27609L10.3535 8.35421L7.85352 10.8542C7.65828 11.0493 7.34172 11.0493 7.14648 10.8542C6.95126 10.659 6.95134 10.3425 7.14648 10.1472L8.79297 8.50069H2.5C2.22395 8.50069 2.00015 8.27671 2 8.00069C2 7.72455 2.22386 7.50069 2.5 7.50069H8.79297L7.14648 5.85421C6.95126 5.65899 6.95134 5.34245 7.14648 5.14718Z" fill="currentColor" /><path d="M4.5 11.5V12C4.5 12.8284 5.17157 13.5 6 13.5H11C11.8284 13.5 12.5 12.8284 12.5 12V4C12.5 3.17157 11.8284 2.5 11 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSignIn;
