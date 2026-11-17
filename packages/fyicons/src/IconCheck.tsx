import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check"><path fill="currentColor" d="M13.078 2.232a.5.5 0 0 1 .844.537l-7 11a.5.5 0 0 1-.812.044l-4-5a.5.5 0 0 1 .78-.625l3.563 4.453z" />{props.children}</SvgRoot>;
});
export default IconCheck;
