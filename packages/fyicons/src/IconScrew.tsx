import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScrew = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScrew(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.5v4m-2-3v2m4-2v2" /><path stroke="currentColor" strokeLinejoin="round" d="m11 7-5.5 5.5-2.905.968a.05.05 0 0 1-.063-.063L3.5 10.5 9 5" /><path fill="currentColor" d="m7.5 3.5-.354-.353a.5.5 0 0 0 0 .707zm4-.703h.5a.5.5 0 0 0-.288-.453zm0 .703H11zm1.703 1 .453-.212A.5.5 0 0 0 13.203 4zm-.703 4-.354.354a.5.5 0 0 0 .708 0zm-5-5 .354.354a3.04 3.04 0 0 1 3.434-.604l.212-.453.212-.453a4.04 4.04 0 0 0-4.566.803zm4-.703H11V3.5h1v-.703zm0 .703H11A1.5 1.5 0 0 0 12.5 5V4a.5.5 0 0 1-.5-.5zm1 1V5h.703V4H12.5zm.703 0-.453.212a3.04 3.04 0 0 1-.604 3.435l.354.353.354.354a4.04 4.04 0 0 0 .802-4.566zm-.703 4 .354-.353-5-5L7.5 3.5l-.354.354 5 5z" /></SvgRoot>;
});
export default IconScrew;
