import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSwitchOff = React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOff(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10 4C12.2091 4 14 5.79086 14 8C14 10.14 12.3194 11.8879 10.2061 11.9951L10 12H6L5.79395 11.9951C3.68056 11.8879 2 10.14 2 8C2 5.79086 3.79086 4 6 4H10ZM6 5C4.34315 5 3 6.34315 3 8C3 9.65685 4.34315 11 6 11H10C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5H6ZM6 6C7.10457 6 8 6.89543 8 8C8 9.10457 7.10457 10 6 10C4.89543 10 4 9.10457 4 8C4 6.89543 4.89543 6 6 6Z" fill="currentColor" /></SvgRoot>;
});
export default IconSwitchOff;
