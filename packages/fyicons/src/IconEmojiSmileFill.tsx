import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiSmileFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiSmileFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-smile-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m3.712 8.317a.5.5 0 0 0-.683.183 3.5 3.5 0 0 1-6.062 0 .5.5 0 0 0-.866.5 4.5 4.5 0 0 0 6.147 1.648A4.5 4.5 0 0 0 11.896 10a.5.5 0 0 0-.184-.683M5.875 6C5.392 6 5 6.448 5 7s.392 1 .875 1 .875-.448.875-1-.392-1-.875-1m4.25 0c-.483 0-.875.448-.875 1s.392 1 .875 1S11 7.552 11 7s-.392-1-.875-1" />{props.children}</SvgRoot>;
});
export default IconEmojiSmileFill;
