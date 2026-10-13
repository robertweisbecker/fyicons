import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSignalThree1 = React.forwardRef<SVGSVGElement, IconProps>(function IconSignalThree1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 10C3.55228 10 4 10.4477 4 11V12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12V11C2 10.4477 2.44772 10 3 10ZM8 12C8.27614 12 8.5 12.2239 8.5 12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5C7.5 12.2239 7.72386 12 8 12ZM13 12C13.2761 12 13.5 12.2239 13.5 12.5C13.5 12.7761 13.2761 13 13 13C12.7239 13 12.5 12.7761 12.5 12.5C12.5 12.2239 12.7239 12 13 12Z" fill="currentColor" /></SvgRoot>;
});
export default IconSignalThree1;
