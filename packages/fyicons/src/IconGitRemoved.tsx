import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitRemoved = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitRemoved(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 2a2 2 0 0 1 1.132 3.646l.815 1.63a.5.5 0 1 1-.894.448l-.867-1.735A2 2 0 0 1 8 9H7v1.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zM7 8h1a1 1 0 0 0 0-2H7z" /></SvgRoot>;
});
export default IconGitRemoved;
