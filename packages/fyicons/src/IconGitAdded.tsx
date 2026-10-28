import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitAdded = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitAdded(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm2.848 2.36a.752.752 0 0 1 1.304 0l.053.116 1.765 4.853a.5.5 0 1 1-.94.342l-.38-1.046h-2.3l-.38 1.046a.5.5 0 1 1-.94-.342l1.765-4.853zm-.225 3.515h1.754L8 6.464z" /></SvgRoot>;
});
export default IconGitAdded;
