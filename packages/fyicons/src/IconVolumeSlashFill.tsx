import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-slash-fill"><path fill="currentColor" d="M11 12.767v.064c0 1.078-1.274 1.65-2.08.933l-3.11-2.763H3.5A1.5 1.5 0 0 1 2 9.5v-3a1.5 1.5 0 0 1 1.255-1.479zM8.92 2.237c.806-.717 2.08-.145 2.08.934v6.061L6.316 4.55z" /><path stroke="currentColor" strokeLinecap="round" d="m2.5 2.5 11 11" /></SvgRoot>;
});
export default IconVolumeSlashFill;
