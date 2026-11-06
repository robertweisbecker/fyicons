import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBee = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBee(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bee"><g clipPath={"url(#" + idPrefix + "clip0_1314_11170)"}><path fill="currentColor" d="M8 2a3 3 0 0 1 3 3h2a3 3 0 0 1 0 6 3 3 0 0 1-2.01-.776 3 3 0 0 1-2.489 2.733V14.5a.5.5 0 0 1-1 0v-1.542a3 3 0 0 1-2.493-2.734A3 3 0 0 1 3 11a3 3 0 1 1 0-6h2a3 3 0 0 1 3-3m-2 8 .01.204A2 2 0 0 0 10 10zM3 6a2 2 0 1 0 2 2V6zm8 1.49.002.01-.002.009V8a2 2 0 1 0 2-2h-2zM6 9h4V8H6zm0-2h4V6H6zm2-4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 1.5c0 .613.346 1.173.894 1.447L6.5 3m3 0 .106-.053c.548-.274.894-.834.894-1.447" /></g><defs><clipPath id={idPrefix + "clip0_1314_11170"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconBee;
