import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitBranchSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranchSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-branch-simple"><path fill="currentColor" d="M5 14H4v-2h1zm0-6.95c.98.199 1.751.97 1.95 1.95H8.5a2.5 2.5 0 0 0 2.459-2.06 2.5 2.5 0 1 1 1.01.014A3.5 3.5 0 0 1 8.5 10H6.95A2.501 2.501 0 1 1 4 7.05V2h1zM4.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />{props.children}</SvgRoot>;
});
export default IconGitBranchSimple;
