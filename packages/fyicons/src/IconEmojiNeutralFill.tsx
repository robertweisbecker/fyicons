import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiNeutralFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiNeutralFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-neutral-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-3.5 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1.375-4.5C5.392 5.5 5 6.06 5 6.75S5.392 8 5.875 8s.875-.56.875-1.25-.392-1.25-.875-1.25m4.25 0c-.483 0-.875.56-.875 1.25S9.642 8 10.125 8 11 7.44 11 6.75s-.392-1.25-.875-1.25" /></SvgRoot>;
});
export default IconEmojiNeutralFill;
