import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><circle cx={4} cy={11} r={1.5} stroke="currentColor" /><circle cx={12} cy={11} r={1.5} stroke="currentColor" /><path fill="currentColor" d="M8.54 3a2.5 2.5 0 0 1 1.951.938l1.27 1.588a.25.25 0 0 0 .108.078l3.157 1.184c.586.22.974.78.974 1.405V9a2 2 0 0 1-2 2h-.5c0-.385-.146-.735-.385-1H14a1 1 0 0 0 1-1v-.807a.5.5 0 0 0-.325-.468L11.518 6.54a1.25 1.25 0 0 1-.538-.39L9.71 4.563A1.5 1.5 0 0 0 8.54 4H4.811a1.5 1.5 0 0 0-1.456 1.136l-.37 1.485a.5.5 0 0 1-.262.326l-1.448.724A.5.5 0 0 0 1 8.118V9.5a.5.5 0 0 0 .5.5h1.385a1.5 1.5 0 0 0-.385 1h-1A1.5 1.5 0 0 1 0 9.5V8.118a1.5 1.5 0 0 1 .83-1.342l1.24-.62.316-1.262A2.5 2.5 0 0 1 4.812 3zm2.345 7a1.5 1.5 0 0 0-.385 1h-5c0-.385-.146-.735-.385-1z" /><path fill="currentColor" d="M8.825 5.1 9.95 6.6a.25.25 0 0 1-.2.4h-2.5A.25.25 0 0 1 7 6.75v-1.5A.25.25 0 0 1 7.25 5h1.375a.25.25 0 0 1 .2.1m-4.372.09-.375 1.5A.25.25 0 0 0 4.32 7H6a.25.25 0 0 0 .25-.25v-1.5A.25.25 0 0 0 6 5H4.695a.25.25 0 0 0-.242.19" /></SvgRoot>;
});
export default IconCar;
