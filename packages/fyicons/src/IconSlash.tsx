import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="slash"><path fill="currentColor" d="M10.033 1.32a.5.5 0 0 1 .934.36l-5 13a.5.5 0 0 1-.934-.36z" /></SvgRoot>;
});
export default IconSlash;
