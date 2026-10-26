import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkLinked = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkLinked(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.644 6.647c1.3-1.3 3.407-1.3 4.707 0a.5.5 0 1 1-.707.707 2.33 2.33 0 0 0-3.293 0l-2.5 2.5a2.329 2.329 0 0 0 3.293 3.294l2.001-2.002a.501.501 0 0 1 .708.707l-2.002 2.002a3.328 3.328 0 0 1-4.707-4.708z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.498 4.501 2-2a2.828 2.828 0 1 1 4 4l-2.5 2.5a2.83 2.83 0 0 1-4 0" /></SvgRoot>;
});
export default IconLinkLinked;
