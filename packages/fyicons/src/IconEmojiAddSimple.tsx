import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAddSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAddSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-add-simple"><path fill="currentColor" d="M4.425 1.981a7 7 0 0 1 4.08-.962.5.5 0 0 1-.073.997 6 6 0 0 0-5.893 3.5A6 6 0 1 0 13.98 7.523a.5.5 0 0 1 .997-.08 7 7 0 0 1-4.031 6.908 7.002 7.002 0 0 1-9.832-5.088 7 7 0 0 1 3.31-7.28M10.596 9.5a.501.501 0 0 1 .866.5A4.003 4.003 0 0 1 6 11.464 4 4 0 0 1 4.535 10a.5.5 0 0 1 .866-.5 3 3 0 0 0 5.195 0M5.876 6c.482 0 .874.448.874 1s-.392 1-.875 1S5.001 7.552 5 7c0-.552.392-1 .875-1m4.25 0c.482 0 .874.448.875 1 0 .552-.393 1-.875 1-.484 0-.875-.448-.876-1 0-.552.392-1 .876-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5.5v4m2-2.005h-4" /></SvgRoot>;
});
export default IconEmojiAddSimple;
