import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAddSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAddSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-add-simple"><path fill="currentColor" d="M4.423 1.98a7 7 0 0 1 4.08-.962.5.5 0 0 1-.073.997 6.01 6.01 0 0 0-5.893 3.5 6.003 6.003 0 0 0 4.425 8.394 6.003 6.003 0 0 0 7.017-6.387.5.5 0 0 1 .997-.08 7.002 7.002 0 0 1-8.186 7.452A7 7 0 0 1 1.113 9.26a7 7 0 0 1 3.31-7.28m6.605 7.52a.5.5 0 0 1 .866.5 4.5 4.5 0 0 1-3.897 2.25A4.5 4.5 0 0 1 4.099 10a.5.5 0 0 1 .866-.5 3.5 3.5 0 0 0 3.032 1.75 3.5 3.5 0 0 0 3.03-1.75M10.123 6c.484 0 .875.448.876 1 0 .552-.392 1-.876 1-.482 0-.874-.448-.874-1 0-.551.392-1 .874-1m-4.25 0c.484 0 .875.447.876 1 0 .552-.392 1-.875 1-.483-.002-.875-.449-.875-1 0-.552.392-1 .875-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5.5v4m2-2.005h-4" /></SvgRoot>;
});
export default IconEmojiAddSimple;
