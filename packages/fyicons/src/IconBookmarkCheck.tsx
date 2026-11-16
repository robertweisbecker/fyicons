import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmarkCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bookmark-check"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath={"url(#" + idPrefix + "clip0_1720_12541)"}><path d="M11 1.465H5a1.5 1.5 0 0 0-1.5 1.5v10.551a.875.875 0 0 0 1.456.654L8 11.464l3.044 2.706a.875.875 0 0 0 1.456-.654V2.965a1.5 1.5 0 0 0-1.5-1.5" /><path d="m5.875 6.75 1.85 2 2.4-4" /></g><defs><clipPath id={idPrefix + "clip0_1720_12541"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconBookmarkCheck;
