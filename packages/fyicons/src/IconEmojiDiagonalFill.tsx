import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiDiagonalFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiDiagonalFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-diagonal-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m3.36 8.27-6 1.75a.501.501 0 0 0 .28.96l6-1.75a.501.501 0 0 0-.28-.96M5.875 6C5.392 6 5 6.448 5 7s.392 1 .875 1 .875-.448.875-1-.392-1-.875-1m4.25 0c-.483 0-.875.448-.875 1s.392 1 .875 1S11 7.552 11 7s-.392-1-.875-1" /></SvgRoot>;
});
export default IconEmojiDiagonalFill;
