import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmarkCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bookmark-check"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath={"url(#" + idPrefix + "clip0_1720_12541)"}><path d="m8 11.465 3.044 2.705a.875.875 0 0 0 1.456-.654V2.965a1.5 1.5 0 0 0-1.5-1.5H5a1.5 1.5 0 0 0-1.5 1.5v10.551a.875.875 0 0 0 1.456.654z" /><path d="m5.75 6.5 1.73 2 2.52-4" /></g><defs><clipPath id={idPrefix + "clip0_1720_12541"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs>{props.children}</SvgRoot>;
});
export default IconBookmarkCheck;
