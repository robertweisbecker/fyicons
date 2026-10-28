import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitRemoved = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitRemoved(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-removed"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM8 5a2 2 0 0 1 1.132 3.646l.815 1.63a.5.5 0 1 1-.894.448l-.867-1.735A2 2 0 0 1 8 9H7v1.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zM7 8h1a1 1 0 0 0 0-2H7z" /></SvgRoot>;
});
export default IconGitRemoved;
