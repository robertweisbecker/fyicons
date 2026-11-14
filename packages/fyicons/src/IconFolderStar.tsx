import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderStar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderStar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-star"><path fill="currentColor" d="M5.672 2c.663 0 1.3.263 1.768.732L8.708 4H12.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zM3.5 3A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 5h-4a.5.5 0 0 1-.353-.147L6.733 3.44A1.5 1.5 0 0 0 5.673 3zm4.261 3.238a.25.25 0 0 1 .477 0l.543 1.685a.25.25 0 0 0 .239.174l1.77-.004a.25.25 0 0 1 .148.452L9.502 9.584a.25.25 0 0 0-.09.28l.55 1.683a.25.25 0 0 1-.384.28l-1.431-1.044a.25.25 0 0 0-.295 0l-1.43 1.044a.25.25 0 0 1-.385-.28l.55-1.683a.25.25 0 0 0-.09-.28L5.06 8.545a.25.25 0 0 1 .147-.452l1.772.004a.25.25 0 0 0 .238-.174z" />{props.children}</SvgRoot>;
});
export default IconFolderStar;
