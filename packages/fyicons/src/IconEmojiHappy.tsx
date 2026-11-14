import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiHappy = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiHappy(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-happy"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.347 7.067c.375-.133.764.174.617.543-.614 1.544-2.156 2.64-3.963 2.64s-3.35-1.095-3.965-2.638c-.147-.37.242-.675.617-.543 2.161.765 4.533.764 6.694-.002M5.875 5.25c.483 0 .875.56.875 1.25s-.392 1.25-.875 1.25S5 7.19 5 6.5s.392-1.25.875-1.25m4.25 0c.483 0 .875.56.875 1.25s-.392 1.25-.875 1.25-.875-.56-.875-1.25.392-1.25.875-1.25" />{props.children}</SvgRoot>;
});
export default IconEmojiHappy;
