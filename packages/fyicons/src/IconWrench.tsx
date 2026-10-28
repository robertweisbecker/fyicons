import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrench = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrench(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wrench"><path fill="currentColor" d="M6.285 1.136a.5.5 0 0 1 .715.45V4a1 1 0 0 0 2 0V1.587a.5.5 0 0 1 .715-.451 3.996 3.996 0 0 1 .188 7.129l.25 4.46a2.156 2.156 0 0 1-1.924 2.263L8 15a2.156 2.156 0 0 1-2.152-2.275l.247-4.46a4 4 0 0 1-2.083-3.21L4 4.75a4 4 0 0 1 2.285-3.614M10 4a2 2 0 0 1-4 0V2.514c-.614.55-1 1.348-1 2.236l.009.23A3 3 0 0 0 6.81 7.504a.5.5 0 0 1 .3.486l-.265 4.79A1.156 1.156 0 0 0 8 14l.123-.007a1.156 1.156 0 0 0 1.031-1.213l-.266-4.79a.5.5 0 0 1 .3-.486c1-.433 1.717-1.39 1.803-2.525L11 4.75c0-.887-.386-1.685-1-2.235zm-2 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /></SvgRoot>;
});
export default IconWrench;
