import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitBranch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a1.998 1.998 0 0 1 .5 3.934V7a2 2 0 0 1-2 2h-4a1 1 0 0 0-1 1v.065A1.999 1.999 0 1 1 3 12a2 2 0 0 1 1.5-1.935V5.934A1.998 1.998 0 0 1 5 2a1.998 1.998 0 0 1 .5 3.934V8.27c.294-.17.635-.27 1-.27h4a1 1 0 0 0 1-1V5.934A1.998 1.998 0 0 1 12 2m-7 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGitBranch;
