import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiDiagonal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiDiagonal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.36 7.27a.501.501 0 0 1 .28.96l-6 1.75a.501.501 0 0 1-.28-.96zM5.875 6c.483 0 .875.448.875 1s-.392 1-.875 1S5 7.552 5 7s.392-1 .875-1m4.25 0c.483 0 .875.448.875 1s-.392 1-.875 1-.875-.448-.875-1 .392-1 .875-1" /></SvgRoot>;
});
export default IconEmojiDiagonal;
