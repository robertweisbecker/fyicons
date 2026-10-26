import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitModified = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitModified(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm5.076 2.235A.5.5 0 0 1 11 5.5v5a.5.5 0 0 1-1 0V7.242L8.424 9.765a.5.5 0 0 1-.848 0L6 7.242V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .924-.265L8 8.557z" /></SvgRoot>;
});
export default IconGitModified;
