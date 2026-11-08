import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParentheses = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParentheses(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="parentheses"><path fill="currentColor" d="M5.379 2.014a.501.501 0 0 1 .243.97H5.62l-.002.002-.025.007q-.036.009-.108.033a5.5 5.5 0 0 0-1.67.924C2.913 4.683 2 5.923 2 8s.913 3.316 1.815 4.05a5.5 5.5 0 0 0 1.67.923l.108.033.025.007.002.001h.001a.5.5 0 0 1-.242.97h-.003l-.004-.001-.013-.004-.042-.012-.146-.045a6.5 6.5 0 0 1-1.986-1.098C2.087 11.934 1 10.424 1 8s1.087-3.934 2.185-4.826A6.5 6.5 0 0 1 5.17 2.077a4 4 0 0 1 .188-.057l.013-.004h.006v-.002m5.242 0v.001h.002l.004.001.013.004a3 3 0 0 1 .188.057 6.5 6.5 0 0 1 1.986 1.098C13.913 4.065 15 5.575 15 8c0 2.423-1.087 3.933-2.185 4.825a6.5 6.5 0 0 1-1.986 1.097 4 4 0 0 1-.188.057l-.013.004h-.006v.002a.5.5 0 0 1-.243-.97l.003-.002.025-.007q.036-.009.108-.033a5.5 5.5 0 0 0 1.67-.924C13.087 11.316 14 10.076 14 8s-.913-3.316-1.815-4.05a5.5 5.5 0 0 0-1.67-.923l-.108-.033-.025-.007-.002-.002h-.002a.5.5 0 0 1 .243-.97" /></SvgRoot>;
});
export default IconParentheses;
