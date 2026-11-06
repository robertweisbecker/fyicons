import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitCompareSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitCompareSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-compare-simple"><path fill="currentColor" d="M9.5 3A2.5 2.5 0 0 1 12 5.5v3.55a2.501 2.501 0 1 1-1 0V5.5A1.5 1.5 0 0 0 9.5 4H8V3zm-5-1A2.5 2.5 0 0 1 5 6.95v3.55A1.5 1.5 0 0 0 6.5 12H8v1H6.5A2.5 2.5 0 0 1 4 10.5V6.95A2.5 2.5 0 0 1 4.5 2m7 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7-7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconGitCompareSimple;
