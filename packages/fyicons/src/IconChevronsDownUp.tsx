import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsDownUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsDownUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.647 9.647a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1-.707.707l-2.646-2.647-2.647 2.647a.5.5 0 1 1-.707-.707zm3-7a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 1 1 .707-.707l2.647 2.646z" /></SvgRoot>;
});
export default IconChevronsDownUp;
