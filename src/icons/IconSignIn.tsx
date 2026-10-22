import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignIn = React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.64648 5.14718C8.84175 4.95192 9.15825 4.95192 9.35352 5.14718L11.8535 7.64718C12.0243 7.81805 12.0461 8.08205 11.918 8.27609L11.8535 8.35421L9.35352 10.8542C9.15828 11.0493 8.84172 11.0493 8.64648 10.8542C8.45126 10.659 8.45134 10.3425 8.64648 10.1472L10.293 8.50069H2.5C2.22395 8.50069 2.00015 8.27671 2 8.00069C2 7.72455 2.22386 7.50069 2.5 7.50069H10.293L8.64648 5.85421C8.45126 5.65899 8.45134 5.34245 8.64648 5.14718Z" fill="currentColor" /><path d="M6.5 10.5V12C6.5 12.8284 7.17157 13.5 8 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H8C7.17157 2.5 6.5 3.17157 6.5 4V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSignIn;
