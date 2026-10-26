import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextFormat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextFormat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.354 2.28a.752.752 0 0 1 1.285.015l.053.111L8.967 8.32a.5.5 0 0 1-.934.36l-.272-.707h-3.68L2.96 10.69a.5.5 0 0 1-.923-.381l3.26-7.92zm-.861 4.693h2.884L5.984 3.352z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.917 10.083 11 6a1.414 1.414 0 1 1 2 2l-4.083 4.083a2.5 2.5 0 0 1-.977.604l-1.966.655a.25.25 0 0 1-.316-.316l.655-1.966a2.5 2.5 0 0 1 .604-.977" /></SvgRoot>;
});
export default IconTextFormat;
