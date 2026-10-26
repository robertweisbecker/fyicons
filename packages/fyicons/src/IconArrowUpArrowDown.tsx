import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUpArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.499 7a.5.5 0 0 1 .5.5v4.794l1.647-1.648a.5.5 0 0 1 .707.707l-2.5 2.5a.5.5 0 0 1-.707 0l-2.5-2.5a.5.5 0 1 1 .707-.707L10 12.293V7.5a.5.5 0 0 1 .5-.5m-5-5c.138 0 .263.056.353.146l2.5 2.5a.5.5 0 0 1-.707.708L6 3.707V8.5a.5.5 0 0 1-1 0V3.707L3.353 5.354a.5.5 0 1 1-.707-.708l2.5-2.5a.5.5 0 0 1 .15-.102l.026-.01A.5.5 0 0 1 5.5 2" /></SvgRoot>;
});
export default IconArrowUpArrowDown;
