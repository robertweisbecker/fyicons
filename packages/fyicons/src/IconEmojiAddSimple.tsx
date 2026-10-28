import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAddSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAddSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-add-simple"><path fill="currentColor" d="M4.425 1.981a7 7 0 0 1 4.08-.962.5.5 0 1 1-.073.997A6.002 6.002 0 0 0 2.1 9.08a6 6 0 0 0 11.882-1.559.5.5 0 0 1 .997-.08 7 7 0 1 1-10.553-5.46m6.17 7.519a.501.501 0 0 1 .866.5 4 4 0 0 1-6.927 0 .5.5 0 1 1 .866-.5 3 3 0 0 0 5.195 0M5.876 6c.483 0 .874.448.874 1s-.391 1-.875 1C5.392 8 5 7.552 5 7s.392-1 .875-1m4.25 0c.482 0 .874.448.875 1 0 .552-.392 1-.875 1-.484 0-.876-.448-.876-1s.392-1 .876-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5.5v4m2-2.005h-4" /></SvgRoot>;
});
export default IconEmojiAddSimple;
