import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLink = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_58_9555)"}><path fill="currentColor" d="M3.146 7.145a.5.5 0 0 1 .708.707l-1 1a3.036 3.036 0 0 0 4.293 4.293l1-1a.5.5 0 0 1 .708.707l-1 1a4.036 4.036 0 0 1-5.708-5.707zm6-.998a.5.5 0 1 1 .707.707l-3 3a.5.5 0 0 1-.707-.707zm-1-4a4.036 4.036 0 0 1 5.707 5.708l-1 1a.5.5 0 0 1-.707-.707l1-1a3.036 3.036 0 0 0-4.293-4.293l-1 1a.5.5 0 0 1-.707-.707z" /></g><defs><clipPath id={idPrefix + "clip0_58_9555"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconLink;
