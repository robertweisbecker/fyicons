import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitConflict = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitConflict(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-conflict"><path fill="currentColor" d="M4 7a.5.5 0 0 1 .5.5v2.565A1.999 1.999 0 1 1 2 12a2 2 0 0 1 1.5-1.935V7.5A.5.5 0 0 1 4 7m6.502-4a2 2 0 0 1 2 2v5.065a2 2 0 1 1-1 0V5a1 1 0 0 0-1-1h-3a.5.5 0 1 1 0-1zM4 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 12 11M2.146 2.144a.5.5 0 0 1 .707 0L4 3.292l1.144-1.143a.5.5 0 0 1 .707.707L4.708 4l1.146 1.147a.5.5 0 0 1-.707.707L4.001 4.706l-1.148 1.15a.5.5 0 0 1-.707-.707L3.294 4 2.146 2.851a.5.5 0 0 1 0-.707" />{props.children}</SvgRoot>;
});
export default IconGitConflict;
