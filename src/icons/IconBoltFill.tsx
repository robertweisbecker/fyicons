import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoltFill = React.forwardRef<SVGSVGElement, IconProps>(function IconBoltFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.08789 1.2168C8.21196 1.03635 8.4393 0.957527 8.64844 1.02246C8.85752 1.08745 8.99997 1.28105 9 1.5V6H12.0498C12.8548 6.00024 13.3291 6.90299 12.873 7.56641L7.91211 14.7832C7.78803 14.9637 7.56072 15.0425 7.35156 14.9775C7.14249 14.9125 7 14.719 7 14.5V10H3.9502C3.14523 9.99974 2.67086 9.097 3.12695 8.43359L8.08789 1.2168Z" fill="currentColor" /></SvgRoot>;
});
export default IconBoltFill;
