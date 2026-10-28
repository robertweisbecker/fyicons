import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-add"><path fill="currentColor" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M8 1a7 7 0 0 1 6.96 7.733 4.5 4.5 0 0 0-.967-.478Q14 8.127 14 8a6 6 0 1 0-5.745 5.993c.12.344.282.668.478.968q-.36.038-.733.039A7 7 0 1 1 8 1m4.5 9.5a.5.5 0 0 0-.5.5v.995h-1a.5.5 0 0 0 0 1h1V14a.5.5 0 0 0 1 0v-1.005h1a.5.5 0 0 0 0-1h-1V11a.5.5 0 0 0-.5-.5M4.717 9.317A.5.5 0 0 1 5.4 9.5a3 3 0 0 0 2.862 1.486q-.174.484-.234 1.012l-.03.002a4 4 0 0 1-3.464-2 .5.5 0 0 1 .183-.683M5.875 6c.483 0 .875.448.875 1s-.392 1-.875 1S5 7.552 5 7s.392-1 .875-1m4.25 0c.483 0 .875.448.875 1s-.392 1-.875 1-.875-.448-.875-1 .392-1 .875-1" /></SvgRoot>;
});
export default IconEmojiAdd;
