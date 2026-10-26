import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitBranchSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranchSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5 8.05c.98.199 1.751.97 1.95 1.95h.55a3.5 3.5 0 0 0 3.47-3.058 2.5 2.5 0 1 1 1.007.011A4.5 4.5 0 0 1 7.5 11h-.55c-.199.98-.97 1.75-1.95 1.95V14H4v-1.05a2.5 2.5 0 0 1 0-4.9V2h1zM4.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconGitBranchSimple;
