import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-slash-fill"><path d="M11 12.7673V12.8307C10.9994 13.9087 9.72586 14.4804 8.91992 13.7643L5.81055 11.0007H3.5C2.67177 11.0007 2.0003 10.3288 2 9.50066V6.50066C2.00008 5.75591 2.54326 5.13931 3.25488 5.02214L11 12.7673ZM8.91992 2.23699C9.726 1.52048 10.9998 2.09216 11 3.17058V9.2321L6.31641 4.54851L8.91992 2.23699Z" fill="currentColor" /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeSlashFill;
