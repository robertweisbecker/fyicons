import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFloppyDisk = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFloppyDisk(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="floppy-disk"><path d="M10.0859 2C10.4837 2.00004 10.8652 2.15818 11.1465 2.43945L13.5605 4.85352C13.8418 5.13478 14 5.51629 14 5.91406V12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5V3.5C2 2.67157 2.67157 2 3.5 2H10.0859ZM3.5 3C3.22386 3 3 3.22386 3 3.5V12.5C3 12.7761 3.22386 13 3.5 13H5V10.25C5 9.55964 5.55964 9 6.25 9H9.75C10.4404 9 11 9.55964 11 10.25V13H12.5C12.7761 13 13 12.7761 13 12.5V5.91406C13 5.78151 12.9472 5.65428 12.8535 5.56055L11 3.70703V4.75C11 5.30228 10.5523 5.75 10 5.75H6C5.44772 5.75 5 5.30228 5 4.75V3H3.5ZM6.25 10C6.11193 10 6 10.1119 6 10.25V13H10V10.25C10 10.1119 9.88807 10 9.75 10H6.25ZM6 4.75H10V3H6V4.75Z" fill="currentColor" /></SvgRoot>;
});
export default IconFloppyDisk;
