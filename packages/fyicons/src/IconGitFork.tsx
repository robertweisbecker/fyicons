import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitFork = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitFork(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-fork"><path fill="currentColor" d="M12 1a1.998 1.998 0 0 1 .5 3.934V7a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1v1.065A1.999 1.999 0 1 1 6 13a2 2 0 0 1 1.5-1.935V10a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2V4.934A1.998 1.998 0 0 1 4 1a1.998 1.998 0 0 1 .5 3.934V7a1 1 0 0 0 1 1h1c.598 0 1.133.264 1.5.68.367-.416.902-.68 1.5-.68h1a1 1 0 0 0 1-1V4.934A1.998 1.998 0 0 1 12 1M8 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGitFork;
