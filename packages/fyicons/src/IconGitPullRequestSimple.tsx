import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitPullRequestSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitPullRequestSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-pull-request-simple"><path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 1 5 6.95V14H4V6.95A2.5 2.5 0 0 1 4.5 2m5 2A2.5 2.5 0 0 1 12 6.5v2.55a2.501 2.501 0 1 1-1 0V6.5A1.5 1.5 0 0 0 9.5 5H8V4zm2 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7-7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconGitPullRequestSimple;
