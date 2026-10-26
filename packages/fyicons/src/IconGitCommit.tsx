import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitCommit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitCommit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 5.25A3.25 3.25 0 0 1 11.212 8H15v1h-3.788a3.25 3.25 0 0 1-6.424 0H1V8h3.788A3.25 3.25 0 0 1 8 5.25m0 1a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" /></SvgRoot>;
});
export default IconGitCommit;
