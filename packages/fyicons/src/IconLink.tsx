import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLink = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.146 7.147a.5.5 0 0 1 .707.707l-2 2a2.328 2.328 0 1 0 3.293 3.293l2-2a.5.5 0 0 1 .707.707l-2 2a3.329 3.329 0 0 1-4.707-4.707zm5.5-1.5a.5.5 0 1 1 .707.707l-4 4a.5.5 0 0 1-.707-.707zm-.5-3.5a3.328 3.328 0 1 1 4.707 4.707l-2 2a.5.5 0 0 1-.707-.707l2-2a2.329 2.329 0 0 0-3.293-3.293l-2 2a.5.5 0 0 1-.707-.707z" /></SvgRoot>;
});
export default IconLink;
