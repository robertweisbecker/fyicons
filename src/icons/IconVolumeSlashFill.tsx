import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconVolumeSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.9775 12.3919C10.8359 13.0948 9.97985 13.4464 9.37988 12.973L6.25 10.5013H4.5C3.67171 10.5013 3.00021 9.82956 3 9.00131V7.00131C3.00012 6.29974 3.48206 5.71104 4.13281 5.54721L10.9775 12.3919ZM9.37988 3.02963C10.0356 2.51195 10.9999 2.9794 11 3.81479V9.58627L6.62109 5.20737L9.37988 3.02963Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeSlashFill;
