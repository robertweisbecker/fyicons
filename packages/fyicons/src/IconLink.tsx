import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLink = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="link"><path fill="currentColor" d="M3.146 7.146a.501.501 0 0 1 .708.707l-1 1a3.036 3.036 0 0 0 4.293 4.293l1-1a.501.501 0 0 1 .707.707l-1 1a4.036 4.036 0 0 1-5.707-5.707zm7.001-2a.5.5 0 0 1 .707.708l-5 5a.5.5 0 0 1-.707-.707zm-2-2.998a4.036 4.036 0 0 1 5.706 5.707l-1 1a.5.5 0 0 1-.707-.707l1-1a3.036 3.036 0 0 0-4.293-4.293l-1 1a.5.5 0 0 1-.707-.707z" />{props.children}</SvgRoot>;
});
export default IconLink;
