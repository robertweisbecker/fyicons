import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-slash-fill"><path fill="currentColor" d="M8.92 2.236C9.726 1.52 11 2.092 11 3.17v7.123l2.854 2.854a.5.5 0 0 1-.707.707L11 11.707v1.123c0 1.078-1.274 1.65-2.08.934L5.81 11H3.5A1.5 1.5 0 0 1 2 9.5v-3A1.5 1.5 0 0 1 3.5 5h.793L2.146 2.854a.5.5 0 0 1 .708-.708L5.707 5h.103zM4.293 5 11 11.707v-1.414L5.707 5z" /></SvgRoot>;
});
export default IconVolumeSlashFill;
