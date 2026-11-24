import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScrew = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScrew(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="screw"><path stroke="currentColor" strokeLinejoin="round" d="m11 7-5.5 5.5-2.905.968a.05.05 0 0 1-.063-.063L3.5 10.5 9 5" /><path stroke="currentColor" strokeLinejoin="round" d="M7.5 3.5a3.54 3.54 0 0 1 4-.703V3.5a1 1 0 0 0 1 1h.703a3.54 3.54 0 0 1-.703 4z" />{props.children}</SvgRoot>;
});
export default IconScrew;
