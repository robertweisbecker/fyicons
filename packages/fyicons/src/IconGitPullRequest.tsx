import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitPullRequest = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitPullRequest(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4 2a1.998 1.998 0 0 1 .5 3.934v4.131A1.999 1.999 0 1 1 2 12a2 2 0 0 1 1.5-1.935V5.933A1.998 1.998 0 0 1 4 2m5.18.183a.5.5 0 0 1 .821.384V3.5h.5a2 2 0 0 1 2 2v4.565a2 2 0 1 1-1 0V5.5a1 1 0 0 0-1-1h-.5v.932a.5.5 0 0 1-.82.384L7.46 4.384a.5.5 0 0 1 0-.769zM4 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGitPullRequest;
