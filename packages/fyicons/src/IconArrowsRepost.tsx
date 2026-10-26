import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsRepost = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsRepost(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 3A2.5 2.5 0 0 1 13 5.5v6.793l1.147-1.146a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .707-.707L12 12.293V5.5A1.5 1.5 0 0 0 10.5 4h-2a.5.5 0 0 1 0-1zm-7.274-.917a.5.5 0 0 1 .629.065l2 2a.5.5 0 0 1-.707.707L4 3.707V10.5A1.5 1.5 0 0 0 5.5 12h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 3 10.5V3.71L1.855 4.855a.5.5 0 0 1-.707-.707l2-2z" /></SvgRoot>;
});
export default IconArrowsRepost;
