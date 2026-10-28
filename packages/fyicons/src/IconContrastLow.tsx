import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconContrastLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconContrastLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="contrast-low"><path fill="currentColor" d="M8.001 12.001a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-3.536-1.172a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708m6.365 0a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2.001 2.001 0 0 0-1.414 3.414A2 2 0 0 0 8 10zm4.501 1.501a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M3.5 7.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m.965-3.035a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708m6.365 0a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708M8.001 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /></SvgRoot>;
});
export default IconContrastLow;
