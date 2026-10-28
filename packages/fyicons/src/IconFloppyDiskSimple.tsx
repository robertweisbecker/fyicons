import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFloppyDiskSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFloppyDiskSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="floppy-disk-simple"><path fill="currentColor" d="M13 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.707A1 1 0 0 1 2.293 6L6 2.293A1 1 0 0 1 6.707 2zM6.707 3 3 6.707V13h2V9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h2V3zM6 13h4v-3H6z" /></SvgRoot>;
});
export default IconFloppyDiskSimple;
