import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFork = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFork(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fork"><path fill="currentColor" d="M6.5 2a.5.5 0 0 1 0 1H3.707l2.975 2.975A4.5 4.5 0 0 1 8 9.157V13.5a.5.5 0 0 1-1 0V9.157c0-.928-.369-1.819-1.025-2.475L3 3.707V6.5a.5.5 0 0 1-1 0v-4q0-.05.009-.099a.5.5 0 0 1 .054-.142A.5.5 0 0 1 2.5 2zm7.018.001q.04 0 .08.008l.046.013.047.015q.017.008.033.018.028.013.055.03.081.054.136.136l.014.025c.044.075.072.16.072.254v4a.5.5 0 0 1-1 0V3.706L9.854 6.854a.5.5 0 0 1-.708-.708L12.293 3H9.5a.5.5 0 0 1 0-1h4.001z" /></SvgRoot>;
});
export default IconFork;
