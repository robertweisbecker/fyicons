import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAngryFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAngryFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-angry-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 9c-1.09 0-1.975.872-1.998 1.956A4.7 4.7 0 0 1 8 11.5c.7 0 1.372.162 1.997.456A2 2 0 0 0 8 10M4.5 6a.501.501 0 0 0 0 1.001h.44q.126 0 .251.017c-.12.206-.191.459-.191.733 0 .69.448 1.25 1 1.25s1-.56 1-1.25l-.002-.068a.5.5 0 0 0 .105-.785A3.06 3.06 0 0 0 4.94 6zm6.56 0c-.811 0-1.59.323-2.164.896a.5.5 0 0 0 0 .708.5.5 0 0 0 .107.078Q9 7.715 9 7.75C9 8.44 9.448 9 10 9s1-.56 1-1.25c0-.274-.072-.527-.191-.733Q10.934 7 11.06 7h.439a.5.5 0 0 0 0-1z" /></SvgRoot>;
});
export default IconEmojiAngryFill;
