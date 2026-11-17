import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileSvg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileSvg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-svg"><path fill="currentColor" d="M12 7.5a.5.5 0 0 0 1 0zm-.75-2V5H9.5v1h1.75zm-2.75-1H9v-3H8v3zm4 2.25H12v.75h1v-.75zm-3-1.25V5a.5.5 0 0 1-.5-.5H8A1.5 1.5 0 0 0 9.5 6zm1.75 0V6a.75.75 0 0 1 .75.75h1A1.75 1.75 0 0 0 11.25 5z" /><path stroke="currentColor" strokeLinecap="round" d="M12.5 7.5V6.121a1.5 1.5 0 0 0-.44-1.06L9.233 2.232A2.5 2.5 0 0 0 7.464 1.5H5A1.5 1.5 0 0 0 3.5 3v4.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.02 9.942c-.9-.757-2.374-.575-2.41.47-.022.655.703.949 1.328 1.005.465.042 1.312.302 1.312.971 0 .658-.687 1.112-1.375 1.112-.924 0-1.375-.634-1.375-.634m4-3.366 1.263 3.789a.25.25 0 0 0 .474 0L9.5 9.5m4.313.667c-.378-.483-.778-.679-1.36-.666-1.004.02-1.753.948-1.7 2.099.05 1.097.87 1.88 1.7 1.9 1.27.028 1.797-1 1.797-1.8h-1.312" />{props.children}</SvgRoot>;
});
export default IconFileSvg;
