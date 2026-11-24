import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiFrownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiFrownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-frown-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 9a4 4 0 0 0-2.828 1.172.5.5 0 1 0 .707.707 3 3 0 0 1 4.242 0 .5.5 0 0 0 .707-.707A4 4 0 0 0 8 10M5.875 5.75C5.392 5.75 5 6.254 5 6.875S5.392 8 5.875 8s.875-.504.875-1.125-.392-1.125-.875-1.125m4.25 0c-.483 0-.875.504-.875 1.125S9.642 8 10.125 8 11 7.496 11 6.875s-.392-1.125-.875-1.125" />{props.children}</SvgRoot>;
});
export default IconEmojiFrownFill;
