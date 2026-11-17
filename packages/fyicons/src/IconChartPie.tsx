import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartPie = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartPie(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-pie"><path fill="currentColor" d="M8 1a7 7 0 1 1-6.967 7.676.5.5 0 0 1-.021-.285A7 7 0 0 1 8 1M2.086 9A6 6 0 0 0 8 14V9zM9 13.914a6.001 6.001 0 0 0 1.296-11.457A6 6 0 0 0 9 2.085zM3.42 4.127A6 6 0 0 0 2 8h5.293zM8 2a6 6 0 0 0-3.873 1.42L8 7.293z" />{props.children}</SvgRoot>;
});
export default IconChartPie;
