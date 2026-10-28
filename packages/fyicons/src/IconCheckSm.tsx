import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check-sm"><path fill="currentColor" d="M11.066 4.252a.5.5 0 0 1 .869.496l-4 7a.5.5 0 0 1-.788.106l-3-3a.5.5 0 1 1 .707-.707l2.536 2.536z" /></SvgRoot>;
});
export default IconCheckSm;
