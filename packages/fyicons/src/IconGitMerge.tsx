import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitMerge = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitMerge(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5 2a2 2 0 0 1 .74 3.856 3.41 3.41 0 0 0 4.302 1.551 2 2 0 1 1 .445.898A4.41 4.41 0 0 1 5.5 7.236v2.83A1.999 1.999 0 1 1 3 12a2 2 0 0 1 1.5-1.935V5.934A1.998 1.998 0 0 1 5 2m0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGitMerge;
