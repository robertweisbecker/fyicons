import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignalThree2 = React.forwardRef<SVGSVGElement, IconProps>(function IconSignalThree2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 10C3.55228 10 4 10.4477 4 11V12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12V11C2 10.4477 2.44772 10 3 10ZM8 5C8.55228 5 9 5.44772 9 6V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V6C7 5.44772 7.44772 5 8 5ZM13 12C13.2761 12 13.5 12.2239 13.5 12.5C13.5 12.7761 13.2761 13 13 13C12.7239 13 12.5 12.7761 12.5 12.5C12.5 12.2239 12.7239 12 13 12Z" fill="currentColor" /></SvgRoot>;
});
export default IconSignalThree2;
