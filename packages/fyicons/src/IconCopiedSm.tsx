import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopiedSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="copied-sm"><g clipPath={"url(#" + idPrefix + "clip0_610_12054)"}><path fill="currentColor" d="M8.577.88a2 2 0 0 0-2.425 1.454L5.39 5.38v.008l-3.056.764A2 2 0 0 0 .88 8.575l1.273 5.09a2 2 0 0 0 2.425 1.455l5.09-1.272a2 2 0 0 0 1.454-2.425l-.101-.403.404.101a2 2 0 0 0 2.425-1.455l1.272-5.09a2 2 0 0 0-1.455-2.424zm-.91 4.968a1 1 0 0 1 1.212.727l1.273 5.09a1 1 0 0 1-.728 1.213l-5.09 1.273a1 1 0 0 1-1.212-.728l-1.273-5.09a1 1 0 0 1 .728-1.213zm.001 1.682a.5.5 0 0 0-.638.302L5.979 10.77l-1.231-.703a.5.5 0 1 0-.495.868l1.75 1a.5.5 0 0 0 .718-.266l1.25-3.5a.5.5 0 0 0-.303-.638m-.546-4.954a1 1 0 0 1 1.212-.727l5.09 1.272a1 1 0 0 1 .728 1.213l-1.273 5.09a1 1 0 0 1-1.213.728l-.92-.232-.897-3.587a2 2 0 0 0-2.425-1.455l-.937.234z" /></g><defs><clipPath id={idPrefix + "clip0_610_12054"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconCopiedSm;
