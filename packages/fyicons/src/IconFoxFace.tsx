import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFoxFace = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFoxFace(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fox-face"><g clipPath={"url(#" + idPrefix + "clip0_1900_1551)"}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 13.5c1.173-.055 2.143-1.708 3.116-2.256 1.074-.605 2.172-.752 3.384-.744 0-2.5-2-3-2-3 1-1.5 1-3 1-5-1 0-3.5 1-4.11 3H8m0 8c-1.173-.055-2.143-1.708-3.116-2.256-1.073-.605-2.172-.752-3.384-.744 0-2.5 2-3 2-3-1-1.5-1-3-1-5 1 0 3.5 1 4.11 3H8" /><path fill="currentColor" fillRule="evenodd" d="M6.916 10.013c-.208.212-.59.173-.854-.087s-.309-.64-.1-.852c.207-.211.59-.172.853.087.264.26.309.641.1.852" clipRule="evenodd" /><path fill="currentColor" d="M9.173 9.182c-.258.273-.293.658-.08.86.215.202.597.145.855-.128.258-.274.293-.659.079-.86-.214-.203-.597-.145-.854.128M8 12.5c0-.375 1-.375 1-1.125 0-.31-.5-.375-1-.375s-1 .064-1 .375c0 .75 1 .75 1 1.125" /></g><defs><clipPath id={idPrefix + "clip0_1900_1551"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs>{props.children}</SvgRoot>;
});
export default IconFoxFace;
