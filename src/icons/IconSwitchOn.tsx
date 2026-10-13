import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSwitchOn = React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10 4C12.2091 4 14 5.79086 14 8C14 10.2091 12.2091 12 10 12H6C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4H10ZM10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconSwitchOn;
