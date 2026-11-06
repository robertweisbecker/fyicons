import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wand"><g clipPath={"url(#" + idPrefix + "clip0_798_535)"}><path fill="currentColor" d="M8.942 4.353a1.5 1.5 0 0 1 2.12 0l.587.586a1.5 1.5 0 0 1 0 2.121l-6.586 6.586c-.183.183-.402.31-.634.378l-.14.034a1.5 1.5 0 0 1-.573 0l-.14-.034a1.5 1.5 0 0 1-.634-.378l-.586-.586a1.5 1.5 0 0 1 0-2.121zm4.204 3.794a.5.5 0 0 1 .707 0l1 1a.5.5 0 0 1-.707.707l-1-1a.5.5 0 0 1 0-.707m-2.79-3.087a.5.5 0 0 0-.707 0L7.706 7.002 9 8.295l1.943-1.942a.5.5 0 0 0 0-.707zM15.5 5a.5.5 0 1 1 0 1h-1a.5.5 0 0 1 0-1zM6.147 1.147a.5.5 0 0 1 .707 0l1 1a.5.5 0 0 1-.707.707l-1-1a.5.5 0 0 1 0-.707m7.998 0a.5.5 0 0 1 .708.707l-1 1a.5.5 0 0 1-.707-.707zM10.5 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" /></g><defs><clipPath id={idPrefix + "clip0_798_535"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconWand;
