import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconVolumeSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.4424 13.2095C11.1868 14.0308 10.1249 14.3898 9.41992 13.7632L6.31055 10.9995H4C3.1716 10.9995 2.50004 10.3279 2.5 9.49951V6.49951C2.50023 5.89606 2.85714 5.37619 3.37109 5.13818L11.4424 13.2095ZM9.41992 2.23584C10.2259 1.5197 11.4995 2.09137 11.5 3.16943V9.73193L6.55176 4.78369L9.41992 2.23584Z" fill="currentColor" /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeSlashFill;
