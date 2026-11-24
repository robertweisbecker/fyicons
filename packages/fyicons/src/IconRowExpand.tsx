import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRowExpand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRowExpand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="row-expand"><path fill="currentColor" d="M10.146 11.15a.5.5 0 1 1 .707.708l-2.497 2.497a.5.5 0 0 1-.707 0l-2.497-2.497a.5.5 0 0 1 .707-.707l2.143 2.143zM8.001 2.502a.5.5 0 0 1 .354.147l2.499 2.499a.5.5 0 0 1-.707.707L8.002 3.709 5.858 5.854a.5.5 0 0 1-.708-.707l2.498-2.5A.5.5 0 0 1 8 2.502" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5h9" />{props.children}</SvgRoot>;
});
export default IconRowExpand;
