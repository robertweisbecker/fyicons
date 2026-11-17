import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiNeutral = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiNeutral(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-neutral"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.5 8a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM5.875 5.5c.483 0 .875.56.875 1.25S6.358 8 5.875 8 5 7.44 5 6.75s.392-1.25.875-1.25m4.25 0c.483 0 .875.56.875 1.25S10.608 8 10.125 8s-.875-.56-.875-1.25.392-1.25.875-1.25" />{props.children}</SvgRoot>;
});
export default IconEmojiNeutral;
