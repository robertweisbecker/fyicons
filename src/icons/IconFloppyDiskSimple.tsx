import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFloppyDiskSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconFloppyDiskSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13V6.70703C2.00002 6.44184 2.10545 6.18752 2.29297 6L6 2.29297C6.18752 2.10545 6.44184 2.00002 6.70703 2H13ZM6.70703 3L3 6.70703V13H5V9.5C5 9.22386 5.22386 9 5.5 9H10.5C10.7761 9 11 9.22386 11 9.5V13H13V3H6.70703ZM6 13H10V10H6V13Z" fill="currentColor" /></SvgRoot>;
});
export default IconFloppyDiskSimple;
