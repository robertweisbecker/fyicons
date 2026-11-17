import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiHappyFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiHappyFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-happy-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m3.595 8.754c.177-.364-.203-.698-.59-.576a10.04 10.04 0 0 1-6.01.002c-.386-.122-.767.212-.589.576a3.998 3.998 0 0 0 7.189-.002M5.875 5.25C5.392 5.25 5 5.81 5 6.5s.392 1.25.875 1.25.875-.56.875-1.25-.392-1.25-.875-1.25m4.25 0c-.483 0-.875.56-.875 1.25s.392 1.25.875 1.25S11 7.19 11 6.5s-.392-1.25-.875-1.25" />{props.children}</SvgRoot>;
});
export default IconEmojiHappyFill;
