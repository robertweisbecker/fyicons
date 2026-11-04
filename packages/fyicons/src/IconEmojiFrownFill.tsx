import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiFrownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiFrownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-frown-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 9a4 4 0 0 0-2.828 1.172.5.5 0 1 0 .707.707 3 3 0 0 1 4.242 0 .5.5 0 0 0 .707-.707A4 4 0 0 0 8 10M5.875 6C5.392 6 5 6.448 5 7s.392 1 .875 1 .875-.448.875-1-.392-1-.875-1m4.25 0c-.483 0-.875.448-.875 1s.392 1 .875 1S11 7.552 11 7s-.392-1-.875-1" /></SvgRoot>;
});
export default IconEmojiFrownFill;
