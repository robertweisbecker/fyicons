import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeChimney = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeChimney(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.215 2.241a1.25 1.25 0 0 1 1.57 0l2.216 1.788V3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2.147l1.814 1.465a.5.5 0 0 1-.629.778l-1.185-.958v4.97c0 .271 0 .505-.016.697a1.5 1.5 0 0 1-.147.583 1.5 1.5 0 0 1-.657.656 1.5 1.5 0 0 1-.583.148c-.191.015-.426.015-.697.015h-5.8c-.272 0-.506 0-.698-.015a1.5 1.5 0 0 1-.583-.148 1.5 1.5 0 0 1-.656-.656 1.5 1.5 0 0 1-.148-.583c-.015-.192-.015-.426-.015-.698V6.93l-1.186.959a.5.5 0 0 1-.629-.778zm.942.778a.25.25 0 0 0-.314 0L4.001 6.122V11.9c0 .288 0 .474.011.616.011.135.03.186.043.21a.5.5 0 0 0 .22.22.6.6 0 0 0 .21.042c.142.012.328.012.615.012h5.801c.288 0 .474 0 .615-.012a.6.6 0 0 0 .211-.043.5.5 0 0 0 .219-.218.6.6 0 0 0 .043-.211c.011-.142.012-.328.012-.616V6.123zm1.344 5.98a.5.5 0 0 1 .5.5V13H6V9.75A.75.75 0 0 1 6.75 9z" /></SvgRoot>;
});
export default IconHomeChimney;
