import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMusicNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMusicNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="music-note"><path fill="currentColor" d="M12.07 1.157A1.5 1.5 0 0 1 14 2.593V10.5A2.5 2.5 0 1 1 11.5 8H13V4.91L6 6.88v5.62A2.5 2.5 0 1 1 3.5 10H5V4.39a1.5 1.5 0 0 1 1.07-1.438zM3.5 11A1.5 1.5 0 1 0 5 12.5V11zm8-2a1.5 1.5 0 1 0 1.5 1.5V9zm.856-6.885-6 1.795A.5.5 0 0 0 6 4.39v1.45l7-1.97V2.594a.5.5 0 0 0-.644-.478" /></SvgRoot>;
});
export default IconMusicNote;
