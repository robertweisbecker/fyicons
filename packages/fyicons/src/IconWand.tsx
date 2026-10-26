import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.942 4.353a1.5 1.5 0 0 1 2.121 0l.586.586a1.5 1.5 0 0 1 0 2.121l-6.586 6.586a1.497 1.497 0 0 1-2.12 0l-.587-.586a1.5 1.5 0 0 1 0-2.121zm3.204 3.794a.5.5 0 0 1 .707 0l1 1a.5.5 0 0 1-.707.707l-1-1a.5.5 0 0 1 0-.707m-1.79-3.087a.5.5 0 0 0-.707 0L7.707 7.003 9 8.295l1.942-1.942a.5.5 0 0 0 0-.707zM14.5 5a.5.5 0 1 1 0 1h-1a.5.5 0 0 1 0-1zM6.146 2.148a.5.5 0 0 1 .707 0l1 1a.5.5 0 0 1-.707.707l-1-1a.5.5 0 0 1 0-.707m7 0a.5.5 0 1 1 .707.707l-1 1a.5.5 0 0 1-.707-.707zM10.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconWand;
