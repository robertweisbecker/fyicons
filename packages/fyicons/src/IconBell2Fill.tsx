import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBell2Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBell2Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-2-fill"><path fill="currentColor" d="M8.154 1.008a1.5 1.5 0 0 1 1.163 2.21A4.1 4.1 0 0 1 12.101 7.1v2.212l.994 1.845a1.25 1.25 0 0 1-1.1 1.843H10a2 2 0 1 1-4 0H4.007a1.25 1.25 0 0 1-1.1-1.843L3.9 9.312V7.1a4.1 4.1 0 0 1 2.783-3.883A1.5 1.5 0 0 1 8 1zM7 13a1 1 0 0 0 2 0z" /></SvgRoot>;
});
export default IconBell2Fill;
