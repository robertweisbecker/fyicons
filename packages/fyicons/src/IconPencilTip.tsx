import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil-tip"><path fill="currentColor" d="M8 1a.5.5 0 0 1 .454.288l3.5 7.5.046.1V15H4V8.889l.047-.1 3.5-7.5.036-.063A.5.5 0 0 1 8 1M5 14h6v-4H9.965l-1.602 1.676-.362.378-.36-.378L6.036 10H5zm4.365-8.394C9.155 5.753 8.7 6 8 6s-1.155-.246-1.365-.393L5.052 9h1.412l.148.154L8 10.606l1.39-1.452L9.536 9h1.412z" /></SvgRoot>;
});
export default IconPencilTip;
