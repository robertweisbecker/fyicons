import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.442 13.21c-.255.82-1.317 1.18-2.022.553L6.31 11H4a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 .871-1.36zM9.42 2.236c.806-.716 2.08-.145 2.08.933v6.563L6.552 4.784z" /><path stroke="currentColor" strokeLinecap="round" d="m2.5 2.5 11 11" /></SvgRoot>;
});
export default IconVolumeSlashFill;
