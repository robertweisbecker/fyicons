import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconXLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconXLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="x-lg"><path fill="currentColor" d="M14.147 1.147a.5.5 0 0 1 .707.707L8.707 8.001l6.146 6.146a.5.5 0 1 1-.707.707L7.999 8.708l-6.145 6.146a.5.5 0 0 1-.707-.707L7.292 8 1.144 1.854a.5.5 0 1 1 .708-.707l6.147 6.147z" /></SvgRoot>;
});
export default IconXLg;
