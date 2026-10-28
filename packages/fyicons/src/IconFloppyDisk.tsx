import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFloppyDisk = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFloppyDisk(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="floppy-disk"><path fill="currentColor" d="M10.086 2a1.5 1.5 0 0 1 1.06.44l2.414 2.414a1.5 1.5 0 0 1 .44 1.06V12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2zM3.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H5v-2.75C5 9.56 5.56 9 6.25 9h3.5c.69 0 1.25.56 1.25 1.25V13h1.5a.5.5 0 0 0 .5-.5V5.914a.5.5 0 0 0-.146-.353L11 3.707V4.75a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zm2.75 7a.25.25 0 0 0-.25.25V13h4v-2.75a.25.25 0 0 0-.25-.25zM6 4.75h4V3H6z" /></SvgRoot>;
});
export default IconFloppyDisk;
