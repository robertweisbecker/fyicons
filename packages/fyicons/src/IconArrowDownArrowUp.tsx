import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDownArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 7a.5.5 0 0 1 .5.5v4.794l1.647-1.648a.5.5 0 0 1 .707.707l-2.5 2.5a.5.5 0 0 1-.707 0l-2.5-2.5a.5.5 0 1 1 .707-.707L5 12.293V7.5a.5.5 0 0 1 .5-.5m5-5a.5.5 0 0 1 .241.064.5.5 0 0 1 .113.082l2.5 2.5a.5.5 0 0 1-.708.708L11 3.707V8.5a.5.5 0 1 1-1 0V3.707L8.353 5.354a.5.5 0 0 1-.707-.708l2.5-2.5a.5.5 0 0 1 .149-.101l.032-.013a.5.5 0 0 1 .089-.023z" /></SvgRoot>;
});
export default IconArrowDownArrowUp;
