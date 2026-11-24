import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkUnlink = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkUnlink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="link-unlink"><g clipPath={"url(#" + idPrefix + "clip0_550_8814)"}><path fill="currentColor" d="M11.5 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M3.146 7.146a.5.5 0 0 1 .708.707l-1 1a3.036 3.036 0 0 0 4.292 4.293l1-1a.5.5 0 0 1 .708.707l-1 1a4.036 4.036 0 0 1-5.708-5.707zM15.5 11a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1zM8.146 2.147a4.037 4.037 0 0 1 5.708 5.707l-1 1a.5.5 0 0 1-.707-.707l1-1a3.036 3.036 0 0 0-4.293-4.293l-1 1a.5.5 0 0 1-.708-.707zM2.499 4a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1zm2-4a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5" /></g><defs><clipPath id={idPrefix + "clip0_550_8814"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs>{props.children}</SvgRoot>;
});
export default IconLinkUnlink;
