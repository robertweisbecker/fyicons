import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitAdded = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitAdded(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2.348 2.36a.752.752 0 0 1 1.304 0l.053.116 1.765 4.853a.5.5 0 1 1-.94.342l-.38-1.046h-2.3l-.38 1.046a.5.5 0 1 1-.94-.342l1.765-4.853zm-.225 3.515h1.754L8 6.464z" /></SvgRoot>;
});
export default IconGitAdded;
