import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAngry = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAngry(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-angry"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 8c1.019 0 1.857.762 1.981 1.747A8 8 0 0 0 8 11.5a8 8 0 0 0-1.982.247A2 2 0 0 1 8 10M4.94 6c.811 0 1.59.323 2.164.896a.5.5 0 0 1-.143.805Q7 7.843 7 8c0 .552-.392 1-.875 1s-.875-.448-.875-1c0-.367.174-.687.432-.861A2.1 2.1 0 0 0 4.939 7H4.5a.5.5 0 0 1 0-1zm6.56 0a.5.5 0 0 1 0 1h-.44c-.256 0-.507.048-.742.139.258.174.432.494.432.861 0 .552-.392 1-.875 1S9 8.552 9 8q0-.157.04-.299a.5.5 0 0 1-.143-.805A3.06 3.06 0 0 1 11.06 6z" /></SvgRoot>;
});
export default IconEmojiAngry;
