import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="laptop"><path fill="currentColor" d="M5.5 10a.5.5 0 0 1 .248.065l.76.435h2.983l.761-.435.058-.028A.5.5 0 0 1 10.5 10H13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5zM2 11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1h-3.366l-.761.435a.5.5 0 0 1-.248.065h-3.25a.5.5 0 0 1-.248-.065L5.367 11zm12.5-1a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5H2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5z" /></SvgRoot>;
});
export default IconLaptop;
